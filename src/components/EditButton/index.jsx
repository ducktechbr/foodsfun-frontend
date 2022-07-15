import styles from "./styles.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { api } from "../../api/index";
import categoryStore from "../../store/categoryStore";
import CurrencyInput from "react-currency-input-field";
import reloadStore from "../../store/reloadStore";

export default function EditButton(props) {
  // criação de states de loading para o input e de abrir e fechar o modal de edit

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // resgate do id da categoria selecionada e dos states de reload de página do zustand

  const selectedCategoryId = categoryStore((state) => state.selectedId);
  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);

  // declaração do state de form dos inputs

  const [form, setForm] = useState({
    title: "",
    price: 0,
    catId: selectedCategoryId,
    description: "",
    image: "",
    prodId: props.id,
  });

  // lógica de reload de página com os estados do zustand

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // funções de abertura e fechamento de modal

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // função de atualização de form com a mudança de valores nos inputs

  function handleChange(event, value) {
    event === "price"
      ? setForm({
          ...form,
          [event]: value,
          catId: selectedCategoryId,
          prodId: props.id,
        })
      : setForm({
          ...form,
          [event.target.name]: event.target.value,
          catId: selectedCategoryId,
          prodId: props.id,
        });
    console.log(form);
  }

  async function handleSubmit(event, closeModal) {
    // event preventDefault prevente que o submit mande as informações do form para a url

    event.preventDefault();

    // try catch para tentar pegar erros na requisição

    try {
      // seta o loading para true, desabilitando o preenchimento do form

      setLoading(true);

      //  faz o post do produto com o from preenchido

      await api.patch("/editProduct", form);

      // caso a requisição de certo ele seta o loading pra falso novamente e fecha o modal

      closeModal();

      // força o reload da página

      setReload(true);
      setLoading(false);
    } catch (error) {
      // caso tenha algum erro, mostra o erro no console e reabilita o preenchimento do form

      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
        type="button"
        onClick={openModal}
      >
        <div className="bg-edit h-buttonBox w-buttonBox bg-center bg-cover bg-white bg-no-repeat" />
        <div className={`${styles.iconsText} bg-white`}>editar</div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Editar produto
                  </Dialog.Title>
                  <form>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Nome do produto"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="title"
                    />
                    <CurrencyInput
                      prefix="R$:"
                      className={styles.input}
                      name="price"
                      placeholder="R$:25,89"
                      decimalsLimit={2}
                      decimalSeparator=","
                      disableGroupSeparators
                      onValueChange={(value, name) => handleChange(name, value)}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Descrição do produto"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="description"
                    />
                    <button
                      type="button"
                      disabled={loading}
                      className={`${styles.button}`}
                      onClick={() => handleSubmit(event, closeModal)}
                    >
                      Adicionar
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

import styles from "./styles.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { api } from "../../api/index";
import categoryStore from "../../store/categoryStore";
import { format } from "path";

export default function AddButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const selectedCategoryId = categoryStore((state) => state.selectedId);

  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: selectedCategoryId,
    description: "",
    image: "",
  });

  // useEffect(() => {
  //   setForm({ ...form, category: selectedCategoryId });
  // }, [form]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleChange(event) {
    event.target.name === "price"
      ? setForm({
          ...form,
          [event.target.name]: Number(event.target.value),
          category: selectedCategoryId,
        })
      : setForm({
          ...form,
          [event.target.name]: event.target.value,
          category: selectedCategoryId,
        });
    console.log(form);
    console.log(selectedCategoryId);
  }

  async function handleSubmit(event, closeModal) {
    // event preventDefault prevente que o submit mande as informações do form para a url

    event.preventDefault();

    // try catch para tentar pegar erros na requisição

    try {
      // seta o loading para true, desabilitando o preenchimento do form

      setLoading(true);

      //  faz o post do produto com o from preenchido

      await api.post("/newProduct", form);

      // caso a requisição de certo ele seta o loading pra falso novamente e fecha o modal

      closeModal();

      setLoading(false);
    } catch (error) {
      // caso tenha algum erro, mostra o erro no console e reabilita o preenchimento do form

      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <button className="" type="button" onClick={openModal}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h1>Adicionar +</h1>
          </div>
        </div>
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
                    Cadastrar novo produto
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
                    <input
                      className={styles.input}
                      type="number"
                      placeholder="25.89"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="price"
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

import styles from "./styles.module.css";
import Image from "next/image";
import dash from "../../assets/dash.svg";
import { Fragment, useEffect, useState, useMemo } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { api } from "../../api/index";
import categoryStore from "../../store/categoryStore";

import reloadStore from "../../store/reloadStore";

export function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // cria novo estado de categoria

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);
  // const selectedCategoryId = categoryStore((state) => state.selectedId);

  // declaração dos estados do zustand de categoria selecionada e de set de categoria selecionada

  const setCategory = categoryStore((state) => state.changeList);
  const category = categoryStore((state) => state.list);
  const selectedCategory = categoryStore((state) => state.selectedCategory);
  const changeCategory = categoryStore((state) => state.changeCategory);

  useEffect(() => {
    setReload(false);
    getCategories();
    if (category.data.length !== 0) {
      handleSelectedCategory(category.data[0].title, category.data[0].id);
      console.log(selectedCategory);
    } else {
      handleSelectedCategory(null);
    }
  }, [reload]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (category.data.length !== 0) {
      handleSelectedCategory(category.data[0].title, category.data[0].id);
      console.log(selectedCategory);
    } else {
      handleSelectedCategory(null);
    }
  }, [category]);

  //cria nova categoria

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmitCategory(event, closeModal) {
    // event preventDefault previne que o submit mande as informações do form para a url

    event.preventDefault();

    // try catch para tentar pegar erros na requisição

    try {
      // seta o loading para true, desabilitando o preenchimento do form

      setLoading(true);

      //  faz o post do produto com o from preenchido
      await api.post("/newCategory", form);

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

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // função de buscar as categorias do usuário com a requisição da api

  async function getCategories() {
    setCategory(await api.get("/getCategory"));
  }

  // função que muda no store do zustand o nome da categoria e seu ID

  function handleSelectedCategory(target, targetId) {
    changeCategory(target, targetId);
  }

  return (
    <Menu as="div" className="relative inline-block text-left rounded-2xl">
      <Menu.Button className="  bg-themeWhite rounded-2xl p-3 flex">
        <div className="bg-themeWhite">
          <h1
            className={`${styles.textH1} flex items-center text-themeOrange bg-themeWhite`}
          >
            {category
              ? selectedCategory
                ? selectedCategory
                : "Você ainda não possui cotegorias"
              : "Você ainda não possui cotegorias"}
          </h1>
        </div>
        <div className="bg-themeWhite flex items-center ml-5 mt-2">
          <Image src={dash} alt="dash" className="bg-themeWhite" />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-lg bg-themeWhite ring-1 ring-black ring-opacity-5 focus:outline-none p-3 z-20">
          <div className="py-1 flex flex-col bg-themeWhite ">
            {category
              ? category.data.map((current, key) => {
                  return (
                    <button
                      key={key}
                      onClick={() =>
                        handleSelectedCategory(current.title, current.id)
                      }
                      className="bg-themeWhite hover:text-themeGray transition-all duration-500 ease-in-out"
                    >
                      <Menu.Item as="div">{current.title}</Menu.Item>
                    </button>
                  );
                })
              : null}

            <Menu.Button>
              <div onClick={openModal}>Crirar categoria</div>
            </Menu.Button>
          </div>
        </Menu.Items>
      </Transition>

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
                      placeholder="Nome da categoria"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="title"
                    />

                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Descrição da categoria"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="description"
                    />
                    <button
                      type="button"
                      disabled={loading}
                      className={`${styles.button}`}
                      onClick={(event) =>
                        handleSubmitCategory(event, closeModal)
                      }
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
    </Menu>
  );
}

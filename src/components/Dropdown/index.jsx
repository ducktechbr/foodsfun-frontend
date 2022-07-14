import styles from "./styles.module.css";
import Image from "next/image";
import dash from "../../assets/dash.svg";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { api } from "../../api/index";
import categoryStore from "../../store/categoryStore";

export function DropDown() {

  // cria novo estado de categoria

  const [category, setCategory] = useState({
    data: [{ title: "" }],
  });

// função de buscar as categorias do usuário com a requisição da api

  async function getCategories() {
    setCategory(await api.get("/getCategory"));
  }

// declaração dos estados do zustand de categoria selecionada e de set de categoria selecionada

  const selectedCategory = categoryStore((state) => state.selected);
  const changeCategory = categoryStore((state) => state.changeCategory);

  // função que muda no store do zustand o nome da categoria e seu ID

  function handleSelectedCategory(target, targetId) {
    changeCategory(target, targetId);
  }

  

  useEffect(() => {
    getCategories();
    changeCategory(category.data[0].title, category.data[0].id);
  }, []);

  useEffect(() => {
    changeCategory(category.data[0].title, category.data[0].id);
  }, [category]);

  return (
    <Menu as="div" className="relative inline-block text-left rounded-2xl">
      <Menu.Button className="  bg-themeWhite rounded-2xl p-3 flex">
        <div className="bg-themeWhite">
          <h1
            className={`${styles.textH1} flex items-center text-themeOrange bg-themeWhite`}
          >
            {selectedCategory}
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
            {category.data[0].title !== ""
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
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

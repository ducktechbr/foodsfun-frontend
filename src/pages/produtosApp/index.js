import styles from "./styles.module.scss";

import { Menu, Transition, Fragment } from "@headlessui/react";

import CardProdutos from "../../components/CardProdutosApp";
import FooterBar from "../../components/FooterBar";

import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function produtos() {
  return (
    <div>
      <div className={styles.banner}></div>

      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.text1}> Produtos </h1>
        </div>

        <div>
          <input type="search" className={styles.input} />
          <button className={styles.span}>
            <BiSearchAlt2 size={15} style={{ background: "transparent" }} />
          </button>
        </div>

        <div className={styles.divCategoria}>
          <h1>Cardápio</h1>

          <Menu as="div" className="flex justify-center items-center">
            <div>
              <Menu.Button className="flex justify-center items-center h-5 rounded-2xl pl-2 bg-themeOrange text-sm text-white ">
                Categorias
                <RiArrowDropDownLine
                  className=" h-5 w-5"
                  aria-hidden="true"
                  style={{ background: "transparent" }}
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-white"
                            : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Pinga
                      </a>
                    )}
                  </Menu.Item>
                  
                  
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className={styles.card}>
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
      </div>

      <footer className={styles.footer}>
        <FooterBar />
      </footer>
    </div>
  );
}

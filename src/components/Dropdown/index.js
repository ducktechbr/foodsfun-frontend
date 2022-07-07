import styles from "./styles.module.css";
import Image from "next/image";
import dash from "../../assets/dash.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export function DropDown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left z-50 rounded-2xl">
      <Menu.Button className="h-28 w-dropdownHeader bg-themeWhite rounded-2xl p-3 flex">
        <div className="bg-themeWhite">
          <h1
            className={`${styles.textH1} flex items-center text-themeOrange bg-themeWhite`}
          >
            Pratos
          </h1>
          <p
            className={`${styles.textP} flex items-center text-xs bg-themeWhite`}
          >
            Aqui você pode ver ou adicionar novos itens na categoria
            selecionada.
          </p>
        </div>
        <div className="bg-themeWhite flex items-center m-5">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-lg bg-themeWhite ring-1 ring-black ring-opacity-5 focus:outline-none p-3">
          <div className="py-1 flex flex-col bg-themeWhite ">
            <Menu.Item>
              <a
                href="#"
                className="bg-themeWhite hover:text-themeGray transition-all duration-500 ease-in-out"
              >
                Bebidas
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="bg-themeWhite hover:text-themeGray transition-all duration-500 ease-in-out"
              >
                Sobremesa
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className="bg-themeWhite hover:text-themeGray transition-all duration-500 ease-in-out"
              >
                Pizzas
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
import styles from "./styles.module.css";
import Image from "next/image";
import dash from "../../assets/dash.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export function BackgroundBanner(props) {
  return (

  
    <div className="w-full h-32 border border-black flex justify-end items-center px-5">

      <Menu as="div" className="">
        <Menu.Button className="  bg-themeWhite rounded-2xl px-11 flex justify-between items-center">
          <div className="bg-themeWhite">
            <h1
              className={`${styles.textH1} flex items-center text-themeOrange bg-themeWhite`}
            >
              Bar do Zé
            </h1>
          
           
          </div>
          <div className="bg-themeWhite flex items-center ml-3 w-5">
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
                  Lanchonete do Zé
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>

      </Menu>
    </div>
  );
}

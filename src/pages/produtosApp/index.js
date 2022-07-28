import styles from "./styles.module.scss";
import Image from "next/image";

import CardProdutos from "../../components/CardProdutosApp";
import FooterBar from "../../components/FooterBar";

import { BiSearchAlt2 } from "react-icons/bi";

import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

import burg from "../../assets/hamburguiModal.png";
import minus from "../../assets/minusButton.svg";
import plus from "../../assets/plusButton.svg";

export default function produtos() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

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
          <h1>Cardápio</h1>{" "}
          <button className={styles.buttonFilter}>categoria</button>
        </div>
      </div>

      <div className={styles.card}>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <CardProdutos />
        </button>
      </div>

      <footer className={styles.footer}>
        <FooterBar />
      </footer>
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
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed  bottom-0 right-0 left-0 bg-transparent h-[410px] ">
            <div className="flex h-full items-center justify-center bg-transparent text-center px-[1rem] ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-[300ms]"
                enterFrom="opacity-0 translate-y-[120px]"
                enterTo="opacity-100 translate-y-[0px]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-[0px]"
                leaveTo="opacity-0 translate-y-[120px]"
              >
                <div className="w-full h-full max-w-md align-middle shadow-xl transition-all bg-transparent text-[#1A1A1A] flex flex-col items-center overflow-visible">
                  <Image
                    src={burg}
                    className="h-[160px] absolute z-50 -top-20 rounded-[47px]"
                  />
                  <Dialog.Panel className="bg-[#D9DDE1] w-full h-[330px] absolute bottom-0 rounded-t-3xl">
                    <Dialog.Title
                      as="h3"
                      className="mt-24 text-lg font-medium leading-6  bg-[#D9DDE1] font-theme mb-2 "
                    >
                      Hamburgui
                    </Dialog.Title>

                    <strong className="flex bg-transparent justify-center space-x-16 font-ebrima mb-2 text-2xl">
                      <span className="flex bg-transparent">$8,90</span>
                      <span className="flex bg-transparent text-[#FF0000] line-through">
                        $14,90
                      </span>
                    </strong>
                    <p className="opacity-80 text-[#1A1A1A] bg-transparent mb-2">
                      Burguer Angus (160g), queijo prato, molho Fanis, maionese,
                      no pão brioche
                    </p>
                    <div className="bg-transparent flex items-center justify-center space-x-4">
                      <button className="bg-transparent">
                        <Image src={minus} className="bg-transparent" />
                      </button>
                      <span className="bg-transparent"> NUM </span>
                      <button className="bg-transparent">
                        <Image src={plus} className="bg-transparent" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className={`${styles.button} font-ebrima`}
                      onClick={closeModal}
                    >
                      Adicionar ao carrinho
                    </button>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

import styles from "./styles.module.scss";

import CardProdutos from "../../components/CardProdutosApp";
import FooterBar from "../../components/FooterBar";

import { BiSearchAlt2 } from "react-icons/bi";

import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

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
                      required={true}
                      name="title"
                    />

                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Descrição da categoria"
                      required={true}
                      name="description"
                    />
                    <button
                      type="button"
                      className={`${styles.button}`}
                      onClick={closeModal}
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
    </div>
  );
}

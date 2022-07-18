import styles from "./styles.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import reloadStore from "../../store/reloadStore";

export default function ShowButton(props) {
  // criação de states de abrir e fechar o modal de edit

  const [isOpen, setIsOpen] = useState(false);

  // resgate do id da categoria selecionada e dos states de reload de página do zustand

  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);

  // lógica de reload de página com os estados do zustand

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // funções de abertura e fechamento de modal

  function closeModal() {
    setIsOpen(false);
  }

  async function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
        type="button"
        onClick={openModal}
      >
        <div className="bg-eye h-buttonBox w-7 bg-center bg-no-repeat bg-cover bg-white" />
        <div className={`${styles.iconsText} bg-white`}>ver</div>
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
                    informações do produto
                  </Dialog.Title>

                  <h1>TITULO:{props.product.title}</h1>
                  <h1>PREÇO: {props.product.price}</h1>
                  <h1>DESCRIÇÃO:{props.product.description}</h1>

                  <button
                    type="button"
                    className={`${styles.button}`}
                    onClick={closeModal}
                  >
                    Fechar
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

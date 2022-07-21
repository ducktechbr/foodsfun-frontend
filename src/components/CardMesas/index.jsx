import { useState, Fragment, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import ReactToPrint from "react-to-print";

import reloadStore from "../../store/reloadStore";

import { api } from "../../api";

import { Dialog, Transition } from "@headlessui/react";

import { toast } from "react-toastify";

import styles from "./styles.module.css";
import ModalDelete from "../ModalDelete";

export default function CardMesas(props) {
  const setReload = reloadStore((state) => state.setReload);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function toggle() {
    setLoading(true);

    try {
      const body = { id: props.info.id };
      const response = await api.patch("/toggleTable", body);
        
      setReload(true);

      if(response.data.active){

        toast.success("Mesa ativada com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
          bodyStyle:{
            color: "#000"
          }
        });

      }else{
        toast.warn("Mesa desativada!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

    
    
  }

  async function deleteTable() {
    setLoading(true);

    try {
      const body = { id: props.info.id };
      await api.delete("/deleteTable", { data: body });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    setReload(true);
    toast.success("Deletado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    closeDeleteModal();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteOpen(false);
  }
  function openDeleteModal() {
    setDeleteOpen(true);
  }

  const pageStyle = `
    @page{
      size: 80mm ;
      
    }

    }
  `;

  const componentRef = useRef();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>MESA {props.info.number}</h1>

          <div ref={componentRef} className={styles.imgContainer}>
            <QRCodeSVG value={props.info.id} size={180} />
          </div>

          <div className={styles.iconsArea}>
            <button
              onClick={openModal}
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-eye h-buttonBox w-7 bg-center bg-no-repeat bg-cover bg-white" />
              <div className={`${styles.iconsText} bg-white `}>ver</div>
            </button>

            <ReactToPrint
              pageStyle={pageStyle}
              trigger={() => (
                <button
                  className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
                >
                  <div className="bg-printer h-buttonBox w-buttonBox bg-center bg-cover bg-white bg-no-repeat" />
                  <div className={`${styles.iconsText} bg-white`}>imprimir</div>
                </button>
              )}
              content={() => componentRef.current}
            />

            <button
              onClick={openDeleteModal}
              disabled={loading}
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-trash h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />

              <div className={`${styles.iconsText} bg-white`}>deletar</div>
            </button>

            <button
              onClick={toggle}
              disabled={loading}
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div
                className={`${
                  props.info.active ? "bg-enabled" : "bg-disabled"
                } h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white`}
              />

              <div className={`${styles.iconsText} bg-white`}>
                {props.info.active ? "desativar" : "ativar"}
              </div>
            </button>
          </div>
        </div>
      </div>

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
                    Deseja cadastrar uma nova Mesa?
                  </Dialog.Title>
                  <div>
                    <div>
                      <p>Numero da mesa: {props.info.number} </p>
                      <p>QR code: {props.info.qrcode} </p>
                      <p>Status: {props.info.active ? "Ativa" : "Inativa"} </p>
                    </div>
                    <button onClick={closeModal}> Fechar </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ModalDelete
        isOpen={deleteOpen}
        loading={loading}
        closeModal={closeDeleteModal}
        text="deletar essa mesa"
        function={deleteTable}
      />
    </>
  );
}

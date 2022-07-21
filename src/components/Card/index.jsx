import styles from "./styles.module.css";
import categoryStore from "../../store/categoryStore";
import reloadStore from "../../store/reloadStore";
import { useEffect, useState } from "react";
import { api } from "../../api";
import EditButton from "../EditButton";
import ShowButton from "../ShowButton";
import burg from "../../../public/hamburguer.svg";
import ImageNext from "next/image";
import ModalDelete from "../ModalDelete";

import { toast } from "react-toastify";

// import { Fragment } from "react";
// import { Transition } from "@headlessui/react";

export default function Card(props) {
  // retirando o id da categoria atual do estado do zustand

  const selectedCategoryId = categoryStore((state) => state.selectedId);

  // lógica de refresh da página depois de editar ou deletar o card

  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // lógica para deletar o produto usando o id do produto que vem de props, e o id da categoria atual carregada do zustand

  async function handleDelete(id, catId) {
    setLoading(true);
    const body = { prodId: id, catId };

    const response = await api.delete("/deleteProduct", {
      data: body,
    });
    setLoading(false);
    setReload(true);
<<<<<<< HEAD
    toast.success("Produto deletado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
=======
    closeDeleteModal();
>>>>>>> b767bbe424f121a0924caa6cd932d76fe90810a5
  }

  // lógica fazer toggle no active do produto usando o id do produto que vem de props, e o id da categoria atual carregada do zustand

  async function handleToggle(id, catId) {
    const body = { prodId: id, catId };
    const response = await api.patch("/toggleProduct", {
      data: body,
    });
    
    setReload(true);

    if(response.data.active === true){
      toast.success("Produto ativado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
      });
    }else{
      toast.warn("Produto desativado!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

  }

  function closeDeleteModal() {
    setDeleteOpen(false);
  }
  function openDeleteModal() {
    setDeleteOpen(true);
  }

  return (
    <div className={styles.container}>
      <div className="overflow-visible h-20 z-10">
        <div className={styles.img}>
          {props.image === "" || props.image === undefined ? (
            <ImageNext
              src={burg}
              alt="imagem da comida"
              width={"150px"}
              height={"150px"}
            />
          ) : (
            <ImageNext
              src={props.image}
              alt="preview"
              width={"150px"}
              height={"150px"}
            />
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>{props.title}</h1>
          <p>
            PF do seu Zé / {props.category}
            <br />
            R$:{props.price}
          </p>
        </div>

        <div className={styles.iconsArea}>
          <ShowButton product={props.product} />

          <EditButton id={props.id} />

          <button
            className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            onClick={openDeleteModal}
          >
            <div className="bg-trash h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />
            <div className={`${styles.iconsText} bg-white`}>deletar</div>
          </button>

          <button
            className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            onClick={() => handleToggle(props.id, selectedCategoryId)}
          >
            <div
              className={`${
                props.product.active ? "bg-enabled " : "bg-disabled"
              } h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white`}
            />

            <div className={`${styles.iconsText} bg-white`}>
              {props.product.active ? "desativar" : "ativar"}
            </div>
          </button>
        </div>
      </div>
      <ModalDelete
        isOpen={deleteOpen}
        loading={loading}
        closeModal={closeDeleteModal}
        text="deletar esse produto"
        function={() => handleDelete(props.id, selectedCategoryId)}
      />
    </div>
  );
}

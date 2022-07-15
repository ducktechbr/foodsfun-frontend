import styles from "./styles.module.css";
import categoryStore from "../../store/categoryStore";
import reloadStore from "../../store/reloadStore";
import { useEffect } from "react";
import { api } from "../../api";
import EditButton from "../EditButton";

// import { Fragment } from "react";
// import { Transition } from "@headlessui/react";

export default function Card(props) {
  // retirando o id da categoria atual do estado do zustand

  const selectedCategoryId = categoryStore((state) => state.selectedId);

  // lógica de refresh da página depois de editar ou deletar o card

  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // lógica para deletar o produto usando o id do produto que vem de props, e o id da categoria atual carregada do zustand

  async function handleDelete(id, catId) {
    const body = { prodId: id, catId };

    const response = await api.delete("/deleteProduct", {
      data: body,
    });
    setReload(true);
  }

  // lógica fazer toggle no active do produto usando o id do produto que vem de props, e o id da categoria atual carregada do zustand

  async function handleToggle(id, catId) {
    const body = { prodId: id, catId };
    const response = await api.patch("/toggleProduct", {
      data: body,
    });

    console.log(response);
  }

  return (
    <>
      <div className={styles.container}>
        <div className="overflow-visible h-20 z-10">
          <div className={styles.img}></div>
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
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-eye h-buttonBox w-7 bg-center bg-no-repeat bg-cover bg-white" />
              <div className={`${styles.iconsText} bg-white `}>ver</div>
            </button>
            <EditButton id={props.id}/>

            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
              onClick={() => handleDelete(props.id, selectedCategoryId)}
            >
              <div className="bg-trash h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />
              <div className={`${styles.iconsText} bg-white`}>deletar</div>
            </button>
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
              onClick={() => handleToggle(props.id, selectedCategoryId)}
            >
              <div className="bg-enabled h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />

              <div className={`${styles.iconsText} bg-white`}>ativar</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

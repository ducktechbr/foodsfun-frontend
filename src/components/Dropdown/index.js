import styles from "./styles.module.css";
import Image from "next/image";
import dash from "../../assets/dash.svg";

export function DropDown(props) {
  return (
    <div className="h-28 w-dropdownHeader bg-themeWhite rounded-2xl p-3 flex">
      <div className="bg-themeWhite">
        <h1
          className={`${styles.textH1} flex items-center text-themeOrange bg-themeWhite`}
        >
          Pratos
        </h1>
        <p
          className={`${styles.textP} flex items-center text-xs bg-themeWhite`}
        >
          Aqui você pode ver ou adicionar novos itens na categoria selecionada.
        </p>
      </div>
      <div className="bg-themeWhite flex items-center m-5">
        <Image src={dash} alt="dash" className="bg-themeWhite" />
      </div>
    </div>
  );
}

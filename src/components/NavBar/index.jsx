import styles from "./style.module.css";

import navStore from "../../store/navStore";

import TablesNavbar from "../TablesNavbar";

import Link from "next/link";

import Image from "next/dist/client/image";
import logo from "../../assets/logo.png";
import cubo from "../../assets/cubo.svg";
import pedidos from "../../assets/pedidos.svg";
import mesas from "../../assets/mesas.svg";
import config from "../../assets/config.svg";

export default function NavBar() {
  const current = navStore((state) => state.current);
  const changeCurrent = navStore((state) => state.changeCurrent);


  return (
    <div className={styles.index9}>
    <aside className="h-screen w-60 font-theme fixed">
      <div className="h-2/8 bg-themeWhite rounded-tr-navBar flex justify-center items-center">
        <div className={styles.logo}>
          
        </div>
      </div>
      <div className="h-3/8 bg-themeWhite flex flex-col items-center pt-8">
        <Link href="/pedidos">
          <button
            type="button"
            onClick={() => changeCurrent("Pedidos")}
            className={
              current === "Pedidos"
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                current === "Pedidos"
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image
                src={pedidos}
                alt="pedidos"
                href="/produtos"
                className="bg-transparent"
              />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  current === "Pedidos"
                    ? "bg-themeSoft font-medium text-lg pl-4 text-themeOrange"
                    : "bg-themeWhite pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg"
                }
              >
                Pedidos
              </a>
            </div>
          </button>
        </Link>
        <Link href="/produtos">
          <button
            href="/produtos"
            type="button"
            onClick={() => changeCurrent("Produtos")}
            className={
              current === "Produtos"
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                current === "Produtos"
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={cubo} alt="cubo" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  current === "Produtos"
                    ? "bg-themeSoft font-medium text-lg pl-4 text-themeOrange"
                    : "bg-themeWhite pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg"
                }
              >
                Produtos
              </a>
            </div>
          </button>
        </Link>

        <Link href="/mesas">
          <button
            type="button"
            onClick={() => changeCurrent("Mesas")}
            className={
              current === "Mesas"
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                current === "Mesas"
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={mesas} alt="mesas" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  current === "Mesas"
                    ? "bg-themeSoft font-medium text-lg pl-4 text-themeOrange"
                    : "bg-themeWhite pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg"
                }
              >
                Mesas
              </a>
            </div>
          </button>
        </Link>

        <Link href="/configuracao">
          <button
            type="button"
            onClick={() => changeCurrent("Config")}
            className={
              current === "Config"
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                current === "Config"
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={config} alt="mesas" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  current === "Config"
                    ? "bg-themeSoft font-medium text-lg pl-4 text-themeOrange"
                    : "bg-themeWhite pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg"
                }
              >
                Configurações
              </a>
            </div>
          </button>
        </Link>
      </div>
      {/* <TablesNavbar/> */}
      <div className="h-3/8 bg-themeWhite rounded-br-navBar"></div>
    </aside>
    </div>
  );
}

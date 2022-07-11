import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Link from "next/link";

import Image from "next/dist/client/image";
import logo from "../../assets/logo.png";
import cubo from "../../assets/cubo.svg";
import pedidos from "../../assets/pedidos.svg";
import mesas from "../../assets/mesas.svg";
import config from "../../assets/config.svg";

export function NavBar() {
  const navigation = [
    { name: "Pedidos", href: "#", current: true },
    { name: "Produtos", href: "#", current: false },
    { name: "Mesas", href: "#", current: false },
    { name: "Configurações", href: "#", current: false },
  ];

  const dispatch = useDispatch();

  function handleCurrent(navigation) {
    dispatch({
      type: "SELECTED_ONE",
      navigation,
    });
  }
  function handleCurrent2(navigation) {
    dispatch({
      type: "SELECTED_TWO",
      navigation,
    });
  }
  function handleCurrent3(navigation) {
    dispatch({
      type: "SELECTED_THREE",
      navigation,
    });
  }
  function handleCurrent4(navigation) {
    dispatch({
      type: "SELECTED_FOUR",
      navigation,
    });
  }

  const estado = useSelector((state) => state.selected);

  return (
    <aside className="h-screen w-60 font-theme fixed">
      <div className="h-2/8 bg-themeWhite rounded-tr-navBar flex justify-center items-center">
        <Image src={logo} alt="logo" className="bg-themeWhite" />
      </div>
      <div className="h-3/8 bg-themeWhite flex flex-col items-center pt-8">
        <Link href="/pedidos">
          <button
            type="button"
            onClick={() => handleCurrent(navigation)}
            className={
              estado[0].current
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                estado[0].current
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
                  estado[0].current
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
            onClick={() => handleCurrent2(navigation)}
            className={
              estado[1].current
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                estado[1].current
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={cubo} alt="cubo" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  estado[1].current
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
            onClick={() => handleCurrent3(navigation)}
            className={
              estado[2].current
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                estado[2].current
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={mesas} alt="mesas" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  estado[2].current
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
            onClick={() => handleCurrent4(navigation)}
            className={
              estado[3].current
                ? "bg-themeSoft w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
                : "bg-themeWhite w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7"
            }
          >
            <div
              className={
                estado[3].current
                  ? "bg-themeOrange drop-shadow-buttonIcon rounded-full h-10 w-10 ml-5 flex justify-center items-center"
                  : "bg-themeWhite rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out"
              }
            >
              <Image src={config} alt="mesas" className="bg-transparent" />
            </div>
            <div className="text-themeGray group-hover:text-themeOrange ">
              <a
                className={
                  estado[3].current
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
      <div className="h-3/8 bg-themeWhite rounded-br-navBar"></div>
    </aside>
  );
}

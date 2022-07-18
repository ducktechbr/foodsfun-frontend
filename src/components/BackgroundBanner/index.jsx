import styles from "./styles.module.scss";

import Image from "next/image";
import { useState, ChangeEvent } from "react";

import dash from "../../assets/dash.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { FiUpload } from "react-icons/fi";



export function BackgroundBanner(props) {
  const [imgUrl, setImgUrl] = useState("");
  const [clientImg, setClientImg] = useState(null);

  function handleFile(e) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setClientImg(image);
      setImgUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div >

        
          <label className={styles.uplaod}>
            <span>
              <FiUpload size={25}  />
            </span>
            <input
              type="file"
              accept="image/png image/jpeg"
              onChange={handleFile}
            />
            {imgUrl && (
              <img
                className={styles.preview}
                src={imgUrl}
                alt="Banner do estabelicimento"
              />
            )}

              <Menu as="div" className={styles.menu}>
                <Menu.Button className="bg-themeWhite rounded-2xl px-11 flex justify-between items-center">
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


          </label>
        
        
        
      

    </div>
  );
}

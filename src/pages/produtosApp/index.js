import styles from "./styles.module.scss";
import Image from "next/image";

import CardProdutos from "../../components/CardProdutosApp";
import FooterBar from "../../components/FooterBar";

import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useState, useEffect, Fragment } from "react";
import { Transition, Dialog, Menu } from "@headlessui/react";

import categoryStore from "../../store/categoryStore";
import modalStore from "../../store/modalStore";
import { api } from "../../api";

import burg from "../../assets/hamburguiModal.png";
import minus from "../../assets/minusButton.svg";
import plus from "../../assets/plusButton.svg";

export default function Produtos() {
  const category = categoryStore((state) => state.list);
  const setCategory = categoryStore((state) => state.changeList);
  const categoryApp = categoryStore((state) => state.selectedCategory);
  const setCategoryApp = categoryStore((state) => state.changeCategory);
  const card = modalStore((state) => state.selectedCard);
  const setCard = modalStore((state) => state.changeCard);
  const [products, setProducts] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1)

  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const localStore = localStorage.getItem("loggedInClient");
    if (localStore !== null) {
      const id = JSON.parse(localStore).tableId;
      setCategory(await api.patch("/categoriesClient", { id: id }));
    }
  }
  useEffect(() => {
    if (category !== null) {
      setCategoryApp(category.data[0].title);
    }
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [categoryApp]);

  function closeModal() {
    setIsOpen(false);
    setQuantity(1)
  }

  function handleCategory(title) {
    setCategoryApp(title);
  }

  async function getProducts() {
    const localStore = localStorage.getItem("loggedInClient");
    if (categoryApp !== null) {
      const id = JSON.parse(localStore).tableId;
      setProducts(await api.patch(`/getProductsClient/${categoryApp}`, { id }));
    }

  }

  function handleOpen(cur){
    setCard(cur)
    setIsOpen(true)
    console.log(card)
  }

  async function handleQuantity(text){
    setLoading(true)
    if(text === "sub" ){
      if( quantity > 1 )
        setQuantity(quantity - 1)
    }
    if(text === "add"){
      if(quantity < 99){
        setQuantity(quantity + 1)
      }
    }
    setLoading(false)
  }

  return (
    <div>
      <div className={styles.banner}></div>

      <div className={styles.header}>
        <div>
          <input type="search" className={styles.input} />
          <button className={styles.span}>
            <BiSearchAlt2 size={15} style={{ background: "transparent" }} />
          </button>
        </div>
        <div className={styles.divCategoria}>
          <h1>Cardápio</h1>
          <Menu as="div" className="flex justify-center items-center relative z-50">
            <div>
              <Menu.Button className="flex justify-center items-center h-5 rounded-2xl pl-2 bg-[#FF8E02] text-xs text-white ">
                {categoryApp}
                <RiArrowDropDownLine
                  className=" h-5 w-5"
                  aria-hidden="true"
                  style={{ background: "transparent" }}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              
            >
              <Menu.Items className="origin-top-right absolute right-0 top-5 mt-2 w-56 rounded-xl shadow-lg bg-transparent ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <div>
                  <Menu.Item
                    as="div"
                    className="flex flex-col p-3 rounded-xl bg-[#333]"
                  >
                    {category
                      ? category.data.map((current, key) => {
                        return (
                          <button
                            onClick={() => handleCategory(current.title)}
                            className="bg-[#333]"
                            key={key}
                          >
                            {current.title}
                          </button>
                        );
                      })
                      : null}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className={styles.card}>
        {products ? console.log(products) : null}
        {products ?

          products.data.map((cur, key) => {
            return (
              <button
                key={key}
                onClick={ () => handleOpen(cur)}
              
              >
                <CardProdutos card={cur} />
              </button>
            )
          })


          : null}


      </div>

      <footer className={styles.footer}>
        <FooterBar />
      </footer>
      
      { card ? <Transition appear show={isOpen} as={Fragment}>
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

          <div className="fixed  bottom-0 right-0 left-0 bg-transparent h-[510px] ">
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
                  <div className="relative">
                    <Image
                      src={card.image}
                      width="200px" height="200px" alt="Imagem do produto"  objectFit="cover"
                    
                      className="h-[160px] absolute z-50 -top-20 rounded-[47px]" 
                    />
                  </div>
                  <Dialog.Panel className="bg-[#D9DDE1] w-full h-[430px] absolute bottom-0 rounded-t-3xl">
                    <Dialog.Title
                      as="h3"
                      className="mt-24 text-lg font-medium leading-6  bg-[#D9DDE1] font-theme mb-2 "
                    >
                      {card.title}
                    </Dialog.Title>

                    <strong className="flex bg-transparent justify-center space-x-16 font-ebrima mb-2 text-2xl">
                      <span className="flex bg-transparent">R$ {card.price}</span>
                      {/* <span className="flex bg-transparent text-[#FF0000] line-through">
                        {card.price}
                      </span> */}
                    </strong>
                    <p className="opacity-80 text-[#1A1A1A] bg-transparent mb-2">
                      {card.description}
                    </p>
                    <textarea className="h-16 w-[300px] bg-[#fefefe] mt-6 mb-2 resize-none rounded-lg px-3 py-1 font-ebrima text-sm"></textarea>
                    <div className="bg-transparent flex items-center justify-center space-x-4">
                      <button className="bg-transparent" onClick={ () => handleQuantity("sub")}>
                        <Image src={minus} className="bg-transparent" />
                      </button>
                      <span className="bg-transparent font-ebrima text-xl text-center">{quantity}</span>
                      <button className="bg-transparent" onClick={ () => handleQuantity("add")}>
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
      </Transition> : null  }
    </div>
  );
}

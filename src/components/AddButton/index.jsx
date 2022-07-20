import styles from "./styles.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { api } from "../../api/index";
import categoryStore from "../../store/categoryStore";
import CurrencyInput from "react-currency-input-field";
import reloadStore from "../../store/reloadStore";
import ImageNext from "next/image";
import burg from "../../../public/hamburguer.svg";

export default function AddButton(props) {
  // criação de states de loading para o input, de abrir e fechar o modal de add ,o base64, com as informações da imagem a ser adicionada e o selected file que carrega as informaçoes da imagem no input

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");

  // buscando o selectedcategotyID do zustand e o estado para reload

  const selectedCategoryId = categoryStore((state) => state.selectedId);
  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);

  // criando a base do form no usestate

  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: selectedCategoryId,
    description: "",
    image: "",
  });

  // useEffect com lógica para reload

  useEffect(() => {
    setReload(false);
  }, [reload]);

  // adiciona a imagem em formato base64 ao form toda vez que o estado base64 for modificado

  useEffect(() => {
    setForm({ ...form, image: base64 });
  }, [base64]);

  // converte a imagem para base64 toda vez que um file for selecionado

  useEffect(() => {
    selectedFile[0] ? process_image(selectedFile[0]) : null;
  }, [selectedFile]);

  // funções para abrir e fechar o modal de adicionar produto

  function closeModal() {
    setIsOpen(false);
    setBase64("");
    setPreview("");
  }

  function openModal() {
    setIsOpen(true);
  }

  // funçao para mudança do form com atualizaçoes dos inputs

  function handleChange(event, value) {
    event === "price"
      ? setForm({
          ...form,
          [event]: value,
          category: selectedCategoryId,
        })
      : setForm({
          ...form,
          [event.target.name]: event.target.value,
          category: selectedCategoryId,
        });
  }

  // função para receber a imagem e transformar em base64

  async function convertBase64(file) {
    // criação de promise para ler e transformar o file em dataURL

    const file64 = await new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      // onload resolve a promise e retorna o resultado

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      // onerror rejeita a promise e retorna erro

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    return file64;
  }

  // função de reduzir o tamanho da imagem no base64 caso ela seja muito larga

  async function reduce_image_file_size(
    base64Str,
    MAX_WIDTH = 400,
    MAX_HEIGHT = 400
  ) {
    // cria uma variável para a imagem com novo size

    let resized_base64 = await new Promise((resolve) => {
      // cria um elemento de imagem, que o src é a string da imagem em base 64 que foi passada como parâmetro da função que reduz o tamanho da imagme

      let img = new Image(250, 250);

      img.src = base64Str;

      // no load da imagem cria um elemento canvas com as informações da imagem recebida como parâmetro

      img.onload = () => {
        let canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // caso o tamanho da imagem passada como parâmetro seja maior que o tamanho máximo o código reduz a imagem, caso contrário deixa ela igual

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // retorna a imagem base64 depois do resize

        resolve(canvas.toDataURL());
      };
    });
    return resized_base64;
  }

  // função de cálculo de tamanho de imagem

  async function calc_image_size(image) {
    let y = 1;

    image.endsWith("==") ? (y = 2) : null;

    const x_size = image.length * (3 / 4) - y;
    return Math.round(x_size / 1024);
  }

  // código de processamento da imagem para verificação de se a imagem precisa de resize ou não, caso a imagem seja menor que um certo valor, ela não passa pelo resize

  async function process_image(file, min_image_size = 300) {
    // recebe a imagem como file e transforma em base64

    const res = await convertBase64(file);

    if (res) {
      // calcula o tamanho da imagem

      const old_size = await calc_image_size(res);

      if (old_size > min_image_size) {
        // caso o tamanho da imagem seja maior que o tamanho mínimo ele ajusta o tamanho da imagem para o tamanho padrão

        const resized = await reduce_image_file_size(res);
        // calcula o tamanho da imagem depois do resize

        const new_size = calc_image_size(resized);

        // mostra no console a diferença entre o tamanho da imagem antes e depois

        console.log("new_size=> ", new_size, "KB");
        console.log("old_size=> ", old_size, "KB");

        // retorna a imagem com resize

        setBase64(resized);
        setPreview(URL.createObjectURL(file));
      } else {
        // caso a imagem ja seja pequena o suficiente ele ó retorna a imagem sem resize no formato base64

        console.log("image already small enough");
        setBase64(res);
		setPreview(res)
      }
    } else {
      console.log("return err");
      return null;
    }

    // caso receba a resposta
  }

  // função com submit do form para a api

  async function handleSubmit(event, closeModal) {
    // event preventDefault previne que o submit mande as informações do form para a url

    event.preventDefault();

    // try catch para tentar pegar erros na requisição

    try {
      // seta o loading para true, desabilitando o preenchimento do form

      setLoading(true);

      //  faz o post do produto com o from preenchido

      await api.post("/newProduct", form);

      // caso a requisição de certo ele seta o loading pra falso novamente e fecha o modal

      closeModal();

      // força o reload da página

      setReload(true);
      setLoading(false);
    } catch (error) {
      // caso tenha algum erro, mostra o erro no console e reabilita o preenchimento do form

      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <button className="" type="button" onClick={openModal}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h1>Adicionar +</h1>
          </div>
        </div>
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
                    Cadastrar novo produto
                  </Dialog.Title>
                  <div className="overflow-visible h-40 z-10">
                    <div className={styles.img}>
                      {base64 === "" ? (
                        <ImageNext
                          src={burg}
                          alt="imagem da comida"
                          width={"150px"}
                          height={"150px"}
                        />
                      ) : (
                        <ImageNext
                          src={preview}
                          alt="preview"
                          width={"150px"}
                          height={"150px"}
                        />
                      )}
                    </div>
                  </div>
                  <form>
                    <input
                      type="file"
                      disabled={loading}
                      accept="image/png, image/jpeg, image/svg, image/gif"
                      className={styles.input_image}
                      onChange={(e) => setSelectedFile(e.target.files)}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Nome do produto"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="title"
                    />
                    {/* <input
                      className={styles.input}
                      type="number"
                      placeholder="25.89"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="price"
                    /> */}
                    <CurrencyInput
                      prefix="R$:"
                      className={styles.input}
                      name="price"
                      placeholder="R$:25,89"
                      decimalsLimit={2}
                      decimalSeparator=","
                      disableGroupSeparators
                      onValueChange={(value, name) => handleChange(name, value)}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Descrição do produto"
                      readOnly={loading}
                      required={true}
                      onChange={handleChange}
                      name="description"
                    />
                    <button
                      type="button"
                      disabled={loading}
                      className={`${styles.button}`}
                      onClick={() => handleSubmit(event, closeModal)}
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
    </>
  );
}

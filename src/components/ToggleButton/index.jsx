import { useEffect, useState } from "react";
import classNames from "classnames";
import paymentStore from "../../store/paymentStore";
import reloadStore from "../../store/reloadStore";
import { api } from "../../api/index";

export function ToggleButton(props) {
  const [isSelected, setIsSelected] = useState(true);
  const [loading, setLoading] = useState(false);

  const paymentMethods = paymentStore((state) => state.paymentMethods);
  const setReload = reloadStore((state) => state.setReload);

  const botao = props.id;

  function initialState() {
    if (botao === "pix") {
      paymentMethods.pix ? setIsSelected(true) : setIsSelected(false);
    }
    if (botao === "cartao") {
      paymentMethods.cartao ? setIsSelected(true) : setIsSelected(false);
    }
    if (botao === "dinheiro") {
      paymentMethods.dinheiro ? setIsSelected(true) : setIsSelected(false);
    }
  }
  async function onClick() {
    try {
      setLoading(true);
      if (botao === "pix") {
        await api.patch(`/togglePaymentMethod`, { payment: "pix" });
      }
      if (botao === "dinheiro") {
        await api.patch(`/togglePaymentMethod`, {
          payment: "dinheiro",
        });
      }
      if (botao === "cartao") {
        await api.patch(`/togglePaymentMethod`, { payment: "cartao" });
      }
	  
      setIsSelected(!isSelected);
      setReload(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initialState();
  }, []);

  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={classNames(
        "flex w-10 h-5 bg-gray-600 rounded-full transition-all duration-500 cursor-pointer",
        {
          "bg-green-600": isSelected,
        }
      )}
    >
      <span
        className={classNames(
          "h-5 w-5 bg-white rounded-full transition-all duration-500 shadow-lg",
          {
            "ml-5": isSelected,
          }
        )}
      />
    </button>
  );
}

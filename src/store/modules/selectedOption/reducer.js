export default function selected(
  state = [
    { name: "Produtos", href: "#", current: true },
    { name: "Pedidos", href: "#", current: false },
    { name: "Mesas", href: "#", current: false },
    { name: "Configurações", href: "#", current: false },
  ],
  action
) {
  switch (action.type) {
    case "SELECTED_ONE":
      state = [
        { name: "Produtos", href: "#", current: true },
        { name: "Pedidos", href: "#", current: false },
        { name: "Mesas", href: "#", current: false },
        { name: "Configurações", href: "#", current: false },
      ];
      return state;
    case "SELECTED_TWO":
      state = [
        { name: "Produtos", href: "#", current: false },
        { name: "Pedidos", href: "#", current: true },
        { name: "Mesas", href: "#", current: false },
        { name: "Configurações", href: "#", current: false },
      ];
      return state;
    case "SELECTED_THREE":
      state = [
        { name: "Produtos", href: "#", current: false },
        { name: "Pedidos", href: "#", current: false },
        { name: "Mesas", href: "#", current: true },
        { name: "Configurações", href: "#", current: false },
      ];
      return state;
    case "SELECTED_FOUR":
      state = [
        { name: "Produtos", href: "#", current: false },
        { name: "Pedidos", href: "#", current: false },
        { name: "Mesas", href: "#", current: false },
        { name: "Configurações", href: "#", current: true },
      ];
      return state;
    default:
      return state;
  }
}

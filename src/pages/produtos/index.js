import { NavBar } from "../../components/NavBar";
import Card from "../../components/Card";

export default function Pedidos() {
  return (
    <div className="flex">
      <NavBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 ml-60 w-full ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

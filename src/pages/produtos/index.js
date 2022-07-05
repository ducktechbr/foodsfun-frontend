import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";

export default function Pedidos() {
  return (
    <div className="flex">
      <NavBar />
      <div>
        <div className="fixed z-50 left-64 rounded-2xl">
          <DropDown />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 ml-60 w-full place-items-center mt-40">
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
          <AddButton />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4 3xl:col-span-5 flex justify-around w-full mt-4 mb-4">
<DropDown />
<div>
  <h1></h1>
</div>
</div> */
}

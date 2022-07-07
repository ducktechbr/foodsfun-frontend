import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";
import { ProtectedRoute } from "../../middlewares/protectedRoute";

function Page() {
  return (
    <div className="flex">
      <NavBar />
      <div>
        <div className="fixed z-50 left-64 rounded-2xl">
          <DropDown />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 ml-60 w-full place-items-center mt-40">
          <AddButton />
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
    </div>
  );
}

export default function () {
  return <ProtectedRoute component={Page} />;
}

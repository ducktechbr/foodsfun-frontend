import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";
import { ProtectedRoute } from "../../middlewares/protectedRoute";

function Page() {
  return (
    <div className="flex">
      <div className="w-60"></div>
      <NavBar />

      <div className={styles.screen}>
        <BackgroundBanner />

        <div className="w-full mt-11 px-3 rounded-2xl flex justify-between items-center">
          <DropDown />
          <AddButton />
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5  w-full place-items-center mt-40">
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

export default function Pedidos() {
  return <ProtectedRoute component={Page} />;
}

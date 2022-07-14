import { LoggedUser } from "../middlewares/loggedUser";

import Login from "./login";

export default function Home() {
  return <LoggedUser component={Login} />;
}

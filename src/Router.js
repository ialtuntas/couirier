import { Link, Route, Switch } from "react-router-dom";
import App from "./App";

import CouirierList from "./Views/couirierList";
const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
    {/* <Route path="/couirierlist" component={CouirierList} /> */}
  </Switch>
);
export default Main;

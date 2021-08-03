import Header from "../header/header";
import Sidebarcouirier from "../sidebarcouirier";

function Layout(props) {
  return (
    <>
      <Header />
      <Sidebarcouirier />
      <div>{props.children}</div>
    </>
  );
}

export default Layout;

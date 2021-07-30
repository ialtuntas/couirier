import Header from "../header/header";
import Sidebar from "../sidebar";

function Layout(props) {
  return (
    <>
      <Header />
      <Sidebar />
      <div>{props.children}</div>
    </>
  );
}

export default Layout;

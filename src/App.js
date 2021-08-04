import { Suspense } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import Table from "./components/table";
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Table />
      </Layout>
    </Suspense>
  );
}

export default App;

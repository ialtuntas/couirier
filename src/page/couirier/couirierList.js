import Layout from "../../components/layout/layoutcouirier";
import Timeline from "../../components/timeline";
import Map from "../../components/Map";
import { Card } from "antd";

function CouirierList() {
  return (
    <Layout>
      <div className="container">
        <div className="couirierlist">
          <Map></Map>
          <Timeline></Timeline>
        </div>
      </div>
    </Layout>
  );
}

export default CouirierList;

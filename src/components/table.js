import Avatar from "../svg/avatar.svg";
import TableArrow from "../svg/tablearrow.svg";
import ThreeDot from "../svg/threedot.svg";

const Table = () => {
  return (
    <>
      <div className="componenttable">
        <table>
          <caption>Courier List</caption>
          <thead>
            <tr>
              <th style={{ width: "60px" }}>
                <span>#</span>
              </th>
              <th style={{ width: "353px" }}>
                <span>Courier Name</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "180px" }}>
                <span>Bölge</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "163px" }}>
                <span>Kilogram</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "311px" }}>
                <span>Desi</span>
                <img src={TableArrow} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingRight: "20px" }}>
                <span>1</span>
              </td>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Avatar} />

                  <span style={{ marginLeft: "10px" }}>Alyona Bondarenko</span>
                </div>
              </td>
              <td>
                <span>Sjechenova Street</span>
              </td>
              <td>
                <span>576</span>
              </td>
              <td>
                <span>300</span>
              </td>
              <td>
                <img src={ThreeDot} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="paginate">
          <div className="paginatebtn">
            <p>&lt;</p>
          </div>
          <div className="paginatebtn active">
            <p>1</p>
          </div>
          <div className="paginatebtn">
            <p>2</p>
          </div>
          <div className="paginatebtn">
            <p>3</p>
          </div>
          <div className="paginatebtn">
            <p>4</p>
          </div>
          <div className="paginatebtn">
            <p>5</p>
          </div>
          <div className="paginatebtn">
            <p>&gt;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

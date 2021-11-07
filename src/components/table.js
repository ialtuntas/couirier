import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../svg/avatar.svg";
import TableArrow from "../svg/tablearrow.svg";
import ThreeDot from "../svg/threedot.svg";
import axios from "../utils/api";
import { Pagination } from "react-laravel-paginex";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";

const Table = () => {
  const [t, i18n] = useTranslation("common");

  const [dataTable, setDataTable] = useState([]);
  const [data2, setData2] = useState([]);
  const [spin, setSpin] = useState(true);
  // async function deneme() {
  //   const abc = await axios.get(
  //     "http://panel.poshta.ua/api/branch/couriers/50",
  //     {
  //       headers: {
  //         Authorization: "Bearer 5959|SJ8RSiixmSetLUHqJPgWUtA3hpvz8jr4YpTToSby",
  //       },
  //     }
  //   );
  //   setDataTable(abc.data.links);

  //   // console.log(abc.data.links);
  // }
  const getData = (data) => {
    setDataTable([]);
    setSpin(true);
    axios
      .get("/branch/couriers/64?page=" + data.page, {
        headers: {
          Authorization: "6555|KGmqBYlQDvwB4UoedmuIPNQOUmItCSd9nZAd7iej",
        },
      })
      .then((response) => {
        setData2(response.data);
        setDataTable(response.data.data);
        setSpin(false);
        // setDataTable(response.data.data);
        // console.log(response.data);
        // response.data.data.map((d) => {
        //   axios
        //     .get("/branch/couriers/show/60/" + d.id, {
        //       headers: {
        //         Authorization:
        //           "Bearer 6446|zC6p9o4seaadjCz2V7lmXYbz90NXpEiNbFdlvD9e",
        //       },
        //     })
        //     .then((r) => {
        //       setDataTable((dataTable) => [...dataTable, r.data.data]);
        //       setSpin(false);
        //     })
        //     .catch((error) => alert(error.message));
        // });
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    getData({ page: 1 });
  }, []);
  console.log(dataTable);

  return (
    <>
      <div className="componenttable">
        <table>
          <caption>
            <Link to="/couirierlist">{t("Kariyer Listesi")}</Link>
          </caption>
          <thead>
            <tr>
              <th style={{ width: "60px" }}>
                <span>#</span>
              </th>
              <th style={{ width: "353px" }}>
                <span>{t("Kariyer İsmi")}</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "180px" }}>
                <span>{t("Bölge")}</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "163px" }}>
                <span>{t("Kilogram")}</span>
                <img src={TableArrow} />
              </th>
              <th style={{ width: "311px" }}>
                <span>{t("Desi")}</span>
                <img src={TableArrow} />
              </th>
            </tr>
          </thead>

          <tbody>
            <Spin spinning={spin} />

            {dataTable.map((d) => (
              <tr>
                <td style={{ paddingRight: "20px" }}>
                  <span>1</span>
                </td>
                <td>
                  <div>
                    <img src={d.avatar} />
                    <Link to="/couirierlist">
                      <span style={{ marginLeft: "10px" }}>{d.name}</span>
                    </Link>
                  </div>
                </td>
                <td>
                  <span>{d.branch.name}</span>
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
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="paginate">
          {/* <div className="paginatebtn">
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
          </div> */}
          <Pagination changePage={getData} data={data2} />
        </div>
      </div>
    </>
  );
};

export default Table;

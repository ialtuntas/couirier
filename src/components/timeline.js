import React from "react";
import ElectricCar from "../svg/electric-car.svg";
import Flag from "../svg/flag.svg";
import CoffeeCup from "../svg/coffee-cup.svg";
import Ellipse from "../svg/ellipse.svg";
import Speedometer from "../svg/speedometer.svg";
import Speedometer2 from "../svg/speedometer2.svg";
import { useTranslation } from "react-i18next";
const route = [
  {
    latitude: "50.408263",
    longitude: "30.554473",
    time: "2021-07-30 01:10:43",
  },
];
const route2 = [
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:04:48",
  },
  {
    latitude: "50.41587",
    longitude: "30.548951",
    time: "2021-07-30 04:04:43",
  },
  {
    latitude: "50.41516",
    longitude: "30.552376",
    time: "2021-07-30 05:04:38",
  },
  {
    latitude: "50.413379",
    longitude: "30.552803",
    time: "2021-07-30 06:04:33",
  },
  {
    latitude: "50.412998",
    longitude: "30.553718",
    time: "2021-07-30 07:04:28",
  },
  {
    latitude: "50.411497",
    longitude: "30.554287",
    time: "2021-07-30 08:04:23",
  },
  {
    latitude: "50.410836",
    longitude: "30.554284",
    time: "2021-07-30 09:04:18",
  },
  {
    latitude: "50.408859",
    longitude: "30.554299",
    time: "2021-07-30 10:04:13",
  },
  {
    latitude: "50.408214",
    longitude: "30.554404",
    time: "2021-07-30 11:04:08",
  },
];

const res = route[0].time.split(" ");
const a = res[1].split(":");
const b = a[0] * 60 * 0.615 + parseInt(a[1]) + 375;
// console.log(b);
const Timeline = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className="map2">
      <div className="time">
        <div className="d" />
        <div
          style={{ width: "30px", backgroundColor: "#025FBF" }}
          className="no"
        >
          <img src={ElectricCar} />
        </div>
        <div
          style={{ width: "30px", backgroundColor: "#025FBF", left: "865px" }}
          className="no"
        >
          <img src={Flag} />
        </div>
        <div
          style={{ width: "80px", backgroundColor: "#025FBF", left: "490px" }}
          className="no"
        >
          <img src={CoffeeCup} />
        </div>
        {/* <div style={{ width: "18px", left: "465px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "565px" }} className="no">
          50
        </div>
        <div style={{ width: "18px", left: "818px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "400px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: b + "px" }} className="no">
          49
        </div>
        <div style={{ width: "18px", left: "520px" }} className="no">
          48
        </div> */}
        {route2
          // .sort(function (a, b) {
          //   return new Date(a.time) - new Date(b.time);
          // })
          .map((user, index) =>
            parseInt(user.time.split(" ")[1]) < 9 ? (
              <div
                style={{
                  width: "18px",
                  left:
                    Math.abs(
                      (parseInt(user.time.split(" ")[1].split(":")[0]) + 3) *
                        60 +
                        parseInt(user.time.split(" ")[1].split(":")[1])
                    ) *
                      0.615 +
                    375 +
                    "px",
                }}
                className="no"
              >
                {console.log(
                  ((parseInt(user.time.split(" ")[1].split(":")[0]) + 12 - 9) *
                    60 +
                    parseInt(user.time.split(" ")[1].split(":")[1])) *
                    0.615 +
                    375
                )}
                {index + 1}
              </div>
            ) : (
              <div
                style={{
                  width: "18px",
                  left:
                    Math.abs(
                      (parseInt(user.time.split(" ")[1].split(":")[0]) - 9) *
                        60 +
                        parseInt(user.time.split(" ")[1].split(":")[1])
                    ) *
                      0.615 +
                    375 +
                    "px",
                }}
                className="no"
              >
                {index + 1}
              </div>
            )
          )}
        {/* <div style={{ width: "18px", left: "375px" }} className="no">
          49
        </div> */}
        <table>
          <tbody>
            <tr>
              <th className="textalignleft">{t("Sürücü")}</th>
              <th className="textalignleft">{t("Süre")}</th>
              <th>
                <span>09:00</span>
              </th>
              <th>
                <span>11:00</span>
              </th>
              <th>
                <span>13:00</span>
              </th>
              <th>
                <span>15:00</span>
              </th>
              <th>
                <span>17:00</span>
              </th>
              <th>
                <span>19:00</span>
              </th>
              <th>
                <span>21:00</span>
              </th>
              <th />
            </tr>
            <tr>
              <td>
                Cahit Eyigünlü
                <img src={Ellipse} />
              </td>
              <td>
                <div className="speed">
                  <img src={Speedometer} />
                  <img src={Speedometer2} />
                  <p>%78</p>
                </div>
              </td>
              <td></td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timeline;

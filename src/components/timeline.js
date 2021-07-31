import React from "react";
import ElectricCar from "../svg/electric-car.svg";
import Flag from "../svg/flag.svg";
import CoffeeCup from "../svg/coffee-cup.svg";
import Ellipse from "../svg/ellipse.svg";
import Speedometer from "../svg/speedometer.svg";
import Speedometer2 from "../svg/speedometer2.svg";

const Timeline = () => {
  return (
    <div className="container">
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
          style={{ width: "80px", backgroundColor: "#025FBF", left: "665px" }}
          className="no"
        >
          <img src={CoffeeCup} />
        </div>
        <div style={{ width: "18px", left: "465px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "565px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "765px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "400px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "385px" }} className="no">
          48
        </div>
        <div style={{ width: "18px", left: "520px" }} className="no">
          48
        </div>
        <table>
          <tbody>
            <tr>
              <th className="textalignleft">Driver</th>
              <th className="textalignleft">Time</th>
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

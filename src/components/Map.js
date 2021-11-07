import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";
import L, { map } from "leaflet";

import icon from "../svg/marker.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const { Option } = Select;
const route = [
  {
    latitude: "50.408263",
    longitude: "30.554473",
    time: "2021-07-30 04:09:43",
  },
  {
    latitude: "50.408221",
    longitude: "30.554487",
    time: "2021-07-30 04:04:48",
  },
  {
    latitude: "50.408221",
    longitude: "30.554487",
    time: "2021-07-30 04:04:43",
  },
  {
    latitude: "50.408221",
    longitude: "30.554472",
    time: "2021-07-30 04:04:38",
  },
  {
    latitude: "50.408221",
    longitude: "30.554472",
    time: "2021-07-30 04:04:33",
  },
  {
    latitude: "50.408223",
    longitude: "30.554452",
    time: "2021-07-30 04:04:28",
  },
  {
    latitude: "50.408223",
    longitude: "30.554452",
    time: "2021-07-30 04:04:23",
  },
  {
    latitude: "50.408221",
    longitude: "30.55444",
    time: "2021-07-30 04:04:18",
  },
  {
    latitude: "50.408214",
    longitude: "30.554404",
    time: "2021-07-30 04:04:13",
  },
  {
    latitude: "50.408214",
    longitude: "30.554404",
    time: "2021-07-30 04:04:08",
  },
  {
    latitude: "50.408214",
    longitude: "30.554404",
    time: "2021-07-30 04:04:03",
  },
  {
    latitude: "50.408214",
    longitude: "30.554404",
    time: "2021-07-30 04:03:58",
  },
  {
    latitude: "50.408231",
    longitude: "30.554405",
    time: "2021-07-30 04:03:53",
  },
  {
    latitude: "50.408231",
    longitude: "30.554405",
    time: "2021-07-30 04:03:48",
  },
  {
    latitude: "50.408231",
    longitude: "30.554405",
    time: "2021-07-30 04:03:43",
  },
  {
    latitude: "50.408231",
    longitude: "30.554405",
    time: "2021-07-30 04:03:38",
  },
  {
    latitude: "50.408236",
    longitude: "30.554415",
    time: "2021-07-30 04:03:33",
  },
  {
    latitude: "50.40826",
    longitude: "30.554471",
    time: "2021-07-30 04:03:28",
  },
  {
    latitude: "50.40826",
    longitude: "30.554471",
    time: "2021-07-30 04:03:23",
  },
  {
    latitude: "50.40826",
    longitude: "30.554471",
    time: "2021-07-30 04:03:18",
  },
  {
    latitude: "50.40826",
    longitude: "30.554471",
    time: "2021-07-30 04:03:13",
  },
  {
    latitude: "50.408263",
    longitude: "30.554473",
    time: "2021-07-30 04:03:08",
  },
  {
    latitude: "50.408263",
    longitude: "30.554473",
    time: "2021-07-30 04:03:03",
  },
  {
    latitude: "50.408257",
    longitude: "30.554453",
    time: "2021-07-30 04:02:48",
  },
  {
    latitude: "50.408257",
    longitude: "30.554453",
    time: "2021-07-30 04:02:43",
  },
  {
    latitude: "50.408243",
    longitude: "30.554416",
    time: "2021-07-30 04:02:38",
  },
  {
    latitude: "50.408243",
    longitude: "30.554416",
    time: "2021-07-30 04:02:33",
  },
  {
    latitude: "50.408224",
    longitude: "30.554397",
    time: "2021-07-30 04:02:28",
  },
  {
    latitude: "50.408431",
    longitude: "30.554342",
    time: "2021-07-30 04:02:22",
  },
  {
    latitude: "50.408859",
    longitude: "30.554299",
    time: "2021-07-30 04:02:17",
  },
  {
    latitude: "50.409448",
    longitude: "30.554292",
    time: "2021-07-30 04:02:12",
  },
  {
    latitude: "50.410122",
    longitude: "30.554283",
    time: "2021-07-30 04:02:07",
  },
  {
    latitude: "50.410836",
    longitude: "30.554284",
    time: "2021-07-30 04:02:02",
  },
  {
    latitude: "50.411497",
    longitude: "30.554287",
    time: "2021-07-30 04:01:57",
  },
  {
    latitude: "50.412734",
    longitude: "30.554412",
    time: "2021-07-30 04:01:47",
  },
  {
    latitude: "50.412916",
    longitude: "30.554385",
    time: "2021-07-30 04:01:45",
  },
  {
    latitude: "50.412998",
    longitude: "30.553718",
    time: "2021-07-30 04:01:40",
  },
  {
    latitude: "50.412996",
    longitude: "30.553252",
    time: "2021-07-30 04:01:37",
  },
  {
    latitude: "50.413102",
    longitude: "30.553011",
    time: "2021-07-30 04:01:35",
  },
  {
    latitude: "50.413379",
    longitude: "30.552803",
    time: "2021-07-30 04:01:32",
  },
  {
    latitude: "50.414062",
    longitude: "30.552628",
    time: "2021-07-30 04:01:27",
  },
  {
    latitude: "50.41516",
    longitude: "30.552376",
    time: "2021-07-30 04:01:19",
  },
  {
    latitude: "50.415313",
    longitude: "30.552254",
    time: "2021-07-30 04:01:17",
  },
  {
    latitude: "50.415559",
    longitude: "30.551785",
    time: "2021-07-30 04:01:13",
  },
  {
    latitude: "50.415599",
    longitude: "30.551636",
    time: "2021-07-30 04:01:12",
  },
  {
    latitude: "50.415609",
    longitude: "30.550751",
    time: "2021-07-30 04:01:07",
  },
  {
    latitude: "50.415561",
    longitude: "30.549769",
    time: "2021-07-30 04:01:02",
  },
  {
    latitude: "50.415519",
    longitude: "30.54904",
    time: "2021-07-30 04:00:57",
  },
  {
    latitude: "50.415519",
    longitude: "30.54904",
    time: "2021-07-30 04:00:57",
  },
  {
    latitude: "50.41587",
    longitude: "30.548951",
    time: "2021-07-30 04:00:52",
  },
  {
    latitude: "50.416412",
    longitude: "30.548939",
    time: "2021-07-30 04:00:47",
  },
  {
    latitude: "50.416979",
    longitude: "30.548966",
    time: "2021-07-30 04:00:42",
  },
  {
    latitude: "50.417721",
    longitude: "30.548983",
    time: "2021-07-30 04:00:37",
  },
  {
    latitude: "50.418435",
    longitude: "30.548935",
    time: "2021-07-30 04:00:32",
  },
  {
    latitude: "50.418885",
    longitude: "30.548738",
    time: "2021-07-30 04:00:27",
  },
  {
    latitude: "50.419151",
    longitude: "30.54847",
    time: "2021-07-30 04:00:22",
  },
  {
    latitude: "50.419228",
    longitude: "30.548191",
    time: "2021-07-30 04:00:17",
  },
  {
    latitude: "50.419228",
    longitude: "30.548191",
    time: "2021-07-30 04:00:17",
  },
  {
    latitude: "50.419179",
    longitude: "30.548057",
    time: "2021-07-30 04:00:12",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:55:22",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:50:22",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:45:23",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:40:23",
  },
  {
    latitude: "50.419169",
    longitude: "30.547898",
    time: "2021-07-30 03:35:28",
  },
  {
    latitude: "50.419168",
    longitude: "30.547891",
    time: "2021-07-30 03:35:23",
  },
  {
    latitude: "50.419168",
    longitude: "30.547891",
    time: "2021-07-30 03:35:18",
  },
  {
    latitude: "50.419168",
    longitude: "30.547888",
    time: "2021-07-30 03:35:13",
  },
  {
    latitude: "50.419167",
    longitude: "30.547886",
    time: "2021-07-30 03:35:08",
  },
  {
    latitude: "50.419167",
    longitude: "30.547886",
    time: "2021-07-30 03:35:03",
  },
  {
    latitude: "50.419164",
    longitude: "30.547884",
    time: "2021-07-30 03:34:58",
  },
  {
    latitude: "50.419164",
    longitude: "30.547884",
    time: "2021-07-30 03:34:53",
  },
  {
    latitude: "50.419164",
    longitude: "30.547881",
    time: "2021-07-30 03:34:48",
  },
  {
    latitude: "50.419164",
    longitude: "30.547881",
    time: "2021-07-30 03:34:43",
  },
  {
    latitude: "50.419164",
    longitude: "30.547881",
    time: "2021-07-30 03:34:38",
  },
  {
    latitude: "50.419188",
    longitude: "30.547872",
    time: "2021-07-30 03:34:33",
  },
  {
    latitude: "50.419188",
    longitude: "30.547872",
    time: "2021-07-30 03:34:28",
  },
  {
    latitude: "50.419188",
    longitude: "30.547872",
    time: "2021-07-30 03:34:23",
  },
  {
    latitude: "50.419194",
    longitude: "30.547865",
    time: "2021-07-30 03:34:18",
  },
  {
    latitude: "50.419194",
    longitude: "30.547865",
    time: "2021-07-30 03:34:13",
  },
  {
    latitude: "50.419201",
    longitude: "30.547859",
    time: "2021-07-30 03:34:08",
  },
  {
    latitude: "50.419206",
    longitude: "30.547853",
    time: "2021-07-30 03:34:03",
  },
  {
    latitude: "50.419206",
    longitude: "30.547853",
    time: "2021-07-30 03:33:58",
  },
  {
    latitude: "50.419211",
    longitude: "30.547847",
    time: "2021-07-30 03:33:53",
  },
  {
    latitude: "50.419211",
    longitude: "30.547847",
    time: "2021-07-30 03:33:48",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:33:43",
  },
  {
    latitude: "50.419208",
    longitude: "30.547832",
    time: "2021-07-30 03:33:38",
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
var result = [];

for (var i in route) result.push([route[i].latitude, route[i].longitude]);
console.log(result);

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetinaUrl,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;
const position = [50.408214, 30.554299];
const position2 = [50.408221, 30.554487];
const polyline = [
  [50.45389736980437, 30.50577163696289],
  [50.451929989931344, 30.508861541748043],
  [50.4489787667211, 30.512294769287106],
  [50.44755774174372, 30.521564483642578],
  [50.441982539334106, 30.52019119262695],
  [50.440889285370865, 30.519504547119137],
  [50.439468017465416, 30.516757965087887],
  [50.43432923127259, 30.51589965820312],
];
const limeOptions = { color: "#025fbf", weight: 8 };

const Map = () => {
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    // mapRef.current = L.popup().openPopup(mapRef.current);
  });

  return (
    <div className="map">
      <div className="maptop">
        <Button
          className="mobilhidden"
          type="primary"
          style={{
            transition: "all .3s",
            position: "relative",
            background: "#025fbf",
            borderRadius: "10px",
            border: 0,
            marginBottom: "15px",
            fontSize: "16px",
            height: "39px",
          }}
        >
          {t("Kariyer Lokasyonları")}
        </Button>
        <Select
          // defaultValue="lucy"
          placeholder={t("Tarih Seçiniz")}
          style={{
            width: "73%",
            marginLeft: "20px",
          }}
          // onChange={handleChange}
        >
          <Option value="jack">07/08/2021</Option>
          <Option value="lucy">07/08/2021</Option>
          <Option value="disabled" disabled>
            07/08/2021
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>

      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "550px", borderRadius: "20px" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://poshta.ua">Poshta</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {route2
          .sort(function (a, b) {
            return new Date(a.time) - new Date(b.time);
          })
          .map((user, index) => (
            <Marker position={[user.latitude, user.longitude]}>
              <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
                {index + 1}
              </Tooltip>
              <Popup className="badge">{index}</Popup>
              <Popup>
                {index + 1} - {user.time}
              </Popup>
            </Marker>
          ))}
        {/* <Marker ref={mapRef} position={position}>
          <Popup className="badge">12</Popup>
        </Marker>
        <Marker position={position2}>
          <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
            58
          </Tooltip>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <Polyline pathOptions={limeOptions} positions={result} />
      </MapContainer>
    </div>
  );
};

export default Map;

import React from "react";
import "./Fillial.css";
import { PiPhoneCall } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { TbClick } from "react-icons/tb";

const Fillial = () => {
  const locations = [
    {
      linker: "https://yandex.uz/maps/-/CPrIII3W",
      location:
        "https://yandex.uz/map-widget/v1/org/97989553969/?ll=69.277670%2C41.335510&z=16",
      tel: "+998-71-234-13-70",
      name: "MALIKA",
    },
    {
      linker: "https://yandex.uz/maps/-/CPrcMZ1v",
      location:
        "https://yandex.uz/map-widget/v1/?azimuth=6.276277190384552&ll=69.289972%2C41.301209&mode=whatshere&whatshere%5Bpoint%5D=69.289633%2C41.301421&whatshere%5Bzoom%5D=16&z=18.6",
      tel: "+998-93-985-88-88",
      name: "INFINITY",
    },
    {
      linker: "https://yandex.uz/maps/-/CPr8nHoA",
      location:
        "https://yandex.uz/map-widget/v1/?ll=69.348302%2C41.287690&mode=whatshere&whatshere%5Bpoint%5D=69.348418%2C41.288112&whatshere%5Bzoom%5D=16&z=17",
      tel: "+998-90-011-13-70",
      name: "KADISHEVA",
    },
    {
      linker: "https://yandex.uz/maps/-/CPr8nBMS  ",
      location:
        "https://yandex.uz/map-widget/v1/?ll=69.294619%2C41.325309&mode=whatshere&whatshere%5Bpoint%5D=69.294482%2C41.325394&whatshere%5Bzoom%5D=16&z=17",
      tel: "+998-98-700-80-08",
      name: "NOMOSKOVSKAYA",
    },
    {
      linker: "https://yandex.uz/maps/-/CPr8zCNr",
      location:
        "https://yandex.uz/map-widget/v1/?ll=69.329036%2C41.330310&mode=whatshere&whatshere%5Bpoint%5D=69.328788%2C41.329974&whatshere%5Bzoom%5D=18&z=16",
      tel: "+998-77-724-13-70",
      name: "MAKSIM GORKIY",
    },
    {
      linker: "https://yandex.uz/maps/-/CPr87FIG",
      location:
        "https://yandex.uz/map-widget/v1/?ll=69.233010%2C41.218936&mode=whatshere&whatshere%5Bpoint%5D=69.233329%2C41.218189&whatshere%5Bzoom%5D=18&z=16",
      tel: "+998-94-234-13-70",
      name: "SERGELI",
    },
  ];

  return (
    <section id="fillial">
      <h1 className="fillial_title">FILLIALLARIMIZ</h1>
      <div className="container">
        <div className="fillial_wrapper">
          <ul className="locations_list">
            {locations.map((e, i) => (
              <li key={i} className="locations_item">
                <div className="location_wrapper">
                  <a href={e.linker} target="_blank" className="card_link">
                    <div className="location_overlay">
                      <iframe
                        className="location_img"
                        src={e.location}
                        loading="lazy"
                        style={{ pointerEvents: "none" }}
                      ></iframe>
                      <div className="map_overlay">
                        <p className="click_text">CLICK</p>
                        <TbClick className="click_icon"/>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="container">
                  <div className="card_infos">
                    <div className="name_wrap">
                      <FaLocationDot className="phone_blink" color="#ff0000" />
                      <h5 className="location_name">{e.name}</h5>
                      <FaLocationDot className="phone_blink" color="#ff0000" />
                    </div>

                    <div className="name_wrap">
                      <PiPhoneCall className="phone_blink" color="#ff0000" />
                      <h5 className="phone_title">Telefon Nomer :</h5>
                      <PiPhoneCall className="phone_blink" color="#ff0000" />
                    </div>

                    <a href={"tel:" + e.tel} className="telephone_num">
                      {e.tel}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Fillial;

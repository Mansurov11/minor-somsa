import React, { useState } from "react";
import "./Menu.css";
import molGoshtSomsa from "../../../public/mol.jpg"
import kokSomsa from "../../../public/kok.jpg"
import kartoshkaliSomsa from "../../../public/kartoshka.jpg"
import qoySomsa from "../../../public/qoy.jpg"
import tovuqSomsa from "../../../public/tovuq.jpg"
import sous from "../../../public/sous.png"

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      image: molGoshtSomsa,
      name: "Mol Go'shtli Somsa",
      category: "Go'sht",
      price: "14.000",
    },
    {
      id: 2,
      image: kokSomsa,
      name: "Ko'k Somsa",
      category: "Vegetarian",
      price: "8.000",
    },
    {
      id: 3,
      image: kartoshkaliSomsa,
      name: "Kartoshkali Somsa",
      category: "Vegetarian",
      price: "7.000",
    },
    {
      id: 4,
      image: qoySomsa,
      name: "Qo'y Go'shtli Somsa",
      category: "Go'sht",
      price: "11.000",
    },
    {
      id: 5,
      image: tovuqSomsa,
      name: "Tovuq Go'sht Somsa",
      category: "Go'sht",
      price: "9.000",
    },
    {
      id: 6,
      image: sous,
      name: "Tomatli Sous",
      category: "Sauce",
      price: "6.000",
    },
  ];

  const [category, setCategory] = useState("All");

  const filteredItems =
    category == "All"
      ? menuItems
      : menuItems.filter((item) => item.category == category);

  return (
    <section id="menu">
      <h2 className="menu_title">MENU</h2>

      <div className="menu_buttons">
        {["All", "Go'sht", "Vegetarian", "Sauce"].map((e) => (
          <button
            key={e}
            className={category == e ? "active" : "menu_btn"}
            onClick={() => setCategory(e)}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="menu_grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu_card">
            <div className="card_img_wrap">
              <img src={item.image} alt="" width={300} className="card_img" />
            </div>
            <div className="card_infos">
              <h3 className="card_title">{item.name}</h3>
            <span className="card_price">{item.price} so'm</span>
            <h3 className="card_caterogy_title">Kategoriya:</h3>
            <span className="card_caterogy">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

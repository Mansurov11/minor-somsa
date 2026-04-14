import { GiFlame } from "react-icons/gi";
import "./Header.css";
import { PiFlameLight } from "react-icons/pi";
import { TbFlameFilled } from "react-icons/tb";

const Header = () => {
  return (
    <header id="home">
      <nav className="header_nav">
        <div className="container">
          <div className="navbar_wrapper">
            <div className="logo_wrapper">
              <a href="./" className="logo_link">
                <img
                  src="public/logo.png"
                  alt="Minor Somsa"
                  width={30}
                  className="logo_icon"
                />

                <h3 className="logo_name">MINOR SOMSA</h3>
              </a>
            </div>

            <div className="navigations">
              <a href="#home" className="nav_link">
                Home
              </a>
              <a href="#about" className="nav_link">
                Biz Haqimizda
              </a>
              <a href="#menu" className="nav_link">
                Menu
              </a>
              <a href="#fillial" className="nav_link">
                Fillial
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="header_content">
        <div className="opacity">
          <div className="container">
            <div className="header_wrapper">
              <img src="public/logo.png" alt="" className="header_icon" />
              <h2 className="head_con-title">MINOR SOMSA</h2>
              <p className="head_con-subtitle">
                <TbFlameFilled className="flame_blink" color="#ff0000" />
                O‘zbekistondagi №1 somsa!
                <TbFlameFilled className="flame_blink" color="#ff0000" />
              </p>

              <div className="navto_buttons">
                <a href="#menu" className="nav_menu_btn">Menu</a>
                <a href="#fillial" className="nav_location_btn">Location</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

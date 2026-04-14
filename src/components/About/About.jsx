import React from "react";
import { TbFlameFilled } from "react-icons/tb";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="about_main_title">BIZ HAQIMIZDA</h1>
        <div className="about_wrapper">
            <div className="about_hero1">
                <h2 className="about_tite">An’anaviy, olovda pishirilgan</h2>
          <p className="about_text">
            Minor Somsa’da biz asrlar davomida shakllangan an’anaviy tandir
            usullarini e’zozlaymiz. Har bir somsa qo‘lda tayyorlanib, yuqori
            haroratda pishiriladi — natijada tashqi qismi oltindek qarsildoq,
            ichi esa mayin va mazali bo‘ladi. </p>

            <p className="about_text">Bizning tandirlarimiz 900°F dan
            yuqori haroratga yetadi, bu esa zamonaviy pechlarda takrorlab
            bo‘lmaydigan o‘ziga xos tutunli ta’m beradi. </p>

            <p className="about_last_text">
                
            <TbFlameFilled className="flame_blink" color="#ff0000" />
            Haqiqiy an’ana ta’mini
            his qiling.
          </p>
            </div>
          <div className="about_hero2">
            <img src="public/about_img.png" alt="" className="about_image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

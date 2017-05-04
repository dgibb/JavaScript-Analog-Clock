import React from "react";
import {Footer} from "./React Components/Footer";
import {Header} from "./React Components/Header";
import {clock} from "./clock";


export class Layout extends React.Component{

  componentDidMount() {
    window.onLoad = clock.setTime();
    window.setInterval(clock.updateTime,1000);
  }

  render(){
    return(
      <div className="content">

      <Header />

      <div className="clock-bg" id="middle-content">
        <div className="clock-container">
          <div className="clock-image">
            <div className="clock-face">
              <div className="hand hour"></div>
              <div className="hand min"></div>
              <div className="hand second"></div>
            </div>
          </div>
        </div>
        <div className="background-switcher">
        <button className="bg-button bench col-lg-2 col-med-2 col-sm-2 col-xs-2" onClick={clock.bench}>Bench</button>
        <button className="bg-button street col-lg-2 col-med-2 col-sm-2 col-xs-2" onClick={clock.street}>Street</button>
        <button className="bg-button city col-lg-2 col-med-2 col-sm-2 col-xs-2" onClick={clock.city}>City</button>
        <button className="bg-button bridge col-lg-2 col-med-2 col-sm-2 col-xs-2" onClick={clock.bridge}>Bridge</button>
        <button className="bg-button wheat col-lg-2 col-med-2 col-sm-2 col-xs-2" onClick={clock.wheat}>Wheat</button>
        </div>
      </div>

      <Footer />

      </div>



    );
  }
}

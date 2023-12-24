import React from "react";
import './App.css'

 function Card({header,subhead,noti,message}){
    return(<>
    <div className="cards">
        <div className="cardsHed">
        
          <p className="p">...</p>
      

        </div>
        <div className="cardBd">
            <div className="head">
                <h1>{header}</h1>
            </div>
            <div className="subhead">
                <h1>{subhead}</h1>
            </div>
            <div className="footer">
                <div className="noti">
                    <h1>{noti}</h1>
                </div>
                <div className="message">
                    <h1>{message}</h1>
                </div>
            </div>
        </div>
    </div>

    </>);
}
export default Card;
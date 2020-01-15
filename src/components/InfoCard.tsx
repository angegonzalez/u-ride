import * as React from "react";
import info1 from "../resources/info_1.jpg"
import "../styles/InfoCard.css"

export const InfoCard: React.SFC = () =>{
    return(
        <div className="info-card"> 
            <div className="row">
                <div className="col-3">
                    <div className="info-card-img">
                    <img src={info1} alt="" width="150px" height="100px"/>
                    </div>

                </div>
                <div className="col-8">
                    <div className="info-card-body">
                    <h3>Llego u-ride para ti</h3>
                    <p>Las alternativas son siempre bienvenidas, en nuestro caso, son necesarias. lore</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

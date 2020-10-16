import React from "react";
// import Frontvideo from "./frontvideo.mp4";

const Boo = () => {
    return(
        <div className="Boo">
            <div className="boo_level1">
                <video autoPlay loop muted className="boo_video">
                    <source src="./bbb.mp4" type="video/mp4" />
                </video>
                <span>업계 최저가</span>
            </div>
            {/* <div className="boo_level2">
                <img src="./mvp.png" />
            </div> */}
        </div>
    )
}

export default Boo;
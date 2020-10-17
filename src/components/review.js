import React from "react";

const Mvp = () => {
    const sendto = () => {
        window.open("https://pf.kakao.com/_DmMVxb/chat")
    }
    return (
        <div className="plate">
            <div className="plate_img">
                <img src="11.jpg" />
            </div>
            <div>
                <span></span>
                <div className="main_plate">
                    <div className="plate_left">
                        1
                    </div>
                    <div className="plate_right">
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mvp;
import React from "react";

const Mvp = () => {
    const sendto = () => {
        window.open("https://pf.kakao.com/_DmMVxb/45169032")
    }
    return (
        <div className="plate">
            <div className="plate_img">
                <img src="11.jpg" />
                <span></span>
            </div>
            <div>
                <span className="review_span">이용후기 게시판은 실제로 이용하신 고객님들이 작성해주신 소중한 후기입니다.</span>
                <span className="review_span">더 노력하는 앨리스가 되겠습니다.</span>
                <span className="review_span">감사합니다.</span>
                <span className="review_span">이용후기를 남겨주신 분들 중 3명을 추첨 매달 상품권 3만원 지급하니 많은 참여 부탁드립니다.</span>
                <div className="review_link">
                    <span onClick={sendto}>실명 인증 된 후기 바로가기</span>
                </div>
            </div>
            <div>
                <span></span>
                <div className="main_plate">
                </div>
            </div>
        </div>
    )
}

export default Mvp;
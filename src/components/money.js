import React from "react";

const Mvp = () => {
    const sendto = () => {
        window.open("https://pf.kakao.com/_DmMVxb/chat")
    }
    return (
        <div className="plate">
            <div className="plate_img">
                <img src="22.jpg" alt="img" />
            </div>
            <div>
                <span>실시간 메소 판매표</span>
                <div className="main_plate">
                    <div className="plate_left">
                        <img src="111.png" alt="img" />
                    </div>
                    <div className="plate_right">
                        <span  className="mvp_list_title">#진행 순서#</span>
                        <div className="mvp_list">
                            <span>1. 카톡 alicessg</span>
                            <span>2. 시세 및 구매 양식 확인</span>
                            <span>3. 양식 작성 및 입금</span>
                            <span>4. 메소 전달 및 거래 종료</span>
                        </div>
                        <span  className="mvp_list_title">#주의 사항#</span>
                        <div className="mvp_list">
                            <span>- 메소 구매 최소 단위는 5억입니다.</span>
                            <span>- 20억 이상 경매장 거래 가능하십니다.</span>
                            <span>- 메소는 구매해서 재판매하는 메소가 아닌 MVP대항으로 발행한 정지 위험 없는 깨끗한 메소만 판매합니다.</span>
                            <span>- 메소는 문의 시 작성한 양식에 기입한 닉네임으로만 전달 드립니다.</span>
                            <span>(경매장 거래시 올린 아이템 스샷첨부)</span>
                            <span>- 메소 판매는 <p>alicessg</p> 카톡으로만 진행합니다. (사칭을 조심하세요!)</span>
                        </div>
                        <span className="mvp_memo">시세는 변동이 심하니 문의 부탁드립니다.</span>
                        <div className="request_wrapper"  onClick={sendto}>
                            <span className="shadow22"></span>
                            <div className="boo_request">
                                <img src="./talk.png" alt="img" />
                                <span>
                                    문의하기
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mvp;
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
                <span>MVP 대행 안내</span>
                <div className="main_plate">
                    <div className="plate_left">
                        <img src="1111.png" alt="img" />
                    </div>
                    <div className="plate_right">
                        <span  className="mvp_list_title">#진행 순서#</span>
                        <div className="mvp_list">
                            <span>1. 상당 및 작업안내</span>
                            <span>2. 작업비 입금 및 신청서 작성</span>
                            <span>3. 예약된 시간에 작업 진행(2시간 ~ 3시간 소요)</span>
                            <span>4. 작업 완료 후 스샷 전송 및 로그아웃</span>
                        </div>
                        <span  className="mvp_list_title">#주의 사항#</span>
                        <div className="mvp_list">
                            <span>1. 스카니아,루나,엘리시움,크로아 중 생성한지 <p>3</p>일 이상된 <p>61</p>렙 캐릭을 보유하셔야 진행이 가능합니다.</span>
                            <span>(타썹 진행가능 문의주십시오) *추가금이 발생 할 수 있습니다*</span>
                            <span>2. 경매장 모든 아이템을 비워 주셔야 합니다.</span>
                            <span>3. 상품권 충전 가능 액수를 확인해주셔야합니다.</span>
                            <span>4. 비싼 아이템은 사전에 자물쇠로 잠궈주셔야합니다.</span>
                            <span>5. 예약 후 개인적인 사정으로 인해 취소시 예약금의 <p>70%</p> 만 반환됩니다.</span>
                            <span>6. 작업 시 생성되는 마일리지는 사용합니다.</span>
                            <span>7. 네이버 게임즈 계정은 작업불가입니다. (메이플 공헙에서 접속하는 네이버는 가능합니다)</span>
                            <span>8. 작업 중간 접속 절대 금지입니다.</span>
                            <span>(접속 방해 및 고의적인 원격접속 종료 할 시에 먹튀로 간주 신고 조치합니다.</span>
                            <span>*운영정책 4.4 정보도용과 유출 항목에 따라 신고시 영구정지 처분입니다.</span>
                            <span>9. 보안 패치 관련 인증이 필요 할 시에 협조 부탁드립니다.(일회용 그린PC인증)</span>
                            <span>(요청 거부시 작업은 진행되지 않으며 변심으로 인한 환불 조치 되십나다</span>
                        </div>
                        <span className="mvp_memo">변동 사항이 있을 수 있으니 문의 부탁드립니다.</span>
                        <span className="mvp_memo">** 추가 금액은 문의해주세요 **</span>
                        <a href="https://pf.kakao.com/_DmMVxb/chat">
                        </a>
                        <div className="request_wrapper" onClick={sendto}>
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
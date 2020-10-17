import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay,Pagination} from 'swiper'

SwiperCore.use([Autoplay,Pagination]);

const Boo = () => {   
    const sendto = () => {
        window.open("https://pf.kakao.com/_DmMVxb/chat")
    }
    return(
        <div className="Boo">
            <div className="boo_level1">
                <video autoPlay loop muted className="boo_video">
                    <source src="./bbb.mp4" type="video/mp4" />
                </video>
                <div className="boo_tab">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{delay:3500,disableOnInteraction:false}}
                    // pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="tabtab">
                                <span className="boo_title">동종업계 최고의 경력 보유</span>
                                <span className="boo_body">
                                    메이플 인생 10년, 고객 만족도 1위, 연관 검색어 1위, 재방문율 1위,
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tabtab">
                                <span className="boo_title">고객님을 위한 맞춤형 서비스</span>
                                <span className="boo_body">
                                    모든 상담은 고객님을 중점으로 그 누구보다 친절하게 상담해드립니다.
                                </span>
                                <span className="boo_body">상담 운영시간 12:00 ~ 03:00</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="swiper-slide">
                                <div className="tabtab">
                                    <span className="boo_title">이용후기 이벤트 진행 중</span>
                                    <span className="boo_body">
                                        이용 후기를 남겨주신 분중 추천을 통해 매달 상풍권 3만원 지급
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="boo_level2">
                <div>
                    <div className="boo_level2_left">
                        <div>
                            <span className="shadow"></span>
                            <img src="./2.png" alt="img" />
                        </div>
                        <div>
                            <span className="shadow"></span>
                            <img src="./5.png" alt="img" />
                        </div>
                    </div>
                    <div className="boo_level2_right">
                        <div>
                            <span className="shadow"></span>
                            <img src="./6.png" alt="img" />
                        </div>
                        <div>
                            <span className="shadow"></span>
                            <img src="./3.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="boo_level3">
                <div onClick={sendto}>
                    <span className="shadow2"></span>
                    <div className="boo_request">
                        <img src="./talk.png" alt="img" />
                        <span>
                            문의하기
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boo;
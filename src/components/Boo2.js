import React, { useEffect } from "react";
import { SwiperSlide } from 'swiper/react';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'vertical',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }  
});

const Boo = () => {

    return(
        <div className="Boo">
            <div className="boo_level1">
                <video autoPlay loop muted className="boo_video">
                    <source src="./bbb.mp4" type="video/mp4" />
                </video>
                <div className="boo_tab">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div className="tabtab">
                                    <span className="boo_title">이용후기 이벤트 진행 중</span>
                                    <span className="boo_body">
                                        이용 후기를 남겨주신 분중 추천을 통해 매달 상풍권 3만원 지급
                                    </span>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="tabtab">
                                    <span className="boo_title">이용후기 이벤트 진행 중</span>
                                    <span className="boo_body">
                                        이용 후기를 남겨주신 분중 추천을 통해 매달 상풍권 3만원 지급
                                    </span>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="tabtab">
                                    <span className="boo_title">고객님을 위한 맞춤형 서비스</span>
                                    <span className="boo_body">
                                        모든 상담은 고객님을 중점으로 그 누구보다 친절하게 상담해드립니다. 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
            </div>
            <div className="boo_level2">
                <span>aaa</span>
                <img src="./mvp.png" />
            </div>
        </div>
    )
}

export default Boo;
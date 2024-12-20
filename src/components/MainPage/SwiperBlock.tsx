import { FC } from "react";
import { sliderCarts } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const SwiperBlock: FC = () => {
  return (
    <SwiperStyle>
      <button className="button-prev">
        <img src="./images/slider/arrow.svg" alt="arrow" />
      </button>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {sliderCarts.map((slide: { id: number; img: string; text: string }) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="slide_img" />
            <p>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="button-next">
        <img src="./images/slider/arrow.svg" alt="arrow" />
      </button>
    </SwiperStyle>
  );
};

const breakpoints = {
  200: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  750: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

const SwiperStyle = styled.div`
  display: flex;
  align-items: center;
  .swiper {
    padding: 0 15px;
  }
  .swiper-wrapper {
    margin: 70px 0;
  }
  .swiper-slide {
    color: ${(props) => props.theme.colors.main2};
    padding: 22px 20px 46px 20px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    height: auto;

    img {
      margin-bottom: 12px;
    }

    p {
      font-size: 18px;
      letter-spacing: 0.18px;
    }
  }

  .button-prev,
  .button-next {
    width: 39px;
  }

  .button-prev {
    transform: rotate(180deg);
  }

  @media (max-width: 810px) {
    .swiper {
      padding: 0 4.7rem;
    }
    .swiper-wrapper {
      margin: 6.4rem 0 16rem;
    }
    .swiper-slide {
      padding: 4.4rem 3.56rem 6.2rem;
      img {
      }

      p {
      }
    }

    .button-prev,
    .button-next {
      position: absolute;
      z-index: 2;
    }

    .button-prev {
      left: -2px;
      transform: rotate(180deg) translateY(50%);
    }

    .button-next {
      right: -1px;
      transform: translateY(-50%);
    }
  }
`;

export default SwiperBlock;

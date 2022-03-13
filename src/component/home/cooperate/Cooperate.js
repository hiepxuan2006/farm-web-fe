import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllCompany } from "../../../store/action/categoryAction";
import Company from "../../company/Company";

function Cooperate(props) {
  SwiperCore.use([Autoplay]);

  const dispatch = useDispatch();
  const company = useSelector((state) => state.categoryReducer.company);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getAllCompany());
    };
    getCategory();
  }, [dispatch]);

  return (
    <CooperateWrap className="cooperate">
      <div className="cooperate__heading">
        <h1>Kết nối nhà vườn</h1>
      </div>
      <div className="cooperate__content">
        <div className="grid wide">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {company &&
              company.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/danh-ba-nha-nong/${item._id}`} >
                    <Company company={item} key={index} />

                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </CooperateWrap>
  );
}

export default Cooperate;
const CooperateWrap = styled.div`
.cooperate__heading {
  margin: 20px 0;

  h1 {
      padding   : 20px 0;
      color     : #777;
      text-align: center;
  }
}

.cooperate__content {
  position     : relative;
  display      : block;
  overflow     : hidden;
  user-select  : none;
  margin-bottom: 50px;

  .swiper-wrapper {
      width : 100%;
      height: 100%;

      .swiper-slide {
          width     : 100px;
          transition: all .6 ease-in-out;
          margin    : 10px 0;


      }


  }
}
`

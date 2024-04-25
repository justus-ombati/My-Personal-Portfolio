import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/barack.jpeg";
import profilePic2 from "../../img/aplo.jpg";
import profilePic3 from "../../img/harriet.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Working with Justus was a game-changer for our technical support needs. His expertise in network hardware was evident from the start. Justus flawlessly handled a project with complex client requirements, delivering top-notch solutions and ensuring client satisfaction. His professionalism and dedication were truly impressive. I highly recommend Justus for any network hardware technical work; he's an invaluable asset to any team.",
    },
    {
      img: profilePic2,
      review:
        "Justus's contribution during his three-month industrial attachment was outstanding. His proficiency in network hardware technical tasks and programming was impressive. Justus quickly integrated into our team, bringing valuable skills and fresh perspectives to our projects. His dedication, adaptability, and enthusiasm were truly commendable. I highly recommend Justus for any technical role; he's a valuable asset to any team.",
    },
    {
      img: profilePic3,
      review:
        "Justus was a standout team member during our recent hackathon. His technical expertise in network hardware and programming tasks was crucial to our success. His collaborative approach, quick thinking, and attention to detail made him an invaluable asset. I highly recommend Justus for any technical project; he's a reliable and skilled teammate.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

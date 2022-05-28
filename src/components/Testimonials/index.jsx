import { useRef } from "react"
import { testimonialsData } from "../../data/testimonialsData"
import Slider from "react-slick"
// prettier-ignore
import { Body, Content, DetailsContainer, ImageContainer, Section, SliderContainer, TestimonialCard, Title } from "./mui"
import Btn from "./Btn"
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const sliderRef = useRef()
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    scrolling: "true",
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  }
  const gotoNext = () => sliderRef.current.slickNext()
  const gotoPrev = () => sliderRef.current.slickPrev()

  if (testimonialsData.length === 0) return
  return (
    <Section id="testimonials">
      {/* Header */}
      <div>
        <Title>Testimonials</Title>
      </div>
      {/* Body */}
      <Body>
        {/* Quote Icon */}
        <FaQuoteLeft className="quote" />
        {/* Slider Container */}
        <SliderContainer>
          <Slider {...settings} ref={sliderRef}>
            {testimonialsData.map(({ id, name, title, text, image }) => (
              // Card
              <TestimonialCard key={id}>
                <Content>
                  {/* Image */}
                  <ImageContainer>
                    <img src={image} alt={name} />
                  </ImageContainer>
                  {/* Details */}
                  <DetailsContainer>
                    <p>{text}</p>
                    <h1>{name}</h1>
                    <h4>{title}</h4>
                  </DetailsContainer>
                </Content>
              </TestimonialCard>
            ))}
          </Slider>
          {/* prevBtn */}
          <Btn
            onClick={gotoPrev}
            icon={FaArrowLeft}
            iconAria="Previous"
            BtnStyle={{ left: "5%" }}
          />
          {/* nextBtn */}
          <Btn
            onClick={gotoNext}
            icon={FaArrowRight}
            iconAria="Next"
            BtnStyle={{ right: "5%" }}
          />
        </SliderContainer>
      </Body>
    </Section>
  )
}

export default Testimonials

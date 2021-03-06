import { useTheme } from "@emotion/react"
import { useRef } from "react"
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa"
import Slider from "react-slick"
import { SectionTitle } from "../../../../components"
import { testimonialsData } from "../../../../data"
import Btn from "./Btn"
// prettier-ignore
import { 
  Body, Content, DetailsContainer, ImageContainer, Section, SliderContainer, TestimonialCard 
} from "./mui"
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

const Testimonials = () => {
  const sliderRef = useRef()
  const theme = useTheme()
  const gotoNext = () => sliderRef.current.slickNext()
  const gotoPrev = () => sliderRef.current.slickPrev()

  if (testimonialsData.length === 0) return
  return (
    <Section id="testimonials">
      {/* Header */}
      <div>
        {/* Title */}
        <SectionTitle
          sx={{ color: theme.secondary, mt: { xs: "1.75rem", md: 0 } }}
        >
          Testimonials
        </SectionTitle>
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

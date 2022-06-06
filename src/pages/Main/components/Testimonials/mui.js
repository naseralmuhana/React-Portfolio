import { styled } from "@mui/material/styles"
import "../../../../App.css"

// Testimonials Section
export const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.primary,
  // minHeight: "100vh",
  height: "100vh",
  fontFamily: "var(--primaryFont)",
  overflow: "hidden",
  [theme.breakpoints.down(992)]: {
    paddingBottom: "2rem",
    height: "100%",
  },
}))

/**
 * Testimonials Header
 * Content => []
 */

// Testimonials Header
// export const Header = styled("div")({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// })

/**
 * Testimonials Body
 * Content => [Quote Icon,Testimonials Cards]
 */

// Testimonials Body
export const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "95%",
  marginTop: "1rem",
  position: "relative",
  [theme.breakpoints.down(800)]: {
    width: "100%",
  },
  "& .quote": {
    color: theme.secondary,
    position: "absolute",
    fontSize: "4rem",
    zIndex: 10,
    opacity: 0.5,
    transform: "translateY(50%)",
    [theme.breakpoints.down(992)]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down(360)]: {
      fontSize: "3rem",
    },
  },
}))

// Testimonials Body Quote Icon
// export const QuoteIcon = styled(FaQuoteLeft)(({ theme }) => ({
//   position: "absolute",
//   color: theme.secondary,
//   fontSize: "4rem",
//   zIndex: 10,
//   transform: "translateY(50%)",
//   opacity: 0.5,
//   [theme.breakpoints.down(992)]: {
//     fontSize: "3.5rem",
//   },
//   [theme.breakpoints.down(360)]: {
//     fontSize: "3rem",
//   },
// }))

// Testimonials Body Slider Container & Slider Style
export const SliderContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "70%",
  [theme.breakpoints.down(800)]: {
    width: "90%",
  },
  [theme.breakpoints.down(360)]: {
    width: "100%",
  },
  // SLIDER STYLES
  "& .slick-slider": {
    height: "100% !important",
    width: "100%",
  },

  "& .slick-initialized": {
    overflow: "hidden",
  },

  "& .slick-list": {
    position: "relative",
    display: "block",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  "& .slick-dots": {
    position: "relative !important",
    bottom: "22px !important",
  },
}))

/**
 * Testimonials Card
 * Content => [image, details, Buttons]
 */

// Testimonial Card
export const TestimonialCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "500px",
  position: "relative",
  padding: "2rem",
})

// Testimonial Card Content
export const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",
})

// Testimonial Card Image Container & image  style
export const ImageContainer = styled("div")(({ theme }) => ({
  cursor: "grab",
  "&:active": { cursor: "grabbing" },
  backgroundColor: theme.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100px",
  height: "100px",
  borderRadius: "50%",
  margin: "0 auto",
  zIndex: "3",
  transform: "translateY(50%)",
  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  "& > img": {
    width: "90px",
  },
  [theme.breakpoints.down(600)]: {
    margin: "initial",
    alignSelf: "flex-start",
  },
  [theme.breakpoints.down(360)]: {
    width: "80px",
    height: "80px",
    "& > img": {
      width: "70px",
    },
  },
}))

// Testimonial Card Details Container
export const DetailsContainer = styled("div")(({ theme }) => ({
  cursor: "grab",
  "&:active": { cursor: "grabbing" },
  backgroundColor: theme.secondary,
  color: theme.tertiary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "4px 4px 8px rgb(36 3 3 / 20%)",
  width: "90%",
  height: "250px",
  margin: "0 auto",
  borderRadius: "200px",
  padding: "60px 40px 30px",
  "& > p": {
    fontStyle: "italic",
    fontWeight: 300,
    width: "80%",
  },
  "& > h1": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: "10px",
  },
  "& > h4": {
    fontSize: "1rem",
    fontWeight: 500,
  },
  [theme.breakpoints.down(992)]: {
    borderRadius: "50px",
  },
  [theme.breakpoints.down(600)]: {
    borderRadius: "20px",
    minHeight: "300px",
    "& > p": {
      fontSize: "0.9rem",
      width: "90%",
    },
    "& > h1": {
      fontSize: "1.3rem",
    },
    "& > h4": {
      fontSize: "0.9rem",
    },
  },
  [theme.breakpoints.down(360)]: {
    minHeight: "350px",
  },
}))

/**
 * Testimonials Buttons
 * Content => [prevBtn, nextBtn]
 */

// Testimonial Button
export const Button = styled("button")(({ theme }) => ({
  backgroundColor: theme.secondary,
  cursor: "pointer",
  position: "absolute",
  top: "53%",
  transform: "translateY(-50%)",
  width: "60px",
  height: "60px",
  borderRadius: "50%",

  appearance: "none",
  outline: "none",
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "1.6rem",
  [theme.breakpoints.down(768)]: {
    display: "none",
  },
}))

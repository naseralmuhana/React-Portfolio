import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { Fade } from "react-awesome-reveal"
// prettier-ignore
import { Container, Image, ImageContainer, Duration, Course, Institution} from "./card-mui"
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg"
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg"

const Card = ({ education }) => {
  const { id, institution, course, startYear, endYear } = education
  const theme = useTheme()

  return (
    <Fade direction="up" style={{ width: "100%" }}>
      <Container key={id}>
        {/* Rounded Image */}
        <ImageContainer>
          <Image
            src={theme.type === "light" ? eduImgBlack : eduImgWhite}
            alt=""
          />
        </ImageContainer>
        <Box ml="0.6rem">
          {/* Duration */}
          <Duration>
            {startYear}-{endYear}
          </Duration>
          {/* Course (title) */}
          <Course>{course}</Course>
          {/* Institution */}
          <Institution>{institution}</Institution>
        </Box>
      </Container>
    </Fade>
  )
}

export default Card

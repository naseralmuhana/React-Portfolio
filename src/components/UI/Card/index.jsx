import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { Fade } from "react-awesome-reveal"
// prettier-ignore
import { Container, Image, ImageContainer, Duration, Content, Title } from "./mui"

const Card = ({
  id,
  title,
  content,
  startYear,
  endYear,
  imgDark,
  imgLight,
  fadeStyle,
}) => {
  const theme = useTheme()

  return (
    <Fade direction="up" style={{ width: "100%", ...fadeStyle }}>
      <Container key={id}>
        {/* Rounded Image */}
        <ImageContainer>
          <Image src={theme.type === "light" ? imgDark : imgLight} alt="" />
        </ImageContainer>
        <Box ml="0.6rem">
          {/* Duration */}
          <Duration>
            {startYear}-{endYear}
          </Duration>
          {/* Title */}
          <Title>{title}</Title>
          {/* Content */}
          <Content>{content}</Content>
        </Box>
      </Container>
    </Fade>
  )
}

export default Card

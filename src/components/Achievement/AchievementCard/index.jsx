import Box from "@mui/material/Box"
import { Fade } from "react-awesome-reveal"
import { AiOutlineFolder } from "react-icons/ai"
// prettier-ignore
import { 
  Card, Content, Details, Details2Container, FieldContainer, Image, ImageContainer, Title 
} from "./mui"

const AchievementCard = ({ achieve }) => {
  const { id, title, details, date, field, image } = achieve
  return (
    <Fade direction="up" style={{ width: "100%" }}>
      <Card key={id}>
        {/* Content */}
        <Content>
          {/* Details1 (Title, details) */}
          <Box mb="20px">
            <Title>{title}</Title>
            <Details>{details}</Details>
          </Box>
          {/* Details2  (Date, field) */}
          <Details2Container>
            <h5>{date}</h5>
            <FieldContainer>
              <AiOutlineFolder />
              <h5>{field}</h5>
            </FieldContainer>
          </Details2Container>
        </Content>
        {/* Image */}
        <ImageContainer>
          <Image src={image} alt="" />
        </ImageContainer>
      </Card>
    </Fade>
  )
}

export default AchievementCard

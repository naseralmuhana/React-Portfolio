import { Bounce } from "react-awesome-reveal"
import { placeholder } from "../../../../../assets"
import { Body, Card, ImageContainer } from "./mui"

const BlogCard = ({ blog }) => {
  const { title, description, date, image, url, id } = blog
  return (
    <Bounce style={{ height: "420px", width: "320px" }}>
      <Card key={id} href={url} target="_blank" rel="noreferrer">
        <ImageContainer className="image-container">
          <img src={image ? image : placeholder} alt={title} />
        </ImageContainer>
        <Body>
          <p className="date">{date}</p>
          <h3>{title}</h3>
          <h6>{description}</h6>
        </Body>
      </Card>
    </Bounce>
  )
}

export default BlogCard

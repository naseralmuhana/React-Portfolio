import React from "react"
import { Bounce } from "react-awesome-reveal"
import { FaCode, FaPlay } from "react-icons/fa"
import placeholder from "../../../assets/png/placeholder.png"
import IconBtn from "./IconBtn"
// prettier-ignore
import {
  Card, Content, ContentActions, ContentImage, ContentTitle, Description, Tags, TagSpan
} from "./mui"

const ProjectCard = ({ project }) => {
  // prettier-ignore
  const { id, projectName: name, projectDesc: desc, tags, code, demo, image } = project
  const titleId = name.replace(" ", "-").toLowerCase()

  return (
    <Bounce style={{ width: "304px", height: "360px" }}>
      <Card key={id}>
        {/* Visible Content */}
        <Content>
          {/* Title */}
          <ContentTitle id={titleId}>{name}</ContentTitle>
          {/* Image */}
          <ContentImage src={image ? image : placeholder} alt={name} />
          {/* ActionButtons */}
          <ContentActions className="content-actions">
            <IconBtn href={demo} icon={FaPlay} iconId="demo" name={name} />
            <IconBtn href={code} icon={FaCode} iconId="code" name={name} />
          </ContentActions>
        </Content>
        {/* onHover Content */}
        <Description className="description">{desc}</Description>
        <Tags className="tags">
          {tags.map((tag, id) => (
            <TagSpan key={id}>{tag}</TagSpan>
          ))}
        </Tags>
      </Card>
    </Bounce>
  )
}

export default ProjectCard

import React from "react"
import { Fade } from "react-awesome-reveal"
import { Card, Content, IconContainer, Title } from "./mui"

const ServiceCard = ({ service }) => {
  const { id, title, icon } = service
  return (
    <Fade direction="down">
      <Card key={id}>
        <Content>
          <IconContainer>{icon}</IconContainer>
          <Title>{title}</Title>
        </Content>
      </Card>
    </Fade>
  )
}

export default ServiceCard

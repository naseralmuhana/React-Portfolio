import { servicesData } from "../../data/servicesData"
// prettier-ignore
import { Body, CardsContainer, Description, Header, Section, Title } from "./mui"
import ServiceCard from "./ServiceCard"

const Services = () => {
  if (servicesData.length === 0) return

  const cards = servicesData.map((service) => (
    <ServiceCard key={service.id} service={service} />
  ))
  return (
    <Section id="services">
      {/* Header */}
      <Header>
        {/* Title */}
        <Title>Services</Title>
      </Header>
      {/* Body */}
      <Body>
        {/* Description */}
        <Description>
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </Description>
        {/* Cards */}
        <CardsContainer>{cards}</CardsContainer>
      </Body>
    </Section>
  )
}

export default Services

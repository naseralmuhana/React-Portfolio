// prettier-ignore
import { SectionHeader, SectionTitle } from "../../../../components"
import { servicesData } from "../../../../data"
// prettier-ignore
import { Body, CardsContainer, Description, Section } from "./mui"
import ServiceCard from "./ServiceCard"

const Services = () => {
  if (servicesData.length === 0) return

  const cards = servicesData.map((service) => (
    <ServiceCard key={service.id} service={service} />
  ))
  return (
    <Section id="services">
      {/* Header */}
      <SectionHeader sx={{ m: 0 }}>
        {/* Title */}
        <SectionTitle>Services</SectionTitle>
      </SectionHeader>
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

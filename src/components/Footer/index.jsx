import { Slide } from "react-awesome-reveal"
import { headerData } from "../../data/headerData"
import { Section } from "./mui"

const Footer = () => {
  return (
    <Section  id="footer">
      <Slide direction="up">
        <p>
          Made with
          <span>❤</span>
          by {headerData.name}
        </p>
      </Slide>
    </Section>
  )
}

export default Footer

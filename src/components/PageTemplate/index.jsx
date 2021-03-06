import { useState } from "react"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper"
// prettier-ignore
import {
    Body, Content, GridContainer, Header, HomeIcon, Search, Section
} from "./mui"

const PageTemplate = (props) => {
  const { tabTitle, title, placeholder, children, onSearch } = props

  const [search, setSearch] = useState("")

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <Wrapper title={tabTitle}>
      <Section>
        {/* Header */}
        <Header>
          <Link to="/">
            <HomeIcon />
          </Link>
          <h1>{title}</h1>
        </Header>
        {/* Body */}
        <Body>
          {/* Search */}
          <Search>
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder={placeholder}
            />
          </Search>
          {/* Content */}
          <Content>
            <GridContainer container>{children}</GridContainer>
          </Content>
        </Body>
      </Section>
    </Wrapper>
  )
}

export default PageTemplate

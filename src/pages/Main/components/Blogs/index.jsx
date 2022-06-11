// prettier-ignore
import { SectionHeader, SectionTitle, ViewAllBtn } from "../../../../components"
import { blogData } from "../../../../data"
import BlogCard from "./BlogCard"
// prettier-ignore
import {
  Body, CardsContainer, Section
} from "./mui"

const Blogs = () => {
  if (blogData.length === 0) return

  const cards = blogData
    .slice(0, 3)
    .reverse()
    .map((blog) => <BlogCard key={blog.id} blog={blog} />)

  const button = blogData.length > 3 && <ViewAllBtn title="BLOGS" to="/blogs" />
  return (
    <Section id="blogs">
      {/* Header */}
      <SectionHeader>
        {/* Title */}
        <SectionTitle>Blogs</SectionTitle>
      </SectionHeader>
      {/* Body */}
      <Body>
        {/* Cards */}
        <CardsContainer>{cards}</CardsContainer>
        {/* ViewAll Button*/}
        {button}
      </Body>
    </Section>
  )
}

export default Blogs

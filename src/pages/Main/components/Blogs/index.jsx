import { Link } from "react-router-dom"
// prettier-ignore
import { CustomTooltip, SectionHeader, SectionTitle } from "../../../../components"
import { blogData } from "../../../../data"
import BlogCard from "./BlogCard"
// prettier-ignore
import {
  Body, CardsContainer, Section, ViewAllBtn, ViewAllContainer, ViewAllIcon
} from "./mui"

const Blogs = () => {
  if (blogData.length === 0) return
  const cards = blogData
    .slice(0, 3)
    .reverse()
    .map((blog) => <BlogCard key={blog.id} blog={blog} />)
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
        {blogData.length > 3 && (
          <ViewAllContainer>
            <Link to="/blogs">
              <CustomTooltip title="BLOGS">
                <ViewAllBtn>
                  View All
                  <ViewAllIcon />
                </ViewAllBtn>
              </CustomTooltip>
            </Link>
          </ViewAllContainer>
        )}
      </Body>
    </Section>
  )
}

export default Blogs

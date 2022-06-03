import { Link } from "react-router-dom"
import { CustomTooltip } from "../../../../components"
import { blogData } from "../../../../data"

import BlogCard from "./BlogCard"
// prettier-ignore
import { 
  Body, CardsContainer, Header, Section, Title, ViewAllBtn, ViewAllContainer, ViewAllIcon 
} from "./mui"

const Blogs = () => {
  if (blogData.length === 0) return
  const cards = blogData
    .slice(0, 3)
    .reverse()
    .map((blog) => <BlogCard key={blog.id} blog={blog} />)
  return (
    <Section id="blogs">
      <Header>
        <Title>Blogs</Title>
      </Header>
      <Body>
        <CardsContainer>{cards}</CardsContainer>
      </Body>
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
    </Section>
  )
}

export default Blogs

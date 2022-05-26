import React from "react"
import { Link } from "react-router-dom"
import { blogData } from "../../data/blogData"
import BlogCard from "./BlogCard"
// prettier-ignore
import { Body, CardsContainer, Header, Section, Title, ViewAllBtn, ViewAllContainer, ViewAllIcon } from "./mui"

const Blog = () => {
  if (blogData.length === 0) return
  const cards = blogData
    .slice(0, 3)
    .reverse()
    .map((blog) => <BlogCard key={blog.id} blog={blog} />)
  return (
    <Section id="blog">
      <Header>
        <Title>Blog</Title>
      </Header>
      <Body>
        <CardsContainer>{cards}</CardsContainer>
      </Body>
      {/* ViewAll Button*/}
      {blogData.length > 3 && (
        <ViewAllContainer>
          <Link to="/">
            <ViewAllBtn>
              View All
              <ViewAllIcon />
            </ViewAllBtn>
          </Link>
        </ViewAllContainer>
      )}
    </Section>
  )
}

export default Blog

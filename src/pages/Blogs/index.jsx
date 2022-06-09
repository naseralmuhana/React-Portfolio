import { useState } from "react"
import { blogData } from "../../data"
import { PageTemplate } from "../../components"
import BlogCard from "../Main/components/Blogs/BlogCard"

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData)
  const handleSearch = (search) => {
    setFilteredBlogs(
      blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.trim().toLowerCase())
      })
    )
  }

  const settings = {
    tabTitle: "Blogs",
    title: "Blogs",
    placeholder: "Search blog...",
    onSearch: handleSearch,
  }
  return (
    <PageTemplate {...settings}>
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </PageTemplate>
  )
}

export default Blogs

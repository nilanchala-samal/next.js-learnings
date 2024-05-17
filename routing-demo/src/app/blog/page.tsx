import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
    default: "",
    template: ""
  }
}

const Blog = () => {
  return (
    <h1>
      This is Blog Post Page
    </h1>
  )
};

export default Blog;
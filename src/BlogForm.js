import { useState } from "react";

const BlogForm = (props) => {
  const { blogs, setBlogs, setBlogFormOpen } = props;
  const [newBlog, setNewBlog] = useState({
    author: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
    });
  };

  const postBlog = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setBlogs([...blogs, data]);
        setNewBlog({
          author: "",
          title: "",
          content: "",
        });
        setBlogFormOpen(false)
      });
  };

  return (
    <div>
      <form onSubmit={(e) => postBlog(e)}>
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          name="author"
          value={newBlog.author}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={newBlog.title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="content">Content: </label>
        <textarea
          type="text"
          name="content"
          value={newBlog.content}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;

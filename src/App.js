import { useState, useEffect } from "react";
import BlogForm from "./BlogForm";
import BlogsContainer from "./BlogsContainer";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogFormOpen, setBlogFormOpen] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch("http://localhost:3001/blogs")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  };

  return (
    <div>
      <h1>Welcome to Blogger</h1>
      <button
        onClick={
          blogFormOpen
            ? () => setBlogFormOpen(false)
            : () => setBlogFormOpen(true)
        }
      >
        {blogFormOpen ? "Cancel" : "Add Blog"}
      </button>
      <br />
      <br />
      {blogFormOpen ? (
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          setBlogFormOpen={setBlogFormOpen}
        />
      ) : null}
      <BlogsContainer blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default App;

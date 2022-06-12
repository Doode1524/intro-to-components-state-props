import EditBlogForm from "./EditBlogForm";
import { useState } from "react";

const Blog = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const { blog, deleteBlog, editBlog } = props;
  return (
    <div>
      <h3>
        {blog.title} - by {blog.author}
      </h3>
      <p>{blog.content}</p>
      <button
        onClick={
          editFormOpen
            ? () => setEditFormOpen(false)
            : () => setEditFormOpen(true)
        }
      >
        {editFormOpen ? "Cancel" : "Edit"}
      </button>
      <button onClick={() => deleteBlog(blog.id)}>Delete</button>
      <br />
      <br />
      {editFormOpen ? (
        <EditBlogForm
          blog={blog}
          editBlog={editBlog}
          setEditFormOpen={setEditFormOpen}
        />
      ) : null}
    </div>
  );
};

export default Blog;

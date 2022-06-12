import { useState } from "react";

const EditBlogForm = (props) => {
  const {blog, editBlog, setEditFormOpen } = props;
  const [newBlog, setNewBlog] = useState(blog);

  const handleChange = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => {
          editBlog(e, newBlog )
          setEditFormOpen(false)
        }}>
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

export default EditBlogForm;

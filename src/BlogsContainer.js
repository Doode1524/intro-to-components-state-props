import Blog from "./Blog";

const BlogsContainer = (props) => {
  const { blogs, setBlogs } = props;

  const deleteBlog = (id) => {
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      let newBlogs = blogs.filter((blog) => {
        return blog.id !== id;
      });
      setBlogs(newBlogs);
    });
  };

  const editBlog = (e, blog) => {
    e.preventDefault();
    fetch(`http://localhost:3001/blogs/${blog.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    .then(() => {
        let copyBlogs = [...blogs]
        let oldBlog = blogs.find((b) => b.id === blog.id )
        let idx = copyBlogs.indexOf(oldBlog)
        copyBlogs.splice(idx, 1, blog)
        setBlogs(copyBlogs)
    })
  };

  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              blog={blog}
              deleteBlog={deleteBlog}
              editBlog={editBlog}
            />
          );
        })}
    </div>
  );
};

export default BlogsContainer;

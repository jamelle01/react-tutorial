import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('luigi');

  const handleSubmit = e => {
    e.preventDefault();
    const blog = {title, body, author};

    console.log(blog);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input 
          type="text" 
          required
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Blog Body:</label>
        <textarea name="" id=""
          required 
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="">Blog Author:</label>
        <select name="" id="" 
          value={author}
          onChange = {(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>

        <button >Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
 
export default Create;
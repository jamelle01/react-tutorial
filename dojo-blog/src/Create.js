import { useState } from "react"; // hook
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('luigi');
  const [isPending, setIsPending] = useState(false);
  // const history = useHistory(); // use to go back to history
  const navigate = useNavigate();

  const handleSubmit = e => {
      e.preventDefault(); 
      const blog = {title, body, author};
        
      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
        method: 'POST', /// post reques
        headers: {'Content-Type': 'application/json'}, ///telling the server the type of content we're sending
        body: JSON.stringify(blog)  /// body the actual data we're sending
      }).then(() => {
        console.log('new blog has been added');
        setIsPending(false);
        // history.push('/'); /// after we added the data we go back 
        navigate("/");
      })    
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
        
        {!isPending && <button >Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
 
export default Create;
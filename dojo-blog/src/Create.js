const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="">
        <label htmlFor="">Title</label>
        <input 
          type="text" 
          required
        />
        <label htmlFor="">Blog Body</label>
        <textarea name="" id=""
          required 
        ></textarea>
        <select name="" id="">
          <option value="">Mario</option>
          <option value="">Luigi</option>
        </select>
      </form>
    </div>
  );
}
 
export default Create;
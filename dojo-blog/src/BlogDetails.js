import { useParams, useNavigate, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();  // get the id
    const {data: blog, isPending, error} = useFetch(' http://localhost:8000/blogs/'+id);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    // const history = useHistory();
    // const {path} = useRouteMatch(); 

    function handleDelete(){
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(() => {
            // history.push('/');
            navigate("/");
        })
    }
    const handleShow = () => {
        if(show){
           setShow(false);
           console.log('false');
        }else{
           setShow(true);
           console.log('false');
        }
    }


    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && {error}}
            {blog && (
                <div>
                   <article>
                        <h2>{ blog.title }</h2>
                        <p>Written by:{ blog.author }</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>Delete</button>
                    </article> 
                    <button onClick={handleShow}>click to see the other bloglist</button>
                    {show && <Home/> }
                    
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;
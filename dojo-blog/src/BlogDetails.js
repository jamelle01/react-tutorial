import { useParams, useHistory, Route, useRouteMatch} from "react-router-dom";
import Home from "./Home";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();  // get the id
    const {data: blog, isPending, error} = useFetch(' http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const {path} = useRouteMatch();

    function handleDelete(){
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
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
                    <Route path= {`${path}/bloglist`}>
                        <Home/>
                    </Route>
                </div>
                
                
            )}
        </div>
    );
}
 
export default BlogDetails;
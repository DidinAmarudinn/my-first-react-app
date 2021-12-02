import { useParams } from "react-router";

const BlogDetail = () => {
    const {id} = useParams();
    return ( 
        <div className="blog-detail">
            <h2>Blog Details {id}</h2>
        </div>
     );
}
 
export default BlogDetail;
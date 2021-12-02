
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
    const { data: blogs, isLoading, isError } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            {isLoading && <div>Loading....</div>}
            {isError && <div>{isError}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;
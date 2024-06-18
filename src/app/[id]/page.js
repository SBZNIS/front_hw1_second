import data from '../data.json';
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const { id } = params;
  const blog = data.find((post) => post.id.toString() === id.toString());

  if (!blog) {
    return {
      title: 'Post not found',
      description: 'The post you are looking for does not exist.',
    };
  }
  return {
    title: blog.title,
    description: blog.description.substring(0, 160),
  };
}

const Post = ({ params }) => {
  const { id } = params;
  const blog = data.find((post) => post.id.toString() === id.toString());
  console.log("Found Blog:", blog);
  console.log("Post ID:", id);

  if (!blog) {
    return <p>Loading...</p>;
  }

  
  return (
    <>
      
        
      <div className="card lg:card-side bg-base-100 shadow-xl m-10 mx-auto w-3/4">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="card-actions justify-end">
            <p><b>Author: </b>{blog.author} <br /> <i>{blog.date}</i></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

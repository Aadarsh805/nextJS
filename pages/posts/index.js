import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <a>
                {post.id} {post.title}
              </a>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}

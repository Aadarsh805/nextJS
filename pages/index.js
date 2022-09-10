import Link from "next/link";
import {useRouter} from 'next/router'

const Home = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/product')    
        // router.replace('/product')    
    } 

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <button onClick={handleClick}>
        Place order
      </button>

    </div>
  );
};
export default Home;

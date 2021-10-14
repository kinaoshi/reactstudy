import Head from "next/head";
import { Header } from "src/components/Header";
import { PostList} from "src/components/Post/PostList"


const Posts = () => {


  return (
    <div>
      <Head>
        <title>Posts page</title>
      </Head>
      <Header />

      <PostList/>
    </div>
  );
};
export default Posts;


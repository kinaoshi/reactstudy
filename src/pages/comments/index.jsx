import Head from "next/head";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";

const comments = () => {
  return (
    <div>
      <Head>
        <title>comments page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};
export default comments;

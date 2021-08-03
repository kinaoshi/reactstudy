import Head from "next/head";
import { Header } from "src/components/Header";
 const About = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶreact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
}
export default About;

// const handleOnClick = () => {
//   alert("次は#24から");
// };
// return (
//   <div>
//     <button onClick={handleOnClick}>進捗状況</button>
//   </div>
// );
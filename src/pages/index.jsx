import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import { useCallback } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

//function handleClick (e) {
//const handleClick = (e) =>  {
  // e.preventDefault();
  // console.log(e.target.href);
  // // console.log(e.target);
  // alert(123);
//};
// const handleClick = (e,foo) =>  {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };
export default function Home() {

const foo = 1;

const handleClick = useCallback((e) =>  {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />

      <a
        href={"./about"}
        onClick={handleClick}
        // onClick={(e)=> handleClick(e, foo)}

        // onClick={(e) => {
        //     e.preventDefault();
        //     console.log(e.target.href);
        // }
        // }
      >
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}

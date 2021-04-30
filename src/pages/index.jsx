import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

// const handleClick = (e,foo) =>  {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };
export default function Home() {

const [count, setCount] = useState(1);


const handleClick = (e) =>  {

setCount(count => count + 1);
setCount(count => count + 1);
};
useEffect(() => {

document.body.style.backgroundColor = 'lightblue';

return() => {

document.body.style.backgroundColor = '';

}
},[]);



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}

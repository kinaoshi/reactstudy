import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
   if (count < 10) {
      setCount((prevCount) => prevCount + 1);
   }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert('5文字以内にして下さい');
      return;
    }
    setText(e.target.value.trim());
  },[]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        { isShow ? '非表示' : '表示'}
        </button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <Main page="index" />
      <Footer />
    </div>
  );
}

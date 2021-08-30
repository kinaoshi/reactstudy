import "tailwindcss/tailwind.css";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { SWRConfig } from "swr";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
		<SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
        <Component {...pageProps} />
			</Layout>
			</SWRConfig>
		</>
	);
};

export default MyApp;

import Head from "next/head";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";



export const getStaticProps = async () => {
	const COMMENTS_API_URL = `${ API_URL }/comments`;
	const comments = await fetch(COMMENTS_API_URL);
	const commentsData = await comments.json();


	return {
		props: {
			fallback: {
				[COMMENTS_API_URL]: commentsData,
			},
		},
	};
};

const comments = (props) => {
	const { fallback } = props;
	return (
		<div>
			<Head>
				<title>comments page</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<Header />
				<CommentsComponent />
			</SWRConfig>
		</div>
	);
};
export default comments;

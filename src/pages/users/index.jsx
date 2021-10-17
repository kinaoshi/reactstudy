import Head from "next/head";

import { UsersList } from "src/components/User/UsersList";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

const sleep =(ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getServerSideProps = async () => { 
	const USERS_API_URL = `${ API_URL }/users`;
	const users = await fetch(USERS_API_URL);
	const usersData = await users.json();
  await sleep(2000);

	return {
		props: {
			fallback: {
				[USERS_API_URL]: usersData,
			
			},
		},
	};
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users page</title>
      </Head>
      <SWRConfig value = {{ fallback }}>
   
      <UsersList />
      </SWRConfig>
    </div>
  );
};
export default Users;

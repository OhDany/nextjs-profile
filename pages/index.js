import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-fetch'
import Users from '../components/users'

const Index = (props) => {
  console.log(props)
  return (
    <>
      <Head>
        <title>Next.js - Home</title>
      </Head>
      <Layout>
        <h1>Next.js</h1>
        <Users users={props.users} />

      </Layout>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users?page=2');
  const resJSON = await res.json();
  return {users: resJSON.data}
}

export default Index

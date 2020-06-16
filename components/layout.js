import Head from 'next/head'
import Navigation from './navigation'

const Layout = (props) => (
  <div>
    <Head>
      {/* <title>Next.js Project</title> */}
      <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/materia/bootstrap.min.css" rel="stylesheet"/>
      {/* <link href="/static/css/main.3f6952e4.css" rel="stylesheet" /> */}
      
    </Head>
    <Navigation/>
    <div className="container mt-4">
      {props.children}
    </div>
  </div>
)

export default Layout
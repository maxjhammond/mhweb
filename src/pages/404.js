import React from 'react'
import Layout from '../components/layout'
import {Link} from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <h1>404</h1>
    <p>Seems this link doesn't go anywhere. Whoops!</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default NotFoundPage

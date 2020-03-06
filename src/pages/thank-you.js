import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
    <Layout>
        <h1>Thank you!</h1>
        <p>I'll be in touch soon.</p>
        <Link to="/">Back</Link>
    </Layout>
)

export default SecondPage

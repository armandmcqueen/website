import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className="my-0 mx-auto max-w-3xl text-center">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className="">{data.site.siteMetadata.title}</header>
            <nav>
                <ul className="">
                    <li className="">
                        <Link to="/" className="">Home</Link>
                    </li>
                    <li className="">
                        <Link to="/about" className="">About</Link>
                    </li>
                    <li className="">
                        <Link to="/blog" className="">
                            Blog
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/magnet" className="">
                            Magnet
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";

const image_src = "https://www.geekyhobbies.com/wp-content/uploads/2019/03/Rummikub-First-Play.jpg"


const MagnetPage = () => {
    return (
        <Layout pageTitle="Magnet">
            <StaticImage
                alt="Candidate image for labeling"
                src={image_src}
            />
        </Layout>
    )
}

export default MagnetPage

import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import { Button } from 'antd';


const image_src = "https://www.geekyhobbies.com/wp-content/uploads/2019/03/Rummikub-First-Play.jpg"


const MagnetPage = () => {
    const button_row_classes = "py-2 flex flex-row items-center justify-center"
    const button_row_splitter_classes = "flex basis-1/2 justify-center"
    const button_classes = "basis-1/2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-800 rounded"
    return (
        <Layout pageTitle="Magnet">
            <h3 className="text-3xl font-bold underline">Some text</h3>
            <StaticImage
                className="rounded-xl"
                alt="Candidate image for labeling"
                src={image_src}
            />
            <div className={button_row_classes}>
                <div className={button_row_splitter_classes}>
                    <Button type="primary" className={button_classes} >Yes</Button>
                </div>
                <div className={button_row_splitter_classes}>
                    <Button type="primary" className={button_classes}>No</Button>
                </div>

            </div>

        </Layout>
    )
}

export default MagnetPage

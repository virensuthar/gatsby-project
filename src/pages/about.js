import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background "
    />

    <DualInfoblock
      heading="Message from CEO"
      imgsrc="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Infoblock heading="About Vision" />
    <TeamPhotoSection />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage

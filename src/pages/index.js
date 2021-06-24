import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import Wizard from '../components/wizard'
import ProtocolData from '../components/protocolData'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardFade, CardNoise, StyledExternalLink, StyledLeftLink, StyledRightLink } from '../components/utils'
import FloatingImage from '../components/floatingImage'
import RoadMap from '../components/roadMap'
import baobasket from "../images/baobasket.svg";

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  /* margin: 3rem 0 4rem 0; */
  margin: 0 auto;
  margin-bottom: 6rem;
  @media (max-width: 960px) {
    margin: 0 auto;

    /* margin: 3rem 0 1rem 0; */
    /* margin-bottom: 4rem; */
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 104px;
  margin: 4rem auto;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`

const StyledBodySubTitle = styled.h2`
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 260px;
  max-width: 720px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 150px;
  border: 1px solid rgb(226, 214, 207);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 640px) {
    min-width: 120px;
    max-width: 120px;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }

  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const StyledHeroImage = styled(Img)`
  width: 75vw;
  height: 360px;
  /* max-width: 960px; */
  background-color: none;
  border-radius: 12px;
  margin-top: 1rem;
  @media (max-width: 960px) {
    width: auto;
    height: 360px;
  }
`

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 6rem 0 1rem 0;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(-2deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;
  transition: transform 0.3s ease;
  will-change: transform;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  :hover {
    transform: rotate(-1deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
    transform: rotate(-2deg);
  }
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.invertedTextColor};
  background: ${({ theme }) => theme.newPill};
  padding: 0.15rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-weight: 400;
`

const StyledLeft = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  margin-top: 6rem;
  margin-bottom: -4rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12,minmax(0,1fr));
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    padding: 2rem;
    margin-top: 6rem;
  }
`

const StyledLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
}
@media (min-width: 640px) {
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
  @media (min-width: 768px) {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
@media (min-width: 1024px) {
  grid-column: span 6/span 6;
  text-align: left;
  display: flex;
}
`

const StyledLeftSubTitle = styled.h1`
  font-weight: 600;
  margin-top: 1.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -.025em;
  text-align: center;
  @media (min-width: 640px) {
    margin-top: 1.25rem;
    line-height: 1;
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    font-size: 3rem;
    line-height: 1;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`
const StyledLeftSubText = styled.h2`
margin-top: .75rem;
font-size: 1rem;
line-height: 1.5rem;
  @media (min-width: 640px) {
    margin-top: 1.125rem;
    font-size: 1.2rem;
    line-height: 1.75rem;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const StyledLeftItemRow = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-left: 12px;
    }

  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
    justify-content: left;
  }
`

const StyledRight = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  margin-top: 6rem;
  margin-bottom: -4rem;
  align-content: end;
  justify-items: end;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12,minmax(0,1fr));
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    padding: 2rem;
    margin-top: 6rem;
  }
`

const StyledRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  grid-area: c;
}
@media (min-width: 640px) {
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
  @media (min-width: 768px) {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
}
@media (min-width: 1024px) {
  text-align: right;
  display: flex;
}
`

const StyledRightSubTitle = styled.h1`
  font-weight: 600;
  margin-top: 1.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -.025em;
  text-align: center;
  @media (min-width: 640px) {
    margin-top: 1.25rem;
    line-height: 1;
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    font-size: 3rem;
    line-height: 1;
    text-align: right;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`
const StyledRightSubText = styled.h2`
margin-top: .75rem;
font-size: 1rem;
line-height: 1.5rem;
  @media (min-width: 640px) {
    margin-top: 1.125rem;
    font-size: 1.2rem;
    line-height: 1.75rem;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const StyledRightItemRow = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-left: 12px;
    }

  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
    justify-content: right;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    newYear: file(relativePath: { eq: "newyear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    baoroadmap: file(relativePath: { eq: "baoroadmap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    swap: file(relativePath: { eq: "swap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    info: file(relativePath: { eq: "info.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socks: file(relativePath: { eq: "socks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sybil: file(relativePath: { eq: "sybil.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tokenlists: file(relativePath: { eq: "tokenlists.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mainnetfarms: file(relativePath: { eq: "mainnetfarms.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    xdaifarms: file(relativePath: { eq: "xdaifarms.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reddit: file(relativePath: { eq: "reddit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    baoswap: file(relativePath: { eq: "baoswap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thin: file(relativePath: { eq: "thin.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Like SNX and Aave, but use LP tokens for collateral.'}
      />
      <StyledLeft>
        <StyledLeftTitle>
          <StyledLeftSubTitle>Deliciously wrapped finance!</StyledLeftSubTitle>
          <StyledLeftSubText>
            Bao (包) stands for a treasure or package. Something wonderful that is wrapped up in another layer. Bao buns, or in Chinese Baozi (包子) are delicious wrapped dumplings.
            These bao buns are the tradition of taking something good that exists, and wrapping it up into being a new treasure.
            Bao Finance aims to do this by being a new protocol that adds features to existing DeFi systems.
          </StyledLeftSubText>
          <StyledLeftItemRow>
            <StyledLeftLink href={'https://bao.finance'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.mainnetfarms.childImageSharp.fluid} />
            </StyledLeftLink>
            <StyledLeftLink href={'https://xdai.bao.finance'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.xdaifarms.childImageSharp.fluid} />
            </StyledLeftLink>
            <StyledLeftLink href={'https://alpha.baoswap.xyz/'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.baoswap.childImageSharp.fluid} />
            </StyledLeftLink>
          </StyledLeftItemRow>
        </StyledLeftTitle>
      </StyledLeft>
      <FloatingImage />
      <StyledBody>
        <RoadmapSection data={data} props={props} />
        {/*<ProductsSection data={data} props={props} />
        <StyledImgSection>
              <MiniNewInfo to="/blog/uniswap-v3/">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <NewPill>Announcing Uniswap V3</NewPill>
                  More details ↗
                </div>
                <StyledHeroImage fadeIn={false} fluid={props.data.thin.childImageSharp.fluid} />
              </MiniNewInfo>
            </StyledImgSection>
         <ProtocolData /> */}
      </StyledBody>
      <BG />
    </Layout>
  )
}


export default IndexPage

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  margin-top: 10rem;
  font-weight: 600;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  font-family: 'Kaushan Script';
  letter-spacing: -.025em;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`

const RoadmapSection = props => {
  return (
    <>
      {/* 
        <StyledRight>
        <StyledRightTitle>
          <StyledRightSubTitle>Deliciously wrapped finance!</StyledRightSubTitle>
          <StyledRightSubText>
          Bao (包) stands for a treasure or package. Something wonderful that is wrapped up in another layer. Bao buns, or in Chinese Baozi (包子) are delicious wrapped dumplings.
          These bao buns are the tradition of taking something good that exists, and wrapping it up into being a new treasure.
          Bao Finance aims to do this by being a new protocol that adds features to existing DeFi systems.
          </StyledRightSubText>
          <StyledRightItemRow>
            <StyledRightLink href={'https://bao.finance'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.mainnetfarms.childImageSharp.fluid} />
            </StyledRightLink>
            <StyledRightLink href={'https://xdai.bao.finance'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.xdaifarms.childImageSharp.fluid} />
            </StyledRightLink>
            <StyledRightLink href={'https://alpha.baoswap.xyz/'} target="_blank">
              <StyledProductImage fadeIn={false} fluid={props.data.baoswap.childImageSharp.fluid} />
            </StyledRightLink>
          </StyledRightItemRow>
        </StyledRightTitle>
        </StyledRight> 
        */}

      <StyledSectionTitle>Roadmap</StyledSectionTitle>
      <StyledBodySubText>
        Bao Finance is like a combination of Synthetix and Aave, but utilizes LP tokens for collateral.
        Rather than re-invent the wheel, Bao will create new features for existing DeFi protocols.
      </StyledBodySubText>
      <RoadMap />
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionTitle>A suite of tools for a tokenized world.</StyledSectionTitle>
      <StyledBodySubText>
        We build state of the art open source apps to access the Uniswap protocol and contribute to the world of
        decentralized finance.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://socks.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.socks.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://info.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.info.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://app.uniswap.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.swap.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://tokenlists.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.tokenlists.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://sybil.org'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.sybil.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>Superpowers for DEFI developers.</StyledSectionTitle>
      <StyledBodySubText>
        Check out the <Link to="/docs/v2/">documentation</Link>, the{' '}
        <Link to="/docs/v2/javascript-SDK/quick-start/">quick start</Link> or a guide below to integrate your project
        with thousands of tokens and billions in liquidity.
      </StyledBodySubText>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
      </StyledSectionFlex>

      <StyledSectionTitle>A global community.</StyledSectionTitle>
      <StyledBodySubText>
        Learn more about Uniswap, chat with the team, others in the community, and have your say in shaping the future
        of the Uniswap protocol.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://www.reddit.com/r/Uniswap'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>
    </>
  )
}

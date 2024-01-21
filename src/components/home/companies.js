import React from "react"
import styled, { keyframes } from "styled-components"

// Define keyframes
const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`

// Styled components
const Container = styled.section`
 width: 100%;
 height: 100%;
 display: inline-block;
 white-space: nowrap;
 margin-bottom: 16px;
`

const Wrapper = styled.section`
 position: relative;
 display: inline-block;
 white-space: nowrap;
`

const FirstScroll = styled.section`
 margin: 0.8rem;
 display: inline-block;
 white-space: nowrap;
 animation-name: ${marqueeAnimation};
 animation-duration: 60s;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
`

const CompanyLogo = styled.img`
 height: 120px;
 width: 120px;
 margin-right: 20px; /* Adjust the margin for spacing between images */
`

const HoverWrapper = styled(Wrapper)`
 &:hover ${FirstScroll} {
  animation-play-state: paused !important;
 }
`

const StyledCompaniesMarquee = () => {
 return (
  <Container>
   <div data-aos="zoom-in" data-aos-duration="200" className="gallery-head">
    Our Recruiters
   </div>
   <HoverWrapper>
    <FirstScroll>
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg"
      alt="first"
     />
     <CompanyLogo
      src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg"
      alt="second"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/atlassian-1.svg"
      alt="third"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
      alt="fourth"
     />
     <CompanyLogo
      src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1456398461/tlbgy0u13v8upv9n8mdm.png"
      alt="fifth"
     />
     <CompanyLogo
      src="https://upload.wikimedia.org/wikipedia/commons/b/ba/TexasInstruments-Logo.svg"
      alt="sixth"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg"
      alt="seventh"
     />
    </FirstScroll>
    <FirstScroll>
     <CompanyLogo
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Byju%27s_logo.svg/1920px-Byju%27s_logo.svg.png"
      alt="first"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/samsung.svg"
      alt="second"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg"
      alt="third"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/apple-11.svg"
      alt="fourth"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/morgan-stanley-1.svg"
      alt="fifth"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/meta-1.svg"
      alt="sixth"
     />
     <CompanyLogo
      src="https://cdn.worldvectorlogo.com/logos/paytm-1.svg"
      alt="seventh"
     />
    </FirstScroll>
   </HoverWrapper>
  </Container>
 )
}

export default StyledCompaniesMarquee

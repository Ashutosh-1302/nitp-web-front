import React from "react"
import styled from "styled-components"

const StyledInfoSection = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 align-items: center;
 padding: 20px;
 background-color: #f8f8f8; /* Light gray background */
 border-radius: 15px;
 box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
 margin-left: 30px;
 margin-right: 30px;

 @media (max-width: 768px) {
  flex-direction: column;
  align-items: stretch;
  text-align: center;
 }
`

const InfoColumn = styled.div`
 flex: 1;
 margin: 10px;
 padding: 20px;
 background-color: #fff; /* White column background */
 border-radius: 15px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 position: relative;

 &:not(:last-child) {
  margin-right: 0;

  &::after {
   content: "";
   position: absolute;
   top: 10%;
   right: 0;
   width: 1px;
   height: 80%;
   background-color: #ddd; /* Divider color */
  }
 }

 @media (max-width: 768px) {
  margin: 10px 0;

  &::after {
   content: none;
  }
 }
`

const InfoHeading = styled.h2`
 font-size: 2.5rem;
 margin-bottom: 10px;
 color: #e74c3c;
`

const InfoValue = styled.span`
 font-size: 3rem;
 font-weight: bold;

 color: black;
`

const StyledInfoSectionComponent = () => {
 return (
  <StyledInfoSection>
   <InfoColumn>
    <InfoHeading>Paper Count</InfoHeading>
    <InfoValue>2000+</InfoValue>
   </InfoColumn>
   <InfoColumn>
    <InfoHeading>Patents</InfoHeading>
    <InfoValue>100+</InfoValue>
   </InfoColumn>
   <InfoColumn>
    <InfoHeading>Students Placed</InfoHeading>
    <InfoValue>2000+</InfoValue>
   </InfoColumn>
   <InfoColumn>
    <InfoHeading>NIRF Ranking</InfoHeading>
    <InfoValue>Top 60</InfoValue>
   </InfoColumn>
  </StyledInfoSection>
 )
}

export default StyledInfoSectionComponent

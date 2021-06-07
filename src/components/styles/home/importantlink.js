import styled from "styled-components"

export const ImportantLinkStyle = styled.div`
  body::-webkit-scrollbar {
    display: none;
  }
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  /* -ms-flex-wrap: wrap;
  flex-wrap: wrap; */
  max-width: 100%;
  /* padding-left: 5%;
  padding-right: 5%; */
  margin-top: -9vw;
  margin-bottom: 5vh;
  .link-col {
    position: relative;
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    /* padding-top: 2vh; */
    /* padding-bottom: 2vh; */
    a {
      text-decoration: none;
      .implink:hover {
        /* box-shadow: 0px 0px 28px #d26233; */
        filter: grayscale(0%);
      }
      .implink {
        width: 18vw;
        height: 18vw;
        background: #ffffff;
        /* box-shadow: 7px 7px 26px rgba(207, 207, 207, 0.36); */
        /* border-radius:5px; */
        /* margin-left: 1vw; */
        border: 0.5px solid #c5c5c5;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #696969;
        filter: grayscale(100%);
        .linkimg {
          height: 25%;
          max-width: 70%;
        }
        .lead {
          width: 170px;
          height: 54px;
          text-align: center;
          font-weight: 600;
          p {
            margin: 0;
            color: #808080;          }
        }
        h3 {
          font-size: 1.75vw;
          color: #353535;
          font-family: Source Sans Pro;
          font-weight: bold;
          margin: 15px 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .link-row {
      margin-top: -10vw;
      .link-col {
        width: 100%;
        .implink {
          width: 20vw;
          height: 20vw;
          margin: 0 0.5vw 0 0.5vw;
          .lead {
            display: none;
          }
        }
      }
    }
  }
`

import styled from "styled-components";

export const FooterStyle = styled.div`
  .foot-col-4 {
    color: white;
    background: #cd5a2f;
    width: 25%;
    padding-left: 1%;
    padding-bottom: 2vh;
    padding-top: 2vh;
    max-width: 95vw;
  }
  .foot-row {
    background: #2d2d2d;
    max-width: 100vw;
    font-family: "Source Sans Pro";
    display: flex;
  }
  .foot-col-8 {
    width: 75%;
    max-width: 95vw;
    display: flex;
    margin-left: 2vh;
  }
  .foot-col-3 {
    width: 33%;
    h1 {
      color: #fff;
    }
    a {
      text-decoration: none;
      color: #cd5a2f;
      line-height: 1;
    }
  }

  .footsec > .foot-col-3 {
    width: 50%;
  }

  .footsec {
    display: flex;
    width: 66%;
  }
  .footdetail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: "Source Sans Pro";
    color: #2d2d2d;
    p {
      font-weight: bolder;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }

  @media (max-width: 1500px) {
    .foot-col-3 {
      h1 {
        font-size: 1.5rem;
      }
      a {
        h3 {
          font-size: 1.2rem;
        }
      }
    }
    .foot-col-4 {
      h1 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 1000px) {
    .foot-col-3 {
      h1 {
        font-size: 1rem;
      }
      a {
        h3 {
          font-size: 0.8rem;
        }
      }
    }
    .foot-col-4 {
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 768px) {
    .foot-row {
      display: flex;
      flex-direction: column;
    }
    .footdetail > p {
      font-weight: bolder;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 9px;
    }
    .foot-col-8 {
      display: block;
    }
    .foot-col-4 {
      width: 100%;
      padding-left: 5%;
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }

    .footsec {
      width: 100%;
      .foot-col-3 {
        width: 45%;

        h1 {
          font-size: 1rem;
        }
        a {
          font-size: 0.8rem;
        }
      }
    }

    .foot-col-8 {
      width: 100%;
    }
  }
`
import styled from "styled-components";

export const HomeStyle = styled.div`
  .nitpbackimg {
    width: 100%;
    max-height: 90vw;
  }
  .tablinkcover {
    display: none;
    width: 100%;
    .tablink {
      display: none;
      justify-content: center;
      align-items: center;
      width: 33%;
      box-shadow: 7px 7px 26px rgba(207, 207, 207, 0.36);
      height: 25px;
      font-family: "Source Sans Pro";
      color: #f37023;
      text-decoration: none;
      a {
        text-decoration: none;
        color: #f37023;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  .bgimgwrap {
    overflow: hidden;
    width: 100%;
    max-height: 90vh;
    z-index: -1;
    position: relative;
  }
  .notice-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #ffffff;
    width: 40vw;
    height: 500px;
    z-index: 1;
    // padding-bottom: 6vh;
    margin-left: 8vw;
    // margin-bottom: 5vh;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .notice-row::-webkit-scrollbar {
    display: none;
  }
  .event-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #ffffff;
    width: 40vw;
    height: 500px;
    z-index: 1;
    // padding-bottom: 6vh;
    margin-left: 5vw;
    // margin-bottom: 5vh;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .event-row::-webkit-scrollbar {
    display: none;
  }
  .news-head,
  .gallery-head,
  .notice-head,
  .event-head {
    height: 52px;
    background: #ffffff;
    border-radius: 2px;
    z-index: 2;
    font-size: 28px;
    line-height: 35px;
    color: #f37023;
    display: flex;
    justify-content: space-between;
    font-family: "Quicksand";
    font-weight: bold;
    // padding-left: 18px;
    align-items: center;
    // padding: 2vw;
    #notice-head-p,
    #event-head-p {
      color: #3e3e3e;
      font-size: 1rem;
      display: flex;
      text-decoration: none;
    }

    #news-head-p {
      color: #3e3e3e;
      font-size: 1rem;
      display: flex;
      margin-left: 122px;
      text-decoration: none;
    }
  }
  .notice-head,
  .news-head {
    margin-left: 8vw;
  }
  .news-head {
    margin-right: 5vw;
  }

  .gallery-head {
    margin-left: 8vw;
    margin-right: 5vw;
  }
  .gallery {
    margin-left: 8vw;
    margin-right: 5vw;
    display: flex;
    height: 400px;
  }
  .event-head {
    margin-left: 5vw;
  }
  @media (max-width: 768px) {
    .notice-row,
    .event-row,
    .notice-head,
    .event-head {
      width: 90vw;
      margin-left: 5vw;
    }
    .tablinkcover,
    .tablink {
      display: flex;
    }
  }
  .bgimgwrap {
    margin-top: 5vh;
  }

  .news-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100vw;
    height: 350px;
    background-color: #ffffff;
    width: 90vw;
    z-index: -1;
    margin-right: 5vw;
    padding-bottom: 6vh;
    margin-left: 5vw;
    border-radius: 3px;
    display: flex;
    margin-bottom: 3vh;
    justify-content: center;
  }
  .news-viewbox::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  .news-viewbox {
    overflow: hidden;
    min-width: 95%;
    height: calc(350px + 5vh);
    max-height: calc(350px + 5vh);
    max-width: 90%;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    display: flex;
    border-radius: 5px;
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 6.98%
    );
  }
  @media (min-width: 768px) {
    #notice {
      display: flex;
    }
    .bgimgwrap {
      margin-top: 0;
    }
  }
`
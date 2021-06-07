import styled from "styled-components"

export const NewsCardStyle = styled.div`
  width: 265px;
  height: 350px;
  min-width: 265px;
  min-height: 350px;
  overflow: hidden;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.28);
  margin-left: 40px;
  border-radius: 2px;
  .news-img-wrap {
    height: 60%;
    overflow: hidden;
    display: grid;
    place-items: center;
    .card-img {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
  .news-read {
    width: 90.6px;
    height: 19.07px;
    float: right;
    margin-top: -15px;
    margin-right: 13px;
    background: #cd5a2f;
    border-radius: 3px;
    color: white;
    font-size: 0.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    font-family: "Source Sans Pro";
  }
  .newscard-head {
    font-size: 1.3rem;
    margin-top: -20px;
    padding: 5%;
    h4 {
      font-size: 15px;
      font-style: normal;
      font-weight: bold;
      color: #4b4b4b;
      font-family: "Source Sans Pro";
    }
    h6 {
      margin-top: -20px;
      color: rgba(0, 0, 0, 0.51);
      font-family: "Source Sans Pro";
      .newscard-readmore {
        color: #cd5a2f;
        font-family: "Source Sans Pro";
        text-decoration: none;
      }
    }
  }
`

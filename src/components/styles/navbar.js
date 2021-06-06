import styled from "styled-components";

export const Navbar = styled.div`
  .nav-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100vw;
    position: fixed;
    background-color: #f7f7f7;
    z-index: 5;
  }
  .nav-link-row {
    display: flex;
    margin-top: 4.7vw;
    width: 100vw;
    height: 2.3vw;
    padding-left: 3vw;
    background-color: black;
    opacity: 0.8;
    z-index: 2;
    position: fixed;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  }
  .dep-link-item {
    text-decoration: none;
    color: #fff;
  }
  .dep-nav-row {
    display: flex;
    width: 100vw;
    background-color: #d45628;
    font-family: "Source Sans Pro";
    color: #fff;
    padding-top: 2px;
    letter-spacing: 0.2rem;
    padding-bottom: 2px;
    position: fixed;
    margin-top: 7vw;
    z-index: 1;
  }
  .dep-nav-col {
    width: 40%;
    text-align: center;
  }
  @media (max-width: 1000px) {
    .dep-nav-col {
      width: 50%;
      font-size: 12px;
    }
  }
  .dep-nav-col-2 {
    display: flex;
    justify-content: center;
  }
  #navblank {
    width: 9vw;
  }
  .nav-link-div {
    margin-left: 2.2%;
    margin-right: 2.2%;
  }
  .nav-link-item {
    text-decoration: none;
    color: #fff;
    font-family: "Source Sans Pro";
    font-size: 1.4vw;
    font-weight: 500;
    line-height: 1.6;
    display: flex;
    height: 35px;
  }
  .nav-link-item > span:hover {
    color: #ffe657;
    transition: 0.1s ease-in-out;
  }
  .nav-link-item-active > span {
    color: #ffe657;
    border-width: 0px 0px 3px 0px;
  }
  .logobadge {
    position: relative;
    background-color: #e47f40;
    border-radius: 0px 0px 40% 40%;
    max-height: 11vw;
    z-index: 5;
  }
  .logobadge > h4 {
    display: flex;
    justify-content: center;
    font-family: "Mangal";
    color: white;
    margin-bottom: 0px;
    line-height: 1;
    font-weight: normal;
    font-size: 1vw;
    z-index: 5;
  }
  .logobadge > div > img {
    max-height: 8vw;
    border: 0.5vw solid #e47f40;
    border-radius: 50%;
    display: flex;
    box-shadow: inset 0px 40px 50px rgba(0, 0, 0, 0.25);
    z-index: 5;
  }
  .nav-col {
    width: 42%;
    padding-left: 3vw;
    padding-top: 0.5vw;
  }
  .nav-col > h2 {
    margin-bottom: 0;
    font-size: 1.3vw;
    line-height: 0.3rem;
    font-family: "Source Sans Pro";
    font-weight: 900;
  }
  .nav-col > h4 {
    font-family: "Mangal";
    font-size: 0.9vw;
    line-height: 0.3rem;
  }
  .mobilelogo {
    display: none;
    margin-left: 10px;
  }
  .nav-toggle {
    display: none;
  }
  .nav-sidebar > .nav-sidebar-div:nth-of-type(2n + 1) {
    background-color: #f7f7f7;
  }
  #logowr1 {
    position: absolute;
    text-decoration: none;
    min-width: 100%;
    display: flex;
    justify-content: center;
  }
  #logowr2 {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    .nav-link-item {
      height: 28px;
      font-weight: 400;
    }
  }
  @media (max-width: 1000px) {
    .nav-link-item {
      height: 22px;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    .nav-col {
      width: 70%;
      max-width: 70vw;
      color: #313131;
    }
    .nav-col > h2 {
      font-size: 10px;
    }
    .nav-link-row {
      display: none;
    }

    .dep-nav-row {
      display: none;
    }

    .nav-toggle {
      display: block;
      position: relative;
      max-width: 10%;
      border: none;
      background: transparent;
      max-height: 10vh;
    }
    .nav-col > h4 {
      font-size: 1.8vw;
    }

    .departsidedrop > .nav-sidebar-div:nth-of-type(2n + 1) {
      background-color: #fff;
    }
    .mainsidedrop > .nav-sidebar-div:nth-of-type(2n + 1) {
      background-color: #fff;
    }
    .departsidedrop,
    .mainsidedrop {
      display: none;
      transition: 0.1s;
    }

    .mobilelogo {
      display: block;
      padding-right: 10px;
    }
    .mobilelogo > img {
      max-height: 6vh;
    }
    .logobadge {
      display: none;
    }
    .nav-row {
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    .nav-col > h4 {
      font-size: 10px;
    }
    .nav-row {
      align-items: center;
    }
    .nav-col > h2 {
      font-size: 10px;
    }
    .nav-col {
      width: 60%;
    }
  }
  .nav-sidebar {
    display: none;
    min-height: 100vh;
    position: absolute;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    top: 0;
    float: right;
    z-index: 7;
    background: #fff;
    min-width: 280px;
    width: 280px;
    max-width: 90vw;
    justify-content: center;
    padding-top: 10px;
    transition: all ease-in 0.5s;
  }

  .nav-sidebar-div {
    display: flex;
    padding-left: 25px;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-family: "Source Sans Pro";
    font-size: 16px;
    line-height: 1;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .navsideicondiv {
    width: 15%;
  }
  .navsidetop {
    display: flex;
    align-items: center;
    margin-left: 5px;
    text-decoration: none;
  }
  .navsidetop > p {
    margin-left: 20px;
    font-family: "Source Sans Pro";
    font-weight: bold;
    color: #000;
  }
  .navsidetop > img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  #sidedropicon {
    transition: 0.01s ease-in-out;
  }
  #departsidedropwrap {
    display: none;
    padding-left: 0px;
  }
  .departsidedrop > .nav-sidebar-div {
    padding-left: 25px;
  }
  .mainsidedrop > .nav-sidebar-div {
    display: flex;
  }
  #maindropwrap {
    display: none;
  }
`
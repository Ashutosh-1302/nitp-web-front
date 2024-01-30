import React from "react"
import { useState } from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
const Iframe = () => {
 const [selectedSocialMedia, setSelectedSocialMedia] = useState("twitter")
 const handleShowFacebook = () => {
  setSelectedSocialMedia("facebook")
 }

 const handleShowTwitter = () => {
  setSelectedSocialMedia("twitter")
 }

 return (
  <>
   <div className="social-media" style={{ margin: "40px", flexWrap: "wrap" }}>
    <h2
     id="head"
     data-aos="zoom-in"
     data-aos-duration="200"
     style={{ textAlign: "center", margin: "12px" }}
     className="gallery-head"
    >
     Social Media Handles
    </h2>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
     <div
      className="App2"
      style={{ boxSizing: "border-box", flex: 1, margin: "5px" }}
     >
      <div className="probutton">
       <button
        onClick={handleShowFacebook}
        className=""
        style={{ padding: "4px", margin: "3px", borderRadius: "1px" }}
       >
        Show Facebook
       </button>
       <button
        onClick={handleShowTwitter}
        className=""
        style={{ padding: "4px", margin: "3px" }}
       >
        Show Twitter
       </button>
      </div>
      {selectedSocialMedia === "facebook" && (
       <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063505916551&tabs=timeline&width=500&height=505&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300"
        height="500"
        style={{ width: "70%", height: "500px", border: "1px solid #ccc" }}
        loading="lazy"
        styles="border:none;"
        //   scrolling="no"
        frameborder="1"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       ></iframe>
      )}
      {selectedSocialMedia === "twitter" && (
       <TwitterTweetEmbed tweetId={"1749690769500430475"} />
      )}
     </div>
     <div
      className="App"
      style={{ boxSizing: "border-box", flex: 1, marginTop: "40px" }}
     >
      {/* <h3>Iframes in React</h3> */}
      <iframe
       width="560"
       height="315"
       src="https://www.youtube.com/embed/8RN6s929i5E?si=1e0FNiSTKrvrEMN2"
       title="YouTube video player"
       loading="lazy"
       style={{ width: "80%", height: "500px", border: "1px solid black" }}
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen
      ></iframe>
     </div>
    </div>
   </div>
  </>
 )
}

export default Iframe

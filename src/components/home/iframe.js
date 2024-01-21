import React from "react"
import { useState } from "react"

const Iframe = () => {
 const [selectedSocialMedia, setSelectedSocialMedia] = useState("facebook")
 const handleShowFacebook = () => {
  setSelectedSocialMedia("facebook")
 }

 const handleShowTwitter = () => {
  setSelectedSocialMedia("twitter")
 }

 return (
  <>
   <div className="social-media">
    <h2 id="head" style={{ textAlign: "center", margin: "12px" }}>
     Social Media Handles
    </h2>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
     <div
      className="App"
      style={{ boxSizing: "border-box", flex: 1, margin: "6px" }}
     >
      {/* <h3>Iframes in React</h3> */}
      <iframe
       width="560"
       height="315"
       src="https://www.youtube.com/embed/8RN6s929i5E?si=1e0FNiSTKrvrEMN2"
       title="YouTube video player"
       loading="lazy"
       style={{ width: "80%", height: "300px", border: "1px solid black" }}
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen
      ></iframe>
     </div>
     <div>
      <button onClick={handleShowFacebook}>Show Facebook</button>
      <button onClick={handleShowTwitter}>Show Twitter</button>
     </div>
     <div
      className="App2"
      style={{ boxSizing: "border-box", flex: 1, margin: "10px" }}
     >
      {selectedSocialMedia === "facebook" && (
       <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063505916551&tabs=timeline&width=500&height=315&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="500"
        style={{ width: "82%", height: "300px", border: "1px solid #ccc" }}
        loading="lazy"
        styles="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       ></iframe>
      )}
      {selectedSocialMedia === "twitter" && (
       <iframe
        //    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063505916551&tabs=timeline&width=500&height=315&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="500"
        style={{ width: "70%", height: "300px", border: "1px solid #ccc" }}
        loading="lazy"
        styles="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
       >
        Page under Construction
       </iframe>
      )}
     </div>
    </div>
   </div>
  </>
 )
}

export default Iframe

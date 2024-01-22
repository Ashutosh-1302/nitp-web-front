import React from "react"
import classes from "./Research.module.css"
import Journal from "../../../static/journal.svg"
import Conference from "../../../static/conference.svg"
import Res from "../../../static/research.svg"
import Filed from "../../../static/filed.svg"
import Doctorate from "../../../static/doctorate.svg"

const Projects = [
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
]

const Journals = [
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
 {
  heading:
   "Prototype Development of Artificial Intelligence based Portable Computer Aided Diagnosis System for Silicosis [Apr-2022]",
  text:
   "Directorate of Specially abled People , Govt. of Rajasthan, Cost (Lacs):22.59 PI: Dr. Kuldeep Singh, Deptt. of Electronics & Communication Engineering",
 },
]

const Research = () => {
 return (
  <div className={classes.main}>
   <h1 className={classes.mainHead}>Research Highlights</h1>
   <div className={classes.banner}>
    <div className={classes.bItems}>
     <img src={Journal} />
     <h1>6500+</h1>
     <h4>Journal Publications</h4>
    </div>
    <div className={classes.bItems}>
     <img src={Conference} />
     <h1>6500+</h1>
     <h4>Conference Publications</h4>
    </div>
    <div className={classes.bItems}>
     <img src={Res} />
     <h1>6500+</h1>
     <h4>Research Sponsored</h4>
    </div>
    <div className={classes.bItems}>
     <img src={Filed} />
     <h1>6500+</h1>
     <h4>Filed Patents</h4>
    </div>
    <div className={classes.bItems}>
     <img src={Doctorate} />
     <h1>6500+</h1>
     <h4>Doctorates Awarded</h4>
    </div>
   </div>
   <div className={classes.container}>
    <div className={classes.research}>
     <div className={classes.researchHead}>
      <img src={Res} height="25px" width="25px" />
      Recent Sponsored Projects
     </div>
     <marquee
      behaviour="scroll"
      direction="up"
      className={classes.researchSection}
     >
      {Projects.map((research, index) => (
       <div key={index} className={classes.researchBox}>
        <h4>{research.heading}</h4>
        <p>{research.text}</p>
       </div>
      ))}
     </marquee>
    </div>
    <div className={classes.research}>
     <div className={classes.researchHead}>
      <img src={Journal} height="25px" width="25px" />
      Recent Journal Publications
     </div>
     <marquee
      behaviour="scroll"
      direction="up"
      className={classes.researchSection}
     >
      {Journals.map((research, index) => (
       <div key={index} className={classes.researchBox}>
        <h4>{research.heading}</h4>
        <p>{research.text}</p>
       </div>
      ))}
     </marquee>
    </div>
   </div>
  </div>
 )
}

export default Research

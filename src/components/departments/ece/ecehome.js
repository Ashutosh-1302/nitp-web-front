import React from 'react';
import styled, { css } from 'styled-components';
import main from '../img/main.png';
import pc from '../img/pc.svg';
import mountain from '../img/mountain.svg';
import map from '../img/map.svg';
import lens from '../img/lens.svg';
import '../css/home.css';

const Imgstyle = css`display: flexbox; justify-content: center; flex-direction: column; align-items: center`;

const Ecehomepage = () => {
    return (<div className="studentsection">
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;display:flex;flex-direction:column;justify-content:center`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Computer Science & Engineering</h1></div>
                <div className="row">
                    <h2 css={css`color:#656565;`}>“The computer was born to solve problems
                    that did not exist before.”</h2></div>
                <div className="row">
                    <h2 css={css`color:#606060;font-weight:bold`}>— Bill Gates</h2></div>
            </div>
            <div css={Imgstyle} className="col-6">
                <img src={main} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;margin-left:8%;margin-right:8%;`}>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;`}>
                    <h1>About</h1></div>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;color: #606060;`}>
                    <h3 css={css`line-height:1.2;`}>The Department of Electronics and Communication Engineering is one of the established and largest department in the institute. It was established in the year 1978 with an intake of 10 students only. The Department offers B.Tech programme in "Electronics & Communication Engineering" with 141 intake capacity, and M.Tech programme in "Communication System, Microelectronics and VLSI System Design"with 18 intake capacity for each specialization. The department is also offering Ph.D. program (Full time and Part time research program) in Electronics and Communication Engineering since 2012 provides a platform for bright graduates and postgraduates to conduct research in the following areas:<br/>
                    
    <br/><li>High Power RF / Microwave Devices, Circuits and Systems. RF MEMs, Metamaterial devices ,Microwave Imaging and Remote Sensing, Absorber, Dielectric Resonator Antennas, Graphene Antennas and Filters, Polarization of Waves and wave manipulation, Micro, Milli and THz wave Antennas and devices, Computational Electromagnetics.</li>
    <br/><li>Image Processing, Satellite Imaging, Medical Imaging, Pattern Recognition, Machine Learning/ Deep Machine Learning, and Soft Computing Techniques, Radar signal processing, Speech Analysis; Speech Enhancement; Speech Recognition; Keyword Spotting; Speaker and Language Recognition, Efficient Hardware Architectures for Speech Processing Algorithms, Biomedical Signal Processing.</li>
    <br/><li>Analog/RF and Digital IC Design, Design of Signal Processing Circuits using Analog Building Blocks, FPGA based System Design, Fabrication and characterization of thin films, Synthesis and characterization of nanomaterials, Low Power High Performance Robust Circuit Design, Semiconductor Device Modelling, Fabrication and characterization of thin films & Nanostructure, Nano-electronics, Photonics, Beyond CMOS Devices ,Green Electronics, Steep switching transistors</li>
    <br/><li>UWB Communication, Wireless Body Area Network, Short range Medical Communication, Energy efficient MAC for WBAN, Vital sign monitoring, Optical Fiber Communication, Photonics, and Silicon-on-Insulator based Waveguides and Devices, Hybrid Plasmonic Waveguide and Devices, Wireless Communications. Routing and Security Issues in Wireless Networks, Study and Applications of Post Quantum Cryptographic Algorithms for Network Security, Physical layer of digital and wireless communication, Spectrum sensing and sharing in Cognitive Radio Network (CRN), Estimation-detection theory, Neuro-fuzzy based system identification, Channel estimation and equalization.</li>

<br/><br/>Currently, 32 students are enrolled in full-time Ph.D. research program and 48 students are enrolled in part-time Ph.D. research program.
All courses of the department are periodically reviewed by the National Board of Accreditation (NBA). The undergraduate (UG) course B.Tech (Electronics & Communication Engineering) was accredited by the NBA for the academic Year 2015-16, 2016-17 and 2017-18, i.e., upto 30-06-2018; Further Accredited for 2018-19, 2019-20 and 2020-21, i.e., upto 30-06-2021. The PG course Communication systems was accredited by the NBA for the academic Years 2016-2017 and 2017-2018.

<br/><br/>The Department's faculty have received many sponsored R&D projects funded by central agencies such as MHRD, DRDO, DST, MeitY
The resources of VLSI LAB have been upgraded with the support of SMDP-C2SD project. The department possesses a highly qualified group of young, competent and highly motivated faculty and staff members who have adopted and implemented some of the best academic practices in teaching and research. Department is organizing international and national seminar ,faculty development programme, GIAN programme, students training programme by industry experts, invited lectures by eminent academicians and resource persons from industries for up gradation and sharing of technical knowledge. Department is organizing training programs and FDP supported by E & ICT Academy, NIT Patna and TEQIP III project in every semester.

<br/><br/>The students of the department have been securing top ranks in national competitive examinations such as GATE and CAT. Students from the department have been regularly recruited by several public sector and MNC companies with high package. Ever year, about 10% of ECE graduate (B.Tech) students are going for pursue post graduate and doctoral studies in the top-rated Universities in India and abroad.
The students of the department have won prizes in different national & international technical competitions and sports events. Some of the students group are motivated towards entrepreneurship development and have started Start-up Company with the help of institute's incubation centre. In all courses, the Department has built an excellent reputation for its graduates in terms of placements.</h3>
                </div>
            </div>
        </div>
        <div className="smainrow" >
            <div className="col-6" css={Imgstyle} >
                <img src={mountain} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Mission</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>To become a centre of excellence to impart up-to-date technical education, which will let our students to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a leading research hub. 
                    </h3>
                </div>
            </div>
        </div>
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Vision</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        
                        To provide globally competitive and high quality human resource by preparing students with broad-based / specialized technical education at UG, PG, and Ph.D. levels.
                        <br/>To increase research intensity and become a leading product based innovation centre by significantly contributing towards development of new technologies.
                        <br/>To contribute to the country and the society at large by strengthening the interaction between academia and industries for addressing the need of the mankind. 
                    </h3>
                </div>
            </div>
            <div css={Imgstyle} className="col-6">
                <img src={lens} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="smainrow" >
            <div css={Imgstyle} className="col-6">
                <img src={map} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Contact</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        <br/>Department of Electronics & Communications Engg.,
                        <br/><br/>National Institute Of Technology Patna,
                        <br/>Ashok Rajpath, Patna - 800005.
                        <br/>Email: head.ec@nitp.ac.in
                        <br/><br/>Extn: +91-612-(2371715/2715/2371929/
                        <br/>2370419/2370843/2371930) * 177 
                    </h3>
                </div>
            </div>

        </div>
    </div>)

}

export default Ecehomepage
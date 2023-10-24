import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import './about.css';
import Facebook from '../Facebook'
import LinkedIn from "../LinkedIn";
import Navbar from "../NavBar/Navbar";
function About(){
  const facebookUrl="https://www.facebook.com/profile.php?id=100071201080487";
  const linkedinUrl="https://www.linkedin.com/in/pratik-rajput/"
    return(
      <div class="container">
      <Navbar />
        <h1 style={{textAlign:"center",fontSize:"50px"}}>About Us</h1>
        <div>
        <h1 style={{textAlign:"center"}}>Introduction</h1>
        </div>

        <div className="parent">
      
          <div className="child1">
          <YoutubeEmbed embedId="naGWMvkvMuU" />
          </div>
          <div className="child2">
            <p style={{fontSize:"30px"}}>
            Evoting is a web-based voting platform that allows you to create
          and manage your own election. Evoting is much more than a platform
          - it's a revolution. 
          </p>
          <p style={{fontSize:"30px"}}>
          Evoting is what mobile banking is to cash
          transactions, Evoting is what WhatsApp is to the postal department,
          Evoting is what mobile share trading is to paper shares trading.
          Today voting means - traveling to a booth, standing there in queue for
          hours, getting hand-inked to vote. Evoting lets voters vote
          directly from their mobile, from the comforts of their homes, and
          that also within a few seconds. 
          </p>
          <p style={{fontSize:"30px"}}>If you have the choice between
          spending Rs. 30,000 Crores, 2 months and 1 Crore man-days to manage an
          election with a 66% voter turnout Vs spending less than 10% cost, 10%
          time, and 10% effort and still manage 10 times better security and
          close to 100% voter turnout - what would you choose?
            </p>
          </div>

        </div>

        <hr />

        <div>
          <h1 style={{textAlign:"center"}}>The Mission</h1>
          <p style={{fontSize:"30px"}}>
          Our Mission is to ensure that Evoting's web voting platform is used almost in all the sectors of India weather it is academics ,non-academics ,formal ,informal ,professional or anything in the upcoming years for the individual choice of an high-rich as well as an ordinary peerson .
          </p>
        </div>

        <hr />

        <h1 style={{textAlign:"center"}}>The Team</h1>

        <div className="outer">
          
          <div className="inner1">
          <div className="imagica">
            <img className="img1" src="pratik.jpg" alt="" />
          </div>
          <div className="text1">
          <h2>Pratik Rajput</h2>
          <h4>UnderGraduate</h4>
          <Facebook url={facebookUrl} />
          <LinkedIn url={linkedinUrl} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus necessitatibus magnam voluptatum fugit exercitationem aut a excepturi temporibus, quo praesentium cumque distinctio officiis sapiente minima odio autem voluptate eligendi vitae.</p>
          </div>
          </div>

          <div className="inner2">
          <div className="imagica1">
            <img className="img2" src="pratik.jpg" alt="" />
          </div>
          <div className="text2">
          <h2>Pratik Rajput</h2>
          <h4>UnderGraduate</h4>
          <Facebook url={facebookUrl} />
          <LinkedIn url={linkedinUrl} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus necessitatibus magnam voluptatum fugit exercitationem aut a excepturi temporibus, quo praesentium cumque distinctio officiis sapiente minima odio autem voluptate eligendi vitae.</p>
          </div>
          </div>
        </div>
      </div>  
    );
}
export default About;
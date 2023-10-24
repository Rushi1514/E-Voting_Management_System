import React from "react";
import './home.css'
import { NavLink } from "react-router-dom";

function Home() {


  return (
    <>
    <div className="container">
      <div className="image1-container">
        <img className="image1" src="./background.jpg" alt="" />
        <img className="image2" src="./logo.png" alt="" />
        <h1 className="txt">Create A Vote in just 5 minutes</h1>
      </div>
      <div className="button-container">
        <button className='button'><NavLink to="/votebtn">Create Election</NavLink></button>
        <button className='button'><NavLink to="/vote">Vote Now</NavLink></button>
        <button className='button'>View Result</button>
      </div>

      <br />
      <br />
      <div>
        <h1 style={{textAlign:"center"}}>Why Choose Us?</h1>
        <div className="yes">
        <img className="img" src="./100.jpg" alt="" />
        <h2 style={{textAlign:"center"}}>
        100% Secure
        </h2>
          <p style={{fontSize:"22px"}}>    
          Security is our utmost priority at Right2Vote. Our e-voting platform is meticulously designed with multiple layers of security to ensure the integrity and confidentiality of every vote cast. We employ state-of-the-art encryption techniques to safeguard the transmission of votes, and our authentication process relies on cutting-edge methods such as OTP, Aadhaar, and Biometric verification.
          </p>
        </div>

        <div className="yes">
        <img className="img" src="./cost.jpg" alt="" />
        <h2 style={{textAlign:"center"}}>
        Cost Effective
        </h2>
          <p style={{fontSize:"22px"}}> 
          Our e-voting platform not only ensures a streamlined and secure voting experience but also helps you save on traditional paper-based voting costs, such as printing, distribution, and manual counting. By transitioning to our online voting system, you can significantly reduce the expenses associated with physical ballots, while also minimizing the environmental impact. With Right2Vote, you can
          </p>
        </div>

        <div className="yes">
        <img className="img" src="./features.png" alt="" />
        <h2 style={{textAlign:"center"}}> 
        Best Feature
        </h2>
          <p style={{fontSize:"22px"}}>
          Our e-voting platform is proud to be feature-rich, offering a comprehensive set of tools and functionalities designed to enhance the voting experience for both administrators and voters alike. With a focus on accessibility, transparency, and security, our platform empowers election officers to conduct a wide range of elections seamlessly. With our feature-rich e-voting platform, you can take your elections to the next level.
          </p>
        </div>

        <div className="yes">
        <img className="img" src="./easytouse.png" alt="" />
        <h2 style={{textAlign:"center"}}> 
        Easy To Use
        </h2>
          <p style={{fontSize:"22px"}}>
          Our e-voting platform is designed with simplicity in mind, making it incredibly easy for voters to exercise their democratic rights. We understand that user-friendliness is paramount in any voting system, and that's why we've crafted an intuitive and accessible experience for all users. Whether you're a tech-savvy individual or someone less familiar with digital platforms, our user-friendly interface ensures a hassle-free voting process.
          </p>
        </div>

        <div className="yes">
        <img className="img" src="./vote.png" alt="" />
        <h2 style={{textAlign:"center"}}> 
        1000+ elections every year
        </h2>
          <p style={{fontSize:"22px"}}>
          Our eVoting website capable of hosting "1000+ elections every year" must be a robust, secure, and flexible platform that can adapt to a wide range of election scenarios while maintaining the highest standards of integrity and transparency. Such a system can empower organizations and governments to efficiently and securely conduct numerous elections, making the democratic process more accessible and manageable.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;

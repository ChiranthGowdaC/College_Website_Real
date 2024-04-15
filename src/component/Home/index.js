import collegeLogo from "../../Assets/College_image.png";
import React from 'react'
import "./style.css";

const Home = () => {
  return (
    <div id='home'>
    <div className='home-content'>
    <h1 className='home-content-heading'>Empowering Minds, Shaping Futures: Your Journey Starts Here</h1>
    <p className='home-content-subheading'>Embark on a transformative academic odyssey, where knowledge meets opportunity, and dreams take flight.</p>
    <div className='home-content-actions'>
    <button style={{backgroundColor:"#F37337",color:"#FFF",boxShadow:"0px 24px 100px #F6272533",borderColor:"#F37337",marginRight:"20px"}}>Explore</button>
    <button style={{backgroundColor:"#FFF",color:"#F37337",boxShadow:"0px 24px 100px #F6272533",borderColor:"#F37337"}}>Contact Us</button></div></div>
    <div className='home-content-image'><img src={collegeLogo} alt="Clglogo" /></div></div>
  )
}

export default Home;
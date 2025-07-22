import React, { useRef } from 'react'
import "./About.css"
import { infras, infras2, mgt, mgt1, fireservice, fireservice1, fireservice3, fireservice4, fireservice2, fireservice5, fireservice6, security, security1, security3, security4, security5, security6, security2 } from "../../assets"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Corporate from './Corporate'



gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const container = useRef(null) 
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      },
    });
    timeline
    .from(
      ".company_photo",
      {x:-50, opacity:0}
    )
    .from(
      ".g-text",
      {y:50, opacity:0}
    )
    .from(
      ".sub_title",
      {y:50, opacity:0}
    )
    .from(
      ".box",
      {x:50, opacity:0, stagger:.5}
    )
    .from(
      ".para ",
      {y:50, opacity:0}
    )
    .from(
      ".group",
      {y:50, opacity:0}
    )
    .from(
      ".buttons_container",
      {y:50, opacity:0}
    )
  },{scope:container})

  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company_photo">
          <img src={security1} alt="Mitsab" />
          <img src={security3} alt="Mitsab" />
          <img src={security4} alt="Mitsab" />
        </div>
        <div className="column">
          <h1 className='title'>
            <span className='g-text'>About Us</span>
          </h1>
          <h3 className='sub_title'>Where Vision Meets Unwavering Focus</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={security5} alt="" />
            </div>
            <div className="box">
              <img src={security6} alt="" />
            </div>
            <div className="box">
              <img src={security2} alt="" />
            </div>
            <div className="box">
              <img src={security4} alt="" />
            </div>
          </div>
          <div className="para">
            <p className="text_muted description">
              MITSAB SECURITY SERVICES LTD. is a premier
              security solutions provider dedicated to ensuring a
              safe and secure environment for our clients. With a
              comprehensive suite of services tailored to meet
              the diverse needs of industrial, commercial, and
              residential sectors, we leverage our expertise to
              deliver unparalleled security and surveillance
              solutions. 
            </p>
            <p className="text_muted description">
              Our commitment to excellence, backed
              by a professional team, sets us apart in the security
              services industry. It is wholly a Nigerian Security
              rm birthed by a Nigerian with excellent and
              professional dedicated management. 
            </p>
            <p className="text_muted description">
              It is an
              indigenous private security company duly
              incorporated in accordance with the existing
              Nigerian Companies and Allied matters Act 2020
              with registration number RC 6968581 and limited
              by shares.
            </p>
          </div>
          <div className="group" >
            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Expert</p>
                <h3>Workforces</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Clients</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn_primary">Get a qoute</Link>
          </div>
        </div>
        <Corporate/>
      </div>
    </section>
  )
}

export default About

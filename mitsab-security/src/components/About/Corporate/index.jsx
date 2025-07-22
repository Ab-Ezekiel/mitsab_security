import {React, useRef} from 'react'
import './Corporate.css'
import { FaHandshake, FaUserTie, FaBalanceScale, FaUsersCog, FaHandsHelping } from 'react-icons/fa'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Corporate = () => {
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
    .fromTo(
      ".container",
      {x:100, opacity:0},
      {opacity:1, stagger:.5, x:0}
    )
   
  },{scope:container})

  return (
    <section id='corporate' ref={container}>
      <div className='container'>
        <div className='column1'>
          <div className='column1-subcontainer'>
            <h2 className='sub-title'> Our Vision </h2>
            <div className='para'>
              <h3 className='sub-title'>
                To continue to gain competitive advantage by delivering
                superior security services deeply rooted in professionalism,
                high ethical standards, forming coalition of domestic and
                international alliance and commitment to community
                services.
              </h3>
            </div>
          </div>
          <div className='column1-subcontainer'>
            <h2 className='sub-title'> Our Mission </h2>
            <div className='para'>
              <h3 className='sub-title'>
                To deliver integrated and
                customizable superior security services and
                products designed to meet or exceed our client's needs.
              </h3>
            </div>
          </div>
        </div>
        <div className='column2'>
          <div className='values-container1'>
            <h2 className='sub-title'>Our Core Values</h2>
          </div>
          <div className='values-container2'>
            <div className='values'>
                <div className='icon-container'>
                <FaHandshake />
                </div>
                <h3>Commitment to Client's Services</h3>
            </div>

            <div className='values'>
                <div className='icon-container'>
                <FaUserTie />
                </div>
                <h3>Professionalism</h3>
            </div>

            <div className='values'>
                <div className='icon-container'>
                <FaBalanceScale />
                </div>
                <h3>Respect, Integrity and Dignity</h3>
            </div>

            <div className='values'>
                <div className='icon-container'>
                <FaUsersCog />
                </div>
                <h3>Employee Empowerment</h3>
            </div>

            <div className='values'>
                <div className='icon-container'>
                <FaHandsHelping />
                </div>
                <h3>Community Service</h3>
            </div>
            </div>
        </div>
        
      </div>
      <div className='para'>
        <h2 className='sub-title'>Our Corporate Philosophy</h2>
        <h3 className='sub-title'>
          At Mitsab Security Services Ltd, we believe leadership starts with integrity. 
          Our management leads by example, fosters an ethical workplace, and empowers our 
          team to perform at their best. We uphold strict confidentiality — your personal 
          and business information stays protected. With professionalism and respect at our 
          core, we deliver security services that clients can trust, making every partnership 
          a smart investment against risk.
        </h3>
      </div>
    </section>
  )
}

export default Corporate



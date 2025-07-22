import React, { useRef } from 'react';
import "./Project.css";
import { projects } from "../../data";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
const container = useRef(null);
console.log("Projects loaded:", projects);
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });

    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".sub_title", { y: -50, opacity: 0 })
     .from(".project_card",{
        y: 10,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.out"
     })
  }, { scope: container });

  return (
    <section id="project" ref={container}>
      <div className="project_top">
        <h1 className="title">Our <span className="g-text">Services</span></h1>
        <h3 className="sub_title">
          Innovative construction projects, exceptional craftsmanship.
        </h3>
      </div>

      <div className="projects_grid">
        {projects.map((project, index) => (
          <div key={index} className="project_card">
            <div className="image_container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="box">
              <h1 className="name">{project.title}</h1>
            </div>
            <div className="details">
              <h3 className="name">{project.title}</h3>
              <p className="text_muted description">{project.description}</p>
              <button className="btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

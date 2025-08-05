import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import ise from "../../assets/ise.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Project() {

  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 80%",
        end:"top 30%"
      }
    })

    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 30%"
      }
    })
  })

  return (
    <div id='project'>
      <h1 id='para'>PROJECTS </h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANCE" image={va} />
        <Card title="FITNESS WEBSITE" image={fw} />
        <Card title="AI TEXT TO IMAGE" image={tti} />
        <Card title="IMAGE SERACH ENGINE" image={ise} />
        {/* <Card title="AI CHATBOT" image={} /> */}
        <Card />
      </div>

    </div>
  )
}

export default Project
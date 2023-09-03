import React, { useEffect, useRef, useState } from "react";
import TeamCard from "../components/team/TeamCard";

import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";
import NET from 'vanta/dist/vanta.net.min'

const TeamPage = ({ isMenuOpen }) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: "#01071c",
  color: "#0addf0",
  maxDistance: 19.00,
  spacing: 20.00
      }))}} , [vantaEffect])
    

  const [core , setCore] = useState([]);
  const [tech, setTech] = useState([]);
  const [creative, setCreative] = useState([]);
  const [social, setSocial] = useState([]);
  const [sponsor, setSponsor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
 
  useEffect(() => {
    axios
      .get("https://unstop-igniters-rcciit-server.vercel.app/team")
      .then((res) => {
          setCore(res.data.members.filter((member) => member.cell === "Core Team"));
          setTech(res.data.members.filter((member) => member.cell === "Tech Cell"));
          setCreative(res.data.members.filter((member) => member.cell === "Creative Cell"));
          setSocial(res.data.members.filter((member) => member.cell === "Social Media Cell"));
          setSponsor(res.data.members.filter((member) => member.cell === "Sponsorship & Marketing Cell"));
          setFetching(false);
         
      }).catch((err) => { console.log(err) } );
    }, []);
    setTimeout(() => { setLoading(false);  }, 3000);
  return (
    <>
    <div ref={myRef} >
    { loading && fetching ?<div  className="flex flex-col items-center gap-5 justify-center h-screen "><CircleLoader
  color="#1a8fdd"
  size={100}
/>
<h1 className=" text-2xl text-[#1a8fdd] font-bold">Loading Unstoppables...</h1>
</div> :<div 
      className={`${
        isMenuOpen ? "pt-56" : "2xl:pt-[80px]"
      } flex flex-col items-center mb-10 gap`}
    >
      <div className="">
        <h1 className="text-[#1a8fdd] text-center font-bold text-4xl mt-5">
          Our Team
        </h1>
      </div>
      

      <div className="flex flex-col items-center mt-8 xl:mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">Core Team</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          
          {
        core.map((member , index)=>(
          <TeamCard cell={member.cell} image={member.image} key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
        ))
          }
         
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">Tech Cell</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          {
        tech.map((member , index)=>{
          return(
            <TeamCard cell={member.cell} image={member.image} key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
          )
        })
      }
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">Creative Cell</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          {creative.map((member, index) => {
            return (
              <TeamCard
                image={member.image}
                key={index}
                name={member.name}
                linkedin={member.linkedin}
                github={member.github}
                instagram={member.instagram}
                role={member.role}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">
          Sponsorship & Marketing Cell
        </h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          {sponsor.map((member, index) => {
            return (
              <TeamCard
                image={member.image}
                key={index}
                name={member.name}
                linkedin={member.linkedin}
                github={member.github}
                instagram={member.instagram}
                role={member.role}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">
          Social Media Cell
        </h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          {social.map((member, index) => {
            return (
              <TeamCard
                image={member.image}
                key={index}
                name={member.name}
                linkedin={member.linkedin}
                github={member.github}
                instagram={member.instagram}
                role={member.role}
              />
            );
          })}
        </div>
      </div>
    </div>}
    </div>
    </>
  );
};

export default TeamPage;

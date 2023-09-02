import React, { useEffect, useState } from "react";
import TeamCard from "../components/team/TeamCard";

import axios from "axios";
const TeamPage = ({ isMenuOpen }) => {
  const [core , setCore] = useState([]);
  const [tech, setTech] = useState([]);
  const [creative, setCreative] = useState([]);
  const [social, setSocial] = useState([]);
  const [sponsor, setSponsor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/team/")
      .then((res) => {
          setCore(res.data.members.filter((member) => member.cell === "Core Team"));
          setTech(res.data.members.filter((member) => member.cell === "Tech Cell"));
          setCreative(res.data.members.filter((member) => member.cell === "Creative Cell"));
          setSocial(res.data.members.filter((member) => member.cell === "Social Media Cell"));
          setSponsor(res.data.members.filter((member) => member.cell === "Sponsorship & Marketing Cell"));
      }).catch((err) => { console.log(err) } );
    }, []);
    
    
   
  
  return (
    <div
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
        <h1 className="text-slate-400 font-semibold text-xl">Core Team</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
          {
        core.map((member , index)=>(
          <TeamCard cell={member.cell} image={member.image} key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
        ))
          }
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-slate-400 font-semibold text-2xl">Tech Team</h1>
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
        <h1 className="text-slate-400 font-semibold text-xl">Creative Cell</h1>
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
        <h1 className="text-slate-400 font-semibold text-xl">
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
        <h1 className="text-slate-400 font-semibold text-xl">
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
    </div>
  );
};

export default TeamPage;

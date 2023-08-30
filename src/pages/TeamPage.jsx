import React from 'react'
import TeamCard from '../components/team/TeamCard'
import {creative, social, sponsor, tech} from '../data/members'
const TeamPage = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-56' : '2xl:pt-[80px]'} flex flex-col items-center mb-10 gap`}>
    <div className="">
      <h1 className="text-[#1a8fdd] text-center font-bold text-4xl mt-5">Our Team</h1>
    </div>

    <div className='flex flex-col items-center mt-8 xl:mt-16'>
        <h1 className='text-slate-400 font-semibold text-xl'>Core Team</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>
    </div>

    <div className='flex flex-col items-center mt-16'>
        <h1 className='text-slate-400 font-semibold text-2xl'>Tech Team</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
      {
       tech.map((member , index)=>{
          return <TeamCard key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
       })
      }
    </div>
    </div>

    <div className='flex flex-col items-center mt-16'>
        <h1 className='text-slate-400 font-semibold text-xl'>Creative Cell</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
        {
       creative.map((member , index)=>{
          return <TeamCard key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
       })
      }
    </div>
    </div>

    <div className='flex flex-col items-center mt-16'>
        <h1 className='text-slate-400 font-semibold text-xl'>Sponsorship & Marketing Cell</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
        {
       sponsor.map((member , index)=>{
          return <TeamCard key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
       })
      }
    </div>
    </div>

    <div className='flex flex-col items-center mt-16'>
        <h1 className='text-slate-400 font-semibold text-xl'>Social Media Cell</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-20 ">
        {
       social.map((member , index)=>{
          return <TeamCard key={index} name={member.name} linkedin={member.linkedin} github={member.github} instagram={member.instagram} role={member.role} />
       })
      }
    </div>
    </div>
    
  </div>
  )
}

export default TeamPage
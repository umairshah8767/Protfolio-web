"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from "process";

const TAB_DATA =[
   {
     title : "Skills",
     id : "skills",
     content:(<ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Laravel</li>
        
     </ul>)},
     {
        title:"Education",
        id : "Education",
        content:(<ul className="list-disc pl-2">
            <li>Governor Sindh GICI </li>
            <li>Vartual Univercity (BS)</li>
            <li>Diploma Software Engineering (sfc)</li>
            <li>Intermadate (Pre-Eng)</li>
            <li>Matriculation (Science)</li>
            
         </ul>)

     },
     {
        title:"Certification",
        id : "Certification",
        content:(<ul className="list-disc pl-2">
            <li>Governor Sindh GICI </li>
            <li>Aptech (ACCP-PRO)</li>
            <li>Civil (Eng)</li>
            <li>Graphic Desigining</li>
            <li>Digital Marketing</li>
            
         </ul>)

     }

]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending,startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src={"/images/about-image.png"}
          alt={"abut"}
          height={"500"}
          width={"500"}
        />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a Full stack developer with expertise in PHP, WordPress,
            Next.js, and TypeScript. My technical skills also include SQL Server
            and MongoDB. I utilize best practices to develop modern web
            applications, always keeping performance, security, and user
            experience in mind. I strive to complete each project on time and
            meet the needs of my clients.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certification")}
              active={tab === "Certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
           
         
          </div>
          <div className="mt-8 ">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

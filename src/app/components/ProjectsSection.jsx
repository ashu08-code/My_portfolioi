"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SupplyArabia",
    description: "In SupplyArabia, its leading the charge in revolutionizing the online marketplace exclusively dedicated to the supply of raw materials to the Middle East and Arabic-speaking countries.",
    image: "/images/projects/supply2.png",
    tag: ["All", "Live Projects"],
    // gitUrl: "/",
    previewUrl: "https://supplyarabia.infosparkles.com/",
  },
  {
    id: 2,
    title: "DeaLin",
    description: "DealIn is a platform designed for users to buy and sell properties, vehicles, and a variety of products. It provides a marketplace where individuals and businesses can list their items for sale, and buyers can browse and filter through listings to find what they need.",
    image: "/images/projects/deal1.png",
    tag: ["All", "Live Projects"],
    // gitUrl: "/",
    previewUrl: "http://dealin.infosparkles.com",
  },
  {
    id: 3,
    title: "Video LMS",
    description:
      "Video LMS is an educational platform designed to deliver video-based learning content.Video LMS aims to enhance digital learning experiences for both instructors and students. ",
    image: "/images/projects/lms1.png",
    tag: ["All", "Live Projects"],
    // gitUrl: "/",
    previewUrl: "https://lms.infosparkles.com/",
  },
  {
    id: 4,
    title: "DesertGate",
    description:
      "This projects is to provide peoples the facilities to book their destination tours. Also it includes hotel booking and city tours .",
    image: "/images/projects/desert2.png",
    tag: ["All", "Live Projects"],
    // gitUrl: "/",
    previewUrl: "https://desert2.infosparkles.com/",
  },
  {
    id: 5,
    title: "Homeizon",
    description:
      "This projects is a real estate project, here people get the facilities to buy or sell properties , pg hostels  and houses on rent. This also have a option to buy furnitures .",
    image: "/images/projects/homeizon1.png",
    tag: ["All", "Live Projects"],
    // gitUrl: "/",
    previewUrl: "https://homeizon.infosparkles.com/",
  },
  {
    id: 6,
    title: "Recipe Recommender",
    description: "This project i made during my internship,in this user post recipes and also filter other recipies according to ingredients.",
    image: "/images/projects/recipe1.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/Ashutosh-kumar-code/Recipe_Recommend-MERN ",
    // previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 7,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project?.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Live Projects"
          isSelected={tag === "Live Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal Projects"
          isSelected={tag === "Personal Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

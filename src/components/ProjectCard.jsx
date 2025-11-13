import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaGithub, FaFolderOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projectImage from '../assets/images/aedvik.png'
import Status from "./Status";

const ProjectCard = ({ project }) => {
    return (
        <div className="my-4 break-inside-avoid relative">
            {/* Header */}
            <FaFolderOpen size={20} className="inline-block mx-2" />
            <p className="font-semibold inline-block text-neutral-700">
                {project.title}
            </p>
            <BsThreeDotsVertical size={15} className="inline-block absolute right-2 text-gray-700 top-1" />

            {/* Card */}
            <div className="bg-white shadow text-neutral-800 border border-gray-300 p-3 rounded-xl">
                {/* Image */}
                {/* <div className="rounded-xl overflow-hidden h-[100px]">
                    <img
                        src={projectImage}
                        // src={project.image}
                        className="w-full h-full object-cover"
                        alt={project.title}
                    />
                </div> */}

                {/* Description */}
                <p className="text-neutral-700  tracking-wide leading-[110%] mt-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-neutral-700 text-sm tracking-wide leading-[110%] mt-2">
                    <span className="font-bold me-1">Stacks:</span>
                    {project.stacks.map((tech) => (
                        <span
                            key={tech}
                            className="border border-gray-300 text-gray-700 text-sm m-0.5 p-0.5 px-2 inline-block rounded-xl"
                        >
                            {tech}
                        </span>
                    ))}
                </p>

                {/* Buttons */}
                <div className="flex gap-1 justify-end">
                    {project.github && (
                        <div className="flex gap-2">
                            {Object.entries(project.github).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    title={key}
                                    className="p-2 border border-gray-300 rounded-xl hover:bg-black hover:text-white duration-300"
                                >
                                    <FaGithub />
                                </a>
                            ))}
                        </div>
                    )}


                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-300 rounded-xl hover:bg-black hover:text-white duration-300 transition-all"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                </div>

                {(() => {
                    if (project.status === 'pending') {

                        return <Status color="bg-gray-500" >Work in progress</Status>
                    }
                    if (project.status === 'completed') {
                        return <Status >Completed</Status>
                    }
                })()}

            </div>
        </div>
    );
};

export default ProjectCard;

"use client";
import { useState, useEffect } from "react";
import Particles from "../components/TechParticlesBackground";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import Link from "next/link";
import { FaMicrosoft } from "react-icons/fa";

export default function About() {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const navbar =
      document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height > 0 ? height : 80);
    }
  }, []);

  // Grid item component with hover effect that fills div with black and centers heading
  interface GridItemProps {
    title: string;
    link?: string;
    className?: string;
    children?: React.ReactNode;
  }

  const GridItem: React.FC<GridItemProps> = ({ title, link, className, children }) => {
    return (
      <Link
        href={link || "#"}
        className={`bg-transparent shadow-md p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-xl backdrop-blur-md border border-black ${className}`}
      >
        {/* Heading that's visible before hover */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-300 group-hover:translate-y-0 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 text-black hover:-translate-y-1/2 group-hover:text-white group-hover:text-center group-hover:w-full group-hover:z-20">
          {title}
        </h2>

        {/* Content that fades out on hover */}
        <div className="mt-4 transition-all duration-300 group-hover:opacity-0">
          {children}
        </div>

        {/* Black overlay that appears on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
      </Link>
    );
  };

  return (
    <main
      style={{ paddingTop: `${navbarHeight}px` }}
      className="relative min-h-screen w-full"
    >
      <div>
        <Particles />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Grid Layout matching the sketch and new reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-[fadeIn_0.8s_ease-in]">
          {/* Profile Picture */}
          <GridItem
            title="Profile"
            link=""
            className="md:col-span-4 md:row-span-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-300">
                <img
                  src="/NN.jpg"
                  alt="NN"
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/300?text=SD";
                  }}
                />
              </div>
              <h3 className="mt-4 text-black font-medium text-lg">Nikhil Namabattula</h3>
              <p className="text-gray-600 text-center">
                Data Science Engineer
              </p>
            </div>
          </GridItem>

          {/* Tech Stack */}
          <GridItem
            title="Tech Stack"
            link="/tech-stack"
            className="md:col-span-8 md:row-span-1"
          >
            <div className="relative h-64 w-full bg-transparent overflow-hidden">
              {/* Scattered floating bubbles with more dynamic animations */}
              {[
                {
                  name: "HTML5",
                  icon: (
                    <SiHtml5 className="text-orange-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-10 left-6",
                  animation: "animate-float-1",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "Power BI",
                  icon: (
                    <img
                      src="/icons/power-bi.png"
                      alt="Power BI"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  ),
                  position: "top-10 left-98",
                  animation: "animate-float-1",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "Visual Studio",
                  icon: (
                    <img
                      src="/icons/VS.png"
                      alt="Visual Studio"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  ),
                  position: "top-30 left-160",
                  animation: "animate-float-2",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "Excel",
                  icon: (
                    <img
                      src="/icons/excel.png"
                      alt="Excel"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  ),
                  position: "top-10 left-170",
                  animation: "animate-float-4",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "Tableau",
                  icon: (
                    <img
                      src="/icons/Tableau.jpeg"
                      alt="Tableau"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  ),
                  position: "top-10 left-6",
                  animation: "animate-float-1",
                  bubbleColor: "bg-orange-50",
                },                
                {
                  name: "CSS3",
                  icon: (
                    <SiCss3 className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-32 left-24",
                  animation: "animate-float-2",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "JavaScript",
                  icon: (
                    <SiJavascript className="text-yellow-400 text-2xl md:text-3xl" />
                  ),
                  position: "top-6 left-80",
                  animation: "animate-float-4",
                  bubbleColor: "bg-yellow-50",
                },
                {
                  name: "GitHub",
                  icon: (
                    <SiGithub className="text-black text-2xl md:text-3xl" />
                  ),
                  position: "top-40 left-33",
                  animation: "animate-float-5",
                  bubbleColor: "bg-gray-50",
                },
                {
                  name: "Python",
                  icon: (
                    <SiPython className="text-yellow-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-8 left-32",
                  animation: "animate-float-5",
                  bubbleColor: "bg-yellow-50",
                },
                {
                  name: "Docker",
                  icon: (
                    <SiDocker className="text-blue-400 text-2xl md:text-3xl" />
                  ),
                  position: "top-28 left-124",
                  animation: "animate-float-4",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "C++",
                  icon: (
                    <SiCplusplus className="text-blue-700 text-2xl md:text-3xl" />
                  ),
                  position: "top-10 left-140",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "SQL",
                  icon: (
                    <SiMysql className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-25 left-100",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-100",
                },
                
                
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.position} ${tech.animation} transform`}
                  title={tech.name}
                >
                  <div
                    className={`flex items-center justify-center ${tech.bubbleColor} w-16 h-16 rounded-full shadow-lg border border-opacity-20 border-white`}
                  >
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </GridItem>

          {/* Projects */}
          <GridItem
            title="Projects"
            link="/projects"
            className="md:col-span-3 md:row-span-1"
          >
            <div className="space-y-3 text-black">
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-medium">HR Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">Power BI, Data Analysis Expressions, Power Query, SQL</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-3">
                <h4 className="font-medium">Hotel Management Website</h4>
                <p className="text-sm text-gray-600">
                HTML, CSS, JavaScript

                </p>
              </div>
            </div>
          </GridItem>

          {/* Full Stack */}
          <GridItem
            title="Data Science Engineer"
            link=""
            className="md:col-span-6 md:row-span-1"
          >
            <div className="space-y-3">
              <p className="text-gray-700">
              Developing data-driven, high-performance solutions while implementing robust analytical practices to extract insights, build predictive models, and drive informed decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Tableau
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Hadoop
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                PowerBI
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Excel
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                MySQL
                </span>
              </div>
            </div>
          </GridItem>

          {/* Certifications */}
          <GridItem
            title="Certifications"
            link="/certifications"
            className="md:col-span-3 md:row-span-1"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <img
                  src="/logos/swayam_logo.png"
                  alt="GeeksforGeeks"
                  className="w-8 h-8"
                />
                <div>
                  <div className=" text-black">
                    <h4 className="font-medium">Cloud Computing</h4>
                    <p className="text-xs text-gray-600">NPTEL</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <img src="/logos/download.svg" alt="Udemy" className="h-8 w-8" />
                <div>
                  <div className=" text-black">
                    <h4 className="font-medium">Data Analysis with Tableau</h4>
                    <p className="text-xs text-gray-600">Coursera</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <img src="/logos/gfg.jpeg" alt="Udemy" className="h-8 w-8" />
                <div>
                  <div className=" text-black">
                    <h4 className="font-medium">Data Structures and Algorithms</h4>
                    <p className="text-xs text-gray-600">greeks for greeks</p>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* ACHIEVEMENTS */}
          <GridItem
          title="Achievements"
          link=""
          className="md:col-span-4 md:row-span-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-4 rounded w-full">
                <h3 className="text-lg font-semibold text-center text-black">
                  Secured All India Rank 4302 in JEE Advanced 2022
                </h3>
              </div>
              <div className="bg-gray-100 p-4 rounded w-full">
                <h3 className="text-lg font-semibold text-center text-black">
                  District-Level Kabaddi Cup Winner (2019)
                </h3>
              </div>
            </div>
          </GridItem>
          {/* Beyond the Code */}
          <GridItem
            title="Beyond the Code"
            link=""
            className="md:col-span-8 md:row-span-1"
          >
            <div>
              <p className="text-gray-700 mb-4">
                Interests and hobbies beyond the digital realm.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Gaming", icon: "🎮" },
                  { name: "Hiking", icon: "🥾" },
                  { name: "Music", icon: "🎵" },
                  { name: "Reading", icon: "📚" },
                ].map((hobby) => (
                  <span
                    key={hobby.name}
                    className="px-3 py-2 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1"
                  >
                    <span>{hobby.icon}</span> {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          </GridItem>
        </div>
      </div>
    </main>
  );
}

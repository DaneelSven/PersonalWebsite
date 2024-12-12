"use client";
import HexagonGrid from "@/components/HexagonGrid";
import { Download, Github, Linkedin, Menu } from "lucide-react";
import React, { useEffect, ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ExperienceRoadmap from "@/components/ExperienceRoadmap";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const NavLink = ({ href, children, external = false }: NavLinkProps) => {
  const baseClasses =
    "px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm text-orangeAccent w-full md:w-auto text-center";

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
};

const About = () => {
  const [columnCount, setColumnCount] = useState(12);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const size = 80;
  const width = size * Math.sqrt(3);

  useEffect(() => {
    const updateColumnCount = () => {
      const screenWidth = window.innerWidth;
      const needed = Math.ceil((screenWidth * 1.5) / (width * 0.75)) + 4;
      setColumnCount(needed);
    };
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, [width]);

  const [showCalendly, setShowCalendly] = useState(false);
  useEffect(() => {
    if (showCalendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col text-white">
      {/* Background Hexagon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          top: "-10%",
          height: "80vh",
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          top: "40%",
          height: "80vh",
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>

      {/* Navigation */}
      <nav className="relative z-30 px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Image src="/logo.png" alt="Logo" width={150} height={100} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-orangeAccent"
            >
              <Menu size={24} />
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0`}
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="https://calendly.com/sven4696" external>
              Book a Meeting
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 py-16 px-6 text-center md:flex md:text-left md:items-center max-w-5xl mx-auto">
        <Image
          src="/me.png"
          alt="Sven Daneel"
          width={150}
          height={150}
          className="rounded-full border-4 border-[#ff9902] mx-auto mb-6 md:mx-0"
        />
        <div className="md:ml-8 space-y-4">
          <h1 className="text-4xl font-bold text-orangeAccent">Sven Daneel</h1>
          <p className="text-lg md:text-xl text-orangeAccent mb-4 md:mb-8 text-center md:text-left">
            Solidity | Slither | Fuzzing | Defi | AMM | Typescript | Evm |
            Foundry
          </p>

          <p className="text-xl text-gray-400">
            Blockchain Engineer with a focus on smart contracts, security, and
            scalable blockchain solutions.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://github.com/DaneelSven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orangeAccent hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sven-daneel-10506271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orangeAccent hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/resume.pdf"
              download="Sven_Daneel_Resume.pdf"
              className="text-orangeAccent hover:text-white transition-colors"
            >
              <Download size={24} />
            </a>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto mb-16 p-8">
        <h2 className="text-4xl font-bold text-center text-orangeAccent mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center  mb-4">
          My experiences span from the intricacies of blockchain development and
          DeFi protocol architecture to student teaching and competing in
          internationally elite sports. This unique blend provides me with a
          distinctive approach to problem-solving, combining technical precision
          with strategic thinking and team leadership. As a multilingual
          communicator (fluent in German/Swiss-German, English, Norwegian, and
          Swedish), I effortlessly integrate and collaborate with global teams,
          fostering an environment of innovation across cultural boundaries.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed text-center">
          With deep expertise in smart contract security and scalable blockchain
          solutions, I specialize in building robust DeFi protocols and
          cross-chain applications. My background in elite sports has instilled
          a disciplined approach to achieving ambitious goals, while my teaching
          experience enables me to break down complex technical concepts for
          stakeholders at all levels. I am passionate about leveraging these
          multifaceted skills in roles that demand cutting-edge architectural
          solutions and a forward-thinking approach to blockchain innovation.
        </p>
      </div>
      {/* Experience Timeline */}

      <ExperienceRoadmap></ExperienceRoadmap>
      {/* Skills Section */}
      <section className="relative z-20 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-orangeAccent mb-10">
          Skills & Technologies
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Solidity", url: "https://soliditylang.org/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "Node.js", url: "https://nodejs.org/" },
            { name: "Rust", url: "https://www.rust-lang.org/" },
            { name: "Ethereum", url: "https://ethereum.org/" },
            { name: "Ethers.js", url: "https://docs.ethers.org/" },
            { name: "Foundry", url: "https://getfoundry.sh/" },
            { name: "React", url: "https://react.dev/" },
            { name: "Next.js", url: "https://nextjs.org/" },
            { name: "GraphQL", url: "https://graphql.org/" },
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Docker", url: "https://www.docker.com/" },
          ].map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 p-4 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors"
            >
              <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 px-6 py-16 bg-gray-900/50 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't hesitate and reach out to me.
          </h2>
          <p className="text-gray-400 mb-8">
            Let's Build together and create the decentralized world
          </p>
          <a
            href="https://calendly.com/sven4696"
            target="_blank" // Opens in new tab
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
               hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
               text-orangeAccent"
          >
            Book a Meeting
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

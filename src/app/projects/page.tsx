// app/projects/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HexagonGrid from "@/components/HexagonGrid";

interface Project {
  id: number;
  title: string;
  description: string;
  extendedDescription?: string;
  features?: string[];
  architecture?: string;
  techStack: string[];
  image: string;
  additionalImages?: string[];
  link: string;
  direction: "left" | "right";
}

// Props for TextContent
type TextContentProps = {
  project: Project;
  isExpanded: boolean;
};

// Props for ImageGallery
type ImageGalleryProps = {
  project: Project;
  isExpanded: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DeFi Lending and Borrowing Platform",
    description:
      "A decentralized Lending and Borrowing Protocol built on Hedera Hashgraph, Supply, Borrow, Withdraw, Repay, and Liquidations.",
    extendedDescription:
      "Built from the ground up using Solidity for smart contracts and React for the frontend. Includes Machine Learning to predict and calcualte healthy loans. Users can borrow up to a certain percentage based on collateral provided to the Protocol ",
    features: [
      "Supplying",
      "Borrowing",
      "Interest Earnings",
      "Liquidations",
      "Governance System",
    ],
    architecture:
      "Built using a combination of smart contracts for the core Protocol functionality and a modern Vue frontend for user interaction.",
    techStack: [
      "Solidity",
      "Vue",
      "TypeScript",
      "Foundry",
      "Hardhat",
      "OpenZeppelin",
      "TailwindCSS",
      "Ethers.js",
      "Web3.js",
    ],
    image: "/Sirio/Dashboard.png",
    additionalImages: [
      "/Sirio/Position.png",
      "/Sirio/Analytics.png",
      "/Sirio/Liquidations.png",
    ],
    link: "https://github.com/yourusername/project1",
    direction: "left",
  },
  {
    id: 2,
    title: "Dex Aggregator",
    description:
      "Dex Aggregator for Evm compatible networks which users can swap tokens and get best prices from multiple DEX's, Yield Farming for Crypto Degens",
    extendedDescription:
      "A comprehensive Aggregator platform that servers for a hub for Cardano and Evm Blockchains to swap tokens with their ecosystem and accroos chains to be implemented soon. Yield Farming for Users which want to make their money for them.",
    features: ["Swapping", "Evm Compatibale", "Yield Farming", "Dex Routing"],
    architecture:
      "Utilizes 1Inch, Beefy and other API's to gather best routes for swaps, and algorithm to find best routes among options",
    techStack: ["Next.js", "TypeScript", "Smart Contracts", "Haskell", "Wagmi"],
    image: "/Unikron/Dashboard.jpg",
    additionalImages: ["/project2-1.png", "/project2-2.png", "/project2-3.png"],
    link: "https://github.com/DaneelSven/Dex-Aggregator",
    direction: "right",
  },
  {
    id: 3,
    title: "Sarf P2P Family Loans",
    description:
      "A Gassless Meta Transaction flow between Arbitrum and Optimism, where a user can burn a token on ChainA and it will automatically mint the token on ChainB without the need to pay for the transaction.",
    extendedDescription:
      "Utilizing Gelato's cloud rollups as a service and Typescript functions combined with IPFS storage, users can seemlesly burn tokens on one chain it the Relayers will automatically detect a Burn event and sumbit a new Mintng tranasction on the destination chain where the user does not have to pay for either Transaction",
    features: [
      "Gasless Meta Transaction",
      "Relayers",
      "ERC-2771-Context Trusted Forwarder",
      "IPFS storage for automated scripts ",
      "Web3 Functions",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "OpenZeppelin",
    ],
    image: "/project2.png",
    additionalImages: ["/project2-1.png", "/project2-2.png", "/project2-3.png"],
    link: "https://github.com/yourusername/project2",
    direction: "left",
  },
  {
    id: 4,
    title: "Gassless Meta Transcations",
    description:
      "A Gassless Meta Transaction flow between Arbitrum and Optimism, where a user can burn a token on ChainA and it will automatically mint the token on ChainB without the need to pay for the transaction.",
    extendedDescription:
      "Utilizing Gelato's cloud rollups as a service and Typescript functions combined with IPFS storage, users can seemlesly burn tokens on one chain it the Relayers will automatically detect a Burn event and sumbit a new Mintng tranasction on the destination chain where the user does not have to pay for either Transaction",
    features: [
      "Gasless Meta Transaction",
      "Relayers",
      "ERC-2771-Context Trusted Forwarder",
      "IPFS storage for automated scripts ",
      "Web3 Functions",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "OpenZeppelin",
    ],
    image: "/project2.png",
    additionalImages: ["/project2-1.png", "/project2-2.png", "/project2-3.png"],
    link: "https://github.com/yourusername/project2",
    direction: "right",
  },
  {
    id: 5,
    title: "Dope Bears",
    description:
      "A Multitoken ERC-1155 marketplace with minting, buring, and forging capabilities.",
    extendedDescription:
      "A comprehensive NFT marketplace platform that enables users to mint, burn, and forge new nfts. Includes features like royalty payments, lazy minting, and collection management.",
    features: [
      "NFT Minting",
      "Forging",
      "Lazy Minting",
      "Royalty System",
      "Collection Management",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "Web3.js",
      "Wagmi",
      "OpenZeppelin",
    ],
    image: "/DB/Dashboard.png",
    additionalImages: ["/DB/Forging.png"],
    link: "https://github.com/DaneelSven/DopeBears",
    direction: "left",
  },

  {
    id: 6,
    title: "Alphapoint",
    description:
      "A Multitoken ERC-1155 marketplace with minting, buring, and forging capabilities.",
    extendedDescription:
      "A comprehensive NFT marketplace platform that enables users to mint, burn, and forge new nfts. Includes features like royalty payments, lazy minting, and collection management.",
    features: [
      "NFT Minting",
      "Forging",
      "Lazy Minting",
      "Royalty System",
      "Collection Management",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "Web3.js",
      "Wagmi",
      "OpenZeppelin",
    ],
    image: "/DB/Dashboard.png",
    additionalImages: ["/DB/Forging.png"],
    link: "https://github.com/DaneelSven/DopeBears",
    direction: "left",
  },
];

interface ProjectContentProps {
  project: Project;
  isExpanded: boolean;
}

const ProjectContent = ({ project, isExpanded }: ProjectContentProps) => {
  return (
    <motion.div
      className={`space-y-4 ${
        isExpanded ? "md:w-1/3" : "md:w-1/2"
      } overflow-hidden`}
      layout
      transition={{
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ originX: project.direction === "left" ? 0 : 1 }}
    >
      <motion.h2 className="text-3xl font-bold text-orangeAccent" layout>
        {project.title}
      </motion.h2>

      <motion.p className="text-gray-300" layout>
        {isExpanded ? project.extendedDescription : project.description}
      </motion.p>

      <motion.div className="space-y-4" layout>
        <motion.div
          className="space-y-4"
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.7 }}
          style={{ overflow: "hidden" }}
        >
          {project.features && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-orangeAccent">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-orangeAccent">
                Architecture
              </h3>
              <p className="text-gray-300">{project.architecture}</p>
            </div>
          )}
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-orangeAccent">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.7 }}
          style={{ overflow: "hidden" }}
        >
          {isExpanded && (
            <Link
              href={project.link}
              target="_blank"
              className="inline-block px-6 py-3 bg-[#ff9902] text-white rounded-lg hover:bg-[#ff9902]/90 transition-colors"
            >
              View Project →
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// components/ProjectImages.tsx
interface ProjectImagesProps {
  project: Project;
  isExpanded: boolean;
}

const ProjectImages = ({ project, isExpanded }: ProjectImagesProps) => {
  return (
    <motion.div
      className={`${isExpanded ? "md:w-2/3" : "md:w-1/2"} overflow-hidden`}
      layout
      transition={{
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ originX: project.direction === "left" ? 0 : 1 }}
    >
      <motion.div className={isExpanded ? "grid grid-cols-2 gap-4" : ""} layout>
        <motion.div
          className={`${
            isExpanded ? "col-span-2" : ""
          } aspect-video relative rounded-lg overflow-hidden`}
          layout
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {isExpanded && (
          <motion.div className="col-span-2 grid grid-cols-2 gap-4">
            {project.additionalImages?.map((img, i) => (
              <motion.div
                key={i}
                className="aspect-video relative rounded-lg overflow-hidden bg-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.2 + i * 0.15,
                }}
              >
                <Image
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// components/ProjectCard.tsx
const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const duration = 0.7;

  // Create a container style based on direction
  const containerStyle = `flex flex-col ${
    project.direction === "left" ? "md:flex-row" : "md:flex-row-reverse"
  } items-center gap-8`;

  return (
    <motion.div
      initial={{ x: project.direction === "left" ? -300 : 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex ${
        project.direction === "left" ? "justify-start" : "justify-end"
      } mb-32 relative`}
    >
      <motion.div
        className={`p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm
                   ${isExpanded ? "w-full max-w-[1200px]" : "w-[800px]"} ${
          isExpanded ? "" : "flex justify-center"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        layout
        transition={{ duration }}
      >
        <motion.div
          className={containerStyle}
          layout
          style={{ originX: project.direction === "left" ? 0 : 1 }}
        >
          <ProjectContent project={project} isExpanded={isExpanded} />
          <ProjectImages project={project} isExpanded={isExpanded} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Page = () => {
  const [columnCount, setColumnCount] = useState(12);
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

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Main Hexagon Background */}
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

      {/* Counter-rotating Hexagon Background */}
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

      <nav
        style={{ position: "relative", zIndex: 30 }}
        className="px-6 py-4 flex justify-between items-center"
      >
        <Image src="/logo.png" alt="Portrait" width={150} height={100} />{" "}
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
               hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
               text-orangeAccent"
          >
            Home
          </Link>
          <button
            className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
               hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
               text-orangeAccent"
          >
            <Link href="/projects">Projects</Link>{" "}
          </button>

          <button
            className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
               hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
               text-orangeAccent"
          >
            <Link href="/about">About</Link>{" "}
          </button>

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
      </nav>

      <main style={{ position: "relative", zIndex: 30 }} className="px-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold text-orangeAccent mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-400">
              A showcase of some cool Projects and Personal MVPs throughout my
              blockchain development journey
            </p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 75%, #0a0a0a 100%)",
        }}
      />
    </div>
  );
};

export default Page;

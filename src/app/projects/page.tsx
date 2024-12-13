"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import HexagonGrid from "@/components/HexagonGrid";
import {} from "react";

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

interface NavLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
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
    additionalImages: ["/Sirio/Position.png", "/Sirio/Analytics.png"],
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
    link: "https://github.com/DaneelSven/Dex-Aggregator",
    direction: "right",
  },
  {
    id: 3,
    title: "RWA Property Management",
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
    image: "/RWA/rwa.png",
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
      "Develop components into microservices and responsibility abstraction, Signing Service, Sending Service.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "OpenZeppelin",
    ],
    image: "/META/meta.png",
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
    title: "Alphapoint SAS Exchange",
    description:
      "Wallet developer Integrating and developing various layer-1 Blockhain wallet solutions",
    extendedDescription:
      "Developed several layer-1 Blockchain integrations (Solana, Avalanche, Polkadot, etc) ensuring safe and secure cyrpto exchange functionality. Developed an EVM-based MVP featuring Minimal Proxy Contracts with a factory pattern, utilizing CREATE2 for efficient generation of smart contract wallets",
    features: [
      "Address Generation",
      "Withdrawal",
      "Deposit",
      "Staking",
      "Blockchain Integration",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards.",
    techStack: [
      "Solidity",
      "TypeScript",
      "Smart Contracts",
      "Hierarchical Derivation ",
      "BIP-44",
      "BIP-32",
      "OpenZeppelin",
    ],
    image: "/ALPHA/alpha.png",
    link: "https://github.com/DaneelSven/DopeBears",
    direction: "right",
  },
];

interface ProjectContentProps {
  project: Project;
  isExpanded: boolean;
}

interface ProjectImagesProps {
  project: Project;
  isExpanded: boolean;
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

const ProjectContent = ({ project, isExpanded }: ProjectContentProps) => {
  return (
    <motion.div
      className={`space-y-4 ${
        isExpanded ? "md:w-1/3" : "md:w-1/2"
      } overflow-hidden`}
      layout
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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
const ProjectImages = ({ project, isExpanded }: ProjectImagesProps) => {
  return (
    <motion.div
      className={`${
        isExpanded ? "md:w-2/3" : "md:w-1/2"
      } overflow-hidden w-full`}
      layout
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Single Image - Always visible in both mobile and desktop */}
      <motion.div
        className="w-full aspect-video relative rounded-lg overflow-hidden mb-4"
        layout
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Additional images - only show when expanded on desktop */}
      {isExpanded && project.additionalImages && (
        <motion.div className="hidden md:grid md:grid-cols-2 gap-4">
          {project.additionalImages.map((img, i) => (
            <motion.div
              key={i}
              className="aspect-video relative rounded-lg overflow-hidden bg-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const duration = 0.7;

  return (
    <div className="mb-32 md:overflow-visible overflow-hidden">
      {" "}
      {/* Only hidden on mobile */}
      <motion.div
        initial={{ x: project.direction === "left" ? -300 : 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex ${
          project.direction === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.div
          className={`p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                     hover:border-orangeAccent/50 transition-colors backdrop-blur-sm
                     ${isExpanded ? "w-full max-w-[1200px]" : "w-[800px]"}`}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
          transition={{
            layout: { duration: 0.7 },
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={`flex flex-col ${
              project.direction === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center gap-8`}
            layout
          >
            <ProjectContent project={project} isExpanded={isExpanded} />
            <ProjectImages project={project} isExpanded={isExpanded} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Page = () => {
  const [columnCount, setColumnCount] = useState(12);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const size = isMobile ? 40 : 80;
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

      <main className="relative z-30 px-4 md:px-6 pt-10 md:pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-20"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-orangeAccent mb-4">
              My Projects
            </h1>
            <p className="text-base md:text-xl text-gray-400">
              A showcase of some cool Projects and Personal MVPs throughout my
              blockchain development journey
            </p>
          </motion.div>

          <div>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 75%, #0a0a0a 100%)",
        }}
      />
    </div>
  );
};

export default Page;

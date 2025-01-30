"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HexagonGrid from "@/components/HexagonGrid";
import NavBar from "@/components/NavBar";
import { ChevronDown } from "lucide-react";
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
      "Developed a decentralized Lending and Borrowing Protocol with around 3M TVL at launch. Deployed on Hedera Hashgraph with , Supply, Borrow, Withdraw, Repay, and Liquidations functionalities.",
    extendedDescription:
      "Built from the ground up using Solidity for smart contracts and React for the frontend. Includes Machine Learning to predict and calcualte healthy loans. Users can borrow up to a certain percentage based on collateral provided to the Protocol. It has a built in Oracle system which gets prices from Supra and has a backup Time averaged Price Oracle in case Supra fails or has some sort of mainntainance on our tokens.",
    features: [
      "Oracle",
      "Supplying",
      "Borrowing",
      "Interest Earnings",
      "Liquidations",
      "Governance System",
      "Twap Oracle",
    ],
    architecture:
      "Built using a combination of smart contracts, functionality tested with Unit and Fuzzing test as well as static analysis for the core Protocol functionality and a modern Vue frontend for user interaction, with a kubernetes service.",
    techStack: [
      "Solidity",
      "Vue",
      "TypeScript",
      "Foundry",
      "Hardhat",
      "OpenZeppelin",
      "Kubernetes",
      "TailwindCSS",
      "Ethers.js",
      "Web3.js",
    ],
    image: "/Sirio/Dashboard.png",
    additionalImages: ["/Sirio/Position.png", "/Sirio/Analytics.png"],
    link: "https://app.sirio.finance/",
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
      "A Real World Asset Tokenisation Property Management System, where investors can buy shares of tokenized properties and earn percentual rent based on shares owned in the property.",
    extendedDescription:
      "Utilizing Factory Pattern with Nft's representing ownership of properties Landlords can tokenize properties or apartement complexes and investors can buy shares in the property, making it more avialable and easily accessible for people to buy realastate with less starting capital.",
    features: [
      "Soldity",
      "Cross-Chain",
      "IFPS",
      "Nft's",
      "Property Management",
    ],
    architecture:
      "Utilizes IPFS for decentralized storage and implements ERC-721 and ERC-1155 standards. Utilized Factory Contract to deploy child contracts and implements upgradable proxy pattern",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "OpenZeppelin",
      "Foundry",
    ],
    image: "/RWA/rwa.png",
    link: "https://github.com/DaneelSven/rwa-property-management-crosschain",
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
      "Cross-chain comunication with automated Typescript functions deployed on IFPS listening to events on chains",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "IPFS",
      "Smart Contracts",
      "OpenZeppelin",
    ],
    image: "/META/meta.png",
    link: "https://github.com/DaneelSven/Gelato-Briging",
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
      "Typescript backend with Dockerized services running in client environments. Developed components into microservices and responsibility abstraction, Signing Service, Sending Service.",
    techStack: [
      "Solidity",
      "TypeScript",
      "Smart Contracts",
      "Hierarchical Derivation ",
      "BIP-44",
      "BIP-32",
      "OpenZeppelin",
      "Docker",
      "Linux",
    ],
    image: "/ALPHA/alpha.png",
    link: "private",
    direction: "right",
  },
];

const PrivateRepoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#0a0a0a] p-6 rounded-lg border border-orangeAccent/20 relative z-10 max-w-md w-full"
      >
        <h3 className="text-xl font-semibold text-orangeAccent mb-4">
          Private Repository
        </h3>
        <p className="text-gray-300 mb-6">
          Sorry, this project repository is currently private. Please check back
          later or contact me for more information.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                   hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
                   text-orangeAccent w-full text-center"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

interface ProjectContentProps {
  project: Project;
  isExpanded: boolean;
}

interface ProjectImagesProps {
  project: Project;
  isExpanded: boolean;
}

const ProjectContent = ({ project, isExpanded }: ProjectContentProps) => {
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const isPrivate = project.link.includes("private"); // Check if repo is private

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
          {isExpanded &&
            (isPrivate ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPrivateModal(true);
                }}
                className="inline-block px-6 py-3 bg-[#ff9902] text-white rounded-lg hover:bg-[#ff9902]/90 transition-colors"
              >
                View Project →
              </button>
            ) : (
              <Link
                href={project.link}
                target="_blank"
                className="inline-block px-6 py-3 bg-[#ff9902] text-white rounded-lg hover:bg-[#ff9902]/90 transition-colors"
              >
                View Project →
              </Link>
            ))}
        </motion.div>
      </motion.div>

      <PrivateRepoModal
        isOpen={showPrivateModal}
        // @ts-expect-error: Necessary to ignore due to mismatched type for onClose function
        onClose={(e) => {
          e.stopPropagation();
          setShowPrivateModal(false);
        }}
      />
    </motion.div>
  );
};

const ProjectImages = ({ project, isExpanded }: ProjectImagesProps) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleImageClick = (e: React.MouseEvent, image: string) => {
    e.stopPropagation();
    setActiveImage(image);
    setShowImageModal(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage(null);
    setShowImageModal(false);
  };

  return (
    <motion.div
      className={`${
        isExpanded ? "md:w-2/3" : "md:w-1/2"
      } overflow-hidden w-full`}
      layout
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div className="w-full aspect-video relative rounded-lg overflow-hidden mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover cursor-pointer"
          onClick={(e) => handleImageClick(e, project.image)}
        />
      </motion.div>

      {isExpanded && project.additionalImages && (
        <motion.div className="grid md:grid-cols-2 gap-4">
          {project.additionalImages.map((img, i) => (
            <motion.div
              key={i}
              className="aspect-video relative rounded-lg overflow-hidden bg-gray-700/50"
            >
              <Image
                src={img}
                alt={`${project.title} detail ${i + 1}`}
                fill
                className="object-cover cursor-pointer"
                onClick={(e) => handleImageClick(e, img)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>
            <img
              src={activeImage}
              alt="Project Preview"
              className="w-auto max-w-full h-auto max-h-[90vh] rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectCardOld = ({ project }: { project: Project }) => {
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
        exit={{
          x: project.direction === "left" ? -300 : 300,
          opacity: 0,
        }}
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

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div className="mb-32 md:overflow-visible overflow-hidden">
      <motion.div
        initial={{
          x: project.direction === "left" ? -300 : 300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: project.direction === "left" ? -300 : 300,
          opacity: 0,
        }}
        viewport={{
          once: false,
          amount: isMobile ? 0.1 : isTablet ? 0.2 : isDesktop ? 0.3 : 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`flex ${
          project.direction === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.div
          className={`p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                     hover:border-orangeAccent/50 transition-colors backdrop-blur-sm relative
                     ${isExpanded ? "w-full max-w-[1200px]" : "w-[800px]"}`}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
          transition={{
            layout: { duration: 0.7 },
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute top-6 right-6 text-orangeAccent"
            initial={{ rotate: 0 }}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} />
          </motion.div>

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

      <NavBar />

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

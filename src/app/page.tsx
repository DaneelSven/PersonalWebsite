"use client";
import HexagonGrid from "@/components/HexagonGrid";
import { Github, Linkedin, FileDown, Menu } from "lucide-react";
import React, { useEffect, ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const LandingPage = () => {
  const [columnCount, setColumnCount] = useState(12);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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

  const [showCalendly] = useState(false);

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

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Hexagon Grids */}
      <div
        className="absolute inset-0 overflow-hidden z-1"
        style={{
          top: "-10%",
          height: "80vh",
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>
      <div
        className="absolute inset-0 overflow-hidden z-1"
        style={{
          top: "40%",
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

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        <main className="relative z-30 px-4 md:px-6 pt-10 md:pt-20">
          <div className="max-w-6xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <Image
                src="/me.png"
                alt="Portrait"
                width={150}
                height={150}
                className="rounded-full border-4 border-[#ff9902]"
              />
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl md:text-5xl font-bold text-orangeAccent text-center md:text-left">
                  Sven Daneel
                </h1>
                <div className="flex gap-3 mt-4">
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
                    <FileDown size={24} />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-2xl text-orangeAccent mb-4 md:mb-8 text-center md:text-left">
              Solidity | Slither | Fuzzing | Web3 | Defi | Typescript | Evm |
              Hardhat | Foundry
            </p>

            <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 text-center md:text-left">
              A Blockchain Engineer with 4+ years experience, deeply involved in
              Distributed Ledger Technologies. Specializing in smart contract
              development, security, and scalable blockchain infrastructures.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <NavLink href="https://calendly.com/sven4696" external>
                Book a Meeting
              </NavLink>
              <NavLink href="/projects">View Projects</NavLink>
            </div>
          </div>
        </main>
      </div>

      {/* Feature Boxes Section */}
      <section className="relative z-20 px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Blockchain Development Box */}
          <div className="p-4 md:p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-orangeAccent mb-4">
              Blockchain Development
            </h3>
            <p className="text-gray-300 mb-4">
              Expertise in developing secure and efficient smart contracts, with
              a focus on scalability and optimal gas optimization, with future
              upgradability in mind and safeguards against common exploits.
            </p>
            <p className="text-gray-300">
              Solidity Team Lead underwent complete Smart contract development
              life cycle with auditing and deployed production mainnet Lending &
              Borrowing Protocol on Hedera Hashgraph.
            </p>
          </div>

          {/* Security Mindset Box */}
          <div className="p-4 md:p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-orangeAccent mb-4">
              Security Mindset
            </h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security analysis of smart contracts and blockchain
              applications, combining static analysis, dynamic testing, and
              manual auditing to ensure robust protection against
              vulnerabilities.
            </p>
            <p className="text-gray-300">
              Specializing in automated vulnerability scanning, fuzz testing of
              critical functions. Advanced tooling expertise in Slither,
              Mythril, and custom security frameworks.
            </p>
          </div>

          {/* Tech Stacks */}
          <div className="p-4 md:p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-orangeAccent mb-4">
              Backend Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Solidity", url: "https://soliditylang.org/" },
                { name: "Typescript", url: "https://www.typescriptlang.org/" },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "Rust", url: "https://www.rust-lang.org/" },
                { name: "Java", url: "https://www.java.com/" },
                {
                  name: "C#",
                  url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                },
                { name: "Ethers.js", url: "https://docs.ethers.io/" },
                { name: "Foundry", url: "https://book.getfoundry.sh/" },
                { name: "Gasless meta-tx", url: "https://docs.opengsn.org/" },
                {
                  name: "Account Abstraction",
                  url: "https://ethereum.org/en/roadmap/account-abstraction/",
                },
                {
                  name: "Trusted Forwarders",
                  url: "https://eips.ethereum.org/EIPS/eip-2771",
                },
                {
                  name: "Optimistic Rollups",
                  url: "https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/",
                },
                {
                  name: "ZK-Rollups",
                  url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/",
                },
                {
                  name: "ERC-20",
                  url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",
                },
                {
                  name: "ERC-721",
                  url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/",
                },
                {
                  name: "ERC-1155",
                  url: "https://eips.ethereum.org/EIPS/eip-1155",
                },
                {
                  name: "ERC-1167",
                  url: "https://eips.ethereum.org/EIPS/eip-1167",
                },
                {
                  name: "ERC-4337",
                  url: "https://eips.ethereum.org/EIPS/eip-4337",
                },
                {
                  name: "Upgradable Patterns",
                  url: "https://docs.openzeppelin.com/upgrades-plugins/1.x/",
                },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border 
                    border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors 
                    backdrop-blur-sm text-white text-xs md:text-sm"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>

          {/* Frontend Stack Box */}
          <div className="p-4 md:p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-orangeAccent mb-4">
              Frontend & Databases & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "React", url: "https://reactjs.org/" },
                { name: "Angular", url: "https://angular.io/" },
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "Redux", url: "https://redux.js.org/" },
                { name: "Wagmi", url: "https://wagmi.sh/" },
                { name: "Metamask", url: "https://metamask.io/" },
                { name: "WalletConnect", url: "https://walletconnect.com/" },
                { name: "MySQL", url: "https://www.mysql.com/" },
                { name: "Mariadb", url: "https://mariadb.org/" },
                { name: "SQLite", url: "https://www.sqlite.org/" },
                { name: "MongoDB", url: "https://www.mongodb.com/" },
                { name: "Graph", url: "https://thegraph.com/" },
                { name: "Redis", url: "https://redis.io/" },
                { name: "Docker", url: "https://www.docker.com/" },
                { name: "GraphQL", url: "https://graphql.org/" },
                { name: "gRPC", url: "https://grpc.io/" },
                { name: "Pub-Sub", url: "https://cloud.google.com/pubsub" },
                {
                  name: "Web sockets",
                  url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
                },
                {
                  name: "Winston",
                  url: "https://github.com/winstonjs/winston",
                },
                { name: "Cairo", url: "https://www.cairo-lang.org/" },
                { name: "ZK-Sync", url: "https://zksync.io/" },
                { name: "Alchemy", url: "https://www.alchemy.com/" },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border 
                    border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors 
                    backdrop-blur-sm text-white text-xs md:text-sm"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative z-20 px-4 md:px-6 py-12 md:py-16 bg-gray-900/50 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t hesitate and reach out to me.
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8">
            Let&apos;s Build together and create the decentralized world
          </p>
          <NavLink href="https://calendly.com/sven4696" external>
            Book a Meeting
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

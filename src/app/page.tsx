"use client";
import HexagonGrid from "@/components/HexagonGrid";
import { Github, Linkedin, Download, FileDown } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
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

  const [showCalendly] = useState(false);

  useEffect(() => {
    // Load Calendly script when needed
    if (showCalendly) {
      console.log("is showing");
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
    <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col">
      {" "}
      {/* Added flex and flex-col */}
      {/* Your existing hexagon section - unchanged */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          top: "-10%",
          height: "80vh", // Added height limit
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
        }}
      >
        <HexagonGrid columnCount={columnCount} size={size} />
      </div>
      {/* Navigation */}
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
      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        <main
          style={{ position: "relative", zIndex: 30 }}
          className="px-6 pt-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-4">
              {/* Portrait Image */}
              <Image
                src="/me.png" // Make sure to place your image in the public folder
                alt="Portrait"
                width={150}
                height={150}
                className="rounded-full border-4 border-[#ff9902]" // Rounded with border color
              />
              <h1 className="text-5xl font-bold text-orangeAccent">
                Sven Daneel
              </h1>

              <div className="flex gap-3">
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

                {/* Download Resume Icon */}
                <a
                  href="/resume.pdf" // Link to your resume file
                  download="Sven_Daneel_Resume.pdf" // Sets the download filename
                  className="text-orangeAccent hover:text-white transition-colors"
                >
                  <FileDown size={24} />
                </a>
              </div>
            </div>
            <p className="text-xl text-gray-400 mb-8 ">
              A Blockchain Engineer with 4+ years experience, deeply involved in
              Distributed Ledger Technologies. Specializing in smart contract
              development, security, and scalable blockchain infrastructures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://calendly.com/sven4696"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
               hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
               text-orangeAccent"
              >
                Book a Meeting
              </a>
              <button
                className="px-6 py-3 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
                text-orangeAccent"
              >
                {/* Replace your current button with this */}
                <Link href="/projects">View Projects</Link>
              </button>
            </div>
          </div>
        </main>
      </div>
      {/* Feature Boxes Section */}
      <div>
        <section className="relative z-20 px-6 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blockchain Development + DeFi Solutions */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-orangeAccent mb-4">
                Blockchain Development
              </h3>
              <p className="text-gray-300 mb-4">
                Expertise in developing secure and efficient smart contracts,
                with a focus on scalability and optimal gas optimization, with
                future upgradabilly in mind and safe guard against common
                exploits.
              </p>
              <p className="text-gray-300">
                Solidity Team Lead underwent complete Smart contract development
                life cycle with auditing and deployed production mainnet Lending
                & Borrowing Protocol on Hedera Hashgraph.
              </p>
            </div>

            {/* Security Auditing */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-orangeAccent mb-4">
                Security Mindset
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security analysis of smart contracts and
                blockchain applications, combining static analysis, dynamic
                testing, and manual auditing to ensure robust protection against
                vulnerabilities.
              </p>
              <p className="text-gray-300">
                Specializing in automated vulnerability scanning, fuzz testing
                of critical functions. Advanced tooling expertise in Slither,
                Mythril, and custom security frameworks.
              </p>
            </div>

            {/* Backend Tech Stack */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-orangeAccent mb-4">
                Backend Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Solidity",
                  "Typescript",
                  "Node.js",
                  "Rust",
                  "Java",
                  "C#",
                  "Ethers.js",
                  "Foundry",
                  "Gasless meta-tx",
                  "Account Abstraction",
                  "Trusted Forwarders",
                  "Optimistic Rollups",
                  "ZK-Rolups",
                  "ERC-20",
                  "ERC-721",
                  "ERC-1155",
                  "ERC-1167",
                  "ERC-4337",
                  "Upgradable Patterns",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
                text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend & Databases Stack */}
            <div className="p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-orangeAccent mb-4">
                Frontend & Databases & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Angular",
                  "Next.js",
                  "Redux",
                  "Wagmi",
                  "Metamask",
                  "WalletConnect",
                  "MySQL",
                  "Mariadb",
                  "SQLite",
                  "MongoDB",
                  "Graph",
                  "Redis",
                  "Docker",
                  "GraphQL",
                  "gRPC",
                  "Pub-Sub",
                  "Web sockets",
                  "Winston",
                  "Cairo",
                  "ZK-Sync",
                  "Alchemy",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                hover:border-orangeAccent/50 transition-colors backdrop-blur-sm 
                text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Bottom Section with Build Message */}
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

export default LandingPage;

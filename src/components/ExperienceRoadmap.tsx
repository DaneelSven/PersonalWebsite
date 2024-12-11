import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  year: string;
  role: string;
  company: string;
  details: string;
}

interface YearDisplayProps {
  year: string;
}

interface ExperienceItemProps {
  item: Experience;
  index: number;
}

interface ExpandedDetails {
  [key: string]: string[];
}

const YearDisplay: React.FC<YearDisplayProps> = ({ year }) => {
  const years = year.split("-");

  return (
    <div className="relative">
      <motion.div
        className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-orangeAccent text-white font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        {years.length > 1 ? (
          <div className="flex flex-col items-center text-sm">
            <span>{years[1]}</span>
            <div className="w-8 h-px bg-white my-0.5 opacity-60" />
            <span>{years[0]}</span>
          </div>
        ) : (
          <span className="text-lg">{year}</span>
        )}
      </motion.div>
    </div>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedDetails: ExpandedDetails = {
    "Sirio Finance": [
      "Led development of smart contracts for lending protocol",
      "Implemented collateral management system",
      "Optimized gas consumption for all protocol operations",
      "Coordinated with auditors for security reviews",
    ],
    Unikron: [
      "Designed and implemented cross-chain DEX aggregator",
      "Built yield farming smart contracts with competitive APY calculations",
      "Integrated multiple EVM-compatible chains",
      "Developed Cardano native assets support",
    ],
    AlphaPoint: [
      "Integrated multiple blockchain networks into production systems",
      "Developed secure wallet management solutions",
      "Implemented multi-signature support for institutional clients",
      "Created automated testing suites for blockchain integrations",
    ],
    "Kongsberg Digital": [
      "Developed Azure-based access control system",
      "Created digital twin models for oil rig operations",
      "Implemented real-time data processing pipelines",
      "Built monitoring and alerting systems",
    ],
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative flex gap-8 items-start group"
    >
      <div className="flex flex-col items-center">
        <YearDisplay year={item.year} />
        <div
          className="w-0.5 bg-orangeAccent/20 absolute top-16 left-8 -translate-x-1/2 h-full 
                      group-last:h-20 transition-colors group-hover:bg-orangeAccent/40"
        />
      </div>

      <div className="flex-1 mb-16">
        <motion.div
          className="p-6 bg-gray-900/50 rounded-lg border border-orangeAccent/20 
                     hover:border-orangeAccent/50 transition-all backdrop-blur-sm
                     hover:shadow-lg hover:shadow-orangeAccent/5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onClick={toggleExpanded}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-orangeAccent">
                {item.role}
              </h3>
              <h4 className="text-sm text-gray-400 mb-2">{item.company}</h4>
              <p className="text-gray-300">{item.details}</p>
            </div>
            <div className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              {isExpanded ? (
                <ChevronUp className="text-orangeAccent" />
              ) : (
                <ChevronDown className="text-orangeAccent" />
              )}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-orangeAccent/20">
                  <ul className="space-y-2">
                    {expandedDetails[item.company].map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orangeAccent" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceRoadmap: React.FC = () => {
  const experiences: Experience[] = [
    {
      year: "2024",
      role: "Co-Founder & Solidity Team Lead",
      company: "Sirio Finance",
      details:
        "Led a team to deploy scalable Lending & Borrowing Protocol on Hedera Hashgraph",
    },
    {
      year: "2024",
      role: "Smart Contract Developer",
      company: "Unikron",
      details:
        "Developed DeFi solutions for DEX Aggregator for EVM and Cardano for swapping and yield farming protocols.",
    },
    {
      year: "2021-2023",
      role: "Senior Wallet Developer",
      company: "AlphaPoint",
      details:
        "Integrated Several Layer-1 and Layer-2 Blockchains into Production ready environments (Polkadot, Avalanche, Solana, Ethereum, etc.)",
    },
    {
      year: "2020-2021",
      role: "Full-Stack Developer",
      company: "Kongsberg Digital",
      details:
        "Developed HACK (Holistic Access Control Kognitwin) in Azure and development and refinement of Digital Twin models for oil rigs",
    },
  ];

  return (
    <section className="relative z-20 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-orangeAccent mb-12">
        My Experience Roadmap
      </h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((item, index) => (
          <ExperienceItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceRoadmap;

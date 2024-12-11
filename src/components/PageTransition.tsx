// // components/PageTransition.tsx
// import { motion } from "framer-motion";

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ duration: 0.3 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Then wrap your projects page:
// const ProjectsPage = () => {
//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-[#0a0a0a] py-20 px-4">
//         {/* ... rest of your projects page code ... */}
//       </div>
//     </PageTransition>
//   );
// };

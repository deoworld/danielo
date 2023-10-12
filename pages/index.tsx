// index.tsx
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

// Handles Remove NodeChild issue breaking the Experience section

// if (typeof Node === "function" && Node.prototype) {
//   const originalRemoveChild = Node.prototype.removeChild;
//   Node.prototype.removeChild = function (child) {
//     if (child.parentNode !== this) {
//       if (console) {
//         console.warn(
//           "Cannot remove a child from a different parent",
//           child,
//           this
//         );
//       }
//       return child;
//     }
//     return originalRemoveChild.apply(this, arguments);
//   };

//   const originalInsertBefore = Node.prototype.insertBefore;
//   Node.prototype.insertBefore = function (newNode, referenceNode) {
//     if (referenceNode && referenceNode.parentNode !== this) {
//       if (console) {
//         console.warn(
//           "Cannot insert before a reference node from a different parent",
//           referenceNode,
//           this
//         );
//       }
//       return newNode;
//     }
//     return originalInsertBefore.apply(this, arguments);
//   };
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Oriazowan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main
        className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"
        // ref={mainContentRef}
        // style={{ scrollBehavior: "smooth" }}
      >
        <Navbar />
        <div className="w-full xl:flex items-center gap-20 justify-between relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 top-0"
          >
            <LeftSide />
          </motion.div>
          <div className="w-full mx-auto p-4 xl:pl-32 xl:pr-32">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 top-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}

// import LeftSide from "@/components/LeftSide";
// import Navbar from "@/components/Navbar";
// import RightSide from "@/components/RightSide";
// import Banner from "@/components/Banner";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Head from "next/head";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Daniel Oriazowan</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/logo.ico" />
//       </Head>
//       <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
//         <Navbar />
//         <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
//           >
//             <LeftSide />
//           </motion.div>
//           <div className="h-[88vh] w-full mx-auto p-4">
//             <Banner />
//             <About />
//             <Experience />

//             {/* Projects */}
//             {/* Archive */}
//             {/* Contact */}
//             {/* Footer */}
//           </div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
//           >
//             <RightSide />
//           </motion.div>
//         </div>
//       </main>
//     </>
//   );
// }

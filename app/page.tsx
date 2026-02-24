// 
//  This is our page component
// 

// export default function Home() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//     </div>
//   );
// }


// <section> → Semantic HTML for a section of content
// id="hero" → Unique identifier (for navigation later)
// className → How we add CSS classes in JSX

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}
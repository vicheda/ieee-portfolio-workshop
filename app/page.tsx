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

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}
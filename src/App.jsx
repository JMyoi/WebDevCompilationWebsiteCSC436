import React from 'react';
import Header from './components/Header'
import SiteCard from '../src/components/SiteCard.jsx';
import Footer from './components/Footer';

function App() {
  const sites = [
    {
      id:1,
      title: "Who Wants to be a Web Developer?", 
      link: "https://github.com/diabeatz96/Who-Wants-to-be-a-Web-Developer", 
      description: "An interactive quiz game testing knowledge of HTML, CSS, and JavaScript, with support for custom quizzes!",
    },
    {
      id:2,
      title: "React Basics", 
      link: "https://github.com/diabeatz96/csc436ProjectWorkspace", 
      description: "This comprehensive course will take you from React beginner to confident developer. Each lesson builds upon the previous, with hands-on exercises and real-world examples. Learn React Fundementals, Props & Component Communication, Effects & Side Effects, and more.",
    },
    {
      id:3,
      title: "Project 2 Guide", 
      link: "https://csc436project2guide.netlify.app/", 
      description: "Interactive guide building a component based application using React. Includes idea generator, step by step guid, tips, and code snippits",
    },
    {
      id:4,
      title: "React Hooks Dashboard", 
      link: "https://github.com/diabeatz96/react-hooks-dashboard/tree/main", 
      description: "A comprehensive React educational project designed for teaching useState and useEffect hooks in a collaborative classroom environment. Students work on individual widgets that combine into a unified dashboard application. This project contains 25 self-contained widget components that progressively teach React hooks concepts.",
    },
    {
      id:5,
      title: "React Context Demo", 
      link: "https://csc436usecontext.netlify.app/", 
      description: "Learn how to use React Context and custom hooks to manage state across your application. A comprehensive educational project demonstrating React Context API and custom hooks patterns. This project is designed for teaching students how to manage global state without prop drilling. ",
    },
    {
      id:6,
      title: "Baldur's Gate 3 Boss Checklist", 
      link: "https://github.com/diabeatz96/bg3-boss-checklist", 
      description: "An educational React project that demonstrates fundamental React concepts through a D&D/Baldur's Gate 3 themed boss tracking application.",
    },
    {
      id:7,
      title: "Project 3: React + API Integration", 
      link: "https://project3review.netlify.app/", 
      description: "Learn how to build data-driven React applications by exploring progressive examples using the Dog CEO API. Learn basic fetch, interactive fetch, listing data, and search & filtering.",
    },

  ]

  return (
    <div className = " bg-gradient-to-r from-slate-700 to-zinc-700 ">
    
      <Header />
      <div className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 m-10  ">
        {sites.map(site =>(
            <SiteCard 
              title = {site.title}
              link = {site.link}
              description = {site.description}
            />
        ))
        }
      </div>
      <Footer/>
     

    </div>
  )
}

export default App

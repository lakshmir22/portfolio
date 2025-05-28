import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProjectIcon, GitHubIcon } from './Icons';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const Projects = () => {
  const titleRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1 });
  
  const projects: Project[] = [
    {
      title: 'Chatty: Secure and Decentralized Messaging App',
      description:
        'A decentralized, end-to-end encrypted chat app built with Solidity, React.js, and IPFS, enabling secure real-time messaging without central servers.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Solidity', 'IPFS', 'Web.js'],
      image: 'https://i.postimg.cc/q7BmVrFF/chatty.jpg',
      github: 'https://github.com/lakshmir22/Chatty',
      demo: 'https://chatty-phi-six.vercel.app/',
    },
    {
      title: ' Farm-Assure: Revolutionalizing Agriculture with Blockchain Technology',
      description:
        'A blockchain-based decentralized marketplace using Solidity and IPFS, enabling transparent crop trading, smart contracts, and real-time dashboards for farmers and buyers.',
      technologies: ['React', 'Node.js', 'Express', 'Ganache', 'Truffle', 'Solidity', 'IPFS', 'Web.js'],
      image: './farmer.png' ,
      github: 'https://github.com/lakshmir22/FarmAssure',
      demo: 'https://farm-assure-abin.vercel.app/',
    },
    {
      title: 'SwapSeva: Smart Barter Platform for Skills & Goods',
      description:
        'SwapSewa is a smart barter platform enabling seamless skill and goods exchange through intelligent matching, real-time chat, and community collaboration.',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC', 'PeerJS'],
      image: './swap-sewa.jpg',
      github: 'https://github.com/lakshmir22/Swap-Sewa',
      demo: 'https://github.com/lakshmir22',
    },
    
  ];
  
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      {/* Decorative top wave for smooth transition */}
      <div className="absolute -top-1 left-0 right-0 z-10 h-16 w-full overflow-hidden">
        <svg
          className="absolute bottom-0 h-16 w-full text-gray-50 dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="container pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-primary-light/10 px-4 py-1 text-sm font-medium text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark"
        >
          Projects
        </motion.div>
        
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="mb-16 text-3xl font-bold text-text-light dark:text-text-dark sm:text-4xl"
        >
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={projectVariants}
              className="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light/90 to-secondary-light/90 dark:from-primary-dark/90 dark:to-secondary-dark/90">
                  <ProjectIcon className="h-20 w-20 text-white" />
                </div>
                
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full items-center justify-center space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-3 text-gray-900 transition-transform duration-300 hover:scale-110"
                        aria-label="View code on GitHub"
                      >
                        <GitHubIcon className="h-6 w-6" />
                      </a>
                    )}
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-3 text-gray-900 transition-transform duration-300 hover:scale-110"
                        aria-label="View live demo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-semibold text-text-light dark:text-text-dark">
                  {project.title}
                </h3>
                
                <p className="mb-6 text-gray-600 dark:text-gray-300">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-light/10 px-3 py-1 text-xs font-medium text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 transition-colors hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark"
                    >
                      <GitHubIcon className="mr-2 h-5 w-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 transition-colors hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mr-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/lakshmir22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary px-8 py-3 text-base"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}; 

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import LakshmiImage from '@/assets/lassi pf.jpg';

export const About = () => {
  const titleRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1 });
  const imageRef = useScrollAnimation({ direction: 'from-left', threshold: 0.1, delay: 200 });
  const contentRef = useScrollAnimation({ direction: 'from-right', threshold: 0.1, delay: 300 });
  
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
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
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
          About Me
        </motion.div>
        
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="mb-16 text-3xl font-bold text-text-light dark:text-text-dark sm:text-4xl"
        >
          Get to know me better
        </h2>
        
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5"></div>
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary-light shadow-xl dark:border-primary-dark">
              {/* Real image instead of placeholder */}
              <Image 
                src={LakshmiImage} 
                alt="Lakshmi Rai" 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 320px"
                priority
                className="rounded-full"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-primary-light/20 dark:bg-primary-dark/20"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div 
              className="absolute -left-5 top-10 h-12 w-12 rounded-full bg-secondary-light/20 dark:bg-secondary-dark/20"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              }}
            />
          </div>
          
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-semibold text-text-light dark:text-text-dark">
              Software Engineer & Problem Solver
            </h3>
            
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm Lakshmi Rai, a passionate software engineer with expertise in building
              scalable web applications and solving complex problems. With a strong foundation in
              computer science and a keen eye for detail, I strive to create efficient and elegant
              solutions.
            </p>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              My journey in software development began during my undergraduate studies, where I
              discovered my passion for coding. Since then, I've worked on various projects, from
              small web applications to large-scale enterprise systems, constantly learning and
              improving my skills.
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h4 className="mb-3 font-semibold text-text-light dark:text-text-dark">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech in Computer Science<br />
                  Lokmanya Tilak College of Engineering
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h4 className="mb-3 font-semibold text-text-light dark:text-text-dark">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  5+ Years<br />
                  Software Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
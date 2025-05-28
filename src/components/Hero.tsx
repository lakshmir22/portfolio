import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Hero = () => {
  const titleRef = useScrollAnimation({ direction: 'from-left', threshold: 0.1 });
  const subtitleRef = useScrollAnimation({ direction: 'from-right', threshold: 0.1, delay: 200 });
  const ctaRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1, delay: 400 });
  
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-background-light to-secondary-light/5 dark:from-primary-dark/10 dark:via-background-dark dark:to-secondary-dark/10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-light/10 dark:bg-primary-dark/20"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.2, 0.7],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      {/* Large decorative circle */}
      <motion.div 
        className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      
      {/* Small decorative circle */}
      <motion.div 
        className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-secondary-light/20 to-primary-light/20 dark:from-secondary-dark/20 dark:to-primary-dark/20"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-full bg-primary-light/10 px-6 py-2 text-sm font-medium text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark"
        >
          Software Engineer
        </motion.div>
        
        <h1
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark sm:text-6xl md:text-7xl"
        >
          <span className="block">Hi, I'm</span>
          <span className="mt-2 block bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent dark:from-primary-dark dark:to-secondary-dark">
            Lakshmi Rai
          </span>
        </h1>
        
        <h2
          ref={subtitleRef as React.RefObject<HTMLHeadingElement>}
          className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 dark:text-gray-300 sm:text-2xl"
        >
          A passionate Software Engineer specializing in building exceptional digital experiences with modern technologies
        </h2>
        
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-6 sm:space-y-0"
        >
          <a href="https://www.dropbox.com/scl/fi/tir1hwwgwwha2iwasth4i/resume-6.pdf?rlkey=h17udfq24tpaiqojiavczs7am&st=pv4upidx&dl=0" className="btn btn-primary px-8 py-3 text-base">
          Resume
          </a>
          <a href="#contact" className="btn btn-outline px-8 py-3 text-base">
          View My Work
          </a>
        </div>
        
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center space-x-8"
        >
          <a
            href="https://github.com/lakshmir22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/lakshmi-rai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-8 w-8" />
          </a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}; 

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CodeIcon } from './Icons';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'blockchain' | 'Core';
}

export const Skills = () => {
  const titleRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1 });
  const skillsRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1, delay: 200 });
  
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'API integration', level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'SQL', level: 85, category: 'backend' },
    { name: 'API Design', level: 70, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'GitHub', level: 75, category: 'tools' },
    { name: 'Postman', level: 70, category: 'tools' },
    { name: 'VS Code', level: 85, category: 'tools' },
    
    // Languages
    { name: 'JavaScript', level: 80, category: 'languages' },
    { name: 'Java', level: 90, category: 'languages' },
    { name: 'C', level: 80, category: 'languages' },
    { name: 'Python', level: 60, category: 'languages' },
    
    // Blockchain
    { name: 'Solidity', level: 75, category: 'blockchain' },
    { name: 'Ganache', level: 80, category: 'blockchain' },
    { name: 'Pinata/IPFS', level: 80, category: 'blockchain' },
    { name: 'Web3.js', level: 80, category: 'blockchain' },

    // Core
    { name: 'DBMS', level: 90, category: 'Core' },
    { name: 'OS', level: 80, category: 'Core' },
    { name: 'Computer Network', level: 80, category: 'Core' },

  ];

  
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'languages', name: 'Languages' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'Core', name: 'Core Concepts' },
  ];
  
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="mb-12 text-center text-3xl font-bold text-text-light dark:text-text-dark sm:text-4xl"
        >
          Skills & Expertise
        </h2>
        
        <div
          ref={skillsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {categories.map((category) => (
            <div key={category.id} className="card p-6">
              <div className="mb-4 flex items-center">
                <CodeIcon className="mr-3 h-6 w-6 text-primary-light dark:text-primary-dark" />
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between">
                        <span className="font-medium text-text-light dark:text-text-dark">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <motion.div
                          className="h-full rounded-full bg-primary-light dark:bg-primary-dark"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
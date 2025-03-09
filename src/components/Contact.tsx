import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './Icons';

export const Contact = () => {
  const titleRef = useScrollAnimation({ direction: 'from-bottom', threshold: 0.1 });
  const formRef = useScrollAnimation({ direction: 'from-left', threshold: 0.1, delay: 200 });
  const infoRef = useScrollAnimation({ direction: 'from-right', threshold: 0.1, delay: 300 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      {/* Decorative top wave for smooth transition */}
      <div className="absolute -top-1 left-0 right-0 z-10 h-16 w-full overflow-hidden">
        <svg
          className="absolute bottom-0 h-16 w-full text-white dark:text-background-dark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
          Contact
        </motion.div>
        
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="mb-16 text-3xl font-bold text-text-light dark:text-text-dark sm:text-4xl"
        >
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div ref={formRef as React.RefObject<HTMLDivElement>}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text-light dark:text-text-dark"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input py-3 text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-light dark:text-text-dark"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input py-3 text-base"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-light dark:text-text-dark"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input py-3 text-base"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-400"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-400"
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
            </form>
          </div>
          
          <div
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold text-text-light dark:text-text-dark">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Feel free to reach out to me for any questions, project inquiries, or just to say
                hello. I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <EmailIcon className="mr-4 h-8 w-8 text-primary-light dark:text-primary-dark" />
                <a
                  href="mailto:lakshmi2004rai@gmail.com"
                  className="text-lg text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  lakshmi2004rai@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <GitHubIcon className="mr-4 h-8 w-8 text-primary-light dark:text-primary-dark" />
                <a
                  href="https://github.com/lakshmir22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  github.com/lakshmir22
                </a>
              </div>
              
              <div className="flex items-center">
                <LinkedInIcon className="mr-4 h-8 w-8 text-primary-light dark:text-primary-dark" />
                <a
                  href="https://linkedin.com/in/lakshmi-rai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  linkedin.com/in/lakshmi-rai
                </a>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg bg-primary-light/5 p-6 dark:bg-primary-dark/5">
              <h4 className="mb-3 font-semibold text-text-light dark:text-text-dark">
                Let's Work Together
              </h4>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Looking for a dedicated software engineer for your next project?
              </p>
              <a href="#contact" className="btn btn-primary inline-block">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
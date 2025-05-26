import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="#home" className="text-xl font-bold text-primary-light dark:text-primary-dark">
              Lakshmi Rai
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              A passionate software engineer dedicated to creating exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text-light dark:text-text-dark">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text-light dark:text-text-dark">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lakshmir22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/lakshmi-rai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@lakshmirai.com"
                className="text-gray-600 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
                aria-label="Email"
              >
                <EmailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Lakshmi Rai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 
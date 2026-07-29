export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-4">About</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Engineering leader building distributed systems for real-time operations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/irwinbraganza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/irwinbraganza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:irwin.braganza@deliveryhero.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                >
                  Architecture
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            © {currentYear} Irwin Braganza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '@/lib/api';
import { Profile } from '@/lib/types';

export const Footer = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getProfile().then(setProfile).catch(console.error);
  }, []);

  const emailLink = profile?.links.email
    ? (profile.links.email.startsWith('mailto:') ? profile.links.email : `mailto:${profile.links.email}`)
    : 'mailto:irwinbraganza@gmail.com';

  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="font-semibold text-slate-50 mb-4">About</h3>
            <p className="text-sm text-slate-400">
              Engineering leader building distributed systems for real-time operations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/irwinbraganza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/irwinbraganza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-50 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  Architecture
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400 text-center">
            © {currentYear} Irwin Braganza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

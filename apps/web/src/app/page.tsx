'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { CaseStudies } from '@/components/sections/case-studies';
import { ArchitectureSection } from '@/components/sections/architecture';
import { TechnologiesSection } from '@/components/sections/technologies';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { getProfile, getProjects, getArchitecture } from '@/lib/api';
import { Profile, Projects, Architecture } from '@/lib/types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Projects | null>(null);
  const [architecture, setArchitecture] = useState<Architecture | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [profileData, projectsData, architectureData] = await Promise.all([
          getProfile(),
          getProjects(),
          getArchitecture()
        ]);

        setProfile(profileData);
        setProjects(projectsData);
        setArchitecture(architectureData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!profile || !projects || !architecture) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            Error loading portfolio data
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        name={profile.name}
        title={profile.title}
        tagline={profile.tagline}
        secondaryTagline={profile.secondaryTagline}
        links={profile.links}
      />

      <About
        about={profile.about}
        leadershipThemes={profile.leadershipThemes}
        leadershipRecognition={profile.leadershipRecognition}
      />

      <CaseStudies caseStudies={projects.caseStudies} />

      <ArchitectureSection data={architecture} />

      <TechnologiesSection technologies={architecture.technologies} />

      <Experience />

      <Education />

      <Contact email={profile.links.email} />
    </>
  );
}

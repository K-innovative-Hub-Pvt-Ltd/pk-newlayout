import React from 'react';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/sections/Hero';
import BrandStory from '@/components/sections/BrandStory';
import WhyPallavi from '@/components/sections/WhyPallavi';
import LearningJourney from '@/components/sections/LearningJourney';
import ADayAtPallavi from '@/components/sections/ADayAtPallavi';
import CampusExperience from '@/components/sections/CampusExperience';
import Teachers from '@/components/sections/Teachers';
import DevelopmentOutcomes from '@/components/sections/DevelopmentOutcomes';
import Campuses from '@/components/sections/Campuses';
import Ecosystem from '@/components/sections/Ecosystem';
import ParentStories from '@/components/sections/ParentStories';
import Leadership from '@/components/sections/Leadership';
import CampusFinder from '@/components/sections/CampusFinder';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <BrandStory />
      <WhyPallavi />
      <LearningJourney />
      <ADayAtPallavi />
      <CampusExperience />
      <div className="split-section-wrapper">
        <Teachers />
        <DevelopmentOutcomes />
      </div>
      <Campuses />
      <Ecosystem />
      <ParentStories />
      <Leadership />
      <CampusFinder />
      <FinalCTA />
    </SiteLayout>
  );
}

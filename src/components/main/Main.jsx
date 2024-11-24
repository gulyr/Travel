import React from 'react'
import HomeSection from './HomeSection'
import AboutSection from './AbouSection'
import PopularSection from './PopularSection'
import ExploreSection from './ExploreSection'
import JoinSection from './JoinSection'

const Main = () => {
  return (
    <main className="main">
      <HomeSection />
      <AboutSection />
      <PopularSection />
      <ExploreSection />
      <JoinSection />
    </main>
  )
}

export default Main

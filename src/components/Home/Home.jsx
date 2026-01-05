import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import FeaturedArts from '../FeaturedArts/FeaturedArts';
import TopArtists from '../TopArtists/TopArtists';
import CommunityHighlights from '../CommunityHighlights/CommunityHighlights';
import FAQ from './FAQ';
import Newsletter from './Newsletter';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import CuratedExhibition from './CuratedExhibition';

const Home = () => {
  const [featuredArts, setFeaturedArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://artopia-assignment.vercel.app/featured-arts')
      .then(res => res.json())
      .then(data => {
        setFeaturedArts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch featured arts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col space-y-20 md:space-y-32 pb-20">
      
      <Banner />

      
      <FeaturedArts featuredArts={featuredArts} loading={loading} />
      
      
      <TopArtists />
      <CommunityHighlights />

      
      <Testimonials />
      <Statistics />

      
      <FAQ />

     <CuratedExhibition></CuratedExhibition>
      <section className="space-y-20 md:space-y-32">
        
        <Newsletter />
      </section>
    </main>
  );
};

export default Home;
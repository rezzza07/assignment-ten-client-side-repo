import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedArts from '../FeaturedArts/FeaturedArts';
import TopArtists from '../TopArtists/TopArtists';
import CommunityHighlights from '../CommunityHighlights/CommunityHighlights';


const featuredArtsPromise = fetch('https://artopia-assignment.vercel.app/featured-arts')
.then(res=>res.json());

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <FeaturedArts featuredArtsPromise={featuredArtsPromise} ></FeaturedArts>
      <TopArtists></TopArtists>
      <CommunityHighlights></CommunityHighlights>
      
    </div>
  );
};

export default Home;

import Head from 'next/head';
import FeaturedProjects from './FeaturedProjects';
import Navbar from './NavBar';
import SearchSection from './SearchSection';
import PropertyCollections from './PropertyCollections';
import TopDevelopers from './TopDevelopers';
import Footer from './Footer';
// import Navbar from '../components/Navbar';
// import SearchSection from '../components/SearchSection';
// import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  return (
    <div>
      {/* <Head>
        <title>Real Estate Channel Partner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <Navbar /> */}
      {/* <main> */}
        <SearchSection />
        <FeaturedProjects />
        <PropertyCollections />
      <TopDevelopers />
      {/* <Footer/> */}
      {/* </main> */}
    </div>
  );
}

export default Home;

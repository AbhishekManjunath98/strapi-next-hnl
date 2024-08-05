import Link from "next/link";
import { Button } from "../ui/button";

const SearchSection = () => {
    return (
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2021/04/Bangalore-F.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's find a home that works for you</h1>
            <button className="bg-white text-black py-2 px-4 rounded-md mb-8">Bengaluru Properties</button>
            <div className="bg-white bg-opacity-75 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">India Residential Property Search</h2>
              <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <input type="text" placeholder="Developer, Micro-market, ..." className="flex-grow p-2 rounded-md" />
                <select className="p-2 rounded-md">
                  <option>City/Location</option>
                </select>
                <select className="p-2 rounded-md">
                  <option>Property Types</option>
                </select>
                <select className="p-2 rounded-md">
                  <option>Price Range</option>
                </select>
                <Link href="/properties">
                {/* <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md" href="">Search Properties</button> */}
                <Button>Search Properties</Button>
              </Link>
              </form>
              <button className="mt-4 text-red-600 hover:underline">Advanced search</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SearchSection;
  
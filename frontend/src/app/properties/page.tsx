import { LogoutButton } from "@/components/custom/LogoutButton";

export default function DashboardRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Property Detatils</h1>
      <FeaturedProjects/>
    </div>
  );
}

import { FC } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from "next/link";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
  bedrooms: string;
  possession: string;
  price: string;
  image: string;
}

var url = "http://127.0.01:1337/uploads/c2cyoy_6c100430ba.jpeg"

const projects: Project[] = [
  {
    id: 1,
    title: 'Pavani Mirabilia',
    location: 'Whitefield Hosakote road, Seegehalli Krishnarajapu...',
    area: '1,050 sqft - 1,585 sqft',
    bedrooms: '2, 3',
    possession: 'May 2025',
    price: 'INR 88.24 Lakh',
    image: url, // Update with actual image paths
  },
  {
    id: 2,
    title: 'Majestic Fortune',
    location: 'Majestic Fortune, 16th Cross, Eswara Layout, Phase...',
    area: '1,200 sqft - 2,300 sqft',
    bedrooms: '2, 3, 4',
    possession: 'Oct 2021',
    price: 'INR 1.10 Cr',
    image: url,
  },
  {
    id: 3,
    title: 'Transformers Aspire',
    location: 'Hoskote Rd, Whitefield, Channasandra, Bengaluru',
    area: '1,051 sqft - 1,591 sqft',
    bedrooms: '2, 3',
    possession: 'Dec 2025',
    price: 'INR 60.95 Lakh',
    image: url,
  },
  {
    id: 4,
    title: 'Disha Pursuit Of Sunshine',
    location: '210, Whitefield Extension, Budigere Cross, Bengal...',
    area: '813 sqft - 992 sqft',
    bedrooms: '2, 3',
    possession: 'Dec 2026',
    price: 'INR 1.01 Cr',
    image: url,
  },
  {
    id: 5,
    title: 'Pavani Mirabilia',
    location: 'Whitefield Hosakote road, Seegehalli Krishnarajapu...',
    area: '1,050 sqft - 1,585 sqft',
    bedrooms: '2, 3',
    possession: 'May 2025',
    price: 'INR 88.24 Lakh',
    image: url, // Update with actual image paths
  },
  {
    id: 6,
    title: 'Majestic Fortune',
    location: 'Majestic Fortune, 16th Cross, Eswara Layout, Phase...',
    area: '1,200 sqft - 2,300 sqft',
    bedrooms: '2, 3, 4',
    possession: 'Oct 2021',
    price: 'INR 1.10 Cr',
    image: url,
  },
  {
    id: 7,
    title: 'Transformers Aspire',
    location: 'Hoskote Rd, Whitefield, Channasandra, Bengaluru',
    area: '1,051 sqft - 1,591 sqft',
    bedrooms: '2, 3',
    possession: 'Dec 2025',
    price: 'INR 60.95 Lakh',
    image: url,
  },
  {
    id: 8,
    title: 'Disha Pursuit Of Sunshine',
    location: '210, Whitefield Extension, Budigere Cross, Bengal...',
    area: '813 sqft - 992 sqft',
    bedrooms: '2, 3',
    possession: 'Dec 2026',
    price: 'INR 1.01 Cr',
    image: url,
  },
];

const FeaturedProjects: FC = () => {
  return (
    // <section className="container mx-auto py-8">
    //   <h2 className="text-2xl font-bold mb-4 text-center">Featured Projects in Bengaluru</h2>
    //   <div className="relative flex items-center">
    //     <button className="absolute left-0 bg-white p-2 rounded-full shadow-md">
    //       <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
    //     </button>
    //     <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
    <div className="grid grid-cols-3 gap-4">
          {projects.map(project => (
        <Link href={`/properties/${project.id}`}>
            <div key={project.id} className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-white shadow-md rounded-md p-4">
              <div className="relative h-40 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">Apartments</div>
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.location}</p>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9.5a1.5 1.5 0 112.986 0L9 9.5l-.014 0A1.5 1.5 0 017 9.5zM11 12h2v2h-2v-2zM7 12h2v2H7v-2zm6-1.5a1.5 1.5 0 113 0l-.014 0L16 9.5l-.014 0a1.5 1.5 0 01-2.986 0z" />
                </svg>
                <span>{project.area}</span>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.707 8.707A1 1 0 007 8h-.5a.5.5 0 01-.5-.5V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v8.5a.5.5 0 01-.5.5H1a1 1 0 00-.707 1.707l3 3A1 1 0 004.5 18h11a1 1 0 00.707-1.707l-3-3A1 1 0 0013 11.5h-.5a.5.5 0 01-.5-.5v-3a1 1 0 00-.293-.707zM3 6h1v2H3V6zM15 9h1v3h-1V9z" />
                </svg>
                <span>{project.bedrooms}</span>
              </div>
              <p className="text-gray-600 mb-2">Possession: {project.possession}</p>
              <p className="font-bold">Starting price</p>
              <p>{project.price}</p>
            </div>
            </Link>
          ))}
        {/* </div>
        <button className="absolute right-0 bg-white p-2 rounded-full shadow-md">
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section> */}
    </div>
  );
};

// export default FeaturedProjects;
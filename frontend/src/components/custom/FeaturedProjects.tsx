// type Project = {
//     id: number;
//     title: string;
//     location: string;
//     price: string;
//   };

//   const projects: Project[] = [
//     { id: 1, title: "Project 1", location: "Location 1", price: "Price 1" },
//     { id: 2, title: "Project 2", location: "Location 2", price: "Price 2" },
//     { id: 3, title: "Project 3", location: "Location 3", price: "Price 3" },
//     { id: 4, title: "Project 4", location: "Location 4", price: "Price 4" },
//   ];

//   const FeaturedProjects = () => {
//     return (
//       <section className="container mx-auto py-8">
//         <h2 className="text-2xl font-bold mb-4">Featured Projects in Bengaluru</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {projects.map(project => (
//             <div key={project.id} className="bg-white shadow-md rounded-md p-4">
//               <h3 className="font-bold mb-2">{project.title}</h3>
//               <p className="mb-2">{project.location}</p>
//               <p>{project.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   export default FeaturedProjects;

import { FC } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { getProperties } from '@/data/loaders';
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
var baseUrl = "http://127.0.01:1337"
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
];

function numberToWords(num: number) {
  const units = ["", "Thousand", "Lakh", "Crore"];
  const numbers = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const tens = ["", "", "20", "30", "40", "50", "60", "70", "80", "90"];
  const teens = ["11", "12", "13", "14", "15", "16", "17", "18", "20"];

  if (num === 0) return "Zero";

  let word = "";

  function numToWords(n: number, index: number) {
    let str = "";

    if (n > 19) {
      str += tens[Math.floor(n / 10)] + " " + numbers[n % 10];
    } else if (n > 10) {
      str += teens[n - 11];
    } else {
      str += numbers[n];
    }

    if (n) {
      str += " " + units[index];
    }

    return str;
  }

  function convert(num: number) {
    let index = 0;

    while (num > 0) {
      let currentNum = num % 100;
      if (index == 1) {
        currentNum = num % 1000;
        num = Math.floor(num / 1000);
      } else {
        num = Math.floor(num / 100);
      }
      if (currentNum) {
        word = numToWords(currentNum, index) + " " + word;
      }
      index++;
    }

    return word.trim();
  }

  return convert(num);
}


// interface Property {
//   id: string;
//   name: string;
//   attributes: Attributes
// }

// interface Attributes {
//   name: string;
//   type: string;
//   description: string;
//   possessionDate: string;
//   startPrice: number
// }

function formatNumber(num: number) {
if (num != null) {
    if (num >= 1e7) {
      return (num / 1e7).toFixed(2).replace(/\.00$/, '') + ' Cr';
    } else if (num >= 1e5) {
      return (num / 1e5).toFixed(2).replace(/\.00$/, '') + ' Lakh';
    } else {
      return num.toFixed(2).toString();
    }
} else {
  return num;
}
}

const FeaturedProjects: FC = async () => {

  const response: ApiResponse = await getProperties("", 0);
  console.log(numberToWords(2200000))
  console.log(formatNumber(1111111))
  // const a = await getProperties("", 0)
  // console.log(`a: ${a["data"]["attributes"]}`)
  if (!response.data) return null;
  console.log(`photodata: ${JSON.stringify(response.data[0].attributes.photos.data[0].attributes.url)}`)
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Featured Projects in Bengaluru</h2>
      {/* <h3>{data}</h3>
      <h4>dnjknjk</h4> */}
      <div className="relative flex items-center">
        <button className="absolute left-0 bg-white p-2 rounded-full shadow-md">
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
          {response.data.map((property: Property) => (
            <Link href={`properties/${property.id}`}>
            <div key={property.id} className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-white shadow-md rounded-md p-4">
              <div className="relative h-40 mb-4">
                <Image
                  src={baseUrl + property.attributes.photos.data[0].attributes.url ?? ""}
                  // src=""
                  alt=""
                  // width={100}
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
              <h3 className="font-bold text-lg mb-2">{property.attributes.name}</h3>
              <p className="text-gray-600 mb-2">{property.attributes.address}</p>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9.5a1.5 1.5 0 112.986 0L9 9.5l-.014 0A1.5 1.5 0 017 9.5zM11 12h2v2h-2v-2zM7 12h2v2H7v-2zm6-1.5a1.5 1.5 0 113 0l-.014 0L16 9.5l-.014 0a1.5 1.5 0 01-2.986 0z" />
                </svg>
                <span>{property.attributes.size} sqft</span>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.707 8.707A1 1 0 007 8h-.5a.5.5 0 01-.5-.5V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v8.5a.5.5 0 01-.5.5H1a1 1 0 00-.707 1.707l3 3A1 1 0 004.5 18h11a1 1 0 00.707-1.707l-3-3A1 1 0 0013 11.5h-.5a.5.5 0 01-.5-.5v-3a1 1 0 00-.293-.707zM3 6h1v2H3V6zM15 9h1v3h-1V9z" />
                </svg>
                <span>{property.attributes.bedrooms}</span>
              </div>
              <p className="text-gray-600 mb-2">Possession: {property.attributes.possessionDate}</p>
              <p className="font-bold">Starting price</p>
              <p>INR {formatNumber(property.attributes.startPrice ?? 0)}</p>
              <p>{formatNumber(1111111)}</p>

            </div>
            // </Link>
          ))}
        </div>
        <button className="absolute right-0 bg-white p-2 rounded-full shadow-md">
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;


interface Media {
  id: number;
  attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number | null;
      height: number | null;
      formats: {
          thumbnail?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
          };
          small?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
          };
          medium?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
          };
          large?: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
          };
      } | null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
  };
}

interface Brochure {
  data: {
      id: number;
      attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number | null;
          height: number | null;
          formats: string | null;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
      };
  };
}

interface Property {
  id: number;
  attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      name: string;
      type: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      landmark: string;
      latitude: number;
      longitude: number;
      size: number;
      sizeUnit: string;
      bedrooms: number;
      bathrooms: number;
      floors: number;
      reraId: string | null;
      possessionDate: string;
      status: string;
      description: string;
      startPrice: number | null;
      endPrice: number | null;
      photos: {
          data: Media[];
      };
      videos: {
          data: Media[] | null;
      };
      brochure: Brochure | null;
      floorPlans: {
          data: Media[] | null;
      };
  };
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface ApiResponse {
  data: Property[];
  meta: {
      pagination: Pagination;
  };
}

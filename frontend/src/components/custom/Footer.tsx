// import Link from "next/link";
// import { Logo } from "@/components/custom/Logo";

// interface SocialLink {
//   id: number;
//   text: string;
//   url: string;
// }

// interface FooterProps {
//   data: {
//     logoText: {
//       id: number,
//       text: string,
//       url: string,
//     },
//     text: string,
//     socialLink: SocialLink[],
//   };
// }

// function selectSocialIcon(url: string) {
//   if (url.includes("youtube")) return <YoutubeIcon className="h-6 w-6" />;
//   if (url.includes("twitter")) return <TwitterIcon className="h-6 w-6" />;
//   if (url.includes("github")) return <GithubIcon className="h-6 w-6" />;
//   return null;
// }

// export function Footer({ data }: Readonly<FooterProps>) {
//   const { logoText, socialLink, text } = data;
//   return (
//     <div className="dark bg-gray-900 text-white py-8">
//       <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
//         <Logo dark text={logoText.text} />
//         <p className="mt-4 md:mt-0 text-sm text-gray-300">{text}</p>
//         <div className="flex items-center space-x-4">
//           {socialLink.map((link) => {
//             return (
//               <Link key={link.id}className="text-white hover:text-gray-300" href={link.url}>
//                 {selectSocialIcon(link.url)}
//                 <span className="sr-only">Visit us at {link.text}</span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function GithubIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   );
// }

// function TwitterIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
// }

// function YoutubeIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//       <path d="m10 15 5-3-5-3z" />
//     </svg>
//   );
// }

// components/Footer.js

// import Link from 'next/link';

// export function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-xl font-bold mb-4">Company</h3>
//           <ul>
//             <li className="mb-2">
//               <Link href="/about" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/services" className="hover:underline">
//                 Services
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/contact" className="hover:underline">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Resources</h3>
//           <ul>
//             <li className="mb-2">
//               <Link href="/blog" className="hover:underline">
//                 Blog
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/faq" className="hover:underline">
//                 FAQ
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/support" className="hover:underline">
//                 Support
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//           <div className="flex space-x-4">
//             <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Facebook
//             </Link>
//             <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Twitter
//             </Link>
//             <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Instagram
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 text-center border-t border-gray-700 pt-4">
//         <p>&copy; {new Date().getFullYear()} Real Estate Channel Partner. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>

//   );
// };

// // export default Footer;

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex justify-around">
        <div>
          <h4 className="font-bold">Popular Locations</h4>
          <ul className="mt-2">
            <li><Link href="/properties-in-whitefield" className="hover:underline">Properties in Whitefield</Link></li>
            <li><Link href="/properties-in-sarjapur-road" className="hover:underline">Properties in Sarjapur Road</Link></li>
            <li><Link href="/properties-in-kanakapura-road" className="hover:underline">Properties in Kanakapura Road</Link></li>
            <li><Link href="/properties-in-airport-road" className="hover:underline">Properties in Airport Road</Link></li>
            <li><Link href="/properties-in-bannerghatta-road" className="hover:underline">Properties in Bannerghatta Road</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Popular Searches</h4>
          <ul className="mt-2">
            <li><Link href="/properties-in-bangalore" className="hover:underline">Properties in Bangalore</Link></li>
            <li><Link href="/apartments-in-bangalore" className="hover:underline">Apartments in Bangalore</Link></li>
            <li><Link href="/plots-in-bangalore" className="hover:underline">Plots in Bangalore</Link></li>
            <li><Link href="/villas-in-bangalore" className="hover:underline">Villas in Bangalore</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Popular Developers</h4>
          <ul className="mt-2">
            <li><Link href="/prestige-estates" className="hover:underline">Prestige Estates</Link></li>
            <li><Link href="/brigade-enterprises" className="hover:underline">Brigade Enterprises</Link></li>
            <li><Link href="/casagrand-builders" className="hover:underline">Casagrand Builders</Link></li>
            <li><Link href="/puravankara-limited" className="hover:underline">Puravankara Limited</Link></li>
            <li><Link href="/sobha-limited" className="hover:underline">Sobha Limited</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Budget</h4>
          <ul className="mt-2">
            <li><Link href="/properties-under-70-lakhs" className="hover:underline">Under 70 Lakhs</Link></li>
            <li><Link href="/properties-under-1-cr" className="hover:underline">Under 1 Cr</Link></li>
            <li><Link href="/properties-under-1-5-cr" className="hover:underline">Under 1.5 Cr</Link></li>
            <li><Link href="/properties-under-2-cr" className="hover:underline">Under 2 Cr</Link></li>
            <li><Link href="/properties-above-2-cr" className="hover:underline">Above 2 Cr</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4">
        <p>© Copyright 2024 Lands and Homes India Pvt Ltd</p>
        <div className="mt-2">
          <Link href="https://www.linkedin.com" className="hover:underline mx-2">LinkedIn</Link>
          <Link href="https://www.facebook.com" className="hover:underline mx-2">Facebook</Link>
          <Link href="https://www.twitter.com" className="hover:underline mx-2">Twitter</Link>
          <Link href="https://www.youtube.com" className="hover:underline mx-2">YouTube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

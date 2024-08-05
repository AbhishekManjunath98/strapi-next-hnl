"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

function getIcon(name: string) {
  switch (name) {
    case "CLOCK_ICON":
      return <ClockIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CHECK_ICON":
      return <CheckIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CLOUD_ICON":
      return <CloudIcon className="w-12 h-12 mb-4 text-gray-900" />;
    default:
      return null;
  }
}

interface FeatureProps {
  id: number;
  propertyName: string;
  propertyDescription: string;
  icon: string;
  propertyImage: string;
  builderLogo: string;
}

interface FeatureSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  feature: FeatureProps[];
}

export function FeatureSection({
  data,
}: {
  readonly data: FeatureSectionProps;
}) {
  const { feature } = data;
  console.log(feature)
  return (
    <div className="">
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {feature.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                {/* {getIcon(feature.icon)}
                <h2 className="mb-4 text-2xl font-bold">{feature.propertyName}</h2>
                <p className="text-gray-500">
                  {feature.propertyDescription}
                </p> */}

<div className="max-w-xs w-full group/card">
    <div
      className={cn(
        " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      <div className="flex flex-row items-center space-x-4 z-10">
        <Image
          height="100"
          width="100"
          alt="Avatar"
          src={feature.builderLogo}
          className="h-10 w-10 rounded-full border-2 object-cover"
        />
        <div className="flex flex-col">
          <p className="font-normal text-base text-gray-50 relative z-10">
            Brigade group
          </p>
          <p className="text-sm text-gray-400">Yeshwanthpur</p>
        </div>
      </div>
      <div className="text content">
        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          {feature.propertyName}
        </h1>
        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          {feature.propertyDescription}
        </p>
      </div>
    </div>
  </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>



  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}



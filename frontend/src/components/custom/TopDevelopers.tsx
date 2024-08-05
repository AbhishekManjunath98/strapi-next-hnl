import Image from 'next/image';

type Developer = {
  name: string;
  properties: number;
  image: string;
};

var url = "http://127.0.0.1:1337/uploads/images_5bb72816f6.png"

const developers: Developer[] = [
  { name: 'Assetz', properties: 12, image: url },
  { name: 'Brigade', properties: 19, image: url },
  { name: 'Casagrand', properties: 6, image: url },
  { name: 'Century', properties: 4, image: url },
  { name: 'Godrej', properties: 8, image: url},
  { name: 'Prestige', properties: 29, image: url},
  { name: 'Provident', properties: 7, image: url},
  { name: 'Puravankara', properties: 9, image: url},
  { name: 'Shriram', properties: 4, image: url},
  { name: 'Sobha', properties: 20, image: url},
];

const TopDevelopers: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Top Developers in Bengaluru</h2>
      <div className="flex flex-wrap justify-around">
        {developers.map((developer) => (
          <div key={developer.name} className="text-center m-4">
            <Image
              src={developer.image}
              alt={`${developer.name} logo`}
              width={150}
              height={150}
            />
            <p className="mt-2">{developer.name}</p>
            <p>{developer.properties} Properties Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDevelopers;

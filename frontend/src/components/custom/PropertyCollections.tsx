import Image from 'next/image';

const PropertyCollections: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Property Collections</h2>
      <div className="flex justify-around">
        <div className="text-center">
          <Image
            src="http://127.0.0.1:1337/uploads/real_estate_overview_in_bangalore_1_616cb6f1f4.webp" // replace with your actual image path
            alt="New launches"
            width={500}
            height={500}
          />
          <p className="mt-2">New launches</p>
        </div>
        <div className="text-center">
          <Image
            src="http://127.0.0.1:1337/uploads/real_estate_overview_in_bangalore_1_616cb6f1f4.webp" // replace with your actual image path
            alt="Ready to move"
            width={500}
            height={500}
          />
          <p className="mt-2">Ready to move</p>
        </div>
        <div className="text-center">
          <Image
            src="http://127.0.0.1:1337/uploads/real_estate_overview_in_bangalore_1_616cb6f1f4.webp" // replace with your actual image path
            alt="Under construction"
            width={500}
            height={500}
          />
          <p className="mt-2">Under construction</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCollections;

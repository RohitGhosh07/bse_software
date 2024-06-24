import React, { useEffect, useState } from 'react';

const BrandsSelection = ({ onBrandSelect }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('http://localhost:5000/brands');
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  const handleImageClick = (id) => {
    if (selectedBrandId === id) {
      setSelectedBrandId(null);
      onBrandSelect(null);
    } else {
      setSelectedBrandId(id);
      onBrandSelect(id);
    }
  };

  return (
    <div>
      <div className="flex overflow-x-auto whitespace-nowrap py-4 my-4">
        <div className="flex items-center">
          {brands.map((brand, index) => (
            <React.Fragment key={brand.id}>
              <img
                src={brand.image}
                alt={brand.name}
                className={`max-w-[87px] max-h-[87px] mx-2 cursor-pointer ${selectedBrandId && selectedBrandId !== brand.id ? 'filter grayscale' : ''}`}
                onClick={() => handleImageClick(brand.id)}
              />
              {index < brands.length - 1 && (
                <div className="w-[1px] h-[59px] bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSelection;

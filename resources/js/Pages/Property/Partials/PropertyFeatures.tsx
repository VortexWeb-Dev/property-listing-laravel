import React from 'react';
import { Bath, BedDouble, Car, Home, Maximize2 } from 'lucide-react';

interface PropertyFeature {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function PropertyFeatures() {
  const features: PropertyFeature[] = [
    { icon: <BedDouble className="w-5 h-5" />, label: "Bedrooms", value: "4" },
    { icon: <Bath className="w-5 h-5" />, label: "Bathrooms", value: "3" },
    { icon: <Car className="w-5 h-5" />, label: "Parking", value: "2" },
    { icon: <Maximize2 className="w-5 h-5" />, label: "Square Feet", value: "2,450" },
    { icon: <Home className="w-5 h-5" />, label: "Property Type", value: "Single Family" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-blue-600 mb-2">{feature.icon}</div>
          <div className="text-sm text-gray-600">{feature.label}</div>
          <div className="font-semibold">{feature.value}</div>
        </div>
      ))}
    </div>
  );
}
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

import React, { useState } from "react";
import { PropertyCard } from "./Property/Partials/PropertyCard";
import { PropertyTable } from "./Property/Partials/PropertyTable";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Checkbox } from "@/Components/ui/checkbox";
import { Grid2X2 } from "lucide-react";
import { LayoutGrid, List } from "lucide-react";

// Mock data for properties
// const properties = [
//     {
//         id: 1,
//         image: "/placeholder.svg?height=200&width=300",
//         referenceNo: "REF001",
//         title: "Luxury Apartment with Sea View",
//         description: "Spacious 3-bedroom apartment with panoramic sea views",
//         layout: { area: "150 sqm", bedrooms: 3, bathrooms: 2 },
//         propertyType: "Residential",
//         status: "For Sale",
//         price: "$500,000",
//         createdDate: "2023-01-15",
//         updatedDate: "2023-06-20",
//         publishStatus: "Live",
//         location: "Palm Jumeirah, Dubai",
//         listingAgent: {
//             name: "John Doe",
//             image: "/placeholder.svg?height=40&width=40",
//         },
//         listingOwner: {
//             name: "Jane Smith",
//             image: "/placeholder.svg?height=40&width=40",
//         },
//         unitNo: "A-101",
//         portals: ["Property Finder", "Bayut"],
//     },
//     {
//         id: 2,
//         image: "/placeholder.svg?height=200&width=300",
//         referenceNo: "REF001",
//         title: "Luxury Apartment with Sea View",
//         description: "Spacious 3-bedroom apartment with panoramic sea views",
//         layout: { area: "150 sqm", bedrooms: 3, bathrooms: 2 },
//         propertyType: "Residential",
//         status: "For Sale",
//         price: "$500,000",
//         createdDate: "2023-01-15",
//         updatedDate: "2023-06-20",
//         publishStatus: "Live",
//         location: "Palm Jumeirah, Dubai",
//         listingAgent: {
//             name: "John Doe",
//             image: "/placeholder.svg?height=40&width=40",
//         },
//         listingOwner: {
//             name: "Jane Smith",
//             image: "/placeholder.svg?height=40&width=40",
//         },
//         unitNo: "A-101",
//         portals: ["Property Finder", "Bayut"],
//     },
//     // Add more mock properties here...
// ];
export default function Dashboard({ properties }: { properties: any }) {
    console.log(properties);

    const [view, setView] = useState<"card" | "list">("card");
    const [selectedProperties, setSelectedProperties] = useState<number[]>([]);

    const handlePropertySelection = (propertyId: number) => {
        setSelectedProperties((prev) =>
            prev.includes(propertyId)
                ? prev.filter((id) => id !== propertyId)
                : [...prev, propertyId]
        );
    };

    const handleSelectAll = () => {
        setSelectedProperties(
            selectedProperties.length === properties?.data?.length
                ? []
                : properties.data.map((p:any) => p.id)
        );
    };
    return (
        <MainLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container mx-auto p-4 lg:px-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
                    <div className="bg-white rounded-lg shadow-sm p-1 flex">
                        <button
                            onClick={() => setView("card")}
                            className={`p-2 rounded ${
                                view === "card"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={`p-2 rounded ${
                                view === "list"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Input
                            placeholder="Search properties..."
                            className="w-full sm:w-auto"
                        />
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="sale">For Sale</SelectItem>
                                <SelectItem value="rent">For Rent</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {view === "card" ? (
                    <>
                        <div className="flex items-center space-x-2 mb-4">
                            <Checkbox
                                checked={
                                    selectedProperties.length ===
                                    properties?.data?.length
                                }
                                onCheckedChange={handleSelectAll}
                                id="select-all"
                            />
                            <label
                                htmlFor="select-all"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Select All
                            </label>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {properties.data.length > 0 &&
                                properties.data.map((property: any) => (
                                    <PropertyCard
                                        key={property.id}
                                        property={property}
                                        isSelected={selectedProperties.includes(
                                            property.id
                                        )}
                                        onSelect={handlePropertySelection}
                                    />
                                ))}
                        </div>
                    </>
                ) : (
                    <PropertyTable
                        properties={properties.data}
                        selectedProperties={selectedProperties}
                        onSelectProperty={handlePropertySelection}
                        onSelectAll={handleSelectAll}
                    />
                )}
            </div>
        </MainLayout>
    );
}

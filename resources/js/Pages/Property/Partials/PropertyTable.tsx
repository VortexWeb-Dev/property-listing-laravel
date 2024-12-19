import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { MoreHorizontal, MoreVertical } from "lucide-react";

interface PropertyTableProps {
    properties: any[] | null; // Replace 'any' with a proper type definition for your property object
    selectedProperties: number[];
    onSelectProperty: (id: number) => void;
    onSelectAll: () => void;
}

export function PropertyTable({
    properties,
    selectedProperties,
    onSelectProperty,
    onSelectAll,
}: PropertyTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Checkbox
                                checked={
                                    selectedProperties.length ===
                                    (properties?.length || 0)
                                }
                                onCheckedChange={onSelectAll}
                            />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Property
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Agent
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {properties?.map((property) => (
                        <tr key={property.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <Checkbox
                                    checked={
                                        selectedProperties.includes(
                                            property.id
                                        )
                                    }
                                    onCheckedChange={() =>
                                        onSelectProperty(property.id)
                                    }
                                />
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {property.image && (
                                        <img
                                            className="h-16 w-16 rounded-md object-cover"
                                            src={property.image}
                                            alt=""
                                        />
                                    )}
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {property.title}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Ref: {property.referenceNo}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {property.propertyType}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {property.bedrooms} beds •{" "}
                                    {property.bathrooms} baths •{" "}
                                    {property.area}{" "}
                                    sqft
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {property.location}
                                </div>
                                <div className="text-sm text-gray-500">
                                    Unit: {property.unitNo}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-blue-600">
                                    ${property.price.toLocaleString()}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                        property.publishStatus === "live"
                                            ? "bg-green-100 text-green-800"
                                            : property.publishStatus === "draft"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                    {property.publishStatus}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {property.listingAgent?.image && (
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={property.listingAgent.image}
                                            alt=""
                                        />
                                    )}
                                    <div className="ml-2">
                                        <div className="text-sm text-gray-900">
                                            {property.listingAgent?.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-gray-400 hover:text-gray-500">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


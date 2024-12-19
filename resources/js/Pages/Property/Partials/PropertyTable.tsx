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

// asset import
import pfLogo from "@/assets/pf.png";
import bayutLogo from "@/assets/bayut.png";
import dubizzleLogo from "@/assets/dubizzle.png";
import websiteLogo from "@/assets/web.png";

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
                            Portals
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
                                    checked={selectedProperties.includes(
                                        property.id
                                    )}
                                    onCheckedChange={() =>
                                        onSelectProperty(property.id)
                                    }
                                />
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {property?.photo_urls ? (
                                        <img
                                            className="h-16 w-16 rounded-md object-cover"
                                            src={property?.photo_urls[0]}
                                            alt={property?.title_en || ""}
                                        />
                                    ) : (
                                        <img
                                            className="h-16 w-16 rounded-md object-cover"
                                            src="https://via.placeholder.com/300x200"
                                            alt={property?.title_en || ""}
                                        />
                                    )}
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {property?.title_en || ""}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Ref:{" "}
                                            {property.reference_number || ""}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {property?.offering_type || ""}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {property?.bedrooms || "NA"} beds •{" "}
                                    {property?.bathrooms || "NA"} baths •{" "}
                                    {property?.plot_size || "NA"} sqft
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex flex-wrap gap-2 items-center justify-start">
                                    {property?.pf_publish ? (
                                        <img
                                            className="h-6 w-6"
                                            src={pfLogo}
                                            alt="Property Finder"
                                        />
                                    ) : null}
                                    {property?.bayut_publish ? (
                                        <img
                                            className="h-6 w-6"
                                            src={bayutLogo}
                                            alt="Bayut"
                                        />
                                    ) : null}
                                    {property?.dubizzle_publish ? (
                                        <img
                                            className="h-6 w-6"
                                            src={dubizzleLogo}
                                            alt="Dubizzle"
                                        />
                                    ) : null}
                                    {property?.website_publish ? (
                                        <img
                                            className="h-6 w-6"
                                            src={websiteLogo}
                                            alt="Website"
                                        />
                                    ) : null}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {property?.pf_location.location || "NA"}
                                </div>
                                <div className="text-sm text-gray-500">
                                    Unit: {property.unit_no || "NA"}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-blue-600">
                                    {property.price.toLocaleString()} AED
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                        property.status === "live"
                                            ? "bg-green-100 text-green-800"
                                            : property.status === "draft"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                    {property?.status || "NA"}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {property?.agent?.image_url && (
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={property?.agent?.image_url}
                                            alt="agent"
                                        />
                                    )}
                                    <div className="ml-2">
                                        <div className="text-sm text-gray-900">
                                            {property?.agent?.name || "NA"}
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

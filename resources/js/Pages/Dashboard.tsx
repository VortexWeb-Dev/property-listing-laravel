import MainLayout from "@/Layouts/MainLayout";
import { Head, router } from "@inertiajs/react";

import React, { useEffect, useState } from "react";
import { PropertyCard } from "./Property/Partials/PropertyCard";
import { PropertyTable } from "./Property/Partials/PropertyTable";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Checkbox } from "@/Components/ui/checkbox";
import { Delete, LayoutGrid, List, Trash } from "lucide-react";
import PaginationComponent from "@/Components/PaginationComponent";
import TextInput from "@/Components/TextInput";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Dashboard({
    properties,
    queryParams,
}: {
    properties: any;
    queryParams: any;
}) {
    // console.log(properties);

    const [view, setView] = useState<"card" | "list">(
        (localStorage.getItem("propertyView") as "card" | "list") || "card"
    );
    const [selectedProperties, setSelectedProperties] = useState<number[]>(
        JSON.parse(localStorage.getItem("selectedProperties") || "[]")
    );

    useEffect(() => {
        localStorage.setItem("propertyView", view);
        localStorage.setItem(
            "selectedProperties",
            JSON.stringify(selectedProperties)
        );
    }, [view, selectedProperties]);

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
                : properties.data.map((p: any) => p.id)
        );
    };

    queryParams = queryParams || {};

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDebouncedSearchTerm(searchTerm);
    //     }, 500);

    //     return () => clearTimeout(timer);
    // }, [searchTerm]);

    // useEffect(() => {
    //     console.log(debouncedSearchTerm);
    //     router.get("/dashboard", { search: debouncedSearchTerm });
    // }, [debouncedSearchTerm]);

    const debounce = (func: Function, wait: number) => {
        let timeout: NodeJS.Timeout | null;
        return (...args: any[]) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const onFilterChange = (name: string, value: string) => {
        const debouncedonFilterChange = debounce(() => {
            if (value) {
                console.log(name, value);
                queryParams[name] = value;
            } else {
                delete queryParams[name];
            }
            router.get("/dashboard", queryParams);
        }, 500);

        debouncedonFilterChange();
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
                        <TextInput
                            placeholder="Search properties..."
                            className="w-full sm:w-auto"
                            defaultValue={queryParams.search}
                            onChange={(e) =>
                                onFilterChange("search", e.target.value)
                            }
                        />
                        <Select
                            defaultValue={queryParams.status || "all"}
                            onValueChange={(e) => onFilterChange("status", e)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all" defaultChecked>
                                    All
                                </SelectItem>
                                <SelectItem value="draft">draft</SelectItem>
                                <SelectItem value="live">live</SelectItem>
                                <SelectItem value="unpublished">
                                    unpublished
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {Object.keys(queryParams).length > 0 && (
                    <div className="my-4 grid lg:grid-cols-8 md:grid-cols-7 gird-cols-5 justify-between flex-wrap gap-2">
                        <div className="lg:col-span-7 md:col-span-6 col-span-4 flex gap-2 flex-wrap">
                            {Object.entries(queryParams).map(
                                ([name, value]) => (
                                    <div
                                        key={name}
                                        className="flex items-center bg-gray-100 rounded-full"
                                    >
                                        <Badge variant="filter">
                                            <span className="mr-2">
                                                {name}: {value as string}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    const newQueryParams = {
                                                        ...queryParams,
                                                    };
                                                    delete newQueryParams[name];
                                                    router.get(
                                                        "/dashboard",
                                                        newQueryParams
                                                    );
                                                }}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <span className="w-5 h-5 text-xl text-red-500 hover:text-red-600">
                                                    ×
                                                </span>
                                            </button>
                                        </Badge>
                                    </div>
                                )
                            )}
                        </div>

                        {/* clear all filetrs button */}
                        <div className="flex justify-end">
                            <Button
                                variant={"destructive"}
                                onClick={() => {
                                    router.get("/dashboard");
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <span className="flex items-center gap-2 text-white">
                                    Clear All{" "}
                                    <Trash className="w-5 h-5 text-white" />
                                </span>
                            </Button>
                        </div>
                    </div>
                )}

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
                        {/* pgination */}
                        <div className="flex items-center justify-between border-t px-4 py-3 sm:px-6">
                            <PaginationComponent meta={properties?.meta} />
                        </div>
                    </>
                ) : (
                    <PropertyTable
                        properties={properties.data}
                        meta={properties?.meta}
                        selectedProperties={selectedProperties}
                        onSelectProperty={handlePropertySelection}
                        onSelectAll={handleSelectAll}
                    />
                )}
            </div>
        </MainLayout>
    );
}

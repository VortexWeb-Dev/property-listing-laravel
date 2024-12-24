import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
function PaginationComponent({ meta, queryParams }: any) {
    console.log(queryParams);

    const queryParamsString = Object.entries(queryParams)
        .filter(([key]) => key !== 'page')
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    return (
        <Pagination>
            <PaginationContent>
                {meta?.links?.map((link: any) => (
                    <PaginationItem key={link.label}>
                        <PaginationLink
                            href={link.url + "&" + queryParamsString}
                            className={
                                link.label === "&laquo; Previous" ||
                                link.label === "Next &raquo;"
                                    ? "hover:bg-gray-50 cursor-pointer"
                                    : link.label == meta?.current_page
                                    ? "border border-indigo-400 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
                                    : "border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            }
                        >
                            {link.label === "&laquo; Previous" ? (
                                <ChevronLeft />
                            ) : link.label === "Next &raquo;" ? (
                                <ChevronRight />
                            ) : (
                                link.label
                            )}
                        </PaginationLink>
                    </PaginationItem>
                ))}
            </PaginationContent>
        </Pagination>
    );
}

export default PaginationComponent;

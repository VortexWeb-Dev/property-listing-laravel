import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { MoreHorizontal, Bed, Bath, Square, Eye } from "lucide-react";

// asset import
import pfLogo from "@/assets/pf.png";
import bayutLogo from "@/assets/bayut.png";
import dubizzleLogo from "@/assets/dubizzle.png";
import websiteLogo from "@/assets/web.png";
import { router } from "@inertiajs/react";

interface PropertyCardProps {
    property: any; // Replace 'any' with a proper type definition for your property object
    isSelected: boolean;
    onSelect: (id: number) => void;
}

export function PropertyCard({
    property,
    isSelected,
    onSelect,
}: PropertyCardProps) {
    // console.log(property);

    const portals = [];

    if (property?.pf_publish) portals.push(pfLogo);
    if (property?.bayut_publish) portals.push(bayutLogo);
    if (property?.dubizzle_publish) portals.push(dubizzleLogo);
    if (property?.website_publish) portals.push(websiteLogo);

    return (
        <Card className="overflow-hidden group relative">
            <div className="absolute top-2 left-2 z-20">
                <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => onSelect(property?.id || 0)}
                />
            </div>
            <CardHeader className="p-0">
                <div className="relative">
                    {property?.photo_urls ? (
                        <img
                            src={property?.photo_urls[0]}
                            alt={property?.title_en || ""}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                    ) : (
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt={property?.title_en || ""}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="absolute top-2 right-2 z-10 space-x-1">
                        {/* More actions */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        className="h-8 w-8 bg-white/30 hover:bg-white/40"
                                        variant="secondary"
                                        size="icon"
                                        onClick={() =>
                                            router.visit(
                                                route("property.show", {
                                                    id: property?.id,
                                                    test: "test",
                                                })
                                            )
                                        }
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>View Details</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* View Details */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        className="h-8 w-8 bg-white/30 hover:bg-white/40"
                                        variant="secondary"
                                        size="icon"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>More Actions</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                        {portals?.map((portal: string) => (
                            <img
                                key={portal}
                                src={portal}
                                alt={portal}
                                width={25}
                                height={25}
                                className="rounded-full bg-white p-1"
                            />
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                    {property?.title_en || ""}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {property?.pf_location?.location || ""}
                </p>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">
                        {property?.price || "0"} AED
                    </span>
                    <Badge
                        variant={
                            property?.status === "draft"
                                ? "default"
                                : "secondary"
                        }
                    >
                        {property?.status || ""}
                    </Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />{" "}
                        {property?.bedrooms || "null"}
                    </span>
                    <span className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />{" "}
                        {property?.bathrooms || "null"}
                    </span>
                    <span className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />{" "}
                        {property?.plot_size || "null"} sqft
                    </span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {property?.agent?.image_url && (
                        <img
                            src={property.agent.image_url}
                            alt={property.agent.name}
                            width={30}
                            height={30}
                            className="rounded-full"
                        />
                    )}
                    <span className="text-sm">
                        {property?.agent?.name || ""}
                    </span>
                </div>
                <span className="text-sm text-muted-foreground">
                    Ref: {property?.reference_number || ""}
                </span>
            </CardFooter>
            <div
                className="absolute inset-0 bg-black/70 text-white p-4 flex flex-col justify-between rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ top: "6rem" }}
            >
                <div>
                    <p className="font-semibold mb-2">Additional Info:</p>
                    <p>Type: {property?.offering_type || ""}</p>
                    <p>Created: {property?.created_at || ""}</p>
                    <p>Updated: {property?.updated_at || ""}</p>
                    <p>Status: {property?.status || ""}</p>
                    <p>Owner: {property?.owner?.name || ""}</p>
                    <p>Unit: {property?.unit_no || ""}</p>
                </div>
                <Button
                    className="w-full mt-4"
                    variant="secondary"
                    onClick={() =>
                        router.visit(
                            route("property.show", { id: property?.id })
                        )
                    }
                >
                    <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
            </div>
        </Card>
    );
}

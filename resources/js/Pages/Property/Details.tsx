import React from "react";
import { ImageGallery } from "./Partials/ImageGallery";
import { PropertyFeatures } from "./Partials/PropertyFeatures";
import {
    MapPin,
    Share2,
    Heart,
    Paperclip,
    Download,
    Wifi,
    Dumbbell,
    FileText,
    Car,
    Square,
    PenTool,
    Edit,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Modern Luxury Villa
                        </h1>
                        <div className="flex items-center mt-2 text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>
                                123 Luxury Lane, Beverly Hills, CA 90210
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                            <Paperclip className="w-4 h-4" />
                            Copy Link
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                            <Edit className="w-4 h-4" />
                            Edit
                        </button>
                    </div>
                </div>

                {/* Image Gallery */}
                <ImageGallery images={images} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Price and Status */}
                        <div className="flex items-baseline gap-4 mb-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                $2,495,000
                            </h2>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                For Sale
                            </span>
                        </div>

                        {/* Features */}
                        <PropertyFeatures />

                        {/* Description */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                About this home
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                This stunning modern villa offers the perfect
                                blend of luxury and comfort. Featuring an
                                open-concept design with high ceilings and
                                abundant natural light, this home showcases
                                premium finishes throughout. The gourmet kitchen
                                boasts top-of-the-line appliances and a large
                                center island, perfect for entertaining. The
                                primary suite includes a spa-like bathroom and
                                walk-in closet. The backyard features a custom
                                pool and covered patio area, ideal for outdoor
                                living and entertaining. Located in a
                                prestigious neighborhood, this property offers
                                both privacy and convenience.
                            </p>
                            <h3 className="text-xl font-semibold my-4">
                                Features
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="blue">Central Air</Badge>
                                <Badge variant="blue">Hardwood Floors</Badge>
                                <Badge variant="blue">Fireplace</Badge>
                                <Badge variant="blue">
                                    Stainless Steel Appliances
                                </Badge>
                                <Badge variant="blue">Fenced Yard</Badge>
                            </div>
                        </div>

                        {/* amenities */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Amenities
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <AmenityItem
                                    icon={<Wifi className="mr-2" />}
                                    text="High-speed Internet"
                                />
                                <AmenityItem
                                    icon={<PenTool className="mr-2" />}
                                    text="Swimming Pool"
                                />
                                <AmenityItem
                                    icon={<Dumbbell className="mr-2" />}
                                    text="Fitness Center"
                                />
                                <AmenityItem
                                    icon={<FileText className="mr-2" />}
                                    text="Study Room"
                                />
                                <AmenityItem
                                    icon={<Car className="mr-2" />}
                                    text="Covered Parking"
                                />
                                <AmenityItem
                                    icon={<Square className="mr-2" />}
                                    text="Spacious Storage"
                                />
                            </div>
                        </div>

                        {/* Files */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Files
                            </h3>
                            <div className="space-y-2">
                                <FileItem
                                    filename="Floor Plan.pdf"
                                    size="2.5 MB"
                                />
                                <FileItem
                                    filename="Property Disclosure.docx"
                                    size="1.2 MB"
                                />
                                <FileItem
                                    filename="Neighborhood Info.pdf"
                                    size="3.7 MB"
                                />
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Notes
                            </h3>
                            <Tabs defaultValue="renovations" className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="renovations">
                                        Renovations
                                    </TabsTrigger>
                                    <TabsTrigger value="schools">
                                        Schools
                                    </TabsTrigger>
                                    <TabsTrigger value="hoa">HOA</TabsTrigger>
                                </TabsList>
                                <TabsContent value="renovations">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Recent Renovations
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            Kitchen remodeled in 2021, new
                                            appliances installed. Master
                                            bathroom updated with modern
                                            fixtures and tile work.
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="schools">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                School District Information
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            Property is zoned for highly-rated
                                            Anytown Elementary (K-5), Anytown
                                            Middle School (6-8), and Anytown
                                            High School (9-12).
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="hoa">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Homeowners Association
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            Annual HOA fee of $500 covers
                                            community pool maintenance and
                                            landscaping of common areas.
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Map view */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Location
                            </h3>
                            <iframe
                                src="https://maps.google.com/maps?q=anytown&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <div className="mt-8 lg:mt-0 bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Contact Agent
                            </h3>
                            <div className="flex gap-6">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                                    alt="Agent"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        John Smith
                                    </h4>
                                    <p className="text-gray-600">
                                        Luxury Real Estate Specialist
                                    </p>
                                    <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                        Contact Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">
                                Price Breakdown
                            </h3>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Price</span>
                                <span className="font-semibold">
                                    $2,495,000
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    Down Payment
                                </span>
                                <span className="font-semibold">$500,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    Monthly Payment
                                </span>
                                <span className="font-semibold">$1,995</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center text-muted-foreground">
            {icon}
            <span>{text}</span>
        </div>
    );
}

function AmenityItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center text-muted-foreground">
            {icon}
            <span>{text}</span>
        </div>
    );
}

function FileItem({ filename, size }: { filename: string; size: string }) {
    return (
        <div className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center">
                <Paperclip className="mr-2" />
                <span>{filename}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">
                    {size}
                </span>
                <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default App;

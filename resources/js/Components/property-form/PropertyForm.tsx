import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Image,
    MapPin,
    FileText,
    CheckSquare,
    ArrowLeft,
    ArrowRight,
    Send,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Steps } from "@/Components/ui/steps";
import { PropertyDetailsForm } from "./PropertyDetailsForm";
import { MediaForm } from "./MediaForm";
import { LocationForm } from "./LocationForm";
import { propertyDetailsSchema } from "@/lib/validations/property-schema";

const steps = [
    { label: "Property Details", icon: Home },
    { label: "Media", icon: Image },
    { label: "Location", icon: MapPin },
    { label: "Documents", icon: FileText },
    { label: "Review", icon: CheckSquare },
];

export function PropertyForm() {
    const [step, setStep] = useState(0);
    const form = useForm({
        resolver: zodResolver(propertyDetailsSchema),
        // defaultValues: {
        //     title_english: "",
        //     description_english: "",
        //     title_arabic: "",
        //     description_arabic: "",
        //     referenceNumber: "",
        //     listingAgent: "",
        //     listingOwner: "",
        //     landlordName: "",
        //     landlordEmail: "",
        //     landlordPhone: "",
        //     availability: "",
        //     availableDateFrom: null,
        //     availableDateTo: null,
        //     titleDeed: "",
        //     propertyType: "residential",
        //     size: "",
        //     unitNo: "",
        //     bedrooms: "",
        //     bathrooms: "",
        //     parkingSpaces: "",
        //     address: "",
        //     city: "",
        //     state: "",
        //     zipCode: "",
        //     landmark: "",
        //     images: [],
        //     virtualTour: "",
        //     propertyDocs: [],
        //     certificates: [],
        //     price: "",
        //     rentalPeriod: "",
        //     hidePrice: "",
        //     paymentMethod: "",
        //     downPayment: "",
        //     noOfCheques: "",
        //     serviceCharge: "",
        //     financialStatus: "",
        //     totalPlotSize: "",
        //     lotSize: "",
        //     buildUpArea: "",
        //     layoutType: "",
        //     projectName: "",
        //     reraPermitNumber: "",
        //     reraPermitIssueDate: null,
        //     reraPermitExpirationDate: null,
        //     dtcmPermitNumber: "",
        // },
    });

    const onSubmit = (data: any) => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            console.log("Form submitted:", data);
        }
    };

    const currentStepContent = () => {
        switch (step) {
            case 0:
                return <PropertyDetailsForm />;
            case 1:
                return <MediaForm />;
            case 2:
                return <LocationForm />;
            case 3:
                return <div>Documents Form</div>;
            case 4:
                return (
                    <div className="text-center py-8">
                        <CheckSquare className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">
                            Review Your Listing
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Please review your property details before final
                            submission.
                        </p>
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-green-500 hover:bg-green-600"
                        >
                            Submit Listing <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="container mx-auto space-y-12"
                >
                    <div className="mb-16 pt-4">
                        <Steps steps={steps} currentStep={step} />
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="w-full"
                            >
                                {/* <Card className="p-6 w-full"> */}
                                {currentStepContent()}
                                {/* </Card> */}
                            </motion.div>
                        </AnimatePresence>

                        <Card className="p-6 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Draft Property
                                    </h3>
                                    <div className="text-sm text-muted-foreground">
                                        <p>Last update: Just now</p>
                                        <p>
                                            Creation Date:{" "}
                                            {new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Management
                                    </h3>
                                    <div className="text-sm text-muted-foreground">
                                        <p>Reference: PRO-2024-001</p>
                                        <p>Created By: Current User</p>
                                    </div>
                                </div>

                                <div className="flex items-end justify-end md:col-span-1">
                                    <div className="flex gap-3">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                setStep((prev) =>
                                                    Math.max(0, prev - 1)
                                                )
                                            }
                                            disabled={step === 0}
                                        >
                                            <ArrowLeft className="mr-2 h-4 w-4" />{" "}
                                            Back
                                        </Button>
                                        {step < steps.length - 1 && (
                                            <Button type="submit">
                                                Next{" "}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

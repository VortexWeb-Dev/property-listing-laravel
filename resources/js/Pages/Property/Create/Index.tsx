import { MultiStepForm } from "@/Components/MultiStepForm";
import { PropertyForm } from "@/Components/property-form/PropertyForm";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = () => {
    return (
        <MainLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Property
                </h2>
            }
        >
            <Head title="Create Property" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <PropertyForm/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Index;

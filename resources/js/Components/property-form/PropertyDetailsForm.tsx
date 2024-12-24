import { useFormContext } from "react-hook-form";

import { Card, CardDescription, CardTitle } from "@/Components/ui/card";

import CustomFormField from "./CustomFormField";
import formSections from "@/constants/propertyForm/FormSections";
import { PropertyTypeSection } from "./PropertyTypeSection";
import { ListingTypeSection } from "./ListingTypeSection";

export function PropertyDetailsForm() {
    const form = useFormContext();

    return (
        <div className="space-y-8">
            {/* Offering Type Section*/}
            <Card className="p-6 border-dashed">
                <CardTitle className="mb-2">Offering Type</CardTitle>
                <CardDescription className="mb-6">Please fill out all the mandatory fields</CardDescription>
                <div className="space-y-4">
                    <PropertyTypeSection
                        value={form.watch("offeringType")}
                        onChange={(value) =>
                            form.setValue("offeringType", value)
                        }
                    />
                    <ListingTypeSection
                        value={form.watch("listingType")}
                        onChange={(value) =>
                            form.setValue("listingType", value)
                        }
                    />
                </div>
            </Card>
            {/* Remaining Sections */}
            {formSections.map((section) => (
                <Card className="p-6 border-dashed" key={section.title}>
                    <CardTitle className="mb-2">{section.title}</CardTitle>
                    <CardDescription className="mb-6">Please fill out all the mandatory fields</CardDescription>
                    <div className={section.className}>
                        {section.fields.map((field) => (
                            <CustomFormField
                                key={field.name}
                                control={form.control}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                // @ts-ignore
                                options={field.options}
                                required={field.required}
                                placeholder={field.placeholder}
                            />
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
}

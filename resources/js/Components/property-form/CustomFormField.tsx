import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/Components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

import { RequiredLabel } from "@/Components/ui/required-label";
import internal from "stream";

interface CustomFormFieldProps {
    control: any;
    name: string;
    label: string;
    type?: string;
    options?: Array<{ value: string; label: string }>;
    required?: boolean;
    placeholder?: string;
}

const CustomFormField = ({
    control,
    name,
    label,
    type = "text",
    options = [],
    required = false,
    placeholder = "",
}: CustomFormFieldProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {required ? (
                            <RequiredLabel>{label}</RequiredLabel>
                        ) : (
                            label
                        )}
                    </FormLabel>
                    <FormControl>
                        {type === "select" ? (
                            <Select {...field} onValueChange={field.onChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {options?.map((option) => (
                                        <SelectItem
                                            key={option.label}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : type === "textarea" ? (
                            <Textarea
                                placeholder={placeholder}
                                className="min-h-[200px]"
                                {...field}
                            />
                        ) : (
                            <Input
                                type={type}
                                placeholder={placeholder}
                                {...field}
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;

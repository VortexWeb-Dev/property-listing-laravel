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

const CustomFormField = ({
    control,
    name,
    label,
    type = "text",
    options = [],
    required = false,
    placeholder = "",
}: any) => {
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
                                    {options?.map((option: any) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : type === "textarea" ? (
                            <Textarea {...field} placeholder={placeholder} />
                        ) : (
                            <Input
                                {...field}
                                type={type}
                                placeholder={placeholder}
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

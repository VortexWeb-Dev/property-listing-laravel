import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

interface SelectOptionProps {
    placeholder: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    queryParams?: Record<string, string> | null;
    onFilterChange?: (name: string, value: string) => void;
    width?: string;
}

export function SelectOption({
    placeholder,
    options,
    queryParams = null,
    onFilterChange = () => {},
    width = "130px",
}: SelectOptionProps) {
    return (
        <Select
            defaultValue={!queryParams ? "" : queryParams[`${placeholder.toLowerCase()}`]}
            onValueChange={(e) => onFilterChange(`${placeholder.toLowerCase()}`, e)}
        >
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

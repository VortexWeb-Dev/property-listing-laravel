import { SelectOption } from "@/constants/filters/SelectOption";
import {
    cityOptions,
    districtOptions,
    developerOptions,
    typeOptions,
    bedroomOptions,
    priceOptions,
    priceSqmOptions,
    statusOptions,
} from "@/constants/filters/filterOptions";

export function FilterSelects({queryParams, onFilterChange} : any) {
    return (
        <>
            <SelectOption placeholder="Location" options={cityOptions} />
            <SelectOption placeholder="City" options={districtOptions} />
            <SelectOption
                placeholder="Community"
                options={developerOptions}
                width="150px"
            />
            <SelectOption placeholder="Sub Community" options={typeOptions} />
            <SelectOption placeholder="Building" options={bedroomOptions} />
            <SelectOption placeholder="Agent" options={priceOptions} />
            <SelectOption placeholder="Owner" options={priceSqmOptions} />
            <SelectOption placeholder="Status" options={statusOptions} queryParams={queryParams} onFilterChange={onFilterChange} />
        </>
    );
}

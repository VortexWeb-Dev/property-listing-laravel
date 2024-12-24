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
            <SelectOption placeholder="City" options={cityOptions} />
            <SelectOption placeholder="District" options={districtOptions} />
            <SelectOption
                placeholder="Developer"
                options={developerOptions}
                width="150px"
            />
            <SelectOption placeholder="Type" options={typeOptions} />
            <SelectOption placeholder="Bedrooms" options={bedroomOptions} />
            <SelectOption placeholder="Price" options={priceOptions} />
            <SelectOption placeholder="Price m²" options={priceSqmOptions} />
            <SelectOption placeholder="Status" options={statusOptions} queryParams={queryParams} onFilterChange={onFilterChange} />
        </>
    );
}

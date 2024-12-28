import { Tag } from "lucide-react";
import { Card } from "@/Components/ui/card";
import { cn } from "@/lib/utils";

interface ListingTypeSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function ListingTypeSection({ value, onChange }: ListingTypeSectionProps) {
  const types = [
    {
      id: "rent",
      label: "For Rent",
    },
    {
      id: "sale",
      label: "For Sale",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Listing Type<span className="text-red-600">*</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((type) => (
          <Card
            key={type.id}
            className={cn(
              "p-4 cursor-pointer hover:border-primary transition-colors",
              value === type.id && "border-primary bg-primary/5"
            )}
            onClick={() => onChange(type.id)}
          >
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5" />
              <span className="font-medium">{type.label}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
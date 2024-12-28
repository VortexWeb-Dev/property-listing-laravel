import { Building, Home } from "lucide-react";
import { Card } from "@/Components/ui/card";
import { cn } from "@/lib/utils";

interface PropertyTypeSectionProps {
  value: string;
  onChange: (value: string) => void;
}


export function PropertyTypeSection({ value, onChange }: PropertyTypeSectionProps) {
  const types = [
    {
      id: "residential",
      label: "Residential",
      icon: Home,
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: Building,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose Property Type<span className="text-red-600">*</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((type) => {
          const Icon = type.icon;
          return (
            <Card
              key={type.id}
              className={cn(
                "p-4 cursor-pointer hover:border-primary transition-colors",
                value === type.id && "border-primary bg-primary/5"
              )}
              onClick={() => onChange(type.id)}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="font-medium">{type.label}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
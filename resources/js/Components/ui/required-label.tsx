import { cn } from "@/lib/utils";

interface RequiredLabelProps {
    children: React.ReactNode;
    className?: string;
}

export function RequiredLabel({ children, className }: RequiredLabelProps) {
    return (
        <span className={cn("flex items-center gap-1", className)}>
            {children}
            <span className="text-destructive">*</span>
        </span>
    );
}

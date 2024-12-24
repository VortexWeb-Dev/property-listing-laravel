import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepsProps {
    steps: { label: string; icon: React.ComponentType }[];
    currentStep: number;
    className?: string;
}

export function Steps({ steps, currentStep, className }: StepsProps) {
    return (
        <nav aria-label="Progress" className={cn("w-full px-4", className)}>
            <ol className="relative flex items-center justify-between w-full">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = index < currentStep;
                    const isCurrent = index === currentStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <li
                            key={step.label}
                            className="relative flex-1 flex flex-col items-center"
                        >
                            {/* progress line */}
                            {!isLast && (
                                <div
                                    className={cn(
                                        "absolute left-[50%] right-[-50%] top-[15px] h-0.5 w-full",
                                        isCompleted ? "bg-primary" : "bg-muted"
                                    )}
                                    aria-hidden="true"
                                />
                            )}
                            {/* step item */}
                            <div className="relative flex flex-col items-center group">
                                <div
                                    className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                                        isCompleted && "bg-primary shadow-lg",
                                        isCurrent &&
                                            "border-2 border-primary bg-white",
                                        !isCompleted &&
                                            !isCurrent &&
                                            "border-2 border-muted bg-white"
                                    )}
                                >
                                    {isCompleted ? (
                                        <Check className="h-4 w-4 text-white" />
                                    ) : (
                                        <Icon
                                        //@ts-ignore
                                            className={cn(
                                                "h-4 w-4",
                                                isCurrent
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                            )}
                                        />
                                    )}
                                </div>
                                <span
                                    className={cn(
                                        "absolute -bottom-6 text-xs font-medium w-24 text-center",
                                        isCompleted || isCurrent
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {step.label}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

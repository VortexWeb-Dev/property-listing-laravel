import * as z from "zod";

export const propertyDetailsSchema = z.object({
    offeringType: z.enum(["residential", "commercial"]),
    listingType: z.enum(["rent", "sale"]),
    title_english: z
        .string()
        .min(
            5,
            "Property Title (English) is required and must be at least 5 characters"
        ),
    description_english: z
        .string()
        .min(
            10,
            "Description (English) is required and must be at least 10 characters"
        ),
    title_arabic: z.string().optional(),
    description_arabic: z.string().optional(),
    referenceNumber: z.string().min(1, "Reference Number is required"),
    listingAgent: z.enum(["area1", "area2", "area3"]),
    listingOwner: z.enum(["area1", "area2", "area3"]),
    landlordName: z.string().optional(),
    landlordEmail: z.string().email().optional(),
    landlordPhone: z.string().optional(),
    availability: z
        .enum(["available", "underOffer", "reserved", "sold"])
        .optional(),
    availableDateFrom: z.date().optional(),
    availableDateTo: z.date().optional(),
    titleDeed: z.string().optional(),
    propertyType: z.enum([
        "AP",
        "TH",
        "VH",
        "PH",
        "LP",
        "FF",
        "BU",
        "CD",
        "DX",
        "FA",
        "HA",
        "HF",
        "LC",
        "OF",
        "RE",
        "SA",
        "WB",
        "SH",
        "SR",
        "WH",
    ]),
    size: z
        .string()
        .min(0.1, "Size (Sq.ft) is required and must be a positive number"),
    unitNo: z.string().min(1, "Unit No. is required"),
    bedrooms: z.enum([
        "studio",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "10+",
    ]),
    bathrooms: z
        .string()
        .min(1, "No. of Bathrooms is required and must be a number"),
    parkingSpaces: z.string().optional(),
    furnished: z.enum(["furnished", "unfurnished", "semiFurnished"]).optional(),
    totalPlotSize: z.string().optional(),
    lotSize: z.string().optional(),
    buildUpArea: z.string().optional(),
    layoutType: z.string().optional(),
    projectName: z.string().optional(),
    projectStatus: z
        .enum([
            "Ready Secondary",
            "Off-plan Secondary",
            "Ready Primary",
            "Off-plan Primary",
        ])
        .optional(),
    saleType: z.enum(["freehold", "new", "resale"]).optional(),
    developer: z.enum(["elegance-holding", "other"]).optional(),
    buildYear: z.string().optional(),
    ownership: z.enum(["freehold", "nonehold", "leasehold"]).optional(),
    reraPermitNumber: z.string().min(1, "RERA Permit Number is required"),
    reraPermitIssueDate: z.date().optional(),
    reraPermitExpirationDate: z.date().optional(),
    dtcmPermitNumber: z.string().optional(),
    price: z
        .string()
        .min(0.1, "Price is required and must be a positive number"),
    rentalPeriod: z.enum(["daily", "weekly", "monthly", "yearly"]).optional(),
    hidePrice: z.enum(["yes", "no"]).optional(),
    paymentMethod: z.string().optional(),
    downPayment: z.string().optional(),
    noOfCheques: z.string().optional(),
    serviceCharge: z.string().optional(),
    financialStatus: z.enum(["mortgaged", "cash"]).optional(),
});

export const locationSchema = z.object({
    address: z.string().min(5, "Address is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
    landmark: z.string().optional(),
});

export const mediaSchema = z.object({
    images: z.array(z.string()).min(1, "At least one image is required"),
    virtualTour: z.string().url().optional(),
});

export const documentsSchema = z.object({
    propertyDocs: z.array(z.string()).optional(),
    certificates: z.array(z.string()).optional(),
});

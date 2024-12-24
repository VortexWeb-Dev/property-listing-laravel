import { title } from 'process';
import * as z from 'zod';

export const propertyDetailsSchema = z.object({
  offeringType: z.enum(['residential', 'commercial']),
  listingType: z.enum(['rental', 'sale']),
  title_english: z.string().min(5, 'Title must be at least 5 characters'),
  description_english: z.string().min(10, 'Description must be at least 10 characters'),
  title_arabic: z.string().optional(),
  description_arabic: z.string().optional(),
  referenceNumber: z.string().min(1, 'Reference Number is required'),
  listingAgent: z.enum(['area1', 'area2', 'area3']).optional(),
  listingOwner: z.enum(['area1', 'area2', 'area3']).optional(),
  landlordName: z.string().min(1, 'Landlord Name is required'),
  landlordEmail: z.string().min(1, 'Landlord Email is required').email(),
  landlordPhone: z.string().min(1, 'Landlord Phone is required'),
  availability: z.enum(['available', 'underOffer', 'reserved', 'sold']).optional(),
  availableDateFrom: z.date().min(new Date(), 'Available Date From must be after today').optional(),
  availableDateTo: z.date().min(new Date(), 'Available Date To must be after today').optional(),
  titleDeed: z.string().min(1, 'Title Deed is required').optional(),
  propertyType: z.string(),
  // size: z.number().min(0.1, 'Size is required').refine((val) => !isNaN(val) && isFinite(val), { message: 'Size must be a number' }),
  size: z.string(),
  unitNo: z.string().min(1, 'Unit No. is required'),
  bedrooms: z.enum(['1', '2', '3', '4']).optional(),
  bathrooms: z.string().min(1, 'No. of Bathrooms is required'),
  parkingSpaces: z.number().optional(),
  furnished: z.enum(['yes', 'no']).optional(),
  totalPlotSize: z.number().optional(),
  lotSize: z.number().optional(),
  buildUpArea: z.number().optional(),
  layoutType: z.string().optional(),
  projectName: z.string().optional(),
  projectStatus: z.enum(['Ready Secondary', 'Off-plan Secondary', 'Ready Primary', 'Off-plan Primary']).optional(),
  saleType: z.enum(['freehold', 'new', 'resale']).optional(),
  developer: z.enum(['elegance-holding', 'other']).optional(),
  buildYear: z.number().optional(),
  ownership: z.enum(['freehold', 'nonehold', 'leasehold']).optional(),
  reraPermitNumber: z.string().min(1, 'RERA Permit Number is required'),
  reraPermitIssueDate: z.date().optional(),
  reraPermitExpirationDate: z.date().optional(),
  dtcmPermitNumber: z.string().optional(),
  price: z.string().min(1, 'Price is required'),
  rentalPeriod: z.enum(['daily', 'weekly', 'monthly', 'yearly']).optional(),
  hidePrice: z.enum(['yes', 'no']).optional(),
  paymentMethod: z.string().optional(),
  downPayment: z.number().optional(),
  noOfCheques: z.number().optional(),
  serviceCharge: z.number().optional(),
  financialStatus: z.enum(['mortgaged', 'cash']).optional(),
});

export const locationSchema = z.object({
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  landmark: z.string().optional(),
});

export const mediaSchema = z.object({
  images: z.array(z.string()).min(1, 'At least one image is required'),
  virtualTour: z.string().url().optional(),
});

export const documentsSchema = z.object({
  propertyDocs: z.array(z.string()).optional(),
  certificates: z.array(z.string()).optional(),
});
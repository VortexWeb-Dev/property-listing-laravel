import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, User, Home, Lock } from 'lucide-react';

import { Button } from '@/Components/ui/button';
import { Card } from '@/Components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { personalInfoSchema, addressSchema, accountSchema } from '@/lib/validations/form-schema';

const steps = [
  { title: 'Personal Info', icon: User },
  { title: 'Address', icon: Home },
  { title: 'Account', icon: Lock },
];

type FormData = z.infer<typeof personalInfoSchema> &
  z.infer<typeof addressSchema> &
  z.infer<typeof accountSchema>;

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const form = useForm<FormData>({
    resolver: zodResolver(
      step === 0
        ? personalInfoSchema
        : step === 1
        ? addressSchema
        : accountSchema
    ),
    defaultValues: formData,
  });

  const onSubmit = async (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      // Handle final form submission
      console.log('Form submitted:', { ...formData, ...data });
      // Reset form
      setStep(0);
      setFormData({});
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl p-8 space-y-8">
        {/* Progress Steps */}
        <div className="flex justify-between relative mb-8">
          <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 -z-10" />
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  i <= step ? 'bg-primary text-primary-foreground' : 'bg-gray-200'
                } transition-colors duration-200`}
              >
                {i < step ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <s.icon className="w-5 h-5" />
                )}
              </div>
              <span className="text-sm font-medium">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 0 && (
                  <>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="NY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                    disabled={step === 0}
                  >
                    Previous
                  </Button>
                  <Button type="submit">
                    {step === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
}
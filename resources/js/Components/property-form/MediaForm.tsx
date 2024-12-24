import { useFormContext } from "react-hook-form";
import { Upload, Link } from "lucide-react";
import { Card } from "@/Components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

export function MediaForm() {
  const form = useFormContext();

  return (
    <div className="space-y-6">
      <Card className="p-6 border-dashed">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">Drag & drop your images here</p>
            <p className="text-xs text-muted-foreground">
              Support for JPG, PNG files. Max file size 5MB.
            </p>
          </div>
          <Input
            type="file"
            className="max-w-xs"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              form.setValue(
                "images",
                files.map((file) => URL.createObjectURL(file))
              );
            }}
          />
        </div>
      </Card>

      <FormField
        control={form.control}
        name="virtualTour"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Virtual Tour URL (Optional)</FormLabel>
            <FormControl>
              <div className="relative">
                <Input placeholder="https://" {...field} />
                <Link className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { Label } from '@/Components/ui/label';
import { Checkbox } from '@/Components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { Slider } from '@/Components/ui/slider';

export function FilterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-11 px-6 gap-2 text-base">
          <SlidersHorizontal className="h-5 w-5" />
          All Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">All Filters</DialogTitle>
        </DialogHeader>
        <div className="grid gap-8 py-6">
          <div className="space-y-5">
            <Label className="text-lg">Property Features</Label>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center space-x-3">
                <Checkbox id="parking" className="h-5 w-5" />
                <label htmlFor="parking" className="text-base">Parking</label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="pool" className="h-5 w-5" />
                <label htmlFor="pool" className="text-base">Swimming Pool</label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="gym" className="h-5 w-5" />
                <label htmlFor="gym" className="text-base">Gym</label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="security" className="h-5 w-5" />
                <label htmlFor="security" className="text-base">24/7 Security</label>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <Label className="text-lg">Price Range</Label>
            <Slider
              defaultValue={[20, 80]}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-base text-muted-foreground">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>

          <div className="space-y-5">
            <Label className="text-lg">Floor Level</Label>
            <Select>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select floor level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Floor (1-10)</SelectItem>
                <SelectItem value="mid">Mid Floor (11-20)</SelectItem>
                <SelectItem value="high">High Floor (21+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" className="h-11 px-6">Reset</Button>
            <Button className="h-11 px-8">Apply Filters</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
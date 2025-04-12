
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  bedrooms: string;
  bathrooms: string;
  livingArea: string;
  lotSize: string;
  yearBuilt: string;
  location: string;
  propertyType: string;
  condition: string;
  distanceToCenter: number;
}

const PredictionForm = ({ onPredictionResult }: { onPredictionResult: (value: number) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    bedrooms: "3",
    bathrooms: "2",
    livingArea: "1800",
    lotSize: "5000",
    yearBuilt: "2010",
    location: "suburban",
    propertyType: "singleFamily",
    condition: "good",
    distanceToCenter: 5
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string | number }
  ) => {
    const { name, value } = 'target' in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDistanceChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, distanceToCenter: value[0] }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call to ML backend
      setTimeout(() => {
        // Calculate a fake prediction based on the form inputs
        const basePrice = 250000;
        const bedroomFactor = parseInt(formData.bedrooms) * 25000;
        const bathroomFactor = parseInt(formData.bathrooms) * 15000;
        const sizeFactor = parseInt(formData.livingArea) * 100;
        const ageFactor = (2025 - parseInt(formData.yearBuilt)) * -1000;
        
        let locationFactor = 0;
        if (formData.location === 'urban') locationFactor = 50000;
        if (formData.location === 'suburban') locationFactor = 25000;
        
        let conditionFactor = 0;
        if (formData.condition === 'excellent') conditionFactor = 40000;
        if (formData.condition === 'good') conditionFactor = 20000;
        if (formData.condition === 'fair') conditionFactor = 0;
        if (formData.condition === 'poor') conditionFactor = -20000;
        
        const distanceFactor = formData.distanceToCenter * -3000;
        
        const prediction = basePrice + bedroomFactor + bathroomFactor + sizeFactor + 
                          ageFactor + locationFactor + conditionFactor + distanceFactor;
        
        const roundedPrediction = Math.round(prediction / 1000) * 1000;
        
        onPredictionResult(roundedPrediction);
        setIsLoading(false);
        toast.success("Prediction completed successfully!");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error("There was an error generating the prediction.");
      console.error("Prediction error:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl prediction-box-shadow p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Enter Your Property Details</h3>
        <p className="text-gray-600">Fill in the information below to get an accurate prediction</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bedrooms & Bathrooms */}
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select 
              name="bedrooms" 
              value={formData.bedrooms}
              onValueChange={(value) => handleSelectChange("bedrooms", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select bedrooms" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'bedroom' : 'bedrooms'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Select 
              name="bathrooms" 
              value={formData.bathrooms}
              onValueChange={(value) => handleSelectChange("bathrooms", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select bathrooms" />
              </SelectTrigger>
              <SelectContent>
                {['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'].map((num) => (
                  <SelectItem key={num} value={num}>
                    {num} {num === '1' ? 'bathroom' : 'bathrooms'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Square Footage & Lot Size */}
          <div>
            <Label htmlFor="livingArea">Living Area (sq ft)</Label>
            <Input
              id="livingArea"
              name="livingArea"
              type="number"
              value={formData.livingArea}
              onChange={handleChange}
              placeholder="Square footage"
            />
          </div>
          
          <div>
            <Label htmlFor="lotSize">Lot Size (sq ft)</Label>
            <Input
              id="lotSize"
              name="lotSize"
              type="number"
              value={formData.lotSize}
              onChange={handleChange}
              placeholder="Lot size"
            />
          </div>
          
          {/* Year Built & Property Type */}
          <div>
            <Label htmlFor="yearBuilt">Year Built</Label>
            <Input
              id="yearBuilt"
              name="yearBuilt"
              type="number"
              min="1900"
              max="2025"
              value={formData.yearBuilt}
              onChange={handleChange}
              placeholder="Year built"
            />
          </div>
          
          <div>
            <Label htmlFor="propertyType">Property Type</Label>
            <Select 
              name="propertyType" 
              value={formData.propertyType}
              onValueChange={(value) => handleSelectChange("propertyType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="singleFamily">Single Family</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="multifamily">Multi-Family</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Location & Condition */}
          <div>
            <Label htmlFor="location">Location Type</Label>
            <Select 
              name="location" 
              value={formData.location}
              onValueChange={(value) => handleSelectChange("location", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urban">Urban</SelectItem>
                <SelectItem value="suburban">Suburban</SelectItem>
                <SelectItem value="rural">Rural</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="condition">Property Condition</Label>
            <Select 
              name="condition" 
              value={formData.condition}
              onValueChange={(value) => handleSelectChange("condition", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="poor">Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Distance to City Center */}
        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="distanceToCenter">Distance to City Center</Label>
            <span className="text-sm text-gray-500">{formData.distanceToCenter} miles</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-estate-blue" />
            <Slider
              id="distanceToCenter"
              max={30}
              step={1}
              value={[formData.distanceToCenter]}
              onValueChange={handleDistanceChange}
              className="flex-1"
            />
            <span className="text-sm text-gray-500">30 mi</span>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-estate-blue hover:bg-estate-darkBlue"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="house-prediction-loader mr-2"></div>
              <span>Calculating...</span>
            </>
          ) : (
            <>
              <Calculator className="mr-2 h-5 w-5" />
              <span>Calculate Property Value</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default PredictionForm;

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, LineChart, HelpCircle, Home, TrendingUp, IndianRupee, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
} from "recharts";

interface PredictionResultProps {
  predictedValue: number | null;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ predictedValue }) => {
  if (predictedValue === null) {
    return null;
  }

  // Converting USD to INR (approximate conversion rate used)
  const inrValue = predictedValue * 75;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(inrValue);

  // Sample historical data
  const historicalData = [
    { month: 'Jan', value: inrValue * 0.92 },
    { month: 'Feb', value: inrValue * 0.94 },
    { month: 'Mar', value: inrValue * 0.97 },
    { month: 'Apr', value: inrValue * 0.99 },
    { month: 'May', value: inrValue * 1.01 },
    { month: 'Jun', value: inrValue },
  ];

  // Feature impact data
  const featureImpactData = [
    { name: 'Location', value: 35 },
    { name: 'Size', value: 25 },
    { name: 'Bedrooms', value: 15 },
    { name: 'Age', value: 12 },
    { name: 'Condition', value: 8 },
    { name: 'Other', value: 5 },
  ];

  return (
    <div className="bg-white rounded-xl prediction-box-shadow p-6 animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-block bg-green-100 p-2 rounded-full">
          <TrendingUp className="h-8 w-8 text-estate-green" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Property Valuation</h3>
        <div className="text-4xl font-bold text-estate-blue">{formattedPrice}</div>
        <p className="text-gray-500 mt-2">Predicted market value based on your inputs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold flex items-center">
                <LineChart className="h-5 w-5 mr-2 text-estate-blue" />
                Value Trend (6 Months)
              </h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Historical price trend over the last 6 months based on market data</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={historicalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis 
                    tickFormatter={(value) => 
                      new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        notation: 'compact',
                        maximumFractionDigits: 0
                      }).format(value)
                    } 
                  />
                  <ReTooltip 
                    formatter={(value: number) => [
                      new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        maximumFractionDigits: 0
                      }).format(value),
                      'Value'
                    ]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0EA5E9" 
                    strokeWidth={2}
                    dot={{ fill: '#0EA5E9', r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-estate-blue" />
                Value Factors
              </h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Key factors influencing your property's valuation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  layout="vertical"
                  data={featureImpactData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <ReTooltip
                    formatter={(value: number) => [`${value}% impact`, 'Importance']}
                    labelFormatter={() => 'Feature Impact'}
                  />
                  <Bar dataKey="value" fill="#0EA5E9" radius={[0, 4, 4, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Home className="h-5 w-5 text-estate-blue mr-2" />
            <h5 className="font-semibold">Comparable Properties</h5>
          </div>
          <p className="text-sm text-gray-600">5 similar properties in area</p>
          <p className="text-lg font-semibold text-estate-darkBlue mt-1">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0
            }).format(inrValue * 0.98)} - {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0
            }).format(inrValue * 1.05)}
          </p>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-5 w-5 text-estate-green mr-2" />
            <h5 className="font-semibold">Market Appreciation</h5>
          </div>
          <p className="text-sm text-gray-600">Projected annual growth</p>
          <p className="text-lg font-semibold text-estate-green mt-1">+3.8%</p>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <IndianRupee className="h-5 w-5 text-estate-blue mr-2" />
            <h5 className="font-semibold">Price per Sq Ft</h5>
          </div>
          <p className="text-sm text-gray-600">Based on living area</p>
          <p className="text-lg font-semibold text-estate-darkBlue mt-1">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0
            }).format(inrValue / 1800)}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="bg-estate-blue hover:bg-estate-darkBlue">
          <Download className="mr-2 h-5 w-5" />
          Download Detailed Report
        </Button>
      </div>
    </div>
  );
};

export default PredictionResult;

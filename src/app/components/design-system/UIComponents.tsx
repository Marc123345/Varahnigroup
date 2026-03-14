import * as React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export function UIComponentsShowcase() {
  return (
    <div className="space-y-12">
      {/* Buttons */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Buttons
        </h3>
        
        <div className="space-y-8">
          {/* Primary Buttons */}
          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              PRIMARY BUTTONS
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#822C1E] hover:bg-[#6A2318] text-white">
                Default Button
              </Button>
              <Button className="bg-[#822C1E] hover:bg-[#6A2318] text-white" size="sm">
                Small Button
              </Button>
              <Button className="bg-[#822C1E] hover:bg-[#6A2318] text-white" size="lg">
                Large Button
              </Button>
              <Button className="bg-[#822C1E] hover:bg-[#6A2318] text-white" disabled>
                Disabled Button
              </Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              SECONDARY BUTTONS
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-[#822C1E] text-[#822C1E] hover:bg-[#822C1E] hover:text-white">
                Outline Button
              </Button>
              <Button variant="outline" className="border-[#2C2D2D] text-[#2C2D2D] hover:bg-[#2C2D2D] hover:text-white">
                Charcoal Outline
              </Button>
              <Button variant="ghost" className="text-[#822C1E] hover:bg-[#822C1E]/10">
                Ghost Button
              </Button>
            </div>
          </div>

          {/* Full Width Button */}
          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              FULL WIDTH
            </p>
            <Button className="w-full bg-[#822C1E] hover:bg-[#6A2318] text-white">
              Full Width Button
            </Button>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Input Fields
        </h3>
        
        <div className="space-y-6 max-w-md">
          <div>
            <label 
              className="block mb-2 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              DEFAULT INPUT
            </label>
            <Input placeholder="Enter text..." />
          </div>

          <div>
            <label 
              className="block mb-2 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              WITH VALUE
            </label>
            <Input defaultValue="Sample text" />
          </div>

          <div>
            <label 
              className="block mb-2 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              DISABLED STATE
            </label>
            <Input placeholder="Disabled input" disabled />
          </div>

          <div>
            <label 
              className="block mb-2 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              BRANDED INPUT
            </label>
            <Input 
              placeholder="Focus to see brand color" 
              className="focus:border-[#822C1E] focus:ring-[#822C1E]"
            />
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Badges & Labels
        </h3>
        
        <div className="space-y-6">
          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              BRAND COLORS
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#822C1E] hover:bg-[#6A2318] text-white">Burgundy</Badge>
              <Badge className="bg-[#2C2D2D] hover:bg-black text-white">Charcoal</Badge>
              <Badge variant="outline" className="border-[#822C1E] text-[#822C1E]">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </div>

          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              STATUS BADGES
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
              <Badge className="bg-yellow-600 hover:bg-yellow-700">Pending</Badge>
              <Badge className="bg-red-600 hover:bg-red-700">Inactive</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">In Progress</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Cards
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>
                <span 
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', fontWeight: 400 }}
                >
                  Basic Card
                </span>
              </CardTitle>
              <CardDescription>
                <span 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
                >
                  Simple card with title and description
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                This is a standard card component with header and content sections.
              </p>
            </CardContent>
          </Card>

          {/* Branded Card */}
          <Card className="border-[#822C1E] border-2">
            <CardHeader className="bg-[#822C1E] text-white">
              <CardTitle>
                <span 
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', fontWeight: 400 }}
                >
                  Branded Card
                </span>
              </CardTitle>
              <CardDescription className="text-white/90">
                <span 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
                >
                  Card with burgundy header
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                Card with branded header and border styling.
              </p>
            </CardContent>
          </Card>

          {/* Charcoal Card */}
          <Card className="border-[#2C2D2D] border-2">
            <CardHeader className="bg-[#2C2D2D] text-white">
              <CardTitle>
                <span 
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', fontWeight: 400 }}
                >
                  Charcoal Card
                </span>
              </CardTitle>
              <CardDescription className="text-white/90">
                <span 
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
                >
                  Card with charcoal header
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                Alternative card style using charcoal black.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dividers */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Dividers
        </h3>
        
        <div className="space-y-6">
          <div>
            <p 
              className="mb-3 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              BURGUNDY DIVIDER
            </p>
            <div className="h-[2px] bg-[#822C1E]" />
          </div>

          <div>
            <p 
              className="mb-3 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              CHARCOAL DIVIDER
            </p>
            <div className="h-[2px] bg-[#2C2D2D]" />
          </div>

          <div>
            <p 
              className="mb-3 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              THIN DIVIDER
            </p>
            <div className="h-[1px] bg-[#822C1E]" />
          </div>

          <div>
            <p 
              className="mb-3 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              THICK DIVIDER
            </p>
            <div className="h-1 bg-[#822C1E]" />
          </div>
        </div>
      </div>

      {/* Containers */}
      <div>
        <h3 
          className="mb-6 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Containers
        </h3>
        
        <div className="space-y-6">
          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              BORDERED CONTAINER
            </p>
            <div className="border-2 border-[#822C1E] p-6">
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                Container with burgundy border
              </p>
            </div>
          </div>

          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              FILLED CONTAINER
            </p>
            <div className="bg-[#822C1E] text-white p-6">
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                Container with burgundy background
              </p>
            </div>
          </div>

          <div>
            <p 
              className="mb-4 text-[#2C2D2D]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
            >
              SUBTLE CONTAINER
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <p 
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                Container with subtle styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
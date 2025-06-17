
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    reasonForContact: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.reasonForContact || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Request submitted successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      reasonForContact: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-medium h-fit">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-synapse-dark mb-2">
          Get in Touch
        </h2>
        <p className="text-base text-synapse-gray">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Smith"
              required
              className="h-10 text-sm"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@company.com"
              required
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="h-10 text-sm"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="companyName" className="text-sm font-medium">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Acme Corp"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="reasonForContact" className="text-sm font-medium">Reason for Contact *</Label>
          <Select value={formData.reasonForContact} onValueChange={(value) => handleInputChange("reasonForContact", value)}>
            <SelectTrigger className="h-10 text-sm">
              <SelectValue placeholder="Select reason for contact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hiring-needs">Hiring Needs</SelectItem>
              <SelectItem value="join-recruiter-network">Join Our Recruiter Network</SelectItem>
              <SelectItem value="talent-inquiry">Talent Inquiry (Looking for Job)</SelectItem>
              <SelectItem value="general-query">General Query</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Please provide details about your inquiry..."
            rows={4}
            required
            className="resize-none text-sm"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full btn-primary text-sm py-2.5 h-11 mt-4"
        >
          Submit Request
        </Button>
        
        <p className="text-xs text-synapse-gray text-center mt-3">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

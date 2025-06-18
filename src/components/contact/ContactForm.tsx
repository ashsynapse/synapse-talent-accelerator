
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
    linkedin: "",
    reasonForContact: "",
    message: ""
  });

  const validateEmail = (email: string) => {
    const consumerEmailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'live.com', 'msn.com', 'ymail.com', 'mail.com'
    ];
    
    const emailDomain = email.split('@')[1]?.toLowerCase();
    return !consumerEmailDomains.includes(emailDomain);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.linkedin || !formData.reasonForContact || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please use a company email address (not Gmail, Yahoo, Hotmail, etc.)",
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
      linkedin: "",
      reasonForContact: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-medium h-fit sticky top-8">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-synapse-dark mb-4 leading-tight">
          Get in Touch
        </h2>
        <p className="text-synapse-gray text-base">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Row - Full Name and Company Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Smith"
              required
              className="h-11 text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Company Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@company.com"
              required
              className="h-11 text-sm"
            />
          </div>
        </div>

        {/* Second Row - LinkedIn and Reason for Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn Profile *</Label>
            <Input
              id="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={(e) => handleInputChange("linkedin", e.target.value)}
              placeholder="linkedin.com/in/johnsmith or /company/xyz"
              required
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reasonForContact" className="text-sm font-medium">Reason for Contact *</Label>
            <Select value={formData.reasonForContact} onValueChange={(value) => handleInputChange("reasonForContact", value)}>
              <SelectTrigger className="h-11 text-sm">
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
        </div>

        {/* Third Row - Message (Full Width) */}
        <div className="space-y-2">
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

        <div className="pt-2">
          <Button 
            type="submit" 
            className="relative overflow-hidden bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-8 py-3 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Subtle glow animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary/50 to-synapse-secondary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <span className="relative z-10">
              Submit Request
            </span>
          </Button>
        </div>
        
        <p className="text-xs text-synapse-gray pt-2">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

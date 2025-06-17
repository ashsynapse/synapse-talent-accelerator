
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Building2, MessageSquare } from "lucide-react";

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
    <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-synapse-light/20 to-synapse-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-synapse-secondary/20 to-synapse-tertiary/10 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-3">
            Get in Touch
          </h2>
          <p className="text-base text-synapse-gray leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-medium text-synapse-dark">Full Name *</Label>
              <div className="relative">
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="John Smith"
                  required
                  className="h-12 text-base pl-4 border-2 border-gray-200 focus:border-synapse-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium text-synapse-dark">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-synapse-gray" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                  className="h-12 text-base pl-11 border-2 border-gray-200 focus:border-synapse-primary transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-base font-medium text-synapse-dark">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-synapse-gray" />
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="h-12 text-base pl-11 border-2 border-gray-200 focus:border-synapse-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-base font-medium text-synapse-dark">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-synapse-gray" />
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Acme Corp"
                  className="h-12 text-base pl-11 border-2 border-gray-200 focus:border-synapse-primary transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reasonForContact" className="text-base font-medium text-synapse-dark">Reason for Contact *</Label>
            <Select value={formData.reasonForContact} onValueChange={(value) => handleInputChange("reasonForContact", value)}>
              <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-synapse-primary transition-colors">
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

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-medium text-synapse-dark">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Please provide details about your inquiry..."
              rows={4}
              required
              className="text-base border-2 border-gray-200 focus:border-synapse-primary transition-colors resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-base font-semibold bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-primary/90 hover:to-synapse-secondary/90 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Submit Request
          </Button>
          
          <p className="text-sm text-synapse-gray text-center leading-relaxed">
            By submitting this form, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "./ContactForm";
import CalendarBooking from "./CalendarBooking";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div>
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Ready to Transform </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Your Hiring?</span>
            </h1>
            <p className="text-xl text-synapse-gray mb-8">
              Connect with our team to discover how Synapse's AI-powered recruitment solutions can help you find exceptional talent faster than ever before.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-synapse-dark">Phone</h3>
                  <p className="text-synapse-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-synapse-dark">Email</h3>
                  <p className="text-synapse-gray">hello@synapseint.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-synapse-dark">Location</h3>
                  <p className="text-synapse-gray">Los Angeles, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-synapse-dark">Business Hours</h3>
                  <p className="text-synapse-gray">Mon-Fri: 9AM-6PM PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form/Calendar */}
          <div>
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === "form" ? "default" : "outline"}
                onClick={() => setActiveTab("form")}
                className={`flex-1 ${activeTab === "form" ? "bg-synapse-primary text-white" : "border-synapse-primary/20 text-synapse-primary hover:bg-synapse-primary/10"}`}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button
                variant={activeTab === "calendar" ? "default" : "outline"}
                onClick={() => setActiveTab("calendar")}
                className={`flex-1 ${activeTab === "calendar" ? "bg-synapse-primary text-white" : "border-synapse-primary/20 text-synapse-primary hover:bg-synapse-primary/10"}`}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call
              </Button>
            </div>

            <Card className="border-synapse-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-synapse-dark">
                  {activeTab === "form" ? "Send us a message" : "Schedule a consultation"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeTab === "form" ? <ContactForm /> : <CalendarBooking />}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

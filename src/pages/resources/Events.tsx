
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink, Star, CheckCircle, ArrowRight } from "lucide-react";

const Events = () => {
  const eventDetails = [
    "How to use the shared lead & company lists",
    "Walking through the Synapse Recruiting Guide", 
    "Reviewing new collateral being added to jobs to help you",
    "Creating urgency - we have a lot of open jobs!!",
    "Qualifying candidates (salary and beyond)",
    "Candidate Interview prep and info gathering",
    "Building trust and getting feedback",
    "Negotiating and closing",
    "Tying it all together for consistent wins"
  ];

  return (
    <PageTemplate 
      title="Live Sourcing Deep Dive: Full-Funnel Focus"
      description="Join our exclusive live recruiting webinar focused on driving real results through the recruiting funnel"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Live Events
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Live Sourcing Deep Dive: </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Full-Funnel Focus</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Join us for a no-fluff, high-impact session focused on driving real results through the recruiting funnel
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.open("https://meet.google.com/qcw-unwt-xrc", "_blank")}
            >
              Join Live Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Event Card - Reduced height significantly */}
      <section className="py-8 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-synapse-primary shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-500 fill-current" size={20} />
                  <span className="text-base font-semibold text-synapse-primary">Featured Event</span>
                </div>
                
                <h2 className="text-2xl font-bold text-synapse-dark mb-3">
                  Live Recruiting Webinar and AMA
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-synapse-primary" size={18} />
                      <span className="text-synapse-dark font-medium">Every Friday</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-synapse-primary" size={18} />
                      <span className="text-synapse-dark font-medium">8:30 AM Eastern Time (ET)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-synapse-primary" size={18} />
                      <span className="text-synapse-dark font-medium">Virtual Event</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-synapse-primary" size={18} />
                      <span className="text-synapse-dark font-medium">15+ People Interested</span>
                    </div>
                  </div>
                  
                  <div className="bg-synapse-lighter/50 p-3 rounded-lg">
                    <h3 className="font-bold text-synapse-dark mb-1">Event Host</h3>
                    <p className="text-synapse-gray text-sm">Ali Taghikhani</p>
                    <p className="text-xs text-synapse-gray">CEO at Synapse</p>
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Absolutely Free
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-500 fill-current" size={18} />
                    <h3 className="text-lg font-bold text-synapse-dark">
                      What You'll Learn
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-1">
                    {eventDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-0.5" size={14} />
                        <span className="text-synapse-gray text-xs">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    className="btn-primary text-base px-6 py-2"
                    onClick={() => window.open("https://meet.google.com/qcw-unwt-xrc", "_blank")}
                  >
                    Join Live Session
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Series - Single card for Every Friday */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-synapse-dark mb-6 text-center">Recurring Event</h2>
            <div className="flex justify-center">
              <div className="max-w-sm">
                <Card className="border hover:border-synapse-primary transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <Calendar className="mx-auto mb-3 text-synapse-primary" size={24} />
                    <h3 className="font-bold text-synapse-dark mb-1">Every Friday</h3>
                    <p className="text-synapse-gray text-sm mb-2">8:30 AM ET</p>
                    <span className="inline-block bg-synapse-primary text-white text-xs px-2 py-1 rounded">
                      Weekly Session
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Recruiting Results?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Don't miss this opportunity to learn proven strategies that drive consistent wins
            </p>
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => window.open("https://meet.google.com/qcw-unwt-xrc", "_blank")}
            >
              Join the Live Session
              <ExternalLink size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Events;

import React, { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { ChevronDown, ChevronRight, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [expandedProvinces, setExpandedProvinces] = useState<Set<string>>(new Set());
  const [expandedLatam, setExpandedLatam] = useState<Set<string>>(new Set());
  const [expandedEmea, setExpandedEmea] = useState<Set<string>>(new Set());
  const [expandedApac, setExpandedApac] = useState<Set<string>>(new Set());

  const toggleExpanded = (location: string, type: 'states' | 'provinces' | 'latam' | 'emea' | 'apac' = 'states') => {
    let setExpanded: React.Dispatch<React.SetStateAction<Set<string>>>;
    let expanded: Set<string>;
    
    switch (type) {
      case 'provinces':
        setExpanded = setExpandedProvinces;
        expanded = expandedProvinces;
        break;
      case 'latam':
        setExpanded = setExpandedLatam;
        expanded = expandedLatam;
        break;
      case 'emea':
        setExpanded = setExpandedEmea;
        expanded = expandedEmea;
        break;
      case 'apac':
        setExpanded = setExpandedApac;
        expanded = expandedApac;
        break;
      default:
        setExpanded = setExpandedStates;
        expanded = expandedStates;
    }
    
    const newExpanded = new Set(expanded);
    if (newExpanded.has(location)) {
      newExpanded.delete(location);
    } else {
      newExpanded.add(location);
    }
    setExpanded(newExpanded);
  };

  const usaLocations = {
    Alabama: ["Birmingham", "Montgomery", "Mobile"],
    Alaska: ["Anchorage", "Fairbanks", "Juneau"],
    Arizona: ["Phoenix", "Tucson", "Mesa"],
    Arkansas: ["Little Rock", "Fayetteville", "Fort Smith"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Colorado: ["Telluride", "Denver", "Colorado Springs"],
    Connecticut: ["Aurora", "Bridgeport", "New Haven"],
    Delaware: ["Hartford", "Wilmington", "Dover"],
    Florida: ["Newark", "Miami", "Orlando"],
    Georgia: ["Tampa", "Atlanta", "Savannah"],
    Hawaii: ["Augusta", "Honolulu", "Hilo"],
    Idaho: ["Kailua", "Boise", "Idaho Falls"],
    Illinois: ["Meridian", "Chicago", "Springfield"],
    Indiana: ["Peoria", "Indianapolis", "Fort Wayne"],
    Iowa: ["Evansville", "Des Moines", "Cedar Rapids"],
    Kansas: ["Davenport", "Wichita", "Overland Park"],
    Kentucky: ["Kansas City", "Louisville", "Lexington"],
    Louisiana: ["Bowling Green", "New Orleans", "Baton Rouge"],
    Maine: ["Shreveport", "Portland", "Augusta"],
    Maryland: ["Bangor", "Baltimore", "Annapolis"],
    Massachusetts: ["Frederick", "Boston", "Worcester"],
    Michigan: ["Springfield", "Detroit", "Grand Rapids"],
    Minnesota: ["Lansing", "Minneapolis", "Saint Paul"],
    Mississippi: ["Rochester", "Jackson", "Gulfport"],
    Missouri: ["Hattiesburg", "Kansas City", "Saint Louis"],
    Montana: ["Springfield", "Billings", "Missoula"],
    Nebraska: ["Great Falls", "Omaha", "Lincoln"],
    Nevada: ["Bellevue", "Las Vegas", "Reno"],
    "New Hampshire": ["Henderson", "Manchester", "Nashua"],
    "New Jersey": ["Concord", "Newark", "Jersey City"],
    "New Mexico": ["Paterson", "Albuquerque", "Santa Fe"],
    "New York": ["Las Cruces", "New York City", "Buffalo"],
    "North Carolina": ["Rochester", "Charlotte", "Raleigh"],
    "North Dakota": ["Greensboro", "Fargo", "Bismarck"],
    Ohio: ["Grand Forks", "Columbus", "Cleveland"],
    Oklahoma: ["Cincinnati", "Oklahoma City", "Tulsa"],
    Oregon: ["Norman", "Portland", "Eugene"],
    Pennsylvania: ["Salem", "Philadelphia", "Pittsburgh"],
    "Rhode Island": ["Allentown", "Providence", "Warwick"],
    "South Carolina": ["Cranston", "Charleston", "Columbia"],
    "South Dakota": ["Greenville", "Sioux Falls", "Rapid City"],
    Tennessee: ["Aberdeen", "Nashville", "Memphis"],
    Texas: ["Knoxville", "Houston", "Dallas"],
    Utah: ["Austin", "Salt Lake City", "Provo"],
    Vermont: ["Ogden", "Burlington", "Montpelier"],
    Virginia: ["Rutland", "Virginia Beach", "Richmond"],
    Washington: ["Norfolk", "Seattle", "Spokane"],
    "West Virginia": ["Tacoma", "Charleston", "Huntington"],
    Wisconsin: ["Morgantown", "Milwaukee", "Madison"],
    Wyoming: ["Green Bay", "Cheyenne", "Casper", "Laramie"]
  };

  const canadaLocations = {
    "British Columbia": ["Vancouver", "Victoria", "Surrey"],
    Alberta: ["Calgary", "Edmonton", "Red Deer"],
    Saskatchewan: ["Saskatoon", "Regina", "Prince Albert"],
    Manitoba: ["Winnipeg", "Brandon", "Steinbach"],
    Ontario: ["Toronto", "Ottawa", "Hamilton"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    "New Brunswick": ["Saint John", "Moncton", "Fredericton"],
    "Nova Scotia": ["Halifax", "Sydney", "Dartmouth"],
    "Prince Edward Island": ["Charlottetown", "Summerside", "Stratford"],
    "Newfoundland and Labrador": ["St. John's", "Mount Pearl", "Corner Brook"]
  };

  const latamLocations = {
    Argentina: ["Buenos Aires", "Córdoba", "Rosario"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Brasília"],
    Chile: ["Santiago", "Valparaíso", "Concepción"],
    Colombia: ["Bogotá", "Medellín", "Cali"],
    Mexico: ["Mexico City", "Guadalajara", "Monterrey"],
    Peru: ["Lima", "Arequipa", "Trujillo"],
    Uruguay: ["Montevideo", "Salto", "Paysandú"],
    Ecuador: ["Quito", "Guayaquil", "Cuenca"],
    Venezuela: ["Caracas", "Maracaibo", "Valencia"],
    "Costa Rica": ["San José", "Cartago", "Puntarenas"],
    Panama: ["Panama City", "Colón", "David"],
    Guatemala: ["Guatemala City", "Quetzaltenango", "Escuintla"]
  };

  const emeaLocations = {
    "United Kingdom": ["London", "Manchester", "Edinburgh"],
    Germany: ["Berlin", "Munich", "Frankfurt"],
    France: ["Paris", "Lyon", "Marseille"],
    Netherlands: ["Amsterdam", "Rotterdam", "The Hague"],
    Spain: ["Madrid", "Barcelona", "Valencia"],
    Italy: ["Rome", "Milan", "Naples"],
    Switzerland: ["Zurich", "Geneva", "Basel"],
    Austria: ["Vienna", "Salzburg", "Innsbruck"],
    Belgium: ["Brussels", "Antwerp", "Ghent"],
    Sweden: ["Stockholm", "Gothenburg", "Malmö"],
    Norway: ["Oslo", "Bergen", "Trondheim"],
    Denmark: ["Copenhagen", "Aarhus", "Odense"],
    Finland: ["Helsinki", "Tampere", "Turku"],
    Poland: ["Warsaw", "Krakow", "Gdansk"],
    "Czech Republic": ["Prague", "Brno", "Ostrava"],
    Ireland: ["Dublin", "Cork", "Galway"],
    Portugal: ["Lisbon", "Porto", "Braga"],
    Israel: ["Tel Aviv", "Jerusalem", "Haifa"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Dammam"],
    "South Africa": ["Cape Town", "Johannesburg", "Durban"],
    Egypt: ["Cairo", "Alexandria", "Giza"],
    Morocco: ["Casablanca", "Rabat", "Marrakech"],
    Nigeria: ["Lagos", "Abuja", "Kano"],
    Kenya: ["Nairobi", "Mombasa", "Kisumu"]
  };

  const apacLocations = {
    Australia: ["Sydney", "Melbourne", "Brisbane"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    China: ["Beijing", "Shanghai", "Guangzhou"],
    India: ["Mumbai", "Delhi", "Bangalore"],
    Singapore: ["Singapore", "Jurong", "Tampines"],
    "South Korea": ["Seoul", "Busan", "Incheon"],
    "Hong Kong": ["Hong Kong", "Kowloon", "New Territories"],
    Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
    Malaysia: ["Kuala Lumpur", "George Town", "Johor Bahru"],
    Indonesia: ["Jakarta", "Surabaya", "Bandung"],
    Philippines: ["Manila", "Cebu", "Davao"],
    Vietnam: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
    Taiwan: ["Taipei", "Kaohsiung", "Taichung"],
    "New Zealand": ["Auckland", "Wellington", "Christchurch"]
  };

  const LocationSection = ({ 
    title, 
    locations, 
    type = 'states'
  }: { 
    title: string; 
    locations: Record<string, string[]>; 
    type?: 'states' | 'provinces' | 'latam' | 'emea' | 'apac';
  }) => {
    let expanded: Set<string>;
    
    switch (type) {
      case 'provinces':
        expanded = expandedProvinces;
        break;
      case 'latam':
        expanded = expandedLatam;
        break;
      case 'emea':
        expanded = expandedEmea;
        break;
      case 'apac':
        expanded = expandedApac;
        break;
      default:
        expanded = expandedStates;
    }
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-synapse-primary mb-6 flex items-center">
          <MapPin className="mr-3" size={24} />
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(locations).map(([state, cities]) => (
            <div key={state} className="border border-gray-100 rounded-lg">
              <button
                onClick={() => toggleExpanded(state, type)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-synapse-dark">{state}</span>
                {expanded.has(state) ? 
                  <ChevronDown size={16} className="text-synapse-primary" /> : 
                  <ChevronRight size={16} className="text-synapse-primary" />
                }
              </button>
              {expanded.has(state) && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="space-y-2 pt-3">
                    {cities.map((city) => (
                      <div key={city} className="text-sm text-synapse-gray hover:text-synapse-primary cursor-pointer pl-2">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Our Locations"
      description="Find Synapse recruitment services across the United States and Canada"
    >
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-synapse-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-synapse-primary/20">
              <MapPin className="h-4 w-4 text-synapse-primary" />
              <span className="text-synapse-primary text-sm font-medium">Our Locations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Where We </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Operate</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Synapse has a global presence, providing exceptional recruitment services 
              in major cities and metropolitan areas throughout North America, Latin America, Europe, Middle East, Africa, and Asia-Pacific.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide">
          <div className="space-y-8">
            <LocationSection title="United States" locations={usaLocations} type="states" />
            <LocationSection title="Canada" locations={canadaLocations} type="provinces" />
            <LocationSection title="LATAM" locations={latamLocations} type="latam" />
            <LocationSection title="EMEA" locations={emeaLocations} type="emea" />
            <LocationSection title="APAC" locations={apacLocations} type="apac" />
          </div>
        </div>
      </div>

      {/* CTA Section from Partners page */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-wide text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Don't see your location?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We're Always Expanding Our Reach
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Contact us to learn about opportunities in your area and discover how we can help you with your recruitment needs.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-6 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Locations;

import {
  Scissors,
  Droplets,
  Sparkles,
  Heart,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Full Service Grooming",
      description:
        "Our comprehensive grooming package includes everything your pet needs for a complete makeover.",
      price: "From $45",
      duration: "2-3 hours",
      features: [
        "Pre-grooming consultation",
        "Bath with premium shampoo & conditioner",
        "Blow dry and brush out",
        "Nail trimming and filing",
        "Ear cleaning and plucking",
        "Sanitary trim",
        "Full body haircut and styling",
        "Cologne and bow/bandana",
      ],
      popular: true,
    },
    {
      icon: Droplets,
      title: "Bath & Brush",
      description:
        "Perfect for maintaining your pet's coat between full grooming sessions.",
      price: "From $25",
      duration: "1-2 hours",
      features: [
        "Relaxing bath with quality shampoo",
        "Moisturizing conditioner treatment",
        "Thorough blow dry",
        "Complete brush out",
        "Basic nail trimming",
        "Ear cleaning",
        "Light cologne application",
      ],
    },
    {
      icon: Sparkles,
      title: "Luxury Spa Treatment",
      description: "The ultimate pampering experience for your beloved pet.",
      price: "From $65",
      duration: "3-4 hours",
      features: [
        "Aromatherapy bath experience",
        "Deep conditioning treatment",
        "Gentle massage therapy",
        "Premium styling and cut",
        "Nail polish application",
        "Teeth cleaning and breath freshening",
        "Photo session with treats",
        "Take-home care package",
      ],
    },
    {
      icon: Heart,
      title: "Senior Pet Care",
      description:
        "Gentle, specialized care designed for older pets with extra attention to comfort.",
      price: "From $40",
      duration: "2-3 hours",
      features: [
        "Extra gentle handling",
        "Shorter sessions with breaks",
        "Warm therapy treatments",
        "Joint-friendly positioning",
        "Calming aromatherapy",
        "Special senior shampoo",
        "Comfort-focused environment",
      ],
    },
  ];

  const addOns = [
    {
      name: "Nail Polish",
      price: "$10",
      description: "Non-toxic, pet-safe nail polish in various colors",
    },
    {
      name: "Teeth Cleaning",
      price: "$15",
      description: "Professional dental cleaning and breath freshening",
    },
    {
      name: "Flea Treatment",
      price: "$20",
      description: "Safe and effective flea removal treatment",
    },
    {
      name: "De-shedding",
      price: "$25",
      description: "Specialized treatment to reduce shedding",
    },
    {
      name: "Aromatherapy",
      price: "$12",
      description: "Calming essential oil treatment",
    },
    {
      name: "Photo Package",
      price: "$30",
      description: "Professional photos of your pampered pet",
    },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-petcare-50 to-warm-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Professional Pet Grooming
            <span className="text-petcare-600 block">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            From basic baths to luxury spa treatments, we provide comprehensive
            grooming services tailored to meet your pet's specific needs and
            your preferences.
          </p>
          <div className="flex items-center justify-center space-x-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warm-400 text-warm-400" />
              ))}
            </div>
            <span className="text-muted-foreground">
              Rated 4.9/5 by 500+ customers
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  service.popular ? "ring-2 ring-petcare-400 relative" : ""
                } animate-in fade-in slide-in-from-bottom-4`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationDuration: "1000ms",
                }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-warm-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-petcare-100 rounded-lg flex items-center justify-center group-hover:bg-petcare-200 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-petcare-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="font-semibold text-petcare-600">
                            {service.price}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-petcare-600 hover:bg-petcare-700 text-white group-hover:bg-warm-500 group-hover:hover:bg-warm-600 transition-all duration-300">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-b from-white to-petcare-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Premium Add-Ons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your pet's grooming experience with our premium add-on
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: "1000ms",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-foreground">
                      {addon.name}
                    </h3>
                    <span className="font-bold text-petcare-600">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {addon.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-petcare-300 text-petcare-700 hover:bg-petcare-50"
                  >
                    Add to Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-petcare-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl text-petcare-200 mb-8 max-w-2xl mx-auto">
            Choose the perfect grooming service for your pet and schedule your
            appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-warm-500 hover:bg-warm-600 text-white"
            >
              Schedule Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-petcare-700"
            >
              Call (555) 123-PETS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

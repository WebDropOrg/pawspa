import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import {
  Heart,
  Scissors,
  Droplets,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedSection, StaggeredContainer, ScaleOnHover } from "@/components/AnimatedSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.3 });

  const services = [
    {
      icon: Scissors,
      title: "Full Service Grooming",
      description:
        "Complete grooming package including bath, brush, nail trim, and styling",
      price: "From $45",
      features: ["Bath & Brush", "Nail Trimming", "Ear Cleaning", "Styling"],
    },
    {
      icon: Droplets,
      title: "Bath & Brush",
      description: "Relaxing bath with premium shampoos and thorough brushing",
      price: "From $25",
      features: ["Premium Shampoo", "Conditioner", "Blow Dry", "Basic Brush"],
    },
    {
      icon: Sparkles,
      title: "Spa Treatment",
      description: "Luxury spa experience with aromatherapy and massage",
      price: "From $65",
      features: ["Aromatherapy", "Massage", "Nail Polish", "Teeth Cleaning"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Golden Retriever - Max",
      text: "PawSpa transformed Max from a scruffy pup to a show-stopping gentleman! The staff is incredibly gentle and professional.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      pet: "Persian Cat - Luna",
      text: "Luna has never looked better! The groomers here understand different breeds and their specific needs perfectly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      pet: "Poodle Mix - Buddy",
      text: "Buddy used to hate bath time, but now he gets excited to visit PawSpa. They made grooming a positive experience!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Pets" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Clock, value: "24/7", label: "Emergency Care" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-petcare-50 via-white to-warm-50 overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f0f9ff" fill-opacity="0.4"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
          }
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-petcare-100 text-petcare-700 rounded-full text-sm font-medium animate-in fade-in slide-in-from-left-4 duration-1000">
                  <Heart className="h-4 w-4 mr-2 fill-current" />
                  Trusted by 5000+ Pet Parents
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
                  Premium Pet
                  <span className="text-petcare-600 block">
                    Grooming Services
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg animate-in fade-in slide-in-from-left-4 duration-1000 delay-400">
                  Give your furry friends the spa treatment they deserve.
                  Professional grooming with love, care, and attention to
                  detail.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-4 duration-1000 delay-600">
                <Button
                  size="lg"
                  className="bg-petcare-600 hover:bg-petcare-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-petcare-300 text-petcare-700 hover:bg-petcare-50 transition-all duration-300"
                >
                  View Services
                </Button>
              </div>

              <div className="flex items-center space-x-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-800">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-warm-400 text-warm-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.9/5 from 500+ reviews
                </span>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-petcare-400 to-warm-400 rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-petcare-100 rounded-full mx-auto flex items-center justify-center">
                      <Heart className="h-12 w-12 text-petcare-600 fill-current" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Happy Pets, Happy Lives
                    </h3>
                    <p className="text-muted-foreground">
                      Professional grooming that makes tails wag!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-petcare-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-petcare-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-petcare-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From basic baths to luxury spa treatments, we offer comprehensive
              grooming services tailored to your pet's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationDuration: "1000ms",
                }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-petcare-100 rounded-full mb-4 group-hover:bg-petcare-200 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-petcare-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-petcare-600">
                      {service.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-petcare-600 hover:bg-petcare-700 text-white group-hover:bg-warm-500 group-hover:hover:bg-warm-600 transition-all duration-300">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-petcare-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-petcare-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers and their pampered pets.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <div
                className="mb-8 animate-in fade-in duration-1000"
                key={currentTestimonial}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-warm-400 text-warm-400"
                      />
                    ),
                  )}
                </div>
                <blockquote className="text-2xl font-medium mb-6 text-petcare-100">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-lg">
                  <div className="font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-petcare-300">
                    {testimonials[currentTestimonial].pet}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-warm-400"
                        : "bg-petcare-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-petcare-600 to-petcare-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-xl text-petcare-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Book an appointment today and give your furry friend the royal
            treatment they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-warm-500 hover:bg-warm-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-petcare-700 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

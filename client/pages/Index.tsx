import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import {
  AnimatedSection,
  StaggeredContainer,
  ScaleOnHover,
} from "@/components/AnimatedSection";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      {/* Enhanced Animated Hero Section */}
      <AnimatedHero />

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-petcare-400 to-warm-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <ScaleOnHover className="text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-petcare-100 to-petcare-200 rounded-full mb-4 shadow-lg"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-10 w-10 text-petcare-600" />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-bold text-foreground mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </ScaleOnHover>
                </AnimatedSection>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-petcare-50 relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-petcare-200 to-warm-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-warm-200 to-petcare-200 rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <motion.h2
              className="text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Premium
              <span className="text-petcare-600 block">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From basic baths to luxury spa treatments, we offer comprehensive
              grooming services tailored to your pet's needs.
            </motion.p>
          </AnimatedSection>

          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-petcare-400/10 to-warm-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-8 relative">
                        <div className="text-center mb-6">
                          <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-petcare-100 to-petcare-200 rounded-full mb-6"
                            whileHover={{
                              scale: 1.1,
                              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <service.icon className="h-10 w-10 text-petcare-600" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {service.description}
                          </p>
                          <motion.div
                            className="text-3xl font-bold text-petcare-600"
                            whileHover={{ scale: 1.1 }}
                          >
                            {service.price}
                          </motion.div>
                        </div>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <ScaleOnHover>
                          <Button className="w-full bg-petcare-600 hover:bg-petcare-700 text-white group-hover:bg-warm-500 group-hover:hover:bg-warm-600 transition-all duration-300">
                            Book Service
                          </Button>
                        </ScaleOnHover>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-petcare-900 text-white overflow-hidden relative">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #f59e0b 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">What Pet Parents Say</h2>
            <p className="text-xl text-petcare-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers and their pampered pets.
            </p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                className="mb-8"
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="h-8 w-8 fill-warm-400 text-warm-400" />
                      </motion.div>
                    ),
                  )}
                </motion.div>
                <motion.blockquote
                  className="text-2xl font-medium mb-6 text-petcare-100 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.blockquote>
                <motion.div
                  className="text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="font-semibold text-white text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-petcare-300 mt-1">
                    {testimonials[currentTestimonial].pet}
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-warm-400"
                        : "bg-petcare-700"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-petcare-600 via-petcare-700 to-petcare-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            background: [
              "linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.3), transparent)",
              "linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.3), transparent)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <motion.h2
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Pamper Your Pet?
            </motion.h2>
            <motion.p
              className="text-xl text-petcare-100 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Book an appointment today and give your furry friend the royal
              treatment they deserve.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ScaleOnHover scale={1.05}>
                <Button
                  size="lg"
                  className="bg-warm-500 hover:bg-warm-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <motion.span className="flex items-center">
                    Book Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-6 w-6 ml-2" />
                    </motion.div>
                  </motion.span>
                </Button>
              </ScaleOnHover>
              <ScaleOnHover scale={1.05}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-petcare-700 transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link to="/contact" className="flex items-center">
                    Contact Us
                  </Link>
                </Button>
              </ScaleOnHover>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

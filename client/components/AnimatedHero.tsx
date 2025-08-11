import { motion } from "framer-motion";
import { Heart, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggeredContainer,
  FloatingElement,
  ScaleOnHover,
} from "./AnimatedSection";

export function AnimatedHero() {
  return (
    <section className="relative bg-gradient-to-br from-petcare-50 via-white to-warm-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <motion.div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f0f9ff" fill-opacity="0.4"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
        }
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Elements */}
      <FloatingElement className="absolute top-20 left-10">
        <div className="w-4 h-4 bg-petcare-400 rounded-full opacity-60" />
      </FloatingElement>
      <FloatingElement className="absolute top-40 right-20" delay={1}>
        <div className="w-6 h-6 bg-warm-400 rounded-full opacity-40" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-20" delay={2}>
        <div className="w-3 h-3 bg-petcare-300 rounded-full opacity-50" />
      </FloatingElement>
      <FloatingElement className="absolute top-1/2 right-10" delay={1.5}>
        <div className="w-5 h-5 bg-petcare-500 rounded-full opacity-30" />
      </FloatingElement>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StaggeredContainer className="space-y-8">
            <div className="space-y-6">
              <AnimatedSection direction="left">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-petcare-100 text-petcare-700 rounded-full text-sm font-medium"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="h-4 w-4 mr-2 fill-current" />
                  </motion.div>
                  Trusted by 5000+ Pet Parents
                </motion.div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="block"
                  >
                    Premium Pet
                  </motion.span>
                  <motion.span
                    className="text-petcare-600 block bg-gradient-to-r from-petcare-600 to-petcare-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Grooming Services
                  </motion.span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.4}>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Give your furry friends the spa treatment they deserve.
                  Professional grooming with love, care, and attention to
                  detail.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="left" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Button
                    size="lg"
                    className="bg-petcare-600 hover:bg-petcare-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.span className="flex items-center">
                      Book Appointment
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </motion.div>
                    </motion.span>
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-petcare-300 text-petcare-700 hover:bg-petcare-50 transition-all duration-300"
                  >
                    View Services
                  </Button>
                </ScaleOnHover>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.8}>
              <div className="flex items-center space-x-6">
                <StaggeredContainer>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <Star className="h-5 w-5 fill-warm-400 text-warm-400" />
                      </motion.div>
                    ))}
                  </div>
                </StaggeredContainer>
                <span className="text-sm text-muted-foreground">
                  4.9/5 from 500+ reviews
                </span>
              </div>
            </AnimatedSection>
          </StaggeredContainer>

          <AnimatedSection direction="right" delay={0.3} className="relative">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-petcare-400 to-warm-400 rounded-3xl opacity-20"
                animate={{ rotate: [6, 10, 6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl p-8"
                initial={{ rotate: -2 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-petcare-100 to-petcare-200 rounded-full mx-auto flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.3)",
                        "0 0 0 20px rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="h-16 w-16 text-petcare-600 fill-current" />
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Happy Pets, Happy Lives
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Professional grooming that makes tails wag!
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

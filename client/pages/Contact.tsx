import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Supabase integration
      // Example Supabase code:
      // const { data, error } = await supabase
      //   .from('contact_submissions')
      //   .insert([formData]);

      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petType: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-PETS",
      subtitle: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@pawspa.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Pet Street, City, State 12345",
      subtitle: "Easy parking available",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sat: 8AM-6PM | Sun: 10AM-4PM",
      subtitle: "Emergency services available",
    },
  ];

  const services = [
    "Full Service Grooming",
    "Bath & Brush",
    "Luxury Spa Treatment",
    "Senior Pet Care",
    "Nail Trimming Only",
    "Teeth Cleaning",
    "Other",
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-petcare-50 to-warm-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Ready to book an appointment or have questions about our services?
            We'd love to hear from you and your furry friend!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Book an Appointment
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours to confirm your appointment.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="petName">Pet's Name</Label>
                        <Input
                          id="petName"
                          name="petName"
                          value={formData.petName}
                          onChange={handleInputChange}
                          placeholder="Max"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="petType">Pet Type & Breed</Label>
                        <Input
                          id="petType"
                          name="petType"
                          value={formData.petType}
                          onChange={handleInputChange}
                          placeholder="Golden Retriever"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Notes</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your pet's temperament, any special needs, or other requests..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-petcare-600 hover:bg-petcare-700 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg">
                  Have questions or need immediate assistance? Here are the best
                  ways to reach us.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-petcare-100 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-petcare-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {info.details}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Notice */}
              <Card className="bg-warm-50 border-warm-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-warm-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-warm-800 mb-2">
                        Emergency Services
                      </h3>
                      <p className="text-warm-700 text-sm">
                        Need urgent grooming or have a pet emergency? Call us at
                        (555) 123-PETS. We offer emergency grooming services and
                        can accommodate urgent needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-petcare-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located with plenty of parking and easy access
              for you and your pets.
            </p>
          </div>

          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-petcare-100 to-warm-100 p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-petcare-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  123 Pet Street, City, State 12345
                </p>
                <Button className="mt-4 bg-petcare-600 hover:bg-petcare-700">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

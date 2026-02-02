import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "বার্তা পাঠানো হয়েছে",
      description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-headline mb-6">
            যোগাযোগ করুন
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-bold text-headline mb-4">যোগাযোগের তথ্য</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">ঠিকানা</h3>
                      <p className="text-muted-foreground text-sm">
                        ১২৩, মিরপুর রোড, ঢাকা-১২১৬, বাংলাদেশ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">ফোন</h3>
                      <p className="text-muted-foreground text-sm">
                        +৮৮০ ১৭XX-XXXXXX
                      </p>
                      <p className="text-muted-foreground text-sm">
                        +৮৮০ ২-XXXXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">ইমেইল</h3>
                      <p className="text-muted-foreground text-sm">
                        info@softstation71.com
                      </p>
                      <p className="text-muted-foreground text-sm">
                        news@softstation71.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">অফিস সময়</h3>
                      <p className="text-muted-foreground text-sm">
                        রবিবার - বৃহস্পতিবার: সকাল ৯টা - রাত ৯টা
                      </p>
                      <p className="text-muted-foreground text-sm">
                        শুক্র ও শনিবার: বন্ধ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-bold text-headline mb-4">অবস্থান</h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">মানচিত্র</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-border"
            >
              <h2 className="text-xl font-bold text-headline mb-4">বার্তা পাঠান</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    আপনার নাম *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    ইমেইল *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="আপনার ইমেইল ঠিকানা"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    ফোন নম্বর
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="আপনার মোবাইল নম্বর"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    বিষয় *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="বার্তার বিষয়"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    বার্তা *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send size={18} className="mr-2" />
                  বার্তা পাঠান
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Contact;

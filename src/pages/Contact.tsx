
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormattedTranslation } from '../utils/translationHelper';
import { TooltipWrapper } from '../components/TooltipWrapper';

const Contact: React.FC = () => {
  const { formattedT: t } = useFormattedTranslation();
  
  return (
    <TooltipWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-24 mt-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">{t("nav.contact")}</h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions about our products, services, or anything else? 
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Address</h3>
                      <p className="text-gray-600">
                        123 Fashion Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <p className="text-gray-600">
                        info@lensoptique.com
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Phone</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipWrapper>
  );
};

export default Contact;

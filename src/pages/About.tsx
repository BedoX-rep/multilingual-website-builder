
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Clock, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="font-sans">
      <Header />
      
      {/* About Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/herosectionbg4.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500/30 text-white rounded-full text-sm font-medium tracking-wider uppercase">
              {t('nav.about')}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Crafting Vision Excellence Since 2015
            </h1>
            <p className="text-lg text-blue-100">
              Our passion is helping you see the world more clearly, with style that reflects your unique personality.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-600 font-medium tracking-wider uppercase text-sm mb-4">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">A Vision for Better Eyewear in Morocco</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2015, Luxe Optique was born out of a passion for quality eyewear and a desire to make premium frames accessible to everyone. Our founder, a longtime glasses wearer, was frustrated by the lack of stylish, affordable options in the market.
                </p>
                <p>
                  Today, we're proud to offer a curated collection of eyeglasses and sunglasses that combine style, quality, and affordability. Each pair is crafted with attention to detail and a commitment to excellence.
                </p>
                <p>
                  What started as a small boutique in Casablanca has grown into Morocco's premier destination for designer eyewear, with locations across the country and a passionate team dedicated to helping you find your perfect pair.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Team</h3>
                    <p className="text-sm text-gray-500">Certified opticians with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Fast Service</h3>
                    <p className="text-sm text-gray-500">Same-day service available for most prescriptions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/beautiful-young-woman-with-glasses.jpg"
                  alt="Optician helping customer"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-blue-600 font-bold text-2xl mb-1">10+</p>
                <p className="text-gray-600 text-sm">Years of Excellence</p>
              </div>
              <div className="absolute -top-8 -right-8 bg-blue-600 p-6 rounded-xl shadow-xl text-white">
                <p className="font-bold text-2xl mb-1">5000+</p>
                <p className="text-sm text-blue-100">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-blue-600 font-medium tracking-wider uppercase text-sm mb-4">Our Purpose</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Luxe Optique, our mission is to help people see better, look better, and feel better. We believe that great eyewear should be accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on quality. Every pair of Luxe Optique glasses is made from premium materials and undergoes rigorous testing."
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We're committed to providing exceptional service and a personalized experience."
              },
              {
                title: "Innovation",
                description: "We're constantly exploring new technologies and designs to bring you the best in eyewear."
              },
              {
                title: "Accessibility",
                description: "We believe everyone deserves quality eyewear, so we offer options at every price point without sacrificing quality."
              },
              {
                title: "Expertise",
                description: "Our team includes experienced opticians and fashion designers passionate about helping you find the perfect pair."
              },
              {
                title: "Sustainability",
                description: "We're committed to reducing our environmental impact through responsible sourcing and eco-friendly practices."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-blue-600 font-medium tracking-wider uppercase text-sm mb-4">Meet Our Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The People Behind Our Success</h2>
            <p className="text-gray-600">
              Our team includes experienced opticians, fashion designers, and customer service professionals who are passionate about helping you find the perfect pair of glasses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Benali", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/women/23.jpg" },
              { name: "Mohammed Tazi", role: "Lead Optician", image: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Leila Khalid", role: "Design Director", image: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Karim Idrissi", role: "Customer Experience", image: "https://randomuser.me/api/portraits/men/76.jpg" },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative rounded-xl overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-blue-600 hover:bg-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-blue-600 hover:bg-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Visit Our Stores</h2>
              <p className="text-blue-100 mb-8">
                We have multiple locations across Morocco to serve you. Visit any of our stores to try on our selection of frames and receive expert advice from our team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-300 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Casablanca - Main Store</h3>
                    <p className="text-blue-100">123 Avenue Mohammed V, Casablanca</p>
                    <p className="text-blue-100">+212 522-123-456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-300 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Rabat</h3>
                    <p className="text-blue-100">45 Avenue Hassan II, Rabat</p>
                    <p className="text-blue-100">+212 537-789-012</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-300 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Marrakech</h3>
                    <p className="text-blue-100">78 Rue de la Liberté, Gueliz, Marrakech</p>
                    <p className="text-blue-100">+212 524-345-678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6">Book an Appointment</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="location">Store Location</label>
                    <select 
                      id="location" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="casa">Casablanca</option>
                      <option value="rabat">Rabat</option>
                      <option value="marrakech">Marrakech</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your needs"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Award, Bed, HelpCircle, Phone, Quote, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Discover unparalleled comfort and elegance at Grand Vista Hotel. From our sophisticated suites to world-class amenities, every detail is crafted for your perfect stay."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel elegant exterior entrance"
          imagePosition="right"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our carefully curated collection of premium amenities designed to elevate your stay"
          tag="Luxury Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body with our full-service spa featuring therapeutic treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious spa and wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor culinary excellence at our award-winning restaurant featuring locally sourced ingredients and expert chefs",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active with our state-of-the-art fitness center and recreational facilities available 24/7",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern fitness center"
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Unwind at our stunning rooftop pool with panoramic city views and premium poolside service",
              imageSrc: "https://images.pexels.com/photos/2401982/pexels-photo-2401982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop pool with city views"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed for comfort and sophistication"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Luxury Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious luxury suite"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Deluxe Room",
              price: "$280/night",
              rating: 5,
              reviewCount: "3.8k",
              imageSrc: "https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe room"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$850/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Opulent presidential suite"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Grand Vista Hotel for their most important stays"
          tag="Guest Reviews"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Executive Director",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Managing Partner",
              company: "Investment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Thompson"
            },
            {
              id: "3",
              name: "Alexandra Chen",
              role: "VP Marketing",
              company: "Tech Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7202789/pexels-photo-7202789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Chen"
            },
            {
              id: "4",
              name: "Robert Williams",
              role: "CEO",
              company: "Financial Services",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Robert Williams"
            },
            {
              id: "5",
              name: "Emma Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted Hospitality Excellence"
          description="Proud member of the world's most prestigious hotel networks and hospitality groups"
          tag="Partnerships"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17394906/pexels-photo-17394906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary shuttle service to and from the airport. Please contact our concierge to arrange pickup times."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature an award-winning fine dining restaurant, casual café, room service, and rooftop bar with panoramic city views."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer both valet parking and self-parking options. Valet parking is complimentary for hotel guests."
            },
            {
              id: "5",
              title: "What amenities are included?",
              content: "All guests enjoy access to our spa, fitness center, rooftop pool, business center, and complimentary Wi-Fi throughout the property."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk in elegant lobby"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Phone}
          title="Ready to Experience Luxury?"
          description="Contact our reservations team to book your stay or learn more about our exclusive packages and amenities."
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby with reception desk"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Request Information"
          termsText="By submitting, you agree to receive communications about exclusive offers and updates from Grand Vista Hotel."
        />
      </div>
    </ThemeProvider>
  );
}
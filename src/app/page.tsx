"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { PawPrint, Heart, Home } from "lucide-react";

export default function PetShelterPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            brandName="Pawsitive"
            navItems={[
              { name: "Adoption", id: "services" },
              { name: "Mission", id: "about" },
              { name: "Team", id: "team" },
              { name: "Success Stories", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Adopt Now", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            tag="Animal Rescue & Care"
            tagIcon={PawPrint}
            title="Find Your New Best Friend"
            description="Giving abandoned and rescued pets a second chance at a happy life. Browse our available animals and start your journey to adoption."
            buttons={[
              { text: "Meet Our Pets", href: "#services" },
              { text: "Donate", href: "#contact" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://pixabay.com/get/g20b9c217f758efb3ca15fc90fc10ef99319a89e9dd07506ec1249166ec94e7dbd8b64c0073e044b09706d0ba1d4c1a5ea0b27e31f3b4c4f88511f699b79b5642_1280.jpg"
            imageAlt="Happy rescue dog looking at the camera"
            showDimOverlay={true}
            textPosition="top"
            testimonials={[
              {
                name: "Elena R.",                handle: "Adopter",                testimonial: "Pawsitive made the adoption process so seamless. My rescue cat, Luna, is now the heart of our home!",                rating: 5,
                imageSrc: "https://pixabay.com/get/geb4ea48de1aa1f5f47eb80cda25c118da05a7ff85f32e51d47b1efdb1d85ae1e8bf2b76097915a75967026ad9e0b62842c2171ef5bec1dc696c15e3a984325a0_1280.jpg",                imageAlt: "Elena R."},
              {
                name: "Mark J.",                handle: "Adopter",                testimonial: "The dedication this shelter has for every animal is incredible. We found our perfect senior dog here.",                rating: 5,
                imageSrc: "https://pixabay.com/get/ga0d3589a28fed94aa8e6c93cc2bf02cf3d48c25eb28ca0edef7a8b2acac3fcb2d4cf9d35ffd580ae73892d8288feab9038c919f4e2370d2947a6d2853a24643a_1280.jpg",                imageAlt: "Mark J."},
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Our Mission"
            tagIcon={Heart}
            tagAnimation="slide-up"
            title="Saving lives, one paw at a time — providing safe shelter, medical care, and love for animals in need."
            description="Sarah Thompson, Shelter Director"
            subdescription="Est. 2012"
            icon={Home}
            imageSrc="https://pixabay.com/get/g2e10798a747e9d00c2fc16bfcc5daf0e64847f2ffaa509be82d083a2e25b787e6674b67edd189ed972d9f8c20981cc80b030d49ffaec57dc35f92e69171402f0_1280.jpg"
            imageAlt="Dedicated staff playing with a rescue pet"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNineteen
            tag="Our Programs"
            tagIcon={PawPrint}
            title="How We Help"
            description="Comprehensive care for every animal that walks through our doors."
            buttonAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              {
                tag: "Adoption",                title: "Pet Adoption",                subtitle: "Find your companion",                description: "We facilitate matches between loving families and pets looking for a forever home.",                imageSrc: "https://pixabay.com/get/g65bd5553e063466a0a7440f11e83e9cc142a8d44e5498bdc7497feb854f329ba4101db6dbe583329ea0f988632e7553bf52e7cfef64704c257b158c92c06bfd2_1280.jpg",                imageAlt: "Adoption services"},
              {
                tag: "Medical",                title: "Veterinary Care",                subtitle: "Health and wellness",                description: "Every rescued pet receives full medical checkups, vaccinations, and spay/neuter services.",                imageSrc: "https://pixabay.com/get/gc4752554dd4f4fecf335cb1f5b7bc9e326782b05438b0ea5a109da147d6587f0b23acb720f70cc44692e4db8cafb053898e805214892c8365e0269da6b0a64f3_1280.jpg",                imageAlt: "Medical care"},
              {
                tag: "Foster",                title: "Foster Program",                subtitle: "Short-term love",                description: "Open your home temporarily to help a pet transition from shelter to their permanent home.",                imageSrc: "https://pixabay.com/get/g72a07cd451497e80bdc6148f21af680a7dd67566b0f12abcb7b190f591452b893511d7758714e0fa660b693931913c4da2c1bbc59c06375e1cb4972ab7bbf740_1280.jpg",                imageAlt: "Foster program"},
              {
                tag: "Support",                title: "Pet Training",                subtitle: "Behavior assistance",                description: "Basic training to help your newly adopted pets adjust to their new surroundings.",                imageSrc: "https://pixabay.com/get/gbb908989c5504268e24fbd2ab67fd6dd37eb5dfe1acb5f7ed5e2c61fafaf7d83c6836bb3752616703a5fadb1e2f91b7c9d1a4d7be419a68b5379c006573dabe6_1280.jpg",                imageAlt: "Pet training"},
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamCardSix
            title="Why Choose Pawsitive"
            description="Values that guide our rescue efforts."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Commitment to Care",                role: "We prioritize the emotional and physical well-being of every animal.",                imageSrc: "https://pixabay.com/get/g66af46b5ea62c6e6deb548217f2ac722725ad0b35cd8484ac34cadc1bedec3ccb66bbb82de4424547f5b6b035dd271802a23153a66cad7f686a10c83821529e9_1280.jpg",                imageAlt: "Commitment to care"},
              {
                id: "2",                name: "Experienced Staff",                role: "Expertise in animal behavior, training, and veterinary support.",                imageSrc: "https://pixabay.com/get/g0c59d9d5ffb71ab676a038c0275197a59b15aab2df5d604b5ab183ee7cb4ce97279444599afb6985102ba19eac44fdf236409c2c6502a7c8998316365e485c85_1280.jpg",                imageAlt: "Expert staff"},
              {
                id: "3",                name: "Community Focus",                role: "Connecting pets with local families for life-long bonds.",                imageSrc: "https://pixabay.com/get/g3921453b8a406d56c7d68bb3c9ae424f5925190f48e73fc578c062973df0321f22b26f016f568373363133ed9c5d28c5d3390e5be25a71151696382e8c450bb3_1280.jpg",                imageAlt: "Community focus"},
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardOne
            tag="Our Caretakers"
            title="The Shelter Team"
            description="The compassionate souls dedicated to the lives of our rescue pets."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Sarah Thompson",                role: "Director",                imageSrc: "https://pixabay.com/get/g932aba3dcc5fa10e7d379fddc94062c6c183f8b3f0cb170123d0d73a378ca8b4a65009f346a99d328402e7b251204b1609321fa75f669c72fcc964d0c3adcb24_1280.jpg",                imageAlt: "Sarah Thompson"},
              {
                id: "2",                name: "Dr. Alan Grant",                role: "Shelter Veterinarian",                imageSrc: "https://pixabay.com/get/g2c3be04d61bc2346fc09a7d6faf366cbdc9bacf541152800972487675ab40f72c0cc0cc19afb8f48afe7a93807e5d191afd9ea1354a53e282be51fbc50de82ce_1280.jpg",                imageAlt: "Dr. Alan Grant"},
              {
                id: "3",                name: "Jessica Miller",                role: "Adoption Coordinator",                imageSrc: "https://pixabay.com/get/g0d83ed5ef5ce2a1d901adf7b82268f9dbd16dc20bd4c84516a604d832c89b397725c0b57354d34f09b6373d993e3883b5a06373434f119fe2f757e2dc4fb0217_1280.jpg",                imageAlt: "Jessica Miller"},
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTag="Success Stories"
            cardTagIcon={Heart}
            cardTitle="Hundreds of families have found their soulmates at our shelter."
            buttons={[{ text: "Read All", href: "#testimonials" }]}
            buttonAnimation="slide-up"
            cardAnimation="slide-up"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "The Johnsons", imageSrc: "https://pixabay.com/get/g383c9d20e74ba3f4563dbee22d10169a1f7b4f1c1c65e046d9600c0d106c0c4427c737d3b6e24909cde63e8edb2e9fc6f52ccd4c19b5d90123522a373f4a9338_1280.jpg", imageAlt: "The Johnsons" },
              { id: "2", name: "Mike D.", imageSrc: "https://pixabay.com/get/g1904270d702a11f37d6ea10726aba420a0bc7da12c99cb8afa80ce1a0d7149cfd66c9a14ab72870e957611e6b0d21514844f4e55af4bf7626aebb8a7a68c5c1d_1280.jpg", imageAlt: "Mike D." },
              { id: "3", name: "Claire S.", imageSrc: "https://pixabay.com/get/g86617d88f29d5aff244d284553bb885a58b7cb8ec18bde83498f1d7b5d19488c4befed59d595f841d67a792b9d3b7574ad479e0614c3acb724d6b359c497401a_1280.jpg", imageAlt: "Claire S." },
              { id: "4", name: "Paul K.", imageSrc: "https://pixabay.com/get/ge342be79d4c03a1e6f8d6b5f034dbb4ab3483b2ecfdbca46bce6d2f3cbad5be7463572a117cdc839f353a4f7c99125618d33cf86da56dd12e7d9ab8ed0a87102_1280.jpg", imageAlt: "Paul K." },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            tag="FAQ"
            title="Adoption Questions"
            description="Commonly asked questions about our process."
            textboxLayout="default"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            faqs={[
              {
                id: "1",                title: "What is the adoption process?",                content: "Fill out an application, meet the pet, and finalize paperwork. We ensure the best match for both the pet and your lifestyle."},
              {
                id: "2",                title: "Are the pets vaccinated?",                content: "Yes, all animals are fully vaccinated, spayed or neutered, and microchipped before adoption."},
              {
                id: "3",                title: "Can I foster first?",                content: "Absolutely! Fostering is a great way to see if a pet is the right fit before committing to long-term adoption."},
              {
                id: "4",                title: "How can I donate?",                content: "You can donate via our website or visit our facility for supplies, food, and toy donations."},
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Get in Touch"
            description="Ready to meet your new friend or learn about volunteer opportunities? Contact us today."
            useInvertedBackground={true}
            imageSrc="https://pixabay.com/get/g11524a1018dddce5ec009f3a538c6d513e88627a2eda38135ef5b0fc6847a5284b30500f4128b5798b88d3d8ed125c565d3c62dc4222a6e151f25dcdefc328e3_1280.jpg"
            mediaAnimation="slide-up"
            buttonText="Send Inquiry"
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
            ]}
            textarea={{ name: "message", placeholder: "How can we help?", rows: 4, required: true }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Quick Links",                items: [
                  { label: "Available Pets", href: "#services" },
                  { label: "Adopt", href: "#contact" },
                  { label: "Donate", href: "#contact" },
                ],
              },
              {
                title: "Resources",                items: [
                  { label: "Foster Guidelines", href: "#" },
                  { label: "Pet Care", href: "#" },
                  { label: "FAQ", href: "#faq" },
                ],
              },
              {
                title: "Contact",                items: [
                  { label: "(555) 987-6543" },
                  { label: "hello@pawsitive.org" },
                ],
              },
            ]}
            bottomLeftText="© 2026 Pawsitive Shelter"
            bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
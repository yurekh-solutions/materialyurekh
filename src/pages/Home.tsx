import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Zap, Shield, Globe, Award, ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ExpandableGallery from "@/components/ExpandableGallery";

import galleryProcurementAI from "@/assets/gallery-procurement-ai.jpg";
import galleryWarehouse from "@/assets/gallery-warehouse.jpg";
import galleryNetwork from "@/assets/gallery-network.jpg";
import galleryQuality from "@/assets/gallery-quality.jpg";

import tmtSteel from "@/assets/tmt-steel.jpg";
import cement from "@/assets/cement.jpg";
import steelPipes from "@/assets/steel-pipes.jpg";
import bricks from "@/assets/bricks.jpg";
import electricalCables from "@/assets/electrical-cables.jpg";
import tiles from "@/assets/tiles.jpg";
import worker from "@/assets/ai-dashboard.jpg";
import engineer from "@/assets/construction-site.jpg";
import supplier from "@/assets/ii.png";
import owner from "@/assets/office-building.jpg";
// Product images will be handled with CSS gradients for better performance
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);

  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });





  const features = [
    {
      icon: "500+",
      title: "Suppliers Network",
      description: "Trusted partners across the country",
      detail: "Verified suppliers in TMT, Cement, Steel & more",
      bgGradient: "from-primary/20 to-accent/20"
    },
    {
      icon: "24/7",
      title: "AI Support",
      description: "Round-the-clock intelligent assistance",
      detail: "Voice AI and chat support available",
      bgGradient: "from-accent/20 to-primary-glow/20"
    },
    {
      icon: "98%",
      title: "Delivery Rate",
      description: "On-time delivery guarantee",
      detail: "Real-time tracking and updates",
      bgGradient: "from-primary-glow/20 to-primary/20"
    }
  ];

  const suppliers = [
    "Ceigall India", "VRC Constructions", "RCC Developers Pvt Ltd", "HMM Infra",
    "N S Associates", "Kaluwala", "Himalayan Infra", "Rashmi Metals",
    "JSW Steel", "Tata Steel", "MSP Steel", "Ultratech Cement", "ACC Limited"
  ];
   
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get quotes in under 60 seconds with our AI-powered matching system"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All suppliers are thoroughly verified and quality-assured"
    },
    {
      icon: Globe,
      title: "Pan-India Coverage",
      description: "Access materials from suppliers across 20+ states in India"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with transparent cost breakdowns"
    }
  ];


 const productCategories = [
    {
      title: "TMT & Steel Bars",
      description: "High-grade TMT bars and structural steel for construction",
      image: tmtSteel,
      items: ["TMT Bars", "Structural Steel", "Mild Steel", "Reinforcement"],
    },
    {
      title: "Cement & Aggregates",
      description: "Premium cement and construction aggregates",
      image: cement,
      items: ["Portland Cement", "Crushed Stone", "Sand", "Gravel"],
    },
    {
      title: "Steel Pipes & Tubes",
      description: "Industrial grade steel pipes and tubes",
      image: steelPipes,
      items: ["MS Pipes", "GI Pipes", "SS Tubes", "Hollow Sections"],
    },
    {
      title: "Bricks & Blocks",
      description: "Quality bricks and concrete blocks for construction",
      image: bricks,
      items: ["Red Bricks", "Fly Ash Bricks", "AAC Blocks", "Concrete Blocks"],
    },
    {
      title: "Electrical Cables",
      description: "High-quality electrical cables and wiring solutions",
      image: electricalCables,
      items: ["Power Cables", "Control Cables", "House Wires", "Armoured Cables"],
    },
    {
      title: "Tiles & Flooring",
      description: "Premium tiles and flooring materials",
      image: tiles,
      items: ["Ceramic Tiles", "Vitrified Tiles", "Marble", "Granite"],
    },
  ];


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MaterialMatrix",
    "description": "AI-powered construction material procurement platform",
    "url": "https://MaterialMatrix.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://MaterialMatrix.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <ScrollToTop />

      <SEOHead
        title="MaterialMatrix - AI-Powered Construction Material Procurement Platform"
        description="Revolutionize your construction material sourcing with MaterialMatrix's AI-powered platform. Get instant quotes from 500+ verified suppliers across India. TMT, Steel, Cement & more."
        keywords="construction materials, AI procurement, B2B marketplace, TMT steel, construction supplies, material sourcing, building materials, construction platform"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 mt-4">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200 shadow-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border-2 border-white" src={worker} alt="Supplier 1" />
                    <img className="w-6 h-6 rounded-full border-2 border-white" src={engineer} alt="Supplier 2" />
                    <img className="w-6 h-6 rounded-full border-2 border-white" src={supplier} alt="Supplier 3" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Join network of 500+ verified suppliers</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <span className="text-gray-900">Intelligent</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Procurement
                  </span>
                  <br />
                  <span className="text-gray-900">tools built to help.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Unlock smarter procurement workflows with AI tools designed to boost productivity,
                  simplify sourcing tasks, and help you source raw materials like TMT, Steel, Cement
                  with less effort.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col items-center sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Link to="/products">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-none">
                      Get started
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-orange-400 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Watch demo
                    </Button>
                  </Link>
                </motion.div>

                {/* Stats */}
              
              <motion.div
  className="flex justify-center lg:justify-start gap-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  {[
    { value: "500+", label: "Suppliers" },
    { value: "98%", label: "On-time" },
    { value: "20+", label: "States" }
  ].map((stat, index) => (
    <div
      key={index}
      className="text-center bg-white rounded-xl shadow-lg px-6 py-4
                 transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(255,165,0,0.3)]"
    >
      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
    </div>
  ))}
</motion.div>

              </div>

              {/* Right Images Grid */}
              {/* Right Images Grid */}
<motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
>
  <div className="grid grid-cols-2 gap-4 gap-y-6">
    {[
      { img: worker, delay: 0.6 },
      { img: engineer, delay: 0.7 },
      { img: supplier, delay: 0.8 },
      { img: owner, delay: 0.9 }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="relative overflow-hidden rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: item.delay, duration: 0.8 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <img
          src={item.img}
          alt={`Construction ${index + 1}`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    ))}
  </div>
</motion.div>

            </div>
          </div>
        </section>




        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Heading */}
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Key Offerings        </span>
              </h2>
              <div className="w-16 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                Transform your business with AI-powered procurement solutions designed
                for speed, intelligence, and always-on visibility.
              </p>
            </motion.div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Card Template */}
              {[
                {
                  icon: "🌟",
                  label: "Smart Deal Flow",
                  title: "Supplier Matching Agent",
                  desc: "Turn procurement chaos into clockwork. Smart AI handles negotiations, paperwork, and payments – while you focus on scaling your business.",
                  stat: "2X",
                  statLabel: "Accelerated Deal Velocity",
                },
                {
                  icon: "💹",
                  label: "Market Intelligence",
                  title: "Pricing Intelligence Agent",
                  desc: "Never overpay again. Real-time price intelligence across markets, with AI that spots the best deals before your competitors do.",
                  stat: "12%",
                  statLabel: "Average Cost Optimization",
                },
                {
                  icon: "🛡️",
                  label: "Risk Management",
                  title: "Risk Management Agent",
                  desc: "Minimize procurement risks with AI-powered monitoring of suppliers, compliance checks, and predictive alerts for disruptions.",
                  stat: "99.9%",
                  statLabel: "Risk-Free Operations",
                },
                {
                  icon: "🔗",
                  label: "Supply Chain Intelligence",
                  title: "Supply Chain Agent",
                  desc: "Your procurement command center. Real-time tracking, instant insights, and automated vendor communications – all in one place.",
                  stat: "24/7",
                  statLabel: "Always-On Supply Intelligence",
                },
              ].map((card, i) => (
        <GlassCard
  key={i}
  className="group flex flex-col justify-between p-4 sm:p-6 lg:p-8 rounded-2xl
    hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2
    transition-all duration-300 ease-out
    h-auto min-h-[350px] sm:min-h-[400px]
    bg-gradient-to-r from-orange-50 to-red-50 group-hover:from-orange-400 group-hover:to-red-400"
>


                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="p-3 bg-primary/20 rounded-xl text-primary text-xl sm:text-2xl">
                        {card.icon}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {card.label}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-glass-border">
                    <div className="text-primary font-bold text-xl sm:text-2xl lg:text-3xl">
                      {card.stat}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {card.statLabel}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
       <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle" ref={servicesRef}>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Products
                </span>
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive range of construction materials from verified suppliers across India
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isServicesInView ? "visible" : "hidden"}
            >
              {productCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="premium" 
                    className="p-0 h-full group overflow-hidden product-card rounded-2xl"
                  >
                    <div className="relative">
                      {/* Product Image */}
                      <div className="h-56 sm:h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent z-10" />
                        <img 
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {category.description}
                        </p>
                        
                        {/* Items List */}
                        <div className="space-y-2 mb-6">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                        
                        {/* View More Button */}
                        <div className="pt-4 border-t border-border">
                          <Link to="/products">
                            <Button 
                              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 rounded-xl"
                            >
                              View Products
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        <HowItWorks />


  <ExpandableGallery
        items={[
          {
            image: galleryProcurementAI,
            title: "AI-Powered Procurement",
            description: "Intelligent systems that transform how you source and manage construction materials with real-time insights and automation."
          },
          {
            image: galleryWarehouse,
            title: "Smart Inventory Management",
            description: "Advanced warehouse solutions ensuring optimal stock levels and seamless material availability for your projects."
          },
          {
            image: galleryNetwork,
            title: "Pan-India Network",
            description: "Connected ecosystem of 500+ verified suppliers across 20+ states, bringing materials closer to your construction sites."
          },
          {
            image: galleryQuality,
            title: "Quality Assurance",
            description: "Rigorous testing and certification processes ensuring every material meets industry standards and your specifications."
          }
        ]}
      />

        {/* Enhanced Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle" ref={featuresRef}>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Why Choose MaterialMatrix?
                </span>
              </h2>
              <div className="w-20 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the future of construction material procurement with our cutting-edge platform
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard
                    variant="premium"
                    className={`text-center p-6 sm:p-8 h-full group bg-gradient-to-br ${feature.bgGradient} hover:shadow-elevation transition-all duration-500`}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{feature.description}</p>
                    <p className="text-xs sm:text-sm text-primary font-medium">{feature.detail}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard variant="interactive" className="p-4 sm:p-6 text-center h-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Suppliers Section with Carousel */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={statsRef}>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Trusted by Industry Leaders</h2>
              <div className="w-20 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our network of verified suppliers and grow your business with reliable partnerships across India.
              </p>
            </motion.div>

            {/* Scrolling Supplier Names - Forward */}
            <div className="relative overflow-hidden mb-8">
              <div className="flex animate-scroll space-x-8">
                {[...suppliers, ...suppliers].map((supplier, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                      {supplier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scrolling Supplier Names - Reverse */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse space-x-8">
                {[...suppliers.slice().reverse(), ...suppliers.slice().reverse()].map((supplier, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-accent/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-foreground font-medium whitespace-nowrap group-hover:text-accent transition-colors duration-300">
                      {supplier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <Testimonials />

        {/* Enhanced CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full blur-2xl"
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 sm:mb-8">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Start sourcing materials smarter with our AI-powered platform. Get instant quotes,
                track deliveries, and connect with verified suppliers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:text-accent text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-none"
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/50 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 backdrop-blur-sm transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <Play className="h-5 sm:h-6 w-5 sm:w-6 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

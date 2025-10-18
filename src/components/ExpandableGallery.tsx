import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface ExpandableGalleryProps {
  items: GalleryItem[];
}

const ExpandableGallery = ({ items }: ExpandableGalleryProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Visual Excellence in Procurement
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A visual collection of our procurement ecosystem - each image represents our commitment to quality, technology, and efficiency.
          </p>
        </motion.div>

        {/* Desktop Expandable Gallery */}
        <div className="hidden lg:flex items-center gap-4 h-[500px] w-full max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative group flex-grow transition-all rounded-2xl overflow-hidden h-full duration-500 cursor-pointer shadow-xl hover:shadow-2xl"
              style={{
                width: hoveredIndex === index ? "100%" : "256px",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                className="h-full w-full object-cover object-center"
                src={item.image}
                alt={item.title}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <motion.h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {item.description}
                </motion.p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 border-2 border-white rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-80 sm:h-96"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <img
                className="h-full w-full object-cover object-center"
                src={item.image}
                alt={item.title}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-80" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpandableGallery;

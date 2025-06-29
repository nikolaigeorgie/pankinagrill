"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Utensils, ChevronDown, Star, ChefHat } from "lucide-react";

const faqs = [
  {
    question:
      "What makes Pankina Grill different from other Mediterranean restaurants?",
    answer:
      "At Pankina Grill, we specialize in authentic Mediterranean and Middle Eastern cuisine prepared fresh daily. Our experienced chefs use traditional recipes passed down through generations, combined with the finest ingredients. We offer a unique blend of flavors from Persian kebabs to fresh hummus, all made in-house with attention to detail and authentic preparation methods.",
  },
  {
    question: "What types of food do you serve?",
    answer:
      "Our menu features a rich variety of Mediterranean and Middle Eastern dishes. We serve fresh shawarma, Persian koobideh, chicken kebabs, schnitzel, falafel, sabich, and our signature burgers. All dishes are available as pita, laffa, baguette, or plate options. We also offer fresh appetizers like hummus varieties, zaatar bread, and traditional sides.",
  },
  {
    question: "Do you offer catering services for events?",
    answer:
      "Yes! We provide full catering services for parties, corporate events, and special occasions. Our catering menu includes platters of our most popular items like shawarma, kebabs, fresh hummus, and Mediterranean salads. We can customize packages based on your guest count and dietary preferences, with advance notice for larger orders.",
  },
  {
    question: "Do you provide delivery and takeout services?",
    answer:
      "Absolutely! We offer both delivery and takeout options for your convenience. Our delivery service covers the local area with typical delivery times of 30-45 minutes. For takeout, you can call ahead or order online, and your food will be ready for pickup. We ensure all orders are packaged properly to maintain freshness and quality.",
  },
  {
    question: "What are your hours and location?",
    answer:
      "We're open daily to serve you the best Mediterranean cuisine. Our friendly staff is available to take orders, answer questions about our menu, and help with catering requests. We also accept reservations for dine-in service, especially for larger groups or special occasions. Contact us directly for current hours and to make reservations.",
  },
  {
    question: "Do you accommodate dietary restrictions and preferences?",
    answer:
      "Yes, we're happy to accommodate various dietary needs. Many of our dishes are naturally vegetarian or can be prepared vegan upon request. We offer gluten-free options and can modify dishes to meet specific dietary requirements. Please inform us of any allergies or restrictions when ordering, and our kitchen staff will ensure your meal is prepared safely and deliciously.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-[#191919] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-full h-full">
          <Utensils className="absolute w-96 h-96 text-[#D4AF37] -right-20 top-10 -rotate-12" />
          <Star className="absolute w-64 h-64 text-[#D4AF37] left-10 bottom-10 rotate-12" />
          <ChefHat className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/3 rotate-45" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Gold accent line */}
          <div className="w-24 h-[3px] bg-[#D4AF37] mb-8 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Everything you need to know about our authentic Mediterranean
            cuisine, catering services, and dining experience. Have more
            questions? Give us a call!
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-xl bg-gradient-to-b from-[#252525] to-[#1d1d1d] border border-[#D4AF37]/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 hover:bg-[#D4AF37]/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Utensils className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25, delay: 0.15 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-11">
                        <p className="text-white/70">{faq.answer}</p>

                        <div className="mt-4 pt-4 border-t border-[#D4AF37]/10 flex items-center">
                          <div className="flex items-center gap-2 text-[#D4AF37] text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>For more information, call us directly</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80 mb-6">
            Have more questions about our menu or services?
          </p>
          <a
            href="tel:+‭18184574095‬"
            className="inline-flex items-center px-8 py-3 rounded-full bg-transparent border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            <span>Call Us Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

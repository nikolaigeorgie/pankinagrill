"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PawPrintIcon, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Prince Paws different from other dog care services?",
    answer:
      "At Prince Paws, we offer a truly royal experience for your furry companions. Our premium facilities, certified professionals, and personalized care plans ensure your pet receives VIP treatment. From luxury grooming to custom nutrition, we provide services tailored to each pet's unique needs and preferences.",
  },
  {
    question: "What services are included in your Pup Care program?",
    answer:
      "Our Pup Care program includes a rich variety of activities to keep your dog happy and engaged. This includes supervised playtime, dance parties, dog yoga (Doga), naptime in premium beds, movie time with pet-friendly films, access to our outdoor water park, and numerous enrichment activities designed by animal behavior specialists.",
  },
  {
    question: "How do your spa services work?",
    answer:
      "Our Pup Spa offers the ultimate relaxation and grooming experience. Services include aromatherapy baths with premium products, full grooming sessions, pawdicures, massage therapy, and coat treatments. Each spa service is performed by certified pet stylists who prioritize your pet's comfort and well-being throughout the pampering experience.",
  },
  {
    question: "Do you offer transportation services for pets?",
    answer:
      "Yes, our Pup Rides service provides safe and comfortable transportation for your furry friend. Our climate-controlled vehicles are specially equipped for pet safety and comfort. We offer scheduled pickup and drop-off services within our service area, making it convenient for busy pet parents to ensure their companions receive the royal treatment.",
  },
  {
    question: "What health services are available at Prince Paws?",
    answer:
      "We partner with licensed veterinarians to provide on-call health services. This includes regular check-ups, preventative care, yearly vaccinations, and immediate attention for any health concerns. Our staff is trained in pet first aid and CPR, and we maintain strict health and safety protocols throughout our facilities.",
  },
  {
    question: "How does your training program work?",
    answer:
      "Our Pup Training services are tailored to your pet's specific needs. We start with a complimentary 30-minute consultation to assess your dog's personality and your goals. Our certified trainers then develop a customized training plan focusing on positive reinforcement techniques. We offer individual sessions, group classes, and specialized behavior modification programs.",
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
          <PawPrintIcon className="absolute w-96 h-96 text-[#D4AF37] -right-20 top-10 -rotate-12" />
          <PawPrintIcon className="absolute w-64 h-64 text-[#D4AF37] left-10 bottom-10 rotate-12" />
          <PawPrintIcon className="absolute w-32 h-32 text-[#D4AF37] right-1/3 top-1/3 rotate-45" />
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
            Common <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Everything you need to know about our royal pet care services. If
            you have additional questions, our concierge team is ready to assist
            you.
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
                    <PawPrintIcon className="w-4 h-4 text-[#D4AF37]" />
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
                            <span>
                              For more information, contact our concierge
                              service
                            </span>
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
            Still have questions about our royal pet care services?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-transparent border border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            <span>Contact Our Concierge</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

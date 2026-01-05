import React, { useState } from 'react';
import { ChevronRight, HelpCircle, MessageCircle, Plus } from 'lucide-react';
import { Link } from 'react-router';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    {
      question: 'How do I purchase artwork?',
      answer: 'Browse our collection, click on any artwork, and follow the purchase instructions. We accept various secure payment methods including credit cards and digital wallets.'
    },
    {
      question: 'Can I sell my artwork on Artopia?',
      answer: 'Absolutely! Create an artist account, complete your profile, and you can start uploading your portfolio immediately. We take a minimal commission to support the platform.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee. If the physical artwork doesn\'t match the description or arrives damaged, we handle the return and refund process fully.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Our support team is available 24/7 via the dashboard chat, or you can email us at support@artopia.com. We typically respond within 2 hours.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
      
          <div className="lg:col-span-5 sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <HelpCircle className="w-3 h-3" />
              Information Hub
            </div>
        
            <h2 className="text-5xl md:text-6xl font-black leading-tight pb-2 mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
              Frequently <br /> Asked Questions
            </h2>
            
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-10 leading-relaxed">
              Everything you need to know about navigating the Artopia ecosystem. Can't find what you're looking for?
            </p>

            <Link to="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold transition-transform hover:scale-105 active:scale-95">
              <MessageCircle className="w-5 h-5" />
              Ask a Question
            </Link>
          </div>

 
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group transition-all duration-500 ease-in-out border rounded-[2rem] overflow-hidden ${
                  openIndex === index 
                  ? "bg-white dark:bg-white/5 border-pink-500/30 shadow-2xl shadow-pink-500/5" 
                  : "bg-gray-500/5 border-gray-500/10 hover:border-gray-500/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between gap-4"
                >
                  <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    openIndex === index ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                    ? "bg-gradient-to-br from-orange-500 to-pink-500 text-white rotate-45" 
                    : "bg-gray-500/10 text-gray-400"
                  }`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </button>

                <div className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 flex gap-4">
                 
                      <div className="w-1 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full opacity-50" />
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed py-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
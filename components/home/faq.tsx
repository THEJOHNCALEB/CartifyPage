"use client";

import { useState } from "react";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

function FaqItem({ question, answer, isOpen, toggle }: FaqItemProps) {
  return (
    <div
      className='p-4 bg-slate-50 rounded-md border border-stone-300 opacity-70 cursor-pointer'
      onClick={toggle}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-zinc-900'>{question}</h3>
        <span className='text-zinc-500'>
          {isOpen ? <ArrowBigUpIcon /> : <ArrowBigDownIcon />}
        </span>
      </div>
      {isOpen && <p className='mt-2 text-gray-600 opacity-90'>{answer}</p>}
    </div>
  );
}

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Cartify?",
      answer:
        "Cartify is an innovative shopping list app designed to simplify and enhance your shopping experience. It helps you organize your lists, calculate prices, and make your shopping trips more efficient.",
      isOpen: false,
    },
    {
      question: "How do I download Cartify?",
      answer:
        'You can download Cartify from the App Store for iOS devices and Google Play Store for Android devices. Click on the respective "Download" buttons on our website to be redirected to the app stores.',
      isOpen: false,
    },
    {
      question: "Is Cartify free to use?",
      answer:
        "Yes, Cartify is free to download and use. Enjoy the core features without any cost. However, there may be optional in-app purchases or premium features in future updates.",
      isOpen: false,
    },
    {
      question: "Are there plans for future updates and new features?",
      answer:
        "Absolutely! We are committed to continuously improving Cartify. Stay tuned for updates and exciting new features that will further enhance your shopping experience.",
      isOpen: false,
    },
  ]);

  function toggleFaq(index: number) {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  }

  return (
    <div className="container my-10 opacity-95 w-full max-w-screen-xl flex-1 justify-center gap-5 px-5 xl:px-0">
  <div className='flex justify-center items-center'>
    <div id='faq' className='w-full pb-10 pt-10 '>
      <div className='sm:mx-20 mx-5'>
        <h2 className='text-3xl font-bold text-black opacity-70 text-center pb-5'>
          FAQs
        </h2>
        <div className='flex flex-col gap-9'>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// const faqs = [
//   { question: 'Are there any subscription fees?', answer: 'No, our platform is free to use for buyers and sellers.' },
//   { question: 'Do you share user data with third parties?', answer: 'We prioritize user privacy and never share data without consent.' },
//   { question: 'Is there a free trial available?', answer: 'Yes, you can access a 7-day free trial for premium features.' },
//   { question: 'What kind of customer support do you provide?', answer: 'We provide 24/7 customer support via chat and email.' },
//   { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, UPI, and bank transfers.' },

// ];
const faqs = [
  {
    question: 'What is iBuyr?',
    answer: 'iBuyr is an innovative real estate platform that connects buyers, sellers, and investors to make property transactions simple, transparent, and efficient. We aim to revolutionize the way people buy and sell properties through cutting-edge technology and expert support.',
  },
  {
    question: 'Is iBuyr available nationwide?',
    answer: 'Yes, iBuyr operates across multiple cities and regions, offering a diverse range of properties to cater to your needs. Check our website to explore the locations we currently serve.',
  },
  {
    question: 'How does iBuyr ensure transparency in transactions?',
    answer: 'iBuyr provides verified property listings, complete document checks, and detailed property information to ensure every transaction is secure and transparent.',
  },
  {
    question: 'Does iBuyr assist with legal and financial processes?',
    answer: 'Yes, we have a team of experts to guide you through legal documentation, property registration, and financial services such as home loans and property valuation.',
  },
  {
    question: 'Are there any service fees for buyers or sellers?',
    answer: 'iBuyr offers free property browsing for buyers. Sellers are charged a nominal fee based on the services they choose, such as premium listings or marketing packages.',
  },
  {
    question: 'Can I list my property on iBuyr for free?',
    answer: 'Yes, you can list your property for free. We also offer premium listing options to enhance visibility and attract more potential buyers.',
  },
  {
    question: 'How does iBuyr help buyers find the right property?',
    answer: 'iBuyr uses AI-powered recommendations, advanced search filters, and personalized support to help buyers find properties that meet their specific needs and preferences.',
  },
  {
    question: 'Does iBuyr offer virtual property tours?',
    answer: 'Yes, we provide virtual property tours to give buyers an immersive experience and help them explore properties from the comfort of their homes.',
  },
  {
    question: 'What payment methods do you accept for iBuyr services?',
    answer: 'We accept all major payment methods, including credit/debit cards, UPI, net banking, and mobile wallets.',
  },
  {
    question: 'How can I contact iBuyr for support?',
    answer: 'You can reach out to our support team via email, live chat on our website, or by calling our customer care helpline available 24/7.',
  },
  {
    question: 'How does iBuyr verify the properties listed on the platform?',
    answer: 'All properties listed on iBuyr go through a rigorous verification process, including document checks, property inspections, and ownership validation.',
  },
  {
    question: 'Can I schedule site visits through iBuyr?',
    answer: 'Yes, buyers can schedule site visits for any listed property. Our team will coordinate with the seller to ensure a smooth and convenient experience.',
  },
  {
    question: 'What makes iBuyr different from other real estate platforms?',
    answer: 'iBuyr combines technology, expert guidance, and a customer-centric approach to offer a seamless property buying and selling experience. Our verified listings, AI recommendations, and end-to-end support set us apart.',
  },
  {
    question: 'Does iBuyr offer services for commercial properties?',
    answer: 'Yes, iBuyr provides listings for both residential and commercial properties, including office spaces, retail shops, and warehouses.',
  },
  {
    question: 'Is there a mobile app for iBuyr?',
    answer: 'Yes, iBuyr has a mobile app that allows you to browse properties, manage listings, schedule visits, and connect with our support team on the go.',
  },
];


const App = () => {
    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        // Clear the error state when the component mounts
        // dispatch(signUpFailure(null));
        const timer = setTimeout(() => {
          setAnimate(true);
        }, 100);
        return () => {
          clearTimeout(timer);
          setAnimate(false);
        };
      }, [dispatch]);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-100">
      <div className="max-w-7xl w-full bg-blue-100 rounded-lg p-6 md:p-10 flex flex-col mt-14  gap-5 md:flex-row">
        <div className='flex-1'>
            <img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg" className={`rounded-3xl  transition-all h-56 object-cover w-96 md:w-auto md:h-auto duration-[2000ms] ${
            animate ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
          }`}/>
        </div>

        <div className='flex-1'>

        <div className={`flex items-center justify-center mb-8 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>
          <h1 className=" text-3xl md:text-5xl font-bold text-blue-500 mr-4">FAQ</h1>
          <div className="text-left">
            <h2 className=" text-lg md:text-2xl font-semibold text-gray-800">Frequently asked questions</h2>
            <p className="text-gray-600 mt-1 md:mt-2">Questions you might ask about product and services</p>
          </div>
        </div>
        <div className={`space-y-4 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span
                  className={` text-blue-600 font-bold text-2xl transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  +
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;

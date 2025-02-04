import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet-async";
// const faqs = [
//   { question: 'Are there any subscription fees?', answer: 'No, our platform is free to use for buyers and sellers.' },
//   { question: 'Do you share user data with third parties?', answer: 'We prioritize user privacy and never share data without consent.' },
//   { question: 'Is there a free trial available?', answer: 'Yes, you can access a 7-day free trial for premium features.' },
//   { question: 'What kind of customer support do you provide?', answer: 'We provide 24/7 customer support via chat and email.' },
//   { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, UPI, and bank transfers.' },

// ];
const faqs = [
  {
    question: 'Where Does Ibuyr Operate?',
    answer: 'Ibuyr is currently operational in Noida, focusing on providing streamlined property transactions in this vibrant market. Our efforts are directed toward catering to the needs of sellers and buyers within this area.',
  },
  {
    question: 'What Types of Homes Does Ibuyr Purchase?',
    answer: 'Ibuyr specializes in acquiring 2, 3, and 4 BHK homes located in carefully selected societies throughout Noida. Our focus on these types of properties allows us to ensure that we cater to the needs of both sellers and buyers, providing quality options in desirable communities.',
  },
  {
    question: 'How Does Ibuyr Streamline the Selling Process?',
    answer: 'Ibuyr addresses the time-sensitive nature of property sales by providing immediate liquidity for your home. Acting as a guaranteed buyer, Ibuyr enables you to sell today, eliminating the delays, uncertainties, and challenges typically associated with locating buyers.',
  },
  {
    question: 'Who Are We?',
    answer: 'Ibuyr was founded with a mission to revolutionize the real estate market by providing fast, reliable solutions for home sellers and buyers. Led by industry professionals with deep knowledge of the local market, Ibuyr operates out of Noida, backed by visionary investors committed to transforming real estate through technology. Our team comprises experts from diverse sectors, working together to drive meaningful change by leveraging technology to simplify property transactions and ensure a smooth, transparent experience for all our clients.',
  },
  {
    question: 'How Does Ibuyr Transact?',
    answer: 'In essence, Ibuyr operates with two distinct approaches. First, as an investor, we directly purchase and resell apartments, ensuring swift and straightforward transactions. Second, as a service provider, we take on a partnership model: rather than buying and selling outright, we collaborate with the seller to manage the sale process and share in the profits. This dual model allows flexibility, enabling us to tailor our approach to meet the unique needs of each property owner.',
  },
  {
    question: 'How do you value your homes?',
    answer: 'This draws, honestly, from the values of the company itself. When we started Ibuyr, we decided to build something that would stand the test of time, built on the principles of trust and transparency - something we found to be sorely lacking in the real estate space. We then figured that the only way to do this is going by facts and not hearsay. We are not sure you are aware, but the Karnataka government has made the last 14-15 years of transaction data into public information. We have painstakingly built the hardware and software it takes to get all this information, actual documents, under one roof. It is modelling further, on top of these documents, that we are able to figure out where market is for an as-is where-is home in a community, and where we should sell to actually generate a premium. ',
  },
  {
    question: 'Is not This Just Buying Low and Selling High? How Does Ibuyr Add Value?',
    answer: 'At Ibuyr, we purchase properties at fair market value, then enhance them through renovations, rigorous legal due diligence, and clear title resolution. These added steps allow us to bring properties to market at a premium, reflecting their improved condition and verified quality. Unlike traditional buyers, we offer sellers a substantial advance payment upfront, providing immediate liquidity—a benefit uncommon in the market. What truly sets us apart, however, is our speed; we complete transactions approximately three times faster than the market average, saving valuable time and offering a seamless, efficient experience for both buyers and sellers.',
  },
  {
    question: 'How Should I Decide on the Right Option?',
    answer: 'The choice depends on your financial goals and timeline. If you have a clear need for immediate funds and prefer a guaranteed transaction, partnering with us as an investor may be best. In this model, Ibuyr purchases your home with a substantial advance payment and assumes the risk of the resale. On the other hand, if maximizing the final sale value is your priority and immediate liquidity is not essential, our service provider model may be more advantageous. While this approach does not offer a large advance, it allows us to work toward securing a premium sale price as quickly as possible.',
  },
  {
    question: 'Why Did We Choose This Business?',
    answer: "Our founder's background in real estate provided a strong foundation, but his passion lies in using technology to streamline traditional practices. The pandemic offered a moment for reflection, revealing the challenges faced by homeowners trying to sell in an unorganized secondary market, where selling a home could take nearly a year. Spot buying emerged as a way to inject liquidity into this typically slow-moving sector. Inspired by successful global models, we set out to bring this approach to India, focusing on quick, value-added transactions to simplify real estate for everyone.",
  },
  {
    question: 'How Does Selling to Ibuyr Differ from Traditional Methods?',
    answer: 'Selling to Ibuyr offers a significantly faster and more streamlined process compared to traditional sales, which typically take anywhere from 6 months to 1.5 years to complete. At Ibuyr, we can finalize your transaction in just 2-3 weeks. Our efficiency stems from our proprietary valuation tool, which enables us to assess your property quickly and provide you with a competitive offer without the lengthy negotiations and uncertainties that often accompany traditional sales. This means you can achieve liquidity faster, without the usual hassles associated with selling a home.',
  },
  {
    question: 'How Does the Purchasing Process Work at Ibuyr?',
    answer: "The purchasing process at Ibuyr is straightforward. Initially, we establish a registration agreement to sell, granting us the rights to renovate and access your home. At this stage, the property should be vacant, and you'll provide us with the necessary documents and a set of keys. Although the legal title has not yet transferred, we begin acting as owners immediately, taking responsibility for associated bills. Following this, we proceed with renovations and actively seek a buyer for your property. Once we have a buyer lined up, we move forward to register the Sale Deed. This deed is a tripartite agreement involving you as the Seller—still holding the title, the new buyer as the Purchaser, and us as the Confirming Party, based on our initial Agreement to Sell. The balance payment is then settled with you at this point, completing the transaction.Following this, we proceed with renovations and actively seek a buyer for your property. Once we have a buyer lined up, we move forward to register the Sale Deed. This deed is a tripartite agreement involving you as the Seller—still holding the title, the new buyer as the Purchaser, and us as the Confirming Party, based on our initial Agreement to Sell. The balance payment is then settled with you at this point, completing the transaction.",
  },
  {
    question: 'How Do We Determine the Price for Your Home?',
    answer: 'At Ibuyr, we leverage proprietary algorithms that analyze extensive existing property transaction data to assess the value of your home. Our database includes information from over 2.5 million property transactions, combined with over 50 property-specific features, allowing us to create a comprehensive valuation. This data-driven approach ensures that we provide a fair, accurate estimate, making the process of selling your home simple, transparent, and convenient.',
  },
  {
    question: 'How Does Ibuyr Operate When Assisting with Sales?',
    answer: 'When we assist with selling your property, we establish a significantly high minimum guaranteed value in writing. This value is based on our commitment to undertake complete renovations and invest in the home to enhance its market appeal. We then exclusively market the property, leveraging our expertise to turn it around quickly and efficiently. Our approach ensures that you benefit from a premium sale while we handle the necessary improvements and marketing strategies to achieve the best possible outcome.',
  },
  {
    question: 'What If I Want to Maximize the Value of My Home?',
    answer: "Maximizing your property's value with Ibuyr is straightforward. We start by entering into a Memorandum of Understanding (MoU) with you, during which we provide a refundable deposit of INR 1 lakh. Following this, we invest a predetermined amount on your behalf for the refurbishment of your home, enhancing its appeal to unlock a premium sale price.We secure exclusive rights to market and sell the property for a period of six months, allowing us to confidently invest in the necessary improvements to expedite the transaction. As part of this model, we guarantee a minimum sale amount that we will charge to the end purchaser. The financial arrangement is simple: we charge a fee for facilitating the sale and share any profits generated above the agreed threshold value, ensuring that you benefit from the increased sale price while we manage the process efficiently.",
  },
  {
    question: 'What Has the Journey Been Like So Far?',
    answer: 'Ibuyr began its journey in the Sector 150 area, focusing on a small market to validate our business hypothesis regarding sufficient demand and supply. Encouraged by initial positive feedback, we gradually expanded our operations to encompass all of Noida. To date, we have successfully transacted over 250 properties across the city and continue to grow. Our aim is to establish ourselves as the preferred platform for ready-to-move-in homes in the coming years, catering to the needs of both buyers and sellers alike.',
  },
  {
    question: "Isn't Working with You Similar to Dealing with an Agent or Channel Partner? Why Choose Ibuyr?",
    answer: "That perspective is quite simplistic. In reality, our model is fundamentally different. We require the home to be vacant when we begin our process, allowing us to invest in enhancing the property's value—this is our key differentiator from any traditional channel partner. Additionally, partnering with us effectively provides you access to a network akin to working with over 500 channel partners. We offer a comprehensive, end-to-end managed solution, which means you won't have to engage directly with the end purchaser. From site visits and negotiations to paperwork, registration, and closing, we handle every aspect of the transaction for you, ensuring a seamless and hassle-free experience.",
  },
  {
    question: 'What Is an Offer, and How Can I Receive One?',
    answer: 'An offer represents the price and terms under which we guarantee the purchase of your apartment. To provide you with an accurate offer, we first conduct a thorough physical inspection of your property. Following this assessment, we present our offer, outlining the proposed purchase price and any relevant conditions. This process ensures transparency and clarity, allowing you to make an informed decision about moving forward with the sale.',
  },
  {
    question: 'What Justifies the Premium We Offer?',
    answer: 'The success of our sales process hinges on two key elements: packaging and distribution. We have meticulously refined both aspects to enhance efficiency and effectiveness. We understand that many resale properties tend to sell slowly due to their condition—often being sold "as-is"—and the lack of clear legal status.At Ibuyr, we purchase apartments in their current state to simplify the process for sellers. We then identify the minimal necessary investments to address essential repairs, focusing on plumbing, electrical, carpentry, and masonry work. Once we have transformed the home into a picture-perfect condition and ensured its legal clarity through thorough title checks, we can present prospective buyers with a legally sound property that is not only well-maintained but also situated in a vibrant community. This comprehensive approach enables us to command a premium price for the properties we sell.',
  },
  {
    question: 'How Do We Achieve Faster Sales?',
    answer: 'Our approach to selling properties quickly is straightforward. After enhancing the homes through quality packaging, we turn our attention to distribution. We leverage a robust network of over 500 Channel Partners throughout Bangalore, all of whom are familiar with the high standards we uphold when preparing a home for sale.Moreover, we offer competitive pricing that exceeds the market rate, along with immediate payment. This not only makes the financial aspect attractive for our Channel Partners but also incentivizes them to promote our properties more enthusiastically. As a result, we can coordinate multiple site visits for each home, enabling us to close sales significantly faster than the market average.',
  },
];


const App = () => {
    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
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
      <Helmet>
  <title>Frequently Asked Questions | ibuyr</title>
  <meta name="description" content="Find answers to common questions about ibuyr's AI-powered real estate solutions." />
   <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Types of Homes Does Ibuyr Purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ibuyr specializes in acquiring 2, 3, and 4 BHK homes located in carefully selected societies throughout Noida. Our focus on these types of properties allows us to ensure that we cater to the needs of both sellers and buyers, providing quality options in desirable communities."
          }
        },
        {
          "@type": "Question",
          "name": "How Do We Determine the Price for Your Home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Ibuyr, we leverage proprietary algorithms that analyze extensive existing property transaction data to assess the value of your home. Our database includes information from over 2.5 million property transactions, combined with over 50 property-specific features, allowing us to create a comprehensive valuation. This data-driven approach ensures that we provide a fair, accurate estimate, making the process of selling your home simple, transparent, and convenient."
          }
        },
        {
          "@type": "Question",
          "name": "Is not This Just Buying Low and Selling High? How Does Ibuyr Add Value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Ibuyr, we purchase properties at fair market value, then enhance them through renovations, rigorous legal due diligence, and clear title resolution. These added steps allow us to bring properties to market at a premium, reflecting their improved condition and verified quality. Unlike traditional buyers, we offer sellers a substantial advance payment upfront, providing immediate liquidity—a benefit uncommon in the market. What truly sets us apart, however, is our speed; we complete transactions approximately three times faster than the market average, saving valuable time and offering a seamless, efficient experience for both buyers and sellers."
          }
        }
      ]
    })}
  </script>
</Helmet>
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
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
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

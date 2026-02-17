import React from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs?: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const defaultFAQs: FAQItem[] = [
        {
            question: "How much does property maintenance cost in Prince George?",
            answer: "Property maintenance costs in Prince George vary depending on the service. We offer free quotes for all projects including lawn care, seasonal cleanups, and pressure washing. Call us at (250) 981-5662 for an accurate estimate."
        },
        {
            question: "How long does a property cleanup take?",
            answer: "Most cleanup jobs can be done in a few hours to a full day, depending on the size of the property and the scope of work (e.g., power washing, gutter cleaning, leaf removal)."
        },
        {
            question: "Do you provide free estimates?",
            answer: "Yes! We provide free quotes and estimates for all our services in Prince George, College Heights, The Hart, and surrounding areas. Give us a call or text at (250) 981-5662."
        },
        {
            question: "What services does Northern Property Maintenance offer?",
            answer: "We offer a full range of services including lawn & yard care, seasonal cleanups, spring gravel sweeping, pressure & soft washing, tree & hedge trimming, and gutter & roof care."
        },
        {
            question: "Do you handle spring cleanups and gravel sweeping?",
            answer: "Yes, we specialize in spring resets, including gravel sweeping from driveways and lawns after winter, ensuring your property is ready for the new season."
        },
        {
            question: "Are you a locally owned business?",
            answer: "Yes, Northern Property Maintenance is a local business serving Prince George and the surrounding areas in British Columbia."
        }
    ];

    const faqItems = faqs || defaultFAQs;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default FAQSchema;

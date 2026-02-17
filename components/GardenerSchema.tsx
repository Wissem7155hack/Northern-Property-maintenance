import React from 'react';
import { Helmet } from 'react-helmet';

export const GardenerSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Gardener",
        "@id": "https://Wissem7155hack.github.io/Northern-Property-maintenance/#gardener",
        "name": "Northern Property Maintenance",
        "description": "Professional yard care and maintenance services specialized in lawn mowing, seasonal cleanups, and pressure washing in Prince George.",
        "founder": {
            "@type": "Person",
            "name": "Northern Property Maintenance Team"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Prince George"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Property Maintenance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lawn & Yard Care",
                        "description": "Professional lawn mowing and yard care services",
                        "provider": {
                            "@id": "https://Wissem7155hack.github.io/Northern-Property-maintenance/#organization"
                        },
                        "category": "Maintenance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Seasonal Cleanups",
                        "description": "Spring resets and seasonal property cleanups",
                        "provider": {
                            "@id": "https://Wissem7155hack.github.io/Northern-Property-maintenance/#organization"
                        },
                        "category": "Maintenance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Pressure Washing",
                        "description": "Driveway and surface cleaning",
                        "category": "Cleaning"
                    }
                }
            ]
        },
        "url": "https://Wissem7155hack.github.io/Northern-Property-maintenance/",
        "telephone": "+12509815662",
        "email": "northernpropertymaintenancepg@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Check, Digital Payment",
        "currenciesAccepted": "CAD"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default GardenerSchema;

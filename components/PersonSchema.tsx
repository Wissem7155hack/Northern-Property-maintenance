import React from 'react';
import { Helmet } from 'react-helmet';

interface PersonSchemaProps {
    name?: string;
    jobTitle?: string;
    telephone?: string;
    email?: string;
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
    name = "Northern Property Maintenance Team",
    jobTitle = "Maintenance Specialists",
    telephone = "+12509815662",
    email = "northernpropertymaintenancepg@gmail.com"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "worksFor": {
            "@id": "https://Wissem7155hack.github.io/Northern-Property-maintenance/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Prince George",
            "addressRegion": "BC",
            "addressCountry": "CA"
        },
        "telephone": telephone,
        "email": email,
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61586315857028"
        ],
        "knowsAbout": [
            "Yard Care",
            "Lawn Mowing",
            "Seasonal Cleanups",
            "Pressure Washing",
            "Gutter Cleaning",
            "Tree Trimming",
            "Gravel Sweeping"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default PersonSchema;

// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
}

export const locations: LocationData[] = [
    {
        city: 'Prince George',
        slug: 'prince-george',
        postalCode: 'V2L',
        region: 'British Columbia',
        description:
            'Professional property maintenance and yard care services in Prince George. From lawn mowing and seasonal cleanups to pressure washing and gutter cleaning, we keep Prince George looking its best.',
        landmarks: [
            'Lheidli T\'enneh Memorial Park',
            'University of Northern British Columbia (UNBC)',
            'Pine Centre Mall',
            'Mr. PG Statue',
            'CN Centre',
        ],
        services: [
            'Lawn & Yard Care',
            'Seasonal Cleanups',
            'Spring Gravel Sweeping',
            'Pressure & Soft Washing',
            'Tree & Hedge Trimming',
            'Gutter & Roof Care',
            'Garden Maintenance',
            'Debris Removal',
        ],
        testimonial: {
            text: 'Northern Property Maintenance does an amazing job with our spring cleanup every year. Highly recommend!',
            author: 'Luis Arras',
            service: 'Seasonal Cleanup',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38210.86548128362!2d-122.779774!3d53.917068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538898f480393933%3A0xe7a5c7f8a7e0f2!2sPrince%20George%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    },
    {
        city: 'College Heights',
        slug: 'college-heights',
        postalCode: 'V2N',
        region: 'British Columbia',
        description:
            'Reliable property maintenance in College Heights. We specialize in detailed lawn care, seasonal transitions, and surface cleaning for residential properties in the Heights.',
        landmarks: [
            'College Heights Secondary',
            'Westgate Plaza',
            'Bert Ambrose Park',
            'Southridge Neighborhood',
        ],
        services: [
            'Lawn Mowing',
            'Hedge Trimming',
            'Driveway Pressure Washing',
            'Leaf Removal',
            'Gutter Cleaning',
            'Spring Sweeping',
        ],
        testimonial: {
            text: 'Great service in College Heights. They are always on time and do a thorough job.',
            author: 'Sarah M.',
            service: 'Lawn Care',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38210.86548128362!2d-122.810000!3d53.880000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538898f480393933%3A0xe7a5c7f8a7e0f2!2sCollege%20Heights%2C%20Prince%20George%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    },
    {
        city: 'The Hart',
        slug: 'the-hart',
        postalCode: 'V2K',
        region: 'British Columbia',
        description:
            'Your expert partner for yard maintenance in The Hart. We understand the unique needs of northern properties and provide robust cleanup and maintenance solutions.',
        landmarks: [
            'Hart Highlands Ski Hill',
            'Hart Shopping Centre',
            'Ferguson Lake',
            'Heather Park',
        ],
        services: [
            'Spring Cleanup',
            'Lawn Maintenance',
            'Tree Trimming',
            'Roof Debris Removal',
            'Pressure Washing',
            'Seasonal Prep',
        ],
        testimonial: {
            text: 'The team handled our large yard in The Hart with ease. Very professional results!',
            author: 'Robert K.',
            service: 'Yard Maintenance',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38210.86548128362!2d-122.750000!3d53.980000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538898f480393933%3A0xe7a5c7f8a7e0f2!2sThe%20Hart%2C%20Prince%20George%2C%20BC!5e0!3m2!1sen!2sca!4v1710000000000',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};

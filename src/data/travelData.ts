export interface TravelData {
    id: number;
    image: {
        src: string;
        alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
}

const travelData: TravelData[] = [
    {
        id: 1,
        image: {
            src: "https://images.pexels.com/photos/19035808/pexels-photo-19035808.jpeg",
            alt: "Tokyo city skyline at night",
        },
        title: "Tokyo",
        country: "Japan",
        googleMapsLink: "https://goo.gl/maps/8r1aR4S9k6x",
        dates: "12 Jan, 2025 - 20 Jan, 2025",
        text: "Tokyo is Japan's capital, blending modern skyscrapers, cutting-edge technology, and deep-rooted traditions. Famous for Shibuya Crossing, Tsukiji markets, and serene temples.",
    },
    {
        id: 2,
        image: {
            src: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
            alt: "Kiyomizu-dera Temple in Kyoto",
        },
        title: "Kyoto",
        country: "Japan",
        googleMapsLink: "https://goo.gl/maps/5Pt3K5xxuDq",
        dates: "22 Jan, 2025 - 26 Jan, 2025",
        text: "Kyoto, once the capital of Japan, is known for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
    },
    {
        id: 3,
        image: {
            src: "https://images.pexels.com/photos/4058519/pexels-photo-4058519.jpeg",
            alt: "Osaka Castle surrounded by cherry blossoms",
        },
        title: "Osaka",
        country: "Japan",
        googleMapsLink: "https://goo.gl/maps/5okXxyMzq6N2",
        dates: "28 Jan, 2025 - 2 Feb, 2025",
        text: "Osaka is Japan's kitchen, known for street food like takoyaki and okonomiyaki. It's also home to Osaka Castle and Universal Studios Japan.",
    },
    {
        id: 4,
        image: {
            src: "https://images.pexels.com/photos/33229953/pexels-photo-33229953.jpeg",
            alt: "Hiroshima Peace Memorial",
        },
        title: "Hiroshima",
        country: "Japan",
        googleMapsLink: "https://goo.gl/maps/nDdTMEZ4bQD2",
        dates: "4 Feb, 2025 - 6 Feb, 2025",
        text: "Hiroshima is remembered for its history and peace memorials, particularly the Atomic Bomb Dome and Peace Memorial Park, while also offering beautiful gardens and castles.",
    },
    {
        id: 5,
        image: {
            src: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg",
            alt: "Mount Fuji with cherry blossoms",
        },
        title: "Mount Fuji",
        country: "Japan",
        googleMapsLink: "https://goo.gl/maps/kp1Wg8HwLZw",
        dates: "8 Feb, 2025 - 10 Feb, 2025",
        text: "Mount Fuji is Japan's tallest mountain and most iconic symbol. Popular for hiking, scenic views, and cultural significance in art and literature.",
    },
    {
        id: 6,
        image: {
            src: "https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg",
            alt: "Eiffel Tower in Paris at sunset",
        },
        title: "Paris",
        country: "France",
        googleMapsLink: "https://goo.gl/maps/Ea5gE6dbtqE2",
        dates: "14 Mar, 2025 - 20 Mar, 2025",
        text: "Paris, the City of Light, is famed for its art, fashion, gastronomy, and culture. Must-sees include the Eiffel Tower, Louvre Museum, and charming streetside cafés.",
    },
    {
        id: 7,
        image: {
            src: "https://images.pexels.com/photos/722014/pexels-photo-722014.jpeg",
            alt: "Statue of Liberty in New York",
        },
        title: "New York City",
        country: "USA",
        googleMapsLink: "https://goo.gl/maps/ztygG8Yc9mA2",
        dates: "10 Apr, 2025 - 18 Apr, 2025",
        text: "New York City is known as 'the city that never sleeps.' Iconic landmarks include Times Square, Central Park, the Empire State Building, and Broadway shows.",
    },
];

export default travelData;

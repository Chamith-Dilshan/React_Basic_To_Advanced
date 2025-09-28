import travelData, { type TravelData } from '../data/travelData';

const DetailCard = ({ item }: { item: TravelData }) => {
    const [startDate, endDate] = item.dates.split(" - ");
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 max-w-2xl">
            <div className="flex-shrink-0 w-full h-48 md:w-96 md:h-72">
                <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-full rounded object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-left">📍 {item.country}</span>
                    <a
                        href={item.googleMapsLink}
                        className="text-gray-400 underline text-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="text-xl font-bold my-2">{item.title}</h2>
                <p className="font-semibold">{startDate} - {endDate}</p>
                <p className="mt-2">{item.text}</p>
            </div>
        </div>

    )
}

const TravelJournal = () => {

    const travelEntryCards = travelData.map(
        (item: TravelData) => {
            return (
                <DetailCard key={item.id} item={item} />
            )
        }
    )

    return (
        <section className='w-screen h-screen flex flex-col overflow-x-hidden'>
            {/* header part */}
            <nav className='flex items-center justify-center p-5 bg-gray-700'>
                <img src="react.svg" alt="logo" className="size-12" />
                <span className="text-2xl md:text-3xl text-white m-3 uppercase">
                    <b>My Travel Journal</b>
                </span>
            </nav>

            {/* travel journal content part */}
            <main className='flex flex-1 flex-col items-center justify-center p-5 '>
                {travelEntryCards}
            </main>
        </section>
    )
}

export default TravelJournal
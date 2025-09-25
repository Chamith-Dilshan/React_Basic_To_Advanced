import { Fragment } from "react/jsx-runtime"

const SimpleList = () => {
    return (
        // you can use Fragmants or empty tags <></> 
        // instead of div to avoid unnecessary nodes in the DOM
        <Fragment>
            <section className="w-screen h-screen flex flex-col">

                {/* Top Nav Section */}
                <nav
                    id="navigation"
                    className="flex flex-row items-center w-full bg-gray-800 p-4 md:p-6"
                >
                    <img src="react.svg" alt="logo" className="size-12" />
                    <span className="text-3xl md:text-4xl text-blue-300 m-3">ReactFacts</span>
                </nav>

                {/* Main Content Section */}
                <div className="flex flex-1 w-full bg-gray-700 relative p-8 overflow-hidden">
                    
                    {/* Left Side (text) */}
                    <div className="flex flex-col items-start max-w-xl md:max-w-2xl z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Fun facts about React
                        </h1>

                        <ul className="list-disc list-inside text-lg md:text-2xl max-w-md 
                         pl-5 text-white marker:text-blue-400 space-y-1 md:space-y-2">
                            <li >was released in 2013</li>
                            <li >was created by Jordan Walke</li>
                            <li >has over 100k stars on GitHub</li>
                        </ul>
                    </div>

                    {/* Right Side (background logo) */}
                    <img
                        src="react.svg"
                        alt="background logo"
                        className="absolute -right-25 md:-right-32 top-1/10 opacity-10 
                        size-52 md:size-72 lg:size-96"
                    />
                </div>
            </section>
        </Fragment>
    )
}

export default SimpleList
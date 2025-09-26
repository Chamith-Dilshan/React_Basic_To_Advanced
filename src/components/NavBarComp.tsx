interface NavBarCompProps { 
    imageSrc: string;
    title: string;
}

function NavBarComp({ navBarProps }: { navBarProps : NavBarCompProps }) {
    return (
        <>
            <header className="sticky top-0 z-10 flex flex-col w-full items-center justify-between
            bg-white p-4 shadow">
                <div className="flex items-center">
                    <img src={navBarProps.imageSrc} alt="Logo" className="h-8 w-8" />
                    <span className="ml-3 font-roboto text-xl font-bold uppercase">{navBarProps.title}</span>
                </div>
            </header>
        </>
    )
}

export default NavBarComp
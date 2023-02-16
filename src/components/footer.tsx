function Navbar() {
    return <>
        <footer className="bg-gray-950">
            <div className="flex flex-col items-center gap-y-4 py-12 md:justify-between lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center font-medium text-gray-400">Created by <span className="text-gray-200">Evan Scully</span>
                </div>
                <nav className="flex flex-wrap justify-center" aria-label="Footer">
                    <div className="py-2 px-5"><a className="text-base text-gray-500 hover:text-gray-400" href="/info/terms-of-service">Terms of Service</a>
                    </div>
                    <div className="py-2 px-5"><a className="text-base text-gray-500 hover:text-gray-400" href="/info/privacy-policy">Privacy Policy</a>
                    </div>
                </nav>
                <div className="flex justify-center items-center space-x-6">
                    <a className="cursor-pointer" target="_blank" href="https://www.linkedin.com/in/evan-scully-a9893120b/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 50 50"
                            className="reverse-svg"
                            fill="#808080"
                        >
                            <path d="M25 2C12.318 2 2 12.317 2 25s10.318 23 23 23 23-10.317 23-23S37.682 2 25 2zm-7 33h-4V20h4v15zm-2-18a2 2 0 11-.001-3.999A2 2 0 0116 17zm21 18h-4v-7.5c0-1.925-1.575-3.5-3.5-3.5S26 25.575 26 27.5V35h-4V20h4v1.816A6.476 6.476 0 0130.5 20a6.5 6.5 0 016.5 6.5V35z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer" target="_blank" href="https://twitter.com/eimhin_scully">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 48 48"
                            className="reverse-svg"
                            fill="#808080"
                        >
                            <path
                                d="M42 12.429a14.978 14.978 0 01-4.247 1.162 7.38 7.38 0 003.251-4.058 14.829 14.829 0 01-4.693 1.776A7.377 7.377 0 0030.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 01-15.224-7.654 7.23 7.23 0 00-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 01-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 01-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 01-9.174 3.134 14.61 14.61 0 01-1.761-.104A21.109 21.109 0 0017.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0042 12.429"
                            ></path>
                        </svg>
                    </a>
                </div>
                <p className="text-center text-gray-400">© 2023 Evan Scully, All rights reserved.</p>
            </div>
        </footer>
    </>
}

export default Navbar;
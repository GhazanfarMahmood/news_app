// IMPORTING SEARCH ICON FROM PUBLIC FOLDER
import Image from "next/image"
import search_icon from "../../../public/assets/icons/search.svg"


export default function NavBar(){
    return(
        <header className="bg-black">
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <span >
                        <strong className="text-white">The DAILY NEWS</strong>
                    </span>
                    <div className="search">
                        <form className="max-w-[300px] flex justify-center items-center bg-white has-[:focus]:bg-red-600 p-1 rounded-[5px]">
                            <input type="text" className="w-full input bg-transparent focus:outline-none"/>
                            <button>
                                <Image src={search_icon} alt="search_icon" width={20} height={20} />
                            </button>
                        </form>
                    </div>
                    <ul className="flex justify-center gap-4 align-middle">
                        <li className="text-white">Home</li>
                        <li className="text-white">Favorite</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
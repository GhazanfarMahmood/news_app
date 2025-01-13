// IMPORTING SEARCH ICON FROM PUBLIC FOLDER
import Image from "next/image"

// LINK FROM NEXT LINK FOR NAVIGATION
import Link from "next/link"

// ALL ICONS AND IMAGES
import search_icon from "../../../public/assets/icons/search.svg"
import heart_fill from "../../../public/assets/icons/heart-solid.svg"
import house_icon from "../../../public/assets/icons/house.svg"
import sun_icon from "../../../public/assets/icons/sun.svg"
import moon_icon from "../../../public/assets/icons/moon.svg"


export default function NavBar(){
    return(
        <header className="bg-gray-50">
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <span >
                        <strong>The DAILY NEWS</strong>
                    </span>
                    <form className="max-w-[400px] flex justify-center items-center p-1 border-2 border-black-300 rounded-[5px] has-[:focus]:border-black">
                        <input type="text" className="w-full input bg-transparent focus:outline-none"/>
                        <button>
                            <Image src={search_icon} alt="search_icon" width={20} height={20} />
                        </button>
                    </form>
                    <div className="flex justify-center items-center gap-7">
                        <ul className="flex justify-center items-center gap-5">
                            <li>
                                <Link href="/" className="flex items-center justify-center gap-[5px]">
                                    <Image src={house_icon} alt="house-icon" width={25} height={25} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/favorite" className="flex items-center justify-center gap-[5px]">
                                    <Image src={heart_fill} alt="heart-fill-icon" width={25} height={25} />
                                    Favorite
                                </Link>
                            </li>
                        </ul>
                        <button className="p-[6px] border-[1px] border-black-300 rounded-[5px]">
                            <Image src={sun_icon}  alt="sun-icon" width={20} height={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
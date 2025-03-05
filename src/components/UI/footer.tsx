// HERE IMPORT FONT FROM GOOGLE AND OPTIMIZE BY NEXT
import { Bokor } from "next/font/google"

// WHERE BOKOR IS STATIC FONT
const bokorFont = Bokor({
    subsets : ['latin'],
    weight : '400'
});

export default function Footer(){
    return(
        <footer className="flex align-middle justify-center bg-gray-50">
            <div className="container">
                <div className="flex items-center justify-center gap-[5px]">
                    All Right Reserved by 
                    <span className={`${bokorFont.className} text-[20px]`}>The Daily News</span>
                </div>
            </div>
        </footer>
    )
}
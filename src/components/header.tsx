import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto" >
            <Link href='/' className="flex items-center w-max" >
                <Image src='/book.png' width={60} height={60} alt='Logo' />
                <span className="font-semibold text-2xl" >Books</span>
            </Link>
            <div className="flex items-center gap-5" >
                 
                <svg viewBox="0 0 30 30" className="size-10 md:hidden top-5 right-3 fill-none stroke-zinc-400 stroke-2">
                    <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" placeholder="Search" className="hidden md:block bg-zinc-800 text-zinc-400 rounded-md px-3 py-2.5 focus:outline-none " />
                
                <div className="hidden w-11 h-11 cursor-pointer bg-white rounded-full" >
                    
                </div>
            </div>
        </nav>
    )
}
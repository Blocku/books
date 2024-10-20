import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto py-1.5 px-3" >
            <Link href='/' className="flex items-center w-max" >
                <Image src='/book.png' width={60} height={60} alt='Logo' />
                <span className="font-semibold text-2xl" >Books</span>
            </Link>
            <div className="flex items-center gap-5" >
                <svg className="h-6 w-6 absolute top-1.5 right-3 fill-none stroke-zinc-400 stroke-2">
                    <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search" className="hidden bg-zinc-800 text-zinc-400 rounded-full pl-10 pr-5 py-2.5 focus:outline-none " />
                
                <div className="hidden w-11 h-11 cursor-pointer bg-white rounded-full" >
                    
                </div>
            </div>
        </nav>
    )
}
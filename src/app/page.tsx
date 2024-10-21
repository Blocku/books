import Book from "@/components/blockBook";
import Header from "@/components/header";
// import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className="p-3 space-y-20" >
      <Header/>
      <div className="space-y-10" >
        <ul className="flex gap-5" >
          <li className="text-white font-semibold text-lg " >All</li>
          <li className="text-zinc-500 font-semibold text-lg" >Recomended</li>
          <li className="text-zinc-500 font-semibold text-lg" >Top</li>
        </ul>
        <ul>
          <Book/>  
        </ul>
      </div>
    </div>
  );
}

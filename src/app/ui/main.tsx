import next from "next";
import Image from "next/image";

import people from "../../../public/people.json"

export default function Main() {
  return (
    <main>
      <ul className="columns-5">
        {people.map((persona,index)=>{
            return(
                <li key={index}>
                   <a href="/persona/001"><Image src={persona.picture} width={200} height={300} alt="nombre" /></a>
                   <div className="info-persona">
                   <p>{persona.name}</p>
                   <p>{persona.location}</p>
                   </div>
                </li>
            )           
        })}
      </ul>
       <div className="mt-5 flex w-full justify-center">
       {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </main>
  );
}

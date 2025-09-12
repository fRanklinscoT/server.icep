import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";

export default function HomePage(){
    const [greeting,setGreeting] = useState("");
    const name  = "Della";

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();

        if(hours >= 4 && hours < 10 ) setGreeting("Good Morning");
        if(hours >= 10 && hours < 12) setGreeting("Good Day");
        if(hours >=12 && hours < 5) setGreeting("Good Afternoon");
        else setGreeting("Good Evining");
    },[])
    return(
        <div className="flex flex-col">
            <TopBar />
            <h2 className="text-style m-4 leading-1.5">{greeting}{" "}{name}</h2>
            <ProductCourasel />
        </div>
    )
}
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EventCard from "./Eventcard"
import Gdsc from "@/components/gdsc.png"
import softec from "@/components/softec.jpeg"
import Trading from "@/components/trading.jpeg"
import ccs from "@/components/cfd.png"
const eventsarr=[
    {
        name:"GDSC BBQ",
        place:"Fast Nuces",
        date:"15th April,2024",
        img:Gdsc,
    },{
        name:"Softec BBQ",
        place:"Comsats",
        date:"07th May,2024",
        img:softec,
    },{
        name:"Tr winners",
        place:"ITU",
        date:"08th June,2024",
        img:Trading,
    },{
        name:"CCS BBQ",
        place:"LUMS",
        date:"15th Sep,2024",
        img:ccs,
    },{
        name:"VDS BBQ",
        place:"MIT",
        date:"1st April,2025",
        img:ccs,
    },
]
  export default function EventList(pro) {
 
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{pro.heading}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
            {eventsarr.map((props)=>{
                return(<EventCard 
         Eventname={props.name} 
         Eventdate={props.date} 
         Eventplace={props.place} 
         Eventimg={props.img}
        />)
            })}
        </CardContent>
      </Card>
    )
  }
  

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import BrdyCard from "./Brdycard"
import imgg1 from "@/components/fimg1.jpg";
import imgg2 from "@/components/fimg2.jpg";
import ehan from "@/components/ehan.jpeg";
import Muslim from "@/components/muslim.jpeg";
const eventsarr=[
    {
        name:"Anna",
        age:"28",
        date:"15th April,2024",
        img:imgg1,
    },{
        name:"Ehan Ayaz",
        age:"27",
        date:"07th May,2024",
        img:ehan,
    },{
        name:"Rao Aashir",
        age:"17",
        date:"08th June,2024",
        img:ehan,
    },{
        name:"Syed Muslim",
        age:"18",
        date:"15th Sep,2024",
        img:Muslim,
    },{
        name:"Anni",
        age:"15",
        date:"1st April,2025",
        img:imgg2,
    },
]
  export default function BrdyEvent(pro) {
 
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{pro.heading}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">

            {eventsarr.map((props)=>{
                return(<BrdyCard 
         Eventname={props.name} 
         Eventage={props.age} 
         Eventimg={props.img}
        />)
            })}
        </CardContent>
      </Card>
    )
  }
  

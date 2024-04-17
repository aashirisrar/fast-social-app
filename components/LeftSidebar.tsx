import React from 'react'

import Gdsc from "@/components/gdsc.png"
import softec from "@/components/softec.jpeg"
import Trading from "@/components/trading.jpeg"
import ccs from "@/components/cfd.png"
import imgg1 from "@/components/fimg1.jpg";
import imgg2 from "@/components/fimg2.jpg";
import ehan from "@/components/ehan.jpeg";
import Muslim from "@/components/muslim.jpeg";
import {
    
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Leftcard from './leftsidecard'
const Societyannouncements=[
    {
        sname:"GDSC",
        imgg:Gdsc,
    },
    {
        sname:"Softec",
        imgg:softec,
    },
    {
        sname:"Trading Society",
        imgg:Trading,
    },
    {
        sname:"Carrier CS",
        imgg:ccs,
    },
]

const eventchats=[
    {
        ename:"GDSC event",
        imgg:Gdsc,
    },{
        ename:"Softec Carrier Fair",
        imgg:softec,
    },{
        ename:"CCS Carrier Fair",
        imgg:ccs,
    },{
        ename:"Trading Competition",
        imgg:Trading,
    },
]
const myonlinefriends=[
    {
        fname:"Anabia",
        imgg:imgg1,
    },{
        fname:"Ayesha",
        imgg:imgg2,
    },{
        fname:"Ehan Ayaz",
        imgg:ehan,
    },{
        fname:"Muslim",
        imgg:Muslim,
    },{
        fname:"Rao Aashir",
        imgg:ehan,
    }
]

const LeftSidebar = () => {
  return (
 <div>
    <CardHeader>
          <CardTitle className='text-md'>Society Chats</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">

            {Societyannouncements.map((props)=>{
                return(<Leftcard 
         Eventname={props.sname} 
         Eventimg={props.imgg}
        />)
            })}
        </CardContent>
        <CardHeader>
          <CardTitle className='text-md'>Event Chats</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">

            {eventchats.map((props)=>{
                return(<Leftcard 
         Eventname={props.ename} 
         Eventimg={props.imgg}
        />)
            })}
        </CardContent>
        <CardHeader>
          <CardTitle className='text-md'>Online Friends</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">

            {myonlinefriends.map((props)=>{
                return(<Leftcard 
         Eventname={props.fname} 
         Eventimg={props.imgg}
        />)
            })}
        </CardContent>
        
        
        </div>
  )
}

export default LeftSidebar
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import Image from "next/image"
  
  export default function Leftcard(props) {
    return (
        <div className="flex items-center gap-4 -mt-2">
        <Avatar className="hidden h-9 w-9 sm:flex">
          <AvatarImage src={props.Eventimg} alt="Avatar" />
          <Image src={props.Eventimg}
           className="border-white"
          /> 
        </Avatar>
        {/* <div className="grid gap-1"> */}
          <p className="text-md grid gap-1 font-medium leading-none">{props.Eventname}</p>
          {/* <p className="text-sm text-muted-foreground">
            {props.Eventage}
          </p> */}
        {/* </div> */}
        {/* <div className="ml-auto font-medium">+$1,999.00</div> */}
      </div>
    )
  }
  

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const EventDisplayComponent = ({ event }: any) => {
  return (
    <Card className="mb-4 ">
      <CardContent key={event.id} className="grid gap-8">
        <div className="grid items-center gap-4">
          <div
            className="mx-[auto] mt-[20px]"
            style={{ display: "inline-flex" }}
          >
            <Avatar className="h-20 w-20 ">
              <AvatarImage src={event.user.profilePicture} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <CardTitle style={{ marginTop: "20px", marginLeft: "10px" }}>
              {event.user.firstName}
              <div className="text-sm font-light">@ {event.user.name}</div>
            </CardTitle>
          </div>
          <div className="text-center text-xl font-bold">{event.name}</div>
          <div className="flex mt-[25px] ">
            {/* <p className="text-sm font-medium leading-none">{}</p> */}
            <div className="flex-1 w-[30%]">
              <img src={event.image} className="mx-auto" alt="EventImg" />
            </div>
            <div className="flex-2 w-[70%]">
              <div className="grid grid-cols-2 text-center justify-center items-center h-full">
                <div>
                  {event.location}
                </div>
                <div>
                  {event.date}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto font-medium mt-8">{event.details}</div>
        </div>
      </CardContent>
    </Card >
  );
};

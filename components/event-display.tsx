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
            <div>{event.user.name}</div>
            <CardTitle style={{ marginTop: "30px", marginLeft: "10px" }}>
              {event.user.firstName}
            </CardTitle>
          </div>
          <div className="text-center text-xl">{event.name}</div>
          <div className="flex mt-[25px] ">
            {/* <p className="text-sm font-medium leading-none">{}</p> */}
            <div className="flex-1 w-[30%]">
              <img src={event.image} alt="EventImg" />
            </div>
            <div className="flex-2 w-[70%]">
              <p
                className="text-sm text-muted-foreground"
                style={{ textAlign: "center" }}
              >
                {event.location}
              </p>
              <p>{event.date}</p>
            </div>
          </div>
          <div className="mx-auto font-medium">Details: {event.details}</div>
        </div>
      </CardContent>
    </Card>
  );
};

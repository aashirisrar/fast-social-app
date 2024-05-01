import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EventDisplayComponent = ({ event }: any) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent key={event.id} className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={event.image} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            {/* <p className="text-sm font-medium leading-none">{}</p> */}
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
          <div className="ml-auto font-medium"> {event.date}</div>
          <div className="ml-auto font-medium">
            {event.startTime}
          </div>
          <div className="ml-auto font-medium"> {event.endTime}</div>
          <div className="ml-auto font-medium">
            Details: {event.details}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventComponent() {

  const [events, setEvents] = useState([]);

  async function getEvents() {
    const response = await axios.post('/api/events/getevents');

    // convert time in response to am/pm format
    response.data.events.forEach((event: any) => {
      const date = new Date(event.startTime);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedTime = hours + ':' + minutes + ' ' + ampm;
      event.startTime = formattedTime;
    });

    setEvents(response.data.events);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Events</CardTitle>
      </CardHeader>
      {
        events?.map((event: any, index: any) => {
          return (
            <CardContent key={index} className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={event.userImage} alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{event.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                </div>
                <div className="ml-auto font-medium">{event.startTime}</div>
              </div>
            </CardContent>
          );
        })
      }
    </Card >
  );
}
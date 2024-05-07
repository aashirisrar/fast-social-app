import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserProfileComponent = ({ user }: any) => {
  return (
    <Card className="mb-4">
      <CardContent key={user.id} className="grid gap-8">
        <div className="grid ">
          <Avatar className="hidden h-20 w-20 flex mx-[auto] my-[20px] ">
            <AvatarImage src={user.profilePicture} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-md font-medium leading-none  mx-[auto]">
              <b>@{user.name}</b>
            </p>
            <p className="text-sm text-muted-foreground mx-[auto]">
              {user.bio}
            </p>
          </div>
          <div className="mx-[auto] font-medium">
            {user.firstName + " " + user.lastName}
          </div>
          <div className="mx-[auto] font-medium"> {user.gender}</div>
          <div style={{ display: "inline-flex" }}>
            <div className="ml-auto font-medium">
              Following: {user.followingCount}
            </div>
            <div className="mx-[10px]"></div>
            <div className="mr-auto font-medium">
              Followers: {user.followerCount}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileComponent;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserProfileComponent = ({ user }: any) => {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent key={user.id} className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={user.profilePicture} alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {user.bio}
                        </p>
                    </div>
                    <div className="ml-auto font-medium"> {user.email}</div>
                    <div className="ml-auto font-medium">{user.firstName + ' ' + user.lastName}</div>
                    <div className="ml-auto font-medium"> {user.gender}</div>
                    <div className="ml-auto font-medium">Date of Birth: {user.dateOfBirth}</div>
                    <div className="ml-auto font-medium">Following: {user.followingCount}</div>
                    <div className="ml-auto font-medium">Followers: {user.followerCount}</div>
                </div>
            </CardContent>
        </Card >
    )
}

export default UserProfileComponent
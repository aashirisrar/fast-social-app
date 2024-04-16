import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AddFriendComponent = ({ firstName, lastName, name, profilePicture }: any) => {
    return (
        <div className="w-full bg-muted text-primary rounded-xl" key={name}>
            <Image
                src={profilePicture}
                className="rounded-t-xl"
                alt="-1"
                width={200}
                height={200}
            />
            <div className="flex flex-col justify-center gap-1 p-4">
                <div className="text-md font-medium">{firstName + " " + lastName}</div>
                <div className="text-sm text-muted-foreground font-medium mb-2">{name}</div>
                <div className="flex flex-col gap-1 items-center">
                    <Button className="w-full" variant="outline"
                    >
                        Add Friend
                    </Button>
                    <Button className="w-full" variant="outline"
                    >
                        View Profile
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddFriendComponent
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

const FriendComponent = ({ firstName, lastName, name, profilePicture }: any) => {
    const params = useParams();
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
                <div className="flex items-center">
                    <Link href={"/user/" + name}>
                        <Button className="w-full" variant="outline"
                        >
                            View Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FriendComponent
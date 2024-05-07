import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

const FriendComponent = ({ firstName, lastName, name, profilePicture }: any) => {
    const params = useParams();
    return (
        <div className="w-full bg-muted text-primary rounded-xl p-1" key={name}>
            <div className="p-2 flex items-center justify-center">
                <Image
                    src={profilePicture}
                    className="rounded-t-xl"
                    alt="-1"
                    width={150}
                    height={150}
                />
            </div>
            <div className="flex flex-col justify-center gap-1 p-4">
                <div className="text-md font-medium">{firstName + " " + lastName}</div>
                <div className="text-sm text-muted-foreground font-medium mb-2 break-words">{name}</div>
                <div className="flex flex-col gap-1 items-center">
                    <Button className="w-full md:text-sm" variant="outline"
                    >
                        <Link href={"/user/" + name}>
                            View Profile
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FriendComponent
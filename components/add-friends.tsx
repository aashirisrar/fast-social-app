import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { ImageIcon } from "lucide-react"

const AddFriendComponent = ({ firstName, lastName, name, profilePicture }: any) => {
    const [isFriendAdded, setIsFriendAdded] = useState(false);

    const addFriend = async () => {
        try {
            const response = await axios.post('/api/friends/addfriend', { username: name });
            setIsFriendAdded(true);
        }
        catch (e) {
            console.log(e)
        }
    }

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
            < div className="flex flex-col justify-center gap-1 p-4">
                <div className="text-md font-medium">{firstName + " " + lastName}</div>
                <div className="text-sm text-muted-foreground font-medium mb-2 break-words">{name}</div>
                <div className="flex flex-col gap-1 items-center">
                    {!isFriendAdded && ( // Render button only if friend not added
                        <Button onClick={addFriend} className="w-full" variant="outline">
                            Add Friend
                        </Button>
                    )}
                    <Button className="w-full" variant="outline">
                        <Link href={"/user/" + name}>
                            View Profile
                        </Link>
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default AddFriendComponent
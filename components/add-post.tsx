import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircleIcon } from "lucide-react"
import { Textarea } from "./ui/textarea"

export function AddPost() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="gap-x-1"><PlusCircleIcon size={18} />  New Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Post</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter title here"
                            defaultValue=""
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Content
                        </Label>
                        <Textarea
                            id="username"
                            placeholder="Enter content here"
                            defaultValue=""
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Image
                        </Label>
                        <Input
                            id="picture"
                            type="file"
                            className="col-span-3"
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit">Create Post</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

import { Heart, LucideMenu, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export default function PostComponent({ username, body, image, likeCount, commentCount, postId }: any) {
  return (
    <Card className="space-y-2 px-6 mb-4 w-[650px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Aashir Israr{username}</p>
            <p className="text-sm text-muted-foreground">
              2 hours ago
            </p>
          </div>
        </div>
        <LucideMenu className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-muted-foreground">{body}
          </p>
          <div className="bg-red-500 w-full">
            <Image width={400} style={{ objectFit: "contain" }} height={400} alt={postId} src={image} />
          </div>
        </div>
        <div className="flex gap-2">
          {/* add like count here */}
          <Button variant="outline"><Heart size={16} className="mr-1" />{likeCount}</Button>
          {/* add comment count here */}
          <Button variant="outline"><MessageCircle size={16} className="mr-1" />{commentCount}</Button>
        </div>
      </CardContent>
    </Card>
  );
}

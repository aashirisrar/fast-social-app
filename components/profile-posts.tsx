import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonCard } from "@/components/skeleton-card";
import PostComponent from "./post-item";

const ProfilePostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchUserPosts() {
        try {
            const response = await axios.post('/api/post/getyourposts');
            setPosts(response.data.posts);

        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3200);
        fetchUserPosts();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }
    return (
        <div className="flex flex-col">
            {
                posts.map((post: any) => (
                    <PostComponent key={post.postId} {...post} />
                ))
            }
        </div>
    )
}

export default ProfilePostsComponent
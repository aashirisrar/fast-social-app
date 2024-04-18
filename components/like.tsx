"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import axios from 'axios'


const LikeComponent = ({ postId, likeCount }: any) => {

    const [like, setLike] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);

    async function incrementLikes() {
        try {
            setLike(like + 1);
            setIsLiked(true);
            const response = await axios.post('/api/post/incrementlikes', { postId: postId });

        } catch (error) {
            console.error('Error incrementing likes:', error);
        }
    }


    return (
        // !isLiked ? (<Button onClick={incrementLikes} variant="outline" > <Heart size={16} className="mr-1" />{like}</Button>) : <></>
        <Button onClick={incrementLikes} variant="outline" disabled={isLiked}> <Heart size={16} className="mr-1" /> {like}</Button>
    );
}

export default LikeComponent
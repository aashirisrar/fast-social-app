"use client"

import React from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import axios from 'axios'

const LikeComponent = ({ postId, likeCount }: any) => {

    async function incrementLikes() {
        try {
            const response = await axios.post('/api/post/incrementlikes', { postId: postId });

        } catch (error) {
            console.error('Error incrementing likes:', error);
        }
    }


    return (
        <Button onClick={incrementLikes} variant="outline"><Heart size={16} className="mr-1" />{likeCount}</Button>
    )
}

export default LikeComponent
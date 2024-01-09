"use client";
import React from "react";
import LikeButton from "./LikeButton";

export interface IWishListButton {
    product_id: number;
    className?: string;
};

export default function WishListButton({ product_id, className }: IWishListButton) {
    const [liked, setLiked] = React.useState(false);
    const KEY_LIKED_ITEM = 'likedItem';

    React.useEffect(() => {
        let likedItems_str = localStorage.getItem(KEY_LIKED_ITEM);
        if (likedItems_str == null) {
            localStorage.setItem(KEY_LIKED_ITEM, '[]');
        } else {
            let json_arr = JSON.parse(likedItems_str);
            if (json_arr.includes(product_id)) {
                setLiked(true);
                // console.log('like', product_id)
            }
        }
    }, []);


    const handleLike = () => {
        if (liked) {
            let json_arr = JSON.parse(localStorage.getItem(KEY_LIKED_ITEM));
            console.log('setting', json_arr);
            localStorage.setItem(KEY_LIKED_ITEM, JSON.stringify(json_arr.filter((e: number | string) => e != product_id)));
            setLiked(false);
        } else {
            let json_arr = JSON.parse(localStorage.getItem(KEY_LIKED_ITEM));
            json_arr.push(product_id);
            json_arr = [...(new Set(json_arr))];
            console.log('setting', json_arr);
            localStorage.setItem(KEY_LIKED_ITEM, JSON.stringify(json_arr));
            setLiked(true);
        }
    }

    return (
        <LikeButton liked={liked} className={`absolute right-3 top-3 ${className}`} handleLike={handleLike} />
    )
}
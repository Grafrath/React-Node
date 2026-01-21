import LikeButton from "@/components/LikeButton";
import Post from "@/components/PostList";

interface Post {
    title: string;
}

interface PostListProps {
    post: Post;
}

export default function PostList({ post }: PostListProps) {
    return (
        <div>
            <h3>{post.title}</h3>
            <LikeButton />
        </div>
    );
}
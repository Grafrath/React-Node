import type { Post } from "@/types/post";

type Props = {
    post: Post;
};

export default function PostCard({ post }: Props) {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    );
}
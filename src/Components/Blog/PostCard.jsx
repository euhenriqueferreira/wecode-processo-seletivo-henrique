// Styles
import './PostCard.scss';

export function PostCard({ post }) {
    return (
        <div className="postCard">
            <div className="postImage">
                <img src={post.imageUrl} alt={post.imageAlt} title={post.imageTitle} loading='lazy' />
            </div>
            <div className="postCaption">
                <h3>{post.postTitle}</h3>
                <p>{post.postSummary}</p>
                <a href="">Saiba mais!</a>
            </div>
        </div>
    )
}
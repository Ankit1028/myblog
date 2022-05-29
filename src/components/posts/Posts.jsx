import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://i.pinimg.com/564x/e8/df/d1/e8dfd1f933d13310ab29c5d50150ee1d.jpg" />
      <Post img="https://i.pinimg.com/564x/7d/70/dd/7d70dd585a8c2e862ccbac59ee9b79ee.jpg" />
      <Post img="https://i.pinimg.com/564x/c7/b2/6f/c7b26f600b070e6b2768f56826d615f1.jpg"/>
      <Post img="https://i.pinimg.com/564x/4a/be/eb/4abeebc0775b910c2ae0dbf78d7dc229.jpg"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}

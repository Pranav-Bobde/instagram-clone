import Post from "../components/Post";

const posts = [
  {
    id: "123",
    username: "nothing",
    userImg: "https://links.papareact.com/3ke",
    img: "https://w0.peakpx.com/wallpaper/746/534/HD-wallpaper-zero-two-backround-simple-zero-two-thumbnail.jpg",
    caption: "Hit the like button",
  },
  {
    id: "123",
    username: "nothing",
    userImg: "https://links.papareact.com/3ke",
    img: "https://w0.peakpx.com/wallpaper/746/534/HD-wallpaper-zero-two-backround-simple-zero-two-thumbnail.jpg",
    caption: "Hit the like button",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;

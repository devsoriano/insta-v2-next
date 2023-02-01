import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "devSoriano",
      userImg:
        "https://media.licdn.com/dms/image/D5603AQH0nCUmbkvglw/profile-displayphoto-shrink_400_400/0/1674767572195?e=1680739200&v=beta&t=DInTnPEDIGo1NUF-ri_Q08gWXgz8fRfCrHPSJBByO_Y",
      img: "https://images.unsplash.com/photo-1675124516944-c257f7354c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "Nice car",
    },
    {
      id: "2",
      username: "other",
      userImg:
        "https://media.licdn.com/dms/image/D5603AQH0nCUmbkvglw/profile-displayphoto-shrink_400_400/0/1674767572195?e=1680739200&v=beta&t=DInTnPEDIGo1NUF-ri_Q08gWXgz8fRfCrHPSJBByO_Y",
      img: "https://images.unsplash.com/photo-1675151638871-81d2e9acf61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "Nice desktop",
    },
  ];

  return (
    <div>
      {posts.map(({ id, username, userImg, img, caption }) => (
        <Post
          key={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
          id={id}
        />
      ))}
    </div>
  );
}

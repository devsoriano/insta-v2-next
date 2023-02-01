export default function Story({ id, img, username }) {
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  );
}

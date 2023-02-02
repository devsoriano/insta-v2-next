export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://media.licdn.com/dms/image/D5603AQH0nCUmbkvglw/profile-displayphoto-shrink_400_400/0/1674767572195?e=1680739200&v=beta&t=DInTnPEDIGo1NUF-ri_Q08gWXgz8fRfCrHPSJBByO_Y"
        alt="user-img"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">devSoriano</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}

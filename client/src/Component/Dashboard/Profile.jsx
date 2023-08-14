const Profile = ({ agent }) => {
  return (
    <div className="w-[100%] pl-10 mt-5">
      <div className="profile-img w-[150px] h-[150px] overflow-hidden">
        <img
          src={agent.image}
          alt=""
          className="rounded-full w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="profile-details flex flex-col gap-2 mt-6">
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Name: </span>
          <span>{agent.name}</span>
        </div>
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Email: </span>
          <span>{agent.email}</span>
        </div>
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Phone: </span>
          <span>{agent.phone}</span>
        </div>
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Level: </span>
          <span>{agent.experience}</span>
        </div>
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Education: </span>
          <span>{agent.qualification}</span>
        </div>
        <div className="profile-detail flex gap-3">
          <span className="font-bold">Address: </span>
          {/* <span>{agent.address.length > 0 ? agent.address[0] : "Nil"}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

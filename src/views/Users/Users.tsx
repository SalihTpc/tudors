import Actions from "../../components/Actions";
import userSvg from "../../assets/icons/users.svg";

const Users = () => {
  return (
    <>
      <Actions />
      <div className="my-2 mx-48 font-inter">
        <div className="flex items-center justify-start mb-3">
          <img src={userSvg} alt={userSvg} />
          <h2 className="text-xl ml-3">Kullanıcılar</h2>
        </div>

        <hr className="border border-solid border-black" />
      </div>
    </>
  );
};

export default Users;

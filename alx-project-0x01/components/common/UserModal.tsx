import { UserModalProps, UserData } from "@/interfaces";
import { useState } from "react";

const defaultUser: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(defaultUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSubmit(user);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 border mb-2 rounded"
          value={user.name}
          onChange={handleChange}
        />
        <input
          name="username"
          placeholder="Username"
          className="w-full p-2 border mb-2 rounded"
          value={user.username}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="w-full p-2 border mb-2 rounded"
          value={user.email}
          onChange={handleChange}
        />
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

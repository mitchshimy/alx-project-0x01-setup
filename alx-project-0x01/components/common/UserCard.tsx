import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold">{name} <span className="text-gray-500">(@{username})</span></h2>
      <p className="text-sm text-gray-600 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-600 mb-1">📞 {phone}</p>
      <p className="text-sm text-gray-600 mb-1">🌐 {website}</p>
      <p className="text-sm text-gray-600">🏢 {company.name}</p>
      <p className="text-sm text-gray-500">
        📍 {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;

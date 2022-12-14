import React, { useState } from "react";
import { useStateValue } from "../context/stateProvider";
import Modal from "./Modal";
import DeleteModalDesign from "./DeleteModalDesign";
import { AiOutlineDelete } from "react-icons/ai";
import Dashboard from "../components/Dashboard";
import { getHotelName } from "../utils";

const RoomItem = ({ roomImg, roomid, price, status }) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [{ hotels }, dispatch] = useStateValue();

  return (
    <article className="flex justify-between items-center py-[1em] border-b-2 ">
      <div className="flex items-center gap-6 w-[20%]">
        <img src={roomImg} className="w-[5rem] h-[5rem] rounded-md" />
        <div>
          <h3 className="w-[20ch] font-bold">{getHotelName(roomid, hotels)}</h3>
          <p className="text-xs text-gray-400">Price: {price}</p>
        </div>
      </div>
      <div>
        {status == "Available" ? (
          <div className="bg-green-200 text-green-700 py-1 px-3">{status}</div>
        ) : (
          <div className="bg-red-200 text-red-700 py-1 px-3">{status}</div>
        )}
      </div>
      <div className="flex gap-4 cursor-pointer">
        {isOpenDelete && (
          <Modal
            isOpen={isOpenDelete}
            handleCloseModal={() => setIsOpenDelete(false)}
            Design={DeleteModalDesign}
          />
        )}
        <AiOutlineDelete
          onClick={() => setIsOpenDelete(true)}
          className="hover:text-gray-600 hover:scale-125"
        />
      </div>
    </article>
  );
};

const ViewRooms = () => {
  const [{ rooms }, dispatch] = useStateValue();
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg">
        <h1 className="border-b-2 font-bold text-lg pb-[0.8em]">All Rooms</h1>
        {rooms.map((room, index) => (
          <RoomItem
            roomImg={room.image}
            price={room.price}
            status={room.status}
            roomid={room._id}
            key={index}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewRooms;

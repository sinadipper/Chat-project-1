import { DeleteIcon } from "../../assets/delete";
import { EditIcon } from "../../assets/edit";
import { LogoutIcon } from "../../assets/logout";
export default function ChatHeader({ selectedContact }) {
  return (
    <div className=" div__contact--header items-center hover:cursor-pointer bg-[#4A90E2] bg-opacity-40  hover:bg-[#50E3C2] rounded-2xl h-14 w-full flex flex-row-reverse">
      <span className="ml-3 inline-block w-12 h-12 p-3 pr-5 rounded-lg bg-[#df4a00] mr-3 ">
        {selectedContact.name.charAt(0)}
      </span>

      <div className="flex flex-col ml-auto">
        <h3 className="ml-auto text-[#333333]">{selectedContact.name}</h3>
        <p className="text-xs text-[#7F8C8D] inline">
          {selectedContact.mobile}
        </p>
      </div>
      <div className="flex mr-auto ml-3 gap-2">
        <span className="text-[16px] text-[#333333]">
          <DeleteIcon />
        </span>
        <span className="text-[#333333] ">
          <EditIcon />
        </span>
        <span className="text-[#333333]">
          <LogoutIcon />
        </span>
      </div>
    </div>
  );
}

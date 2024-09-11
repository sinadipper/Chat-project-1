import { DeleteIcon } from "../../assets/delete";
import { ChatEdit } from "../../assets/chatEdit";
export default function ReceivedMessage({ name, message, date }) {
  return (
    <li className="flex mb-3 break-words">
      <span className="bg-[#df4a00] h-10 w-10 text-center p-2 rounded-md self-end mr-2">
        {name.charAt(0)}
      </span>
      <div className="flex flex-col items-start bg-[#D6E4E0] rounded-2xl p-3 min-h-20 max-w-xs">
        <h3 className="font-semibold text-[#333333]">{name}</h3>
        <p className="text-sm text-left break-words text-[#333333]">
          {message}
        </p>
        <span className="text-xs text-[#333333]">
          {new Date(date).toLocaleDateString("fa-ir", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
    </li>
  );
}

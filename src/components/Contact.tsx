export function Contact({
  name,
  date,
  mobile,
  chats = [],
  setSelectedContact,
}) {
  function handleSelectContact() {
    setSelectedContact((prevContact) => {
      return {
        ...prevContact,
        name: name,
        chatList: chats,
        date: date,
        mobile: mobile,
      };
    });
  }
  // console.log(`Chats for ${name}:`, chats);
  const initial = name ? name.charAt(0) : "?";
  const latestMessage =
    chats.length > 0
      ? chats.reduce((latest, chat) => {
          const chatDate = new Date(chat.date);
          return chatDate > new Date(latest.date) ? chat : latest;
        }).text
      : "";

  const truncatedMessage: string =
    latestMessage?.length > 30
      ? `${latestMessage.slice(0, 27)}...`
      : latestMessage;

  return (
    <li
      onClick={handleSelectContact}
      className="flex flex-row-reverse items-center hover:cursor-pointer hover:bg-[#d47f54] rounded-2xl h-14"
    >
      <span className="ml-3 inline-block w-12 h-12 p-3 pr-5 rounded-lg bg-[#df4a00] mr-3">
        {initial}
      </span>

      <div className="flex flex-col">
        <h3 className="text-[#333333] ml-auto text-end text-[14px]">
          {name || "Unknown"}
        </h3>
        <p className="text-xs inline ml-auto text-[#333333] text-[10px]">
          {truncatedMessage}
        </p>
      </div>
      <span className="date__contacts--nav ml-8 inline text-xs mr-auto text-[#000] ">
        {date}
      </span>
      <span className="date__contacts--nav ml-8 text-xs mr-auto hidden ">
        {mobile}
      </span>
    </li>
  );
}

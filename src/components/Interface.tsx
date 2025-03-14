import ContactsNav from "./contact-nav/ContactsNav";
import ChatSection from "./chat-section/ChatSection";
import { useState } from "react";
export default function Interface({
  contacts,
  allChats,
  username,
  userFullName,
  myToken,
  setAllChats,
}) {
  const [selectedContact, setSelectedContact] = useState({
    name: "",
    chatList: [],
    date: "",
    mobile: "",
    myChats: [],
  });
  // console.log(selectedContact);

  return (
    <div className="w-3/4 h-full mx-auto bg-[#8FAADC] bg-opacity-40 flex flex-1 flex-row-reverse p-4 border-solid border-2 border-[#F78E69] ">
      <ContactsNav
        setSelectedContact={setSelectedContact}
        contacts={contacts}
      />
      <ChatSection
        username={username}
        userFullName={userFullName}
        setSelectedContact={setSelectedContact}
        selectedContact={selectedContact}
        allChats={allChats}
        setAllChats={setAllChats}
        myToken={myToken}
      />
    </div>
  );
}

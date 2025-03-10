import { ReloadIcon } from "../../assets/reload";
import { ContactsIcon } from "../../assets/contacts";
import { SearchIcon } from "../../assets/search";
import { LogoutIcon } from "../../assets/logout";

export default function Searchbar({ handleFind, searchedContact }) {
  return (
    <div className="flex flex-row-reverse bg-[#4A6B94] h-12 items-center rounded-2xl ml-6 ">
      <button className="p-1">
        <ReloadIcon />
      </button>
      <button className="p-1">
        <ContactsIcon />
      </button>
      <button className="p-1">
        <SearchIcon />
      </button>
      <input
        value={searchedContact}
        onChange={handleFind}
        type="text"
        className="p-1 bg-[#4A6B94] border-none outline-none text-sm input__search--name text-[#333333] inline-block w-full input__searchbar "
        placeholder="جستجو"
      />
      <button className="p-2">
        <LogoutIcon />
      </button>
    </div>
  );
}

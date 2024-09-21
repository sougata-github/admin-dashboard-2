import Plan from "./Plan";
import Search from "./Search";
import Navigation from "./Navigation";
import AccountToggle from "./AccountToggle";

const Sidebar = () => {
  return (
    <div className="hidden md:block">
      <div className="sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <Navigation />
      </div>
      <Plan />
    </div>
  );
};

export default Sidebar;

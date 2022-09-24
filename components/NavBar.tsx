import ThemeChanger from "./ThemeChanger";

export default function NavBar() {
  return (
    <div className="flex justify-end relative gap-4 top-8 right-8">
      {/* New Category */}
      <button className=" bg-blue-600 rounded p-2">New Category</button>

      {/* Light or Dark mode */}
      <ThemeChanger />
    </div>
  );
}

export const Help_Menu: React.FC = () => {
  return (
    <>
      <section className="mt-5 w-100 mx-auto">
        <div className="help-menu-header p-4 text-center rounded-t-sm text-xl font-bold">
          <p>Help Menu</p>
        </div>
        <div className="help-menu-body px-10 py-5 shadow-xl rounded-b-sm">
          <p className="py-3 text-sm">[F8],[H] - Toggle Help Menu</p>
           <p className="py-3 text-sm">[J], [Space] - Get a new Dad Joke</p>
          <p className="py-3 text-sm">[C] - Copy Joke to the clipboard</p>
          {/* <p className="py-3 text-sm">[M] - Toggle Light/Dark Mode</p>   */}
        </div>
      </section>
    </>
  );
};

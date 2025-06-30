export const Help_Menu: React.FC = () => {
  return (
    <>
      <section className="mt-5 w-140 mx-auto absolute top-85 left-450 right-0 z-50">
        <div className="bg-base-300 p-4 text-center rounded-t-sm text-xl font-bold">
          Help Menu{" "}
        </div>
        <div className="bg-base-100 px-10 py-5 text-base-content shadow-xl rounded-b-sm">
          <p className="py-3 text-sm">[H] - Toggle Help Menu</p>
          <p className="py-3 text-sm">[M] - Toggle Light/Dark Mode</p>
          <p className="py-3 text-sm">[J]/ [Space] - Get a new Dad Joke</p>
          <p className="py-3 text-sm">[C] - Copy Joke to the clipboard</p>
        </div>
      </section>
    </>
  );
};

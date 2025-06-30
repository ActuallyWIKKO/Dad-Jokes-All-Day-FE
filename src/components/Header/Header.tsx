interface HeaderProps {
  hasFetchedJoke: boolean;
}

export const Header:React.FC<HeaderProps> = ({ hasFetchedJoke }) => {
    return (
  <header>
    <h1 className="text-xl">Dad Jokes<br></br>All day long</h1>
    <h2 className={`text-xl ${hasFetchedJoke ? "hidden" : ""}`}>Click the button below<br></br>to display a dad joke.</h2>
</header>
    );
};
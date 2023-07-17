import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>Home Page</div>
      <Link to={"/room"}>go to room</Link>
    </>
  );
}

export default HomePage;

import { ApolloRead } from "../components/ApolloRead";
import CharacterCounter from "../components/CharacterCounter";

function HomePage() {
  return (
    <div>
      <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Save changes
      </button>

      <button className="btn-primary">Save changes</button>
      <CharacterCounter />
    </div>
  );
}

export default HomePage;

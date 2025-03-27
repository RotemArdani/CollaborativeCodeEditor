import { useLoaderData, Link } from "react-router-dom";
import "../styles/lobby.css";

function LobbyPage() {
  const codeBlocks = useLoaderData();

  return (
    <div className="lobby-container">
      <h1 className="lobby-title">Choose Your Code Block</h1>
      <p className="lobby-subtitle">Select a code block to start collaborating!</p>
      <div className="codeblock-list">
        {codeBlocks.map((block) => (
          <Link to={`/codeblock/${block._id}`} key={block._id} className="codeblock-item">
            <div className="codeblock-card">
              <h2 className="codeblock-title">{block.title}</h2>
              <p className="codeblock-description">Click to enter the session</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LobbyPage;


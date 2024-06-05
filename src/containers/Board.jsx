import Easy from "./Levels/Easy/Easy";
import Hard from "./Levels/Hard/Hard";
import Medium from "./Levels/Medium/Medium";

export default function Board(props) {
  return (
    <>
      {props.difficulty === 'Easy' && <Easy />}
      {props.difficulty === 'Medium' && <Medium />}
      {props.difficulty === 'Hard' && <Hard />}
    </>
  );
}
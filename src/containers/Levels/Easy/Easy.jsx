import { Game } from "../Game";
import classes from "./Easy.module.css";

const HEIGHT = 10, WIDTH = 6, CHECKBOXES = 10;

export default function Easy() {
  let game = new Game(CHECKBOXES, HEIGHT, WIDTH);

  function repaint(event) {
    let elClass;
    if (event.target.className === classes.dr_td) {
      elClass = classes.used_dr_td;
    } else if (event.target.className === classes.lt_td) {
      elClass = classes.used_lt_td;
    }
    event.target.classList.add(elClass);
  }

  function putCheckbox(event) {
    repaint(event);
    event.preventDefault();
  }

  function show(event) {
    repaint(event);
    
  }

  return (
    <div>
      <table className={classes.table_div}>
        <tbody>
          {Array(HEIGHT).fill(0).map((_, i) => (
            <tr key={i}>
              {Array(WIDTH).fill(0).map((_, j) => (
                <td
                  id={i * 6 + j}
                  key={j}
                  onClick={show}
                  onContextMenu={putCheckbox}
                  className={
                    (j % 2 === i % 2) ? classes.dr_td : classes.lt_td
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
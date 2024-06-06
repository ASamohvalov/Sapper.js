import classes from "./Easy.module.css";

export default function Easy() {

  function handleClick(event) {
    if (event.type === 'click') {

    } else if (event.type === 'contextmenu') {
      
    }
  }

  return (
    <div>
      <table className={classes.table_div}>
        <tbody>
          {Array(10).fill(0).map((_, i) => (
            <tr key={i}>
              {Array(6).fill(0).map((_, j) => (
                <td
                  id={i * 6 + j}
                  key={j}
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
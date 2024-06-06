import classes from "./Medium.module.css";

export default function Medium() {
  return (
    <div>
      <table className={classes.table_div}>
        <tbody>
          {Array(15).fill(0).map((_, i) => (
            <tr key={i}>
              {Array(15).fill(0).map((_, j) => (
                <td
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
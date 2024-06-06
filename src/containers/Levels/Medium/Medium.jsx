import classes from "./Medium.module.css";

export default function Medium() {
  return (
    <div>
      <table>
        <tbody>
          {Array(10).fill(0).map((_, i) => (
            <tr key={i}>
              {Array(20).fill(0).map((_, j) => (
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
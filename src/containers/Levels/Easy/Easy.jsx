import classes from "./Easy.module.css";
import Modal from "../../../components/Modal/Modal";

export default function Easy() {

  return (
    <div>
      <Modal />
      <table>
        <tbody>
          {Array(10).fill(0).map((_, i) => (
            <tr key={i}>
              {Array(6).fill(0).map((_, j) => (
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
import styles from "./ToggleButton.module.css";
import { FC } from "react";

interface ToggleButtonProps {
  onClick?: () => void;
  checked?: boolean;
}
const ToggleButton: FC<ToggleButtonProps> = ({ checked, onClick }) => {
  return (
    <label className={styles.toggle}>
      <input
        className={styles.toggleCheckbox}
        checked={checked}
        readOnly
        type="checkbox"
        onClick={onClick}
      />
      <div className={styles.toggleSwitch} />
    </label>
  );
};
export default ToggleButton;

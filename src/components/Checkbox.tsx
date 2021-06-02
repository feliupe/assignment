const Checkbox = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(event) => onChange(event?.target.checked)}
  />
);

export default Checkbox;

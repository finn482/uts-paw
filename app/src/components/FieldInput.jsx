export default function FieldInput({
  id,
  label,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

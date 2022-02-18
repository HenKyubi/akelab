import useDarkMode from "use-dark-mode";

const ToggleDarkMode = () => {
  const { value, toggle } = useDarkMode(false);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={toggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleDarkMode;

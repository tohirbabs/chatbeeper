import "./style.css";

export const Overlay = ({ children }) => {
  return (
    <div className="overlay">
      <div className="overlay_wrapper">
        <div className="overlay_cover"></div>
        <div className="overlay_component">{children}</div>
      </div>
    </div>
  );
};

import "./FloatMenu.css";

type MenuProps = {
  children?: React.ReactNode;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  direction?: "row" | "column";
};

const Menu: React.FC<MenuProps> = ({
  children,
  bottom,
  top,
  left,
  right,
  direction = "row",
}) => {
  return (
    <div
      className={`menu menu-${direction}`}
      style={{
        position: "absolute",
        alignItems: "center",
        bottom,
        right,
        top,
        left,
        zIndex: 4,
        display: "flex",
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default Menu;

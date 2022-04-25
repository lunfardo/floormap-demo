import FloatMenu from "../atoms/FloatMenu/FloatMenu";

const RoomMenu: React.FC = () => {
  return (
    <FloatMenu bottom={20} right={20}>
      <h3 style={{ color: "white" }}>Show events</h3>
    </FloatMenu>
  );
};

export default RoomMenu;

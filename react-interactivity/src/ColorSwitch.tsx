export default function ColorSwitch({ onChangeColor } : any) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // MUITO IMPORTANTE!!!!
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}

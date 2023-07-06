interface numberCardProps {
  id: number;
}

export const NumberCard = (props: numberCardProps) => {
  return (
    <div
      style={{
        width: "200px",
        height: "40px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        margin: "20px"
      }}
    >
      {props.id}
    </div>
  );
};

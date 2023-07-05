import React from "react";

// falta certificar que obtem constantemente o tempo
export default function Clock() {
  let className;
  const [date, setDate] = React.useState(new Date());
  const update_date = () => {
    const new_date = new Date();
    setDate(new_date);
    let hours = date.getHours();
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    setTimeout(update_date, 1000); // em mili - segundos
  };

  React.useEffect(() => {update_date()} , []);
  return (
    <h1 className={className}>
      {date.toLocaleTimeString()}
    </h1>
  );
}
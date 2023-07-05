function Button({ onSmash, children } : any) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function ButtonApp() {
  return (
    <div>
      <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

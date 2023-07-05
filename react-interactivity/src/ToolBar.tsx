export default function Toolbar({ onPlayMovie, onUploadImage }: any) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }: any) {
  return <button onClick={onClick}>{children}</button>;
}

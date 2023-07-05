function Button({ onClick, children } : any) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName } : any) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

//--------------------------------------------------------------

export  function Toolbar2({ onPlayMovie, onUploadImage }: any) {
  return (
    <div>
      <Button2 onClick={onPlayMovie}>Play Movie</Button2>
      <Button2 onClick={onUploadImage}>Upload Image</Button2>
    </div>
  );
}

function Button2({ onClick, children }: any) {
  return <button onClick={onClick}>{children}</button>;
}

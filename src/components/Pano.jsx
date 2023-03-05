import * as PANOLENS from "panolens";
console.log(PANOLENS);
const panorama = new PANOLENS.ImagePanorama("/assets/pano3.jpg");
console.log(panorama);
const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#coucou")
});
console.log(viewer);
viewer.add(panorama);
const Pano = () => {
  return (
    <>
      <p>Coucou</p>
      <div id="coucou" htmlstyle="height:100%">
        {}
      </div>
    </>
  );
};

export default Pano;

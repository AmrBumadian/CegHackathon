import "react-animated-slider/build/horizontal.css";
import ImageSlider from "../Slider/ImageSlider";

export default function About() {
 
  return (
    <div
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      style={{
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#050F46",
      }}
    >
      <ImageSlider />

      <div
        style={{ width: "100%", backgroundColor: "#009999", marginTop: "35%" }}
      >
        <p style={{ color: "white" }}>Location : ____</p>
        <p style={{ color: "white" }}>Call us on :___ </p>
        <p style={{ color: "white" }}>Facebook Page :_____ </p>
        <p style={{ color: "white" }}>Workin from :__ to:___ </p>
      </div>
    </div>
  );
}

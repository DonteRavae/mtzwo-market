import React from "react";
import StyledGridDepartmentOverview from "../../components/GridDepartmentOverview/GridDepartmentOverview.styled";

// Test Seed Files
import audioSeed from "../../utils/landingAudioSeedData.json";
// import videoSeed from "../../utils/videoSeedData.json";

const LandingPage = () => {
  return (
    <main>
      {/* Spacer */}
      <div style={{ height: "600px" }}></div>
      {/* End Spacer */}
      <div style={{height: "200px", backgroundColor: "#333"}}></div>
      <StyledGridDepartmentOverview
        id="audio-overview"
        headerTitle="An Audio Department Overview Header"
        department="audio"
        departmentData={audioSeed}
        audio
      />
    </main>
  );
};

export default LandingPage;

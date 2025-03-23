import AuthProvider from "@/components/AuthProvider";
import PitchSubmissionComp from "@/components/PitchSubmissionComp";

function PitchSubmission() {
  return (
    <div>
      <AuthProvider>
        <PitchSubmissionComp />
      </AuthProvider>
    </div>
  );
}

export default PitchSubmission;

import AuthProvider from "@/components/AuthProvider";
import PitchSubmissionComp from "@/components/PitchSubmissionComp";

function PitchSubmission() {
  return (
    <div>
      <AuthProvider session={undefined}>
        <PitchSubmissionComp />
      </AuthProvider>
    </div>
  );
}

export default PitchSubmission;

import React from "react";

import { CardCompPropsTypes, SimilarPostTypes } from "@/types";
import PitchCardCompo from "./PitchCardCompo";
import SimilarPostComp from "./SimilarPostComp";
import SearchResult from "./SearchResult";

interface CardCompProps {
  pitch: CardCompPropsTypes[];
  similarPost: SimilarPostTypes[];
  filteredData: SimilarPostTypes[];
}

function CardComp(props: CardCompProps) {
  const { pitch, similarPost, filteredData } = props;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Normally, what should have happended here si showing the two components in the there parent component, but it is only one that is being shown. Where the components are being needed determines how visible any of the component would be. If you go to /pitch/id, the PitchCardCompo props will be undefine, so the PitchCardCompo will not show, so when you route to /pitch, SimilarPostComp props by that time will be undefined, since  we do not route to where it will be needed and no way data can be gotten */}
      <PitchCardCompo pitch={pitch} />
      <SimilarPostComp similarPost={similarPost} />
      <SearchResult filteredData={filteredData} />
    </div>
  );
}

export default CardComp;

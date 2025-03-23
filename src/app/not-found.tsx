import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
		<div className="flex justify-center flex-col items-center gap-3">
	  <Image src="/404.png" priority width={500} height={500} alt="404 image" />
      <Link href="/pitch">Return Home</Link>

		</div>
    </div>
  );
}

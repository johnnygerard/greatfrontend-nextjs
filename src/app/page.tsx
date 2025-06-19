import Link from "next/link";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <section>
        <h1>GreatFrontEnd Solutions</h1>
        <ul>
          <li>
            <Link href="/solution/badge-component">Badge Component</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default memo(HomePage);

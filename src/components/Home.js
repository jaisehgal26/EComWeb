import React, { Suspense } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Service = React.lazy(() => import("./Service"));
const Review = React.lazy(() => import("./Review"));
const Facts = React.lazy(() => import("./Facts"));
const Banner = React.lazy(() => import("./Banner"));
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Suspense
        fallback={
          <div className="center spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Facts />
        <Service />
        <Banner />
        <Review />
      </Suspense>
      <Footer />
    </>
  );
}

import React from "react";
import Banner from "./Banner";
import { dataOfBanner } from "../pages/shopSection/data";
import About from "./About";

export default function StartedPage() {
    return (
        <>
            <Banner data={dataOfBanner} />
            <About/>
        </>
    );
}

import React from 'react'
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import ShopSection from '../shopSection/ShopSection';
import CustomCountainer from '../../customContainer/CustomCountainer';

export default function HomePage() {
    return (
        <>
            <CustomCountainer customclass={"bg-gray-900"}>
            <Navbar />
                <ShopSection />
            </CustomCountainer>
            <Footer />
        </>
    );
}

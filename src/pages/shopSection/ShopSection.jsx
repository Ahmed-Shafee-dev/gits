import CustomCountainer from "../../customContainer/CustomCountainer";
import ShopData from "./ShopData";
import CustomTabs from "./CustomTabs";
import { useEffect, useState } from "react";
import { products } from "./data";

export default function ShopSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [filterProduct, setFilterProduct] = useState([]);
    const [myCategory, setMyCategory] = useState([]);
    useEffect(() => {
        if (activeTab == "All") {
            setFilterProduct(products);
        } else {
            setFilterProduct(products.filter((item) => item.category == activeTab));
        }
    }, [activeTab]);
    useEffect(() => {
        const uniqueCategory = ["All",...new Set(products.map((item) => item.category))];
        const convertCategory = uniqueCategory.map((item) => ({
            label: item,
            value: item,
        }));
        setMyCategory(convertCategory)
    }, []);
    return (
        <>
            <section className="shop-section">
                <CustomCountainer customclass="bg-gray-100 mt-1 p-2">
                    <CustomTabs data={myCategory} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="shop-section-product grid xl:grid-cols-3 md:grid-cols-1 gap-5">
                        {filterProduct.map((item, index) => (
                            <ShopData key={index} item={item} />
                        ))}
                    </div>
                </CustomCountainer>
            </section>
        </>
    );
}

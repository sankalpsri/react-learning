import { useState } from "react";
import TabButtons from "../Buttons/TabButtons";


export default function Footer() {
    const [activeTab, setActiveTab] = useState("tab1");
    function switchTab(tab) {
        setActiveTab(tab);
    }
    let tabContent = "Test Content for " + activeTab;
    
    return (
        <>
            <div className='footer'>
                <p>Footer content goes here</p>
            </div>
            <div className="">
                <ul className="nav nav-tabs nav-fill"> 
                    <TabButtons onClick={() => switchTab("tab1")} isActive={activeTab === "tab1"}>Tab 1</TabButtons>
                    <TabButtons onClick={() => switchTab("tab2")} isActive={activeTab === "tab2"}>Tab 2</TabButtons>
                    <TabButtons onClick={() => switchTab("tab3")} isActive={activeTab === "tab3"}>Tab 3</TabButtons>
                    <TabButtons onClick={() => switchTab("tab4")} isActive={activeTab === "tab4"}>Tab 4</TabButtons>
                </ul>
                <div className="card">
                    <div className="card-body">
                        {tabContent}
                    </div>
                </div>
            </div>
        </>
    );
}
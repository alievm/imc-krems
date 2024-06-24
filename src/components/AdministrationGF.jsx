import React from "react";
import Section from "./Section";
import imageMeeting from "/public/2023.jpg";
import List, { ListItem } from "./List";
import SectionSecond from "./SectionSecond.jsx";

const AdministrationGF = () => {
    return (
        <SectionSecond title="Administration" image={{ src: imageMeeting, shape: 1 }}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    Program’s administration is responsible for the discipline and strategic management of the university.
                    Dual nature of the program means that the administration is run by the stakeholders of both parties. While the bodies from TSUE ensure the smooth run of program, an Austrian Program Director makes sure that criteria are met by TSUE side and regulates the program ensuring the consistency.
                </p>
            </div>
        </SectionSecond>

    );
};

export default AdministrationGF;

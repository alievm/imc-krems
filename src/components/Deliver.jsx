import React from "react";
import Section from "./Section";
import imageMeeting from "/public/2023.jpg";
import List, { ListItem } from "./List";
import SectionSecond from "./SectionSecond.jsx";

const Deliver = () => {
  return (
    <SectionSecond title="Elevating Futures: The Dual Degree Path to Global Excellence" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The joint educational program of Tashkent State University of Economics and IMC University of Applied Sciences Krems was established in 2018, and currently students in this program are enrolled in two bachelor's programs, namely, Export-Oriented Management and Tourism and Leisure Management. Simultaneous teaching of local and foreign professors in the joint education program creates an educational environment for students that meets international standards. In particular, 30-40% of professors are from IMC University of Applied Sciences Krems, and the rest are leading specialist teachers with international educational experience. The program was accredited by Austrian Quality Assurance - AQ (Austrian Quality Assurance Inspection) in 2019. The foundation course for the joint education program is equivalent to the 1st year of the program. In general, 1 year of foundation and 3 years of bachelor education in the main specialties are provided.
          The educational process is conducted on the basis of the curriculum of IMC University of Applied Sciences Krems, ECTS (European Credit Transfer System). For this reason, it creates an opportunity for students to study at the main campus of IMC University of Applied Sciences Krems, as well as at prestigious universities of developed countries such as Germany and Japan based on the student exchange program.
          While studying on the basis of this program, students develop both theoretical knowledge and practical skills. In particular, special attention is paid to the formation of leadership and personal skills. In addition, students will be given the opportunity to complete internships at the Ministry of Finance, the Customs Committee, the State Committee for Tourism Development, logistics companies, the Institute of Tourism, and a number of prestigious organizations. The possibility of students who have achieved high results during the semester to become grant holders also shows a special attitude towards education.
          In order to effectively organize the leisure time of students, a number of cultural and educational activities, field trips, picnics and trips to different regions have been made a continuous part of the educational process. Also, students can travel to foreign countries through the work and travel program.
          Students who have successfully completed their studies are simultaneously awarded bachelor's degrees from the Tashkent State University of Economics and the IMC University of Applied Sciences Krems in Austria. This gives graduates the opportunity to work in Uzbekistan and European countries.

        </p>
      </div>
    </SectionSecond>
  );
};

export default Deliver;

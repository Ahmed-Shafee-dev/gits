import React, { useEffect, useState } from "react";
import { students } from "../pages/shopSection/data";
import Graduatetion from "./Graduatetion";
import { FaArrowDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import { label } from "framer-motion/client";

export default function About() {
    const [student, setStudent] = useState("select year");
    const [open, setOpen] = useState(false);
    const [filterStudent, setFilterStudent] = useState(students);
    const [graduatetionYears, setGraduatetionYears] = useState([]);
    useEffect(() => {
        const uniqueYears = [...new Set(students.map((item) => item.graduatetionYears))];
        const convertStudent = uniqueYears.map((item) => ({
            label: item,
            value: item,
        }));
        setGraduatetionYears(convertStudent);
    }, [student]);
useEffect(() => {
    if (student === "select year" || student === "all") {
        setFilterStudent(students);
    } else {
        setFilterStudent(students.filter((item) => item.graduatetionYears == student));
    }
}, [student]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <div className="m-auto mt-40 relative w-[20em]" data-aos="fade-right">
                <h2 className="text-3xl font-semibold m-auto ml-10 top-10 text-blue-700 capitalize">Who are we</h2>
                <svg className="text-blue-800 mt-2.5 w-64" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="red" stroke-width="3"></path>
                </svg>
            </div>
            <p className="m-auto w-[60em] mt-9 font-semibold" data-aos="fade-right">
                The Courses Academy is a specialized learning platform designed to empower students and professionals to develop their skills across various fields. It offers a wide range of training
                programs in programming, design, marketing, and business management, delivered by certified experts in a simple and practical way. Learners can access the courses online anytime and
                anywhere, with accredited certificates that enhance their career opportunities, help them stand out in the job market, and support continuous personal and professional growth.
            </p>
            <section className="mb-40 relative">
                <h1 className="ml-10 border-b border-r mb-10 border-amber-800 rounded-3xl px-5 py-2.5 inline-block mt-22 font-bold text-amber-400 text-3xl" data-aos="fade-up">
                    Graduate students
                </h1>
                <div className="bg-blue-500 flex ml-10 hover:bg-blue-600 items-center w-fit px-1.5 py-1 cursor-pointer rounded-2xl" onClick={() => setOpen(!open)} data-aos="fade-up">
                    <button className="cursor-pointer w-[7em]  px-4 py-2 capitalize text-white rounded-md">{student == "select year" ? "select year" : student}</button>
                    <FaArrowDown color="white" className={`ml-2 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
                </div>
                {open && (
                    <div className="absolute left-[7.5em] mt-1.5 w-30 text-center duration-200 bg-white shadow-md rounded-md border z-10">
                        <ul className="overflow-hidden flex flex-col">
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setStudent("all");
                                    setOpen(false);
                                }}>
                                All
                            </li>
                            {graduatetionYears.map((year,i) => (
                                <li
                                    key={i}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setStudent(year.value);
                                        setOpen(false);
                                    }}>
                                    {year.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 m-2 gap-4">
                {filterStudent.map((item, index) => (
                    <Graduatetion key={index} data={item} />
                ))}
            </section>
        </>
    );
}

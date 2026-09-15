import React from "react";
import { experience } from "../data/experience";

const About = ({ hasAnimated }) => {
    return (
        <section id="about" className="py-16 px-6 bg-gray-100">
            <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                <div className="max-w-5xl mx-auto text-center">
                    <div>
                        <p className="text-lg text-gray-700 mb-4">
                        I am an Information Systems graduated from Gunadarma University with a passion for programming, system development, and technology. I have experience in data science and strong skills in Python, SQL, and data visualization. I have built dashboards, analytics projects, and machine learning models for prediction and classification, including Linear Regression, Naive Bayes, and clustering. I am also interested in AI engineering, intelligent systems, and developing practical technology solutions. My ability to think critically and communicate clearly enables me to work effectively in collaborative and team-oriented environments.
                        </p>
                    </div>
                </div>

                {/* Timeline Experience */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-bold text-2xl text-center mb-8">Experience</h2>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                        {experience.map((exp) => (
                            <div
                                key={exp.id}
                                className="relative pl-12 mb-12">
                                {/* Timeline Dot */}
                                <span className="absolute left-1.5 top-1 flex w-5 h-5">
                                    <span className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                    <span className="relative inline-flex w-5 h-5 rounded-full bg-black border-4 border-white shadow"></span>
                                </span>

                                <div>
                                    <span className="text-sm font-semibold text-gray-500">
                                        {exp.duration}
                                    </span>
                                    <h3 className="text-xl font-bold mt-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-700 mt-2">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
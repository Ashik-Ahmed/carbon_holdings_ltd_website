import React from 'react';

// EmployeeCard Component for each employee node
const EmployeeCard = ({ name, position, color, image }) => {
    return (
        <div className={`flex flex-col items-center bg-${color}-500 text-white rounded-lg shadow-lg p-4 w-44`}>
            {/* Employee Image */}
            {image ? (
                <img src={image} alt={name} className="rounded-full w-16 h-16 mb-2 border-2 border-white" />
            ) : (
                <div className="w-16 h-16 mb-2 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    N/A
                </div>
            )}
            {/* Employee Name and Position */}
            <h3 className="font-bold">{name}</h3>
            {position && <p className="text-sm">{position}</p>}
        </div>
    );
};

// Line Component with Arrow
const LineWithArrow = ({ orientation }) => {
    return (
        <div className={`relative flex items-center justify-center ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}>
            {/* Line */}
            <div className={`bg-gray-400 ${orientation === 'vertical' ? 'w-0.5 h-10' : 'h-0.5 w-10'}`} />
            {/* Arrow */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className={`w-4 h-4 ${orientation === 'vertical' ? '' : 'transform rotate-90'}`}
            >
                <path d="M12 4v16m0 0l-8-8m8 8l8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

// Organogram Component
const Organogram = () => {
    return (
        <div className="flex flex-col items-center p-4 space-y-12 mt-8">
            {/* Top Level: CEO */}
            <div className="relative flex flex-col items-center">
                <EmployeeCard
                    name="Amy Elsner"
                    position="CEO"
                    color="indigo"
                    image="https://randomuser.me/api/portraits/women/68.jpg"
                />
                {/* Line below the CEO with Arrow */}
                <LineWithArrow orientation="vertical" />
            </div>

            {/* Second Level: CMO and CTO */}
            <div className="relative flex justify-around w-full md:w-3/4">
                {/* Line connecting CMO and CTO */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-400"></div>
                <LineWithArrow orientation="horizontal" />
                {/* CMO */}
                <div className="flex flex-col items-center">
                    <EmployeeCard
                        name="Anna Fali"
                        position="CMO"
                        color="purple"
                        image="https://randomuser.me/api/portraits/women/9.jpg"
                    />
                    {/* Line below CMO with Arrow */}
                    <LineWithArrow orientation="vertical" />
                </div>
                {/* CTO */}
                <div className="flex flex-col items-center">
                    <EmployeeCard
                        name="Stephen Shaw"
                        position="CTO"
                        color="teal"
                        image="https://randomuser.me/api/portraits/men/31.jpg"
                    />
                    {/* Line below CTO with Arrow */}
                    <LineWithArrow orientation="vertical" />
                </div>
            </div>

            {/* Third Level: Departments under CMO and CTO */}
            <div className="relative flex justify-around w-full md:w-3/4 space-x-8">
                {/* Lines connecting departments under CMO and CTO */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-400"></div>
                <LineWithArrow orientation="horizontal" />
                {/* Departments under CMO */}
                <div className="flex flex-col items-center">
                    <EmployeeCard name="Sales" position="" color="purple" image="" />
                    <LineWithArrow orientation="vertical" />
                    <EmployeeCard name="Marketing" position="" color="purple" image="" />
                    <LineWithArrow orientation="vertical" />
                </div>
                {/* Departments under CTO */}
                <div className="flex flex-col items-center">
                    <EmployeeCard name="Development" position="" color="teal" image="" />
                    <LineWithArrow orientation="vertical" />
                    <EmployeeCard name="UI/UX Design" position="" color="teal" image="" />
                    <LineWithArrow orientation="vertical" />
                </div>
            </div>
        </div>
    );
};

export default Organogram;

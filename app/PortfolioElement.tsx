import React from 'react';

interface PortfolioElementProps {
    title: string;
    description: string;
}

const PortfolioElement: React.FC<PortfolioElementProps> = ({ title, description }) => (
    <div className="portofolio-element flex items-center border my-4 p-4 px-5 cursor-pointer hover:bg-accent hover:text-background ease-in-out duration-200">
        <div className="col">
            <div className="text-xl">{title}</div>
            {description}
        </div>
        <div className="col pl-7 mb-1 text-4xl font-extralight">
            {">"}
        </div>
    </div>
);

export default PortfolioElement;
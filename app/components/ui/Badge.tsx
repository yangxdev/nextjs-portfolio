import React from "react";

interface BadgeProps {
    bgColor: string;
    label: string;
    blackText?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ bgColor, label, blackText }) => (
    <div className={`badge rounded-full w-fit font-semibold px-3 text-sm py-1 text-[#fdfdfd] ${blackText ? "text-[#0f0f0f]" : "text-[#fdfdfd]"}`} style={{ backgroundColor: bgColor }}>
        {label}
    </div>
);

export default Badge;

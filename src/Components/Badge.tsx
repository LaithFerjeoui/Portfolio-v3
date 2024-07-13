import React from 'react';

interface BadgeProps {
    type: boolean;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
    const bgColor = type ? 'bg-green-500/10' : 'bg-blue-400/10';
    const textColor = type ? 'text-green-400' : 'text-blue-400';
    const ringColor = type ? 'ring-green-500/20' : 'ring-blue-400/30';
    const text = type ? 'FullStack' : 'FrontEnd';


    return (
        <span className={`inline-flex items-center rounded-md ${bgColor} px-2 py-1 text-xs font-medium ${textColor} ring-1 ring-inset ${ringColor}`}>
            {text}
        </span>
    );
};

export default Badge;


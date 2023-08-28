import React from 'react';

interface TechnologyProps {
    className?: string;
}

const Technology: React.FC<TechnologyProps> = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
            <g fill="none">
                <path opacity=".2" d="M3 20h18V8H3v12zm6-10l7 4-7 4v-8z" fill="#111827"></path>
                <path
                    d="M9 10v8l7-4-7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"
                    fill="#111827"
                ></path>
            </g>
        </svg>
    );
};

export default Technology;

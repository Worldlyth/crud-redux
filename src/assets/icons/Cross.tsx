import React, { memo, FC } from 'react';

interface CrossProps extends React.SVGProps<SVGElement> {}

const Cross: FC<CrossProps> = ({ width, height, fill }) => {
    return (
        <svg width={width} height={height} viewBox='0 0 20 20' fill={fill} xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.9394 10.0001L2.46973 3.53039L3.53039 2.46973L10.0001 8.9394L16.4697 2.46973L17.5304 3.53039L11.0607 10.0001L17.5304 16.4697L16.4697 17.5304L10.0001 11.0607L3.53039 17.5304L2.46973 16.4697L8.9394 10.0001Z'
            />
        </svg>
    );
};

export default memo(Cross);

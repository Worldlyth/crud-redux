import React, { memo, FC, useState } from 'react';
import { Description, Button } from './styled';

interface ProductCardDescriptionProps {
    text: string;
    maxLength: number;
}

type DescriptionState = {
    sliced: string;
    full: string;
};

const ProductCardDescription: FC<ProductCardDescriptionProps> = ({ text, maxLength }) => {
    const [isFullDescription, setIsFullDescription] = useState<boolean>(false);
    const [description] = useState<DescriptionState>({
        sliced: text.slice(0, 150),
        full: text,
    });

    const formatedDescription = isFullDescription ? description.full : `${description.sliced}...`;
    const buttonText = isFullDescription ? 'Hide details' : 'Show details';

    return (
        <Description>
            <span>{formatedDescription}</span>
            {description.full.length > maxLength && (
                <Button onClick={() => setIsFullDescription(!isFullDescription)}>{buttonText}</Button>
            )}
        </Description>
    );
};

export default memo(ProductCardDescription);

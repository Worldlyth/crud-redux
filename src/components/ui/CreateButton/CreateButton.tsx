import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './styled';

interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CreateButton: FC<CreateButtonProps> = props => {
    return <Button {...props}>+</Button>;
};

export default CreateButton;

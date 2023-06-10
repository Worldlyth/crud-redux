import { memo, FC, useRef, useEffect } from 'react';
import Cross from '../../../assets/icons/Cross';
import { ModalClose, ModalContent, ModalTitle, ModalWrapper } from './styled';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal: FC<ModalProps> = ({ visible, onClose, children, title }) => {
    const childrenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const detectClickOutside = (event: MouseEvent) => {
            if (childrenRef.current && !childrenRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (visible) {
            document.addEventListener('mousedown', detectClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', detectClickOutside);
        };
    }, [onClose, visible]);

    return (
        <ModalWrapper style={{ display: visible ? 'flex' : 'none' }}>
            <ModalContent ref={childrenRef}>
                <ModalClose onClick={onClose}>
                    <Cross fill='white' width={30} height={30} />
                </ModalClose>
                <ModalTitle>{title}</ModalTitle>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default memo(Modal);

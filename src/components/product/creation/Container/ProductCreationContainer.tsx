import React, { memo, FC, useState } from 'react';
import CreateButton from '../../../ui/CreateButton/CreateButton';

import Modal from '../../../ux/Modal/Modal';
import ProductCreationForm from '../form/ProductCreationForm';

interface ProductCreationContainerProps {}

const ProductCreationContainer: FC<ProductCreationContainerProps> = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const onClose = () => {
        setVisible(false);
    };

    const onOpen = (e: React.MouseEvent) => {
        setVisible(true);
    };

    return (
        <>
            <CreateButton onClick={onOpen} />
            <Modal visible={visible} onClose={onClose} title='Create Product'>
                <ProductCreationForm onModalClose={onClose}/>
            </Modal>
        </>
    );
};

export default memo(ProductCreationContainer);

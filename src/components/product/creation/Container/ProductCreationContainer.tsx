import React, { memo, FC, useState } from 'react';
import Button from '../../../ui/Button/Button';
import CreateButton from '../../../ui/CreateButton/CreateButton';
import Input from '../../../ui/Input/Input';
import TextArea from '../../../ui/TextArea/TextArea';
import Modal from '../../../ux/Modal/Modal';

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
        <div>
            <CreateButton onClick={onOpen} />
            <Modal visible={visible} onClose={onClose} title='Create Product'>
                <Input
                    label='Product name'
                    placeholder='Type product name'
                    className='.input {
                    display: none;
                }'
                />
                <TextArea label='Product description' placeholder='Type product description' rows={8} />
                <Button>Create</Button>
            </Modal>
        </div>
    );
};

export default memo(ProductCreationContainer);

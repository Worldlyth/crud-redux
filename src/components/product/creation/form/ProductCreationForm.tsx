import React, { memo, FC, useRef, useState, useEffect, useCallback } from 'react';
import Input from '../../../ui/Input/Input';
import TextArea from '../../../ui/TextArea/TextArea';
import Button from '../../../ui/Button/Button';
import { createProductAction } from '../../../../store/product/product.slice';
import { useDispatch } from 'react-redux';

interface ProductCreationFormProps {
    onModalClose: () => void;
}

const ProductCreationForm: FC<ProductCreationFormProps> = ({ onModalClose }) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [validationMessage, setValidationMessage] = useState({
        title: ' ',
        description: ' ',
    });
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value);
    };

    const dispatch = useDispatch();

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const validate = (field: string, value: string) => {
            let message = '';
            switch (field) {
                case 'title':
                    if (value.length < 3) {
                        message = 'Title must be at least 3 characters';
                    }
                    if (value.length === 0) {
                        message = 'Title is required';
                    }
                    break;
                case 'description':
                    if (value.length < 10) {
                        message = 'Description must be at least 10 characters';
                    }
                    if (value.length === 0) {
                        message = 'Description is required';
                    }
                    break;
            }
            return message;
        };

        const validateForm = () => {
            const titleMessage = validate('title', title);
            const descriptionMessage = validate('description', description);
            setValidationMessage({
                title: titleMessage,
                description: descriptionMessage,
            });
            return !(titleMessage || descriptionMessage);
        };

        setIsValid(validateForm());
    }, [title, description]);

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isValid) {
                dispatch(
                    createProductAction({
                        title,
                        description,
                        id: Date.now(),
                        category: '',
                        image: '',
                        price: 10,
                        rating: {
                            rate: 0,
                            count: 0,
                        },
                    })
                );
                setTitle('');
                setDescription('');
                onModalClose();
            }
        },
        [isValid, dispatch, title, description, onModalClose]
    );

    return (
        <form onSubmit={onSubmit} ref={formRef}>
            <Input
                name='title'
                label='Product Title'
                message={validationMessage.title}
                placeholder='Type product Title'
                value={title}
                onChange={onTitleChange}
            />
            <TextArea
                label='Product description'
                placeholder='Type product description'
                rows={8}
                message={validationMessage.description}
                name='description'
                value={description}
                onChange={onDescriptionChange}
            />
            <Button type='submit'>Create</Button>
        </form>
    );
};

export default memo(ProductCreationForm);

// usePasswordGenerator.ts
import { useState } from 'react';

interface Options {
    length: number;
    useUppercase: boolean;
    useLowercase: boolean;
    useNumbers: boolean;
    useSymbols: boolean;
}

function usePasswordGenerator() {
    const [password, setPassword] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [options, setOptions] = useState<Options>({
        length: 12,
        useUppercase: true,
        useLowercase: true,
        useNumbers: true,
        useSymbols: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value, type, checked } = event.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [id]: type === 'checkbox' ? checked : parseInt(value, 10),
        }));
    };

    const generatePassword = (): void => {
        const { length, useUppercase, useLowercase, useNumbers, useSymbols } = options;
        let charset = '';
        if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (useNumbers) charset += '0123456789';
        if (useSymbols) charset += '!@#$%^&*';

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(newPassword);
    };

    const copyPassword = (): void => {
        if (password) {
            navigator.clipboard.writeText(password);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 1000);
        }
    };

    return {
        password,
        showModal,
        options,
        handleChange,
        generatePassword,
        copyPassword,
    };
}

export default usePasswordGenerator;

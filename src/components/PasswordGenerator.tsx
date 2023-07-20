// PasswordGenerator.tsx
import React from 'react';
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const PasswordGenerator: React.FC = () => {
    const {
        password,
        showModal,
        options,
        handleChange,
        generatePassword,
        copyPassword,
    } = usePasswordGenerator();

    return (
        <div className='container mx-auto max-w-sm p-4'>
            <h2 className='text-2xl font-bold mb-4'>Password Generator</h2>
            <div className='mb-4'>
                <span className='bg-gray-200 p-2 rounded-md mr-2'>{password}</span>
                <button
                    className='btn bg-blue-500 text-white'
                    title='Copy'
                    onClick={copyPassword}
                >
                    Copy
                </button>
            </div>
            <div className={`modal ${showModal ? 'show' : ''}`}>
                <div className='modal-content'>
                    Password copied!
                </div>
            </div>
            <div className='options'>
                <div className='option'>
                    <label>Length</label>
                    <input
                        type='number'
                        id='length'
                        min='4'
                        max='20'
                        value={options.length}
                        onChange={handleChange}
                        className='border border-gray-300 p-2 rounded-md mb-2'
                    />
                </div>
                <div className='option'>
                    <label>A-Z</label>
                    <input
                        type='checkbox'
                        id='useUppercase'
                        checked={options.useUppercase}
                        onChange={handleChange}
                    />
                </div>
                <div className='option'>
                    <label>a-z</label>
                    <input
                        type='checkbox'
                        id='useLowercase'
                        checked={options.useLowercase}
                        onChange={handleChange}
                    />
                </div>
                <div className='option'>
                    <label>0-9</label>
                    <input
                        type='checkbox'
                        id='useNumbers'
                        checked={options.useNumbers}
                        onChange={handleChange}
                    />
                </div>
                <div className='option'>
                    <label>!@#$%^&*</label>
                    <input
                        type='checkbox'
                        id='useSymbols'
                        checked={options.useSymbols}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button
                className='btn bg-green-500 text-white mt-4'
                onClick={generatePassword}
            >
                Generate Password
            </button>
        </div>
    );
};

export default PasswordGenerator;

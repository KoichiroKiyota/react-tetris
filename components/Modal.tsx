
import React from 'react';

interface ModalProps {
    title: string;
    buttonText: string;
    onButtonClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, buttonText, onButtonClick }) => {
    return (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 text-center p-4">
             <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-indigo-500">
                <h2 className="text-4xl font-bold text-indigo-400 mb-4">{title}</h2>
                <button
                    onClick={onButtonClick}
                    className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg transition-colors text-lg"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Modal;

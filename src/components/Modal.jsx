import React from "react";

export default function Modal({ open, onClose, children }) {
    // if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 w-full max-w-md z-10">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                    onClick={onClose}
                >
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}

"use client";

import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="mb-4 text-red-500" onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;

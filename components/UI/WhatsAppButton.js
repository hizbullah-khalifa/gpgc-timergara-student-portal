"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// ─── CHANGE THIS to your actual WhatsApp number ───────────────
// Format: country code + number, no + or spaces
// Pakistan: 92 + your 10-digit number (without leading 0)
// Example: 923001234567
const WHATSAPP_NUMBER = "92329919001";
const WHATSAPP_MESSAGE = "Assalam-o-Alaikum! I need help with GPGC Portal 👋";
// ─────────────────────────────────────────────────────────────

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3 max-w-[210px] animate-fade-in">
          {/* Close tooltip */}
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <IoClose size={12} className="text-gray-600" />
          </button>

          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />

          <p className="text-xs font-semibold text-gray-800">Need help? 👋</p>
          <p className="text-xs text-gray-500 mt-0.5">
            Chat with us on WhatsApp!
          </p>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

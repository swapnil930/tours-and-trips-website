import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppBtn = () => {
  return (
    <div>
      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919834559696?text=Hi%20I%20want%20more%20information%20about%20tour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-yellow-400 p-3 rounded-full shadow-xl hover:scale-105 transition">
            <FaWhatsapp size={35} className="text-green-500 p-1 rounded-full bg-white text-xl" />
          </button>
        </a>
      </div>

    </div>
  )
}

export default WhatsAppBtn

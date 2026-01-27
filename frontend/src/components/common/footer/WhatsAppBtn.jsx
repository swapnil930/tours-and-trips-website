import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppBtn = () => {
  return (
    <div>
       {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-yellow-400 p-4 rounded-full shadow-xl">
          <FaWhatsapp className="text-black" />
        </button>
      </div>
    </div>
  )
}

export default WhatsAppBtn

import React from 'react'
import { FaDiscourse } from 'react-icons/fa';

export default function NavbarLogin() {
  return (
      <>
          <div className="bg-slate-900 relative">
              <h2 className="text-3xl capitalize font-bold text-yellow-300 text-center py-2">Welcome to application Corsaty</h2>
              <FaDiscourse size={22} color="orange" className="absolute right-4 top-4 animate-spin" />
          </div>
      </>
  );
}

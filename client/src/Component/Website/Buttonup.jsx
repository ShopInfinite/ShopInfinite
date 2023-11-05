import React from 'react'

function Buttonup() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <div>
              <button
        className="fixed bottom-10 right-10 p-4 rounded-full bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
        onClick={handleScrollToTop}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button> 
    </div>
  )
}

export default Buttonup
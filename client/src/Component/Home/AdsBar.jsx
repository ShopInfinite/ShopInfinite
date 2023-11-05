import React from 'react';
import '../../App.css';

function AdsBar() {


  return (
<div class="fixed inset-x-0 top-0 z-50">
    <div class="bg-orange-400">
        <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                <div class="flex flex-1 items-center lg:mr-3 lg:flex-none">
                    <p class="ml-3 text-center font-medium text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" class="mr-2 hidden h-6 w-6 lg:inline">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                            </path>
                        </svg>Enjoy a 50% &nbsp;
                        <span class="font-semibold">discount on</span> a variety of &nbsp;
                        <span class="font-black">fabulous</span> clothing! 
                    </p>
                </div>
                <div class="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto"><a
                        class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm hover:bg-teal-50"
                        href="#pricing">Buy now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    
  );
}

export default AdsBar;

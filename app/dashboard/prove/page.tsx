import { Metadata } from 'next';
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: 'Customers',
  };

export default function Page(){
    return (
      <main>
        <h1 className={`${lusitana.className} text-2xl`}>Test Page</h1>
        
        <div className="relative rounded-xl h-auto pt-4">
        <h2 className={`${lusitana.className} text-2xl mt-4 mb-2 font-bold text-center`}>--- FLEX EXAMPLE ---</h2>
          <div className="flex flex-row space-x-4 h-24 rounded-lg items-center bg-blue-500 px-4 text-sm font-bold text-white transition-colors">
            <p className='p-4'>Flex Base</p>
            <div className="flex basis-1/4 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex basis-1/4 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex basis-1/2 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>

          <div className="flex flex-row hover:flex-row-reverse space-x-4 h-24 rounded-lg items-center bg-blue-500 px-4 mt-4 text-sm font-bold text-white transition-colors">
            <p className='p-4'>Flex Row Direction</p>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>

          <div className="flex flex-col hover:flex-col-reverse space-y-4 h-auto rounded-lg items-center bg-blue-500 mt-4 pb-4 text-sm font-bold text-white transition-colors">
            <p className='pt-4'>Flex Coloumn Direction</p>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>
          
          {/* da capire meglio la parte del felx-wrap*/}
          <div className="flex flex-nowrap hover:flex-wrap space-x-24 h-auto rounded-lg items-center bg-blue-500 mt-4 p-4 text-sm font-bold text-white transition-colors">
            <p className='pt-4 pr-4 pl-4'>Flex Wrap Direction</p>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex w-96 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>

          {/* mostrare a michele perché non sirtringe il componente*/}
          <div className="relative">
            <div className="mt-4 -mb-3">
              <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 mr-0">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] bg-right-top"></div>
                <div className="relative rounded-xl overflow-auto p-8">
                  <div className="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-pink rounded-lg">
                    <div className="p-4 grow rounded-lg flex items-center justify-center bg-pink-300 dark:bg-pink-800 dark:text-pink-400">01</div>
                    <div className="shrink-0 w-14 h-14 grow-0 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">02</div>
                    <div className="p-4 grow rounded-lg hidden md:flex items-center justify-center bg-pink-300 dark:bg-pink-800 dark:text-pink-400">03</div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"> </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none">
              <div className="pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize transform-none select-none touch-pan-y" draggable="false">
                <div className="w-1.5 h-8 bg-slate-500/60 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* il mouseHover non funziona*/}
          <div className="flex justify-between space-x-4 h-24 rounded-lg items-center bg-blue-500 mt-8 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first p-4'>Order</p>
            <div className="flex order-last w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>

        </div>
        
        <div className="relative rounded-xl h-auto pt-4"> 
          <h2 className={`${lusitana.className} text-2xl mt-8 font-bold text-center`}>--- GRID EXAMPLE ---</h2>

          <div className="grid grid-cols-3 gap-3 h-auto space-x-4 rounded-lg items-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4'>Order</p>
            <div className="w-64 h-16 rounded-lg bg-orange-600 justify-center items-center ">01</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600 justify-center items-center">02</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600 justify-center items-center">03</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600 justify-center items-center">04</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600 justify-center items-center">05</div>
          </div>
        </div>
      </main>
    );
}
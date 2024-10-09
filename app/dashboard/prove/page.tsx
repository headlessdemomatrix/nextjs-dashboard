import { Metadata } from 'next';
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: 'Customers',
  };

export default function Page(){
    return (
      <main>
        <h1 className={`${lusitana.className} text-2xl`}>Test Page</h1>
        {/* ---------------------------Play with padding/margin-----------------------------------------------*/}
        <div className="relative rounded-xl h-auto pt-4"> 
          <h2 className={`${lusitana.className} text-2xl mt-8 font-bold text-center`}>--- PLAY WITH PADDING / MARGIN ---</h2>
          <div className="flex flex-row h-auto rounded-lg items-center bg-sky-600 mt-4 p-4 text-sm font-bold text-white transition-colors">
            <div className="flex flex-row justify-center items-center space-x-64 rounded-lg bg-sky-500 w-72 h-72 mr-4 font-mono text-white text-sm font-bold leading-6">
              <div className="flex justify-center items-center w-48 h-48 self-left rounded-lg bg-sky-400">
                <div className='w-16 h-16 rounded-lg bg-sky-300'></div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-64 rounded-lg bg-sky-500 w-72 h-72 mr-4 font-mono text-white text-sm font-bold leading-6">
              <div className="w-48 h-48 self-center rounded-lg bg-sky-400">
                <div className='pl-16 w-16 h-16 rounded-lg bg-sky-300 m-10'></div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-64 rounded-lg bg-sky-500 w-72 h-72 mr-4 font-mono text-white text-sm font-bold leading-6">
              <div className="w-48 h-48 self-right rounded-lg bg-sky-400">
                <div className='pl-16 w-16 h-16 rounded-lg bg-sky-300 mt-20'></div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-64 rounded-lg bg-sky-500 w-72 h-72 mr-4 font-mono text-white text-sm font-bold leading-6">
              <div className="w-48 h-48 self-right rounded-lg bg-sky-400 pl-32">
                <div className='pl-16 w-16 h-16 rounded-lg bg-sky-300 mt-20'></div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-64 rounded-lg bg-sky-500 w-72 h-72 mr-4 font-mono text-white text-sm font-bold leading-6">
              <div className="w-48 h-48 self-center rounded-lg bg-sky-400 pl-12 ho">
                <div className='pl-16 w-16 h-16 rounded-lg bg-sky-300 m-10'></div>
              </div>
            </div>
          </div>        
        </div>


        {/* ---------------------------Grid Example-----------------------------------------------*/}
        <div className="relative rounded-xl h-auto pt-4"> 
          <h2 className={`${lusitana.className} text-2xl mt-8 font-bold text-center`}>--- GRID EXAMPLE ---</h2>
          {/* Grid Cols*/}
          <div className="grid grid-cols-3 gap-3 h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4'>Grid Coloumns</p>
            <div className="w-64 h-16 rounded-lg bg-orange-600">01</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600">02</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600">03</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600">04</div>
            <div className="w-64 h-16 rounded-lg bg-orange-600">05</div>
          </div>
          {/* Grid Subgrid*/}
          <div className="grid grid-cols-4 gap-4 h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4'>Grid Subgrid</p>
            <div className="w-32 h-16 rounded-lg bg-orange-600">01</div>
            <div className="w-32 h-16 rounded-lg bg-orange-600">02</div>
            <div className="w-32 h-16 rounded-lg bg-orange-600">03</div>
            <div className="w-32 h-16 rounded-lg bg-orange-600">04</div>
            {/* Subgrid-1*/}
            <div className="grid grid-cols-subgrid gap-2 col-span-2 w-auto h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-200 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
              <div className=" w-32 h-16 rounded-lg bg-orange-600">05</div>
              <div className=" w-32 h-16 rounded-lg bg-orange-600">06</div>
            </div>
            {/* Subgrid-2*/}
            <div className="grid grid-cols-subgrid gap-1 col-span-1 w-auto h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-200 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
              <div className="w-32 h-16 rounded-lg bg-orange-900"></div>
            </div>
            {/* Subgrid-3*/}
            <div className="grid grid-cols-subgrid gap-2 col-span-2 w-auto h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-200 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
              <div className="w-32 h-16 rounded-lg bg-orange-600">07</div>
              <div className="w-32 h-16 rounded-lg bg-orange-600">08</div>
            </div>
          </div>

          {/* Col: Span / Start-End*/}
          <div className="grid grid-cols-4 gap-4 h-auto space-x-4 rounded-lg justify-center text-center items-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4'>Coloumns: Span / Start-End</p>
            <div className="col-span-2 w-auto h-16 rounded-lg bg-orange-600">01 - SPAN-2</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">02</div>
            <div className="col-span-3 w-auto h-16 rounded-lg bg-orange-600">03 - SPAN-3</div>  
            <div className="col-start-2 w-auto h-16 rounded-lg bg-orange-600">04 - START-2</div>
            <div className="col-start-4 w-auto h-16 rounded-lg bg-orange-600">05 - START-4</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">06</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">07</div>
            <div className="col-span-2 hover:col-span-1 w-auto h-16 rounded-lg bg-orange-600">08 - MOUSE HOVER FOR SPAN-1</div>
          </div>

          {/* Grid Rows*/}
          <div className="grid grid-rows-2 hover:grid-rows-4 grid-flow-col gap-4 space-x-4 rounded-lg text-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4 text-center'>Grid Rows</p>
            <div className="w-auto h-16 rounded-lg bg-orange-600">01</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">02</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">03</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">04</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">05</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">06</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">07</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">08</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">09</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">10</div>
          </div>

          {/* Grid Subrows*/}
          <div className="relative grid grid-rows-5 grid-flow-col gap-3 space-x-4 rounded-lg text-center bg-orange-400 mt-8 py-4 px-4 text-sm font-bold text-white transition-colors">
            <p className='order-first w-auto p-4 text-center'>Grid Subrows</p>
            <div className="w-auto h-16 rounded-lg bg-orange-600">01</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">02</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">03</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">04</div>
            <div className='grid grid-rows-subgrid gap-2 row-span-3 rounded-lg bg-orange-900 justify-center'>
              <div className="row-start-2 w-64 h-16 rounded-lg bg-orange-600">05 - SPAN-3 / START-2</div>
            </div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">06</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">07</div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">08</div>
            <div className='grid grid-rows-subgrid gap-2 row-span-3 rounded-lg bg-orange-900 justify-center'>
              <div className="row-start-2 w-64 h-16 rounded-lg bg-orange-600">09 - SPAN-3 / START-2</div>
            </div>
            <div className="w-auto h-16 rounded-lg bg-orange-600">10</div>
          </div>
        </div>


        {/* ---------------------------Flex Example-----------------------------------------------*/}
        <div className="relative rounded-xl h-auto pt-4">
        <h2 className={`${lusitana.className} text-2xl mt-4 mb-2 font-bold text-center`}>--- FLEX EXAMPLE ---</h2>
          <div className="flex flex-row space-x-4 h-24 rounded-lg items-center bg-blue-500 px-4 text-sm font-bold text-white transition-colors">
            <p className='p-4'>Flex Base</p>
            <div className="flex basis-1/4 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex basis-1/4 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex basis-1/2 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>
          {/* Flex Row Direction*/}
          <div className="flex flex-row hover:flex-row-reverse space-x-4 h-24 rounded-lg items-center bg-blue-500 px-4 mt-4 text-sm font-bold text-white transition-colors">
            <p className='p-4'>Flex Row Direction</p>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">01</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">02</div>
            <div className="flex w-16 h-16 rounded-lg bg-sky-400 justify-center items-center">03</div>
          </div>
          {/* Flex Coloumn Direction*/}
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
      </main>
    );
}
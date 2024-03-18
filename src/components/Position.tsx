import Icon from "./Icon";

export default function Position() {
   return (
      <div>
         <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-300">
            Position
         </label>
         <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
               <label htmlFor="position" className="sr-only">
                  position
               </label>
               <select
                  id="position"
                  name="position"
                  autoComplete="off"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-2 pr-1 text-gray-200 focus:ring-0 focus:ring-transparent sm:text-sm focus:outline-none"
               >
                  <option className="bg-[#242529]">CEO</option>
                  <option className="bg-[#242529]">Manager</option>
                  <option className="bg-[#242529]">Supervisor</option>
                  <option className="bg-[#242529]">Other</option>
               </select>
            </div>
            <input
               type="text"
               name="position"
               id="position"
               autoComplete="off"
               className="block w-full rounded-md border-0 pl-32 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
            />
            <Icon />
         </div>
      </div>
   );
}

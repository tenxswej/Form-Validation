import Icon from "./Icon";

export default function Department() {
   return (
      <div>
         <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-300">
            Department
         </label>
         <div className="relative mt-2.5">
            <input
               type="text"
               name="department"
               id="department"
               autoComplete="off"
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
            />
            <Icon />
         </div>
      </div>
   );
}

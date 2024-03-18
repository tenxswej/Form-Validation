import Icon from "./Icon";

export default function Input({ props, condition, message }: any) {
   return (
      <div>
         <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-300">
            Full name <span className="text-[.7rem] text-red-400 tracking-wider">{condition ? null : <i>{message && "*" + message}</i>}</span>
         </label>
         <div className="mt-2.5 relative">
            <input
               {...props}
               required
               type="text"
               name="first-name"
               autoComplete="off"
               className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  condition ? "" : "underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
               } `}
            />
            {condition && <Icon />}
         </div>
      </div>
   );
}

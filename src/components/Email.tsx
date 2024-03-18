import Icon from "./Icon";

export default function Email({ state, EmailProps }: any) {
   return (
      <div className="sm:col-span-2">
         <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">
            Email{" "}
            <span className="text-[.7rem] text-red-400 tracking-wider">
               {state.isValidEmail ? null : <i>{state.emailErrorMessage && "*" + state.emailErrorMessage}</i>}
            </span>
         </label>
         <div className="relative mt-2.5">
            <input
               {...EmailProps}
               type="email"
               name="email"
               id="email"
               autoComplete="off"
               className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  state.isValidEmail ? "" : "underline decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
               }`}
            />
            {state.isValidEmail && <Icon />}
         </div>
      </div>
   );
}

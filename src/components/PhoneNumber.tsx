import Icon from "./Icon";

export default function PhoneNumber({ state, PhoneNumberProps }: any) {
   return (
      <div className="sm:col-span-2">
         <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-300">
            Phone Number{" "}
            <span className="text-[.7rem] text-red-400 tracking-wider">
               {state.isValidPhoneNumber ? null : <i>{state.phoneNumberErrorMessage && "*" + state.phoneNumberErrorMessage}</i>}
            </span>
         </label>
         <div className="relative mt-2.5">
            <input
               {...PhoneNumberProps}
               type="tel"
               name="phone-number"
               id="phone-number"
               autoComplete="off"
               className="block w-full rounded-md border-0  px-4 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {state.isValidPhoneNumber && <Icon />}
         </div>
      </div>
   );
}

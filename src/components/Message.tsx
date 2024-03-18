import Icon from "./Icon";

export default function Message({ state, messageProps}: any) {
   return (
      <div className="sm:col-span-2">
         <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">
            Message <span className="text-gray-400">(Optional)</span>{" "}
            <span className="text-[.7rem] text-red-400 tracking-wider">
               {state.isValidMessage ? null : <i>{state.messageErrorMessage && "*" + state.messageErrorMessage}</i>}
            </span>
         </label>
         <div className="relative mt-2.5">
            <textarea
               {...messageProps}
               name="message"
               id="message"
               rows={4}
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {state.isValidMessage && <Icon />}
         </div>
      </div>
   );
}

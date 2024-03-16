import Icon from "./Icon";
export default function ContactSection() {
   return (
      <div className="isolate sm:w-full">
         <div className="mx-auto max-w-2xl text-center pb-10">
            <h2 className="text-xl font-bold tracking-tight text-gray-200 sm:text-2xl ">Software Demo Request</h2>
         </div>
         <form action="#" method="POST" className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-start">
               <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-300">
                     Full name{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider">
                        <i>*Please fill a valid name</i>
                     </span>
                  </label>
                  <div className="mt-2.5 relative">
                     <input
                        type="text"
                        name="first-name"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
                     />
                     <Icon />
                  </div>
               </div>
               <div>
                  <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-300">
                     Department Position{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider ">
                        <i>*Invalid Department </i>
                     </span>
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
                           className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-1 text-gray-200 focus:ring-0 focus:ring-transparent sm:text-sm focus:outline-none"
                        >
                           <option className="bg-[#242529]">CEO</option>
                           <option className="bg-[#242529]">Manager</option>
                           <option className="bg-[#242529]">Supervisor</option>
                           <option className="bg-[#242529]">Other</option>
                        </select>
                     </div>
                     <input
                        type="text"
                        name="department"
                        id="department"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 pl-32 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
                     />
                     <Icon />
                  </div>
               </div>
               <div className="sm:col-span-2">
                  <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-300">
                     Organization
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
               <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">
                     Email{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider">
                        <i>*Invalid Email </i>
                     </span>
                  </label>
                  <div className="relative mt-2.5">
                     <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
                     />
                     <Icon />
                  </div>
               </div>
               <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-300">
                     Phone number{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider">
                        <i>*Please fill a valid phone number</i>
                     </span>
                  </label>
                  <div className="relative mt-2.5">
                     <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="off"
                        className="block w-full rounded-md border-0  px-4 py-2 pl-28 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
                     />
                     <Icon />
                  </div>
               </div>
               <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">
                     Message{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider">
                        <i>*Message cannot be longer than 100 words</i>
                     </span>
                  </label>
                  <div className="relative mt-2.5">
                     <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 underline  decoration-red-600 decoration-2 decoration-wavy underline-offset-2"
                        defaultValue={""}
                     />
                     <Icon />
                  </div>
               </div>
               <div className="col-span-full ">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-300">
                     Cover photo{" "}
                     <span className="text-[.7rem] text-red-400 tracking-wider">
                        <i>*Only jpg, png format are allowed </i>
                     </span>
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300/45 px-6 py-10">
                     <div className="text-center">
                        📸
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                           <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-50 "
                           >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                           </label>
                           <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-10">
               <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Let's talk
               </button>
            </div>
         </form>
      </div>
   );
}

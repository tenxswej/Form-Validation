export default function FileUpload() {
   return (
      <div className="col-span-full ">
         <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-300">
            Staff Id Image{" "}
            <span className="text-[.7rem] text-red-400 tracking-wider">
               <i>*Only jpg, png format are allowed </i>
            </span>
         </label>
         <div className="group mt-2 flex justify-center rounded-lg border border-dashed border-gray-300/45 px-6 py-10 hover:border-gray-200 cursor-pointer transition-colors duration-150">
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
                  <p className="pl-1 group-hover:text-indigo-100 duration-150">or drag and drop</p>
               </div>
               <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
         </div>
      </div>
   );
}

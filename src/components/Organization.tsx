import Icon from "./Icon";
import { COMPANIES } from "../utils/database";
import { Fragment } from "react/jsx-runtime";

export default function Organization({ orgProps, organization, organizationErrorMessage, isValidOrganization, dispatch }: any) {
   return (
      <div>
         <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-300">
            Organization{" "}
            <span className="text-[.7rem] text-red-400 tracking-wider ">
               <i>{organizationErrorMessage}</i>
            </span>
         </label>
         <div className="relative mt-2.5">
            <input
               {...orgProps}
               type="text"
               name="department"
               id="department"
               autoComplete="off"
               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {isValidOrganization && <Icon />}

            {organization.length <= 0 || isValidOrganization ? null : (
               <div className="absolute bg-gray-700 w-full mt-1 rounded-[inherit] px-2 z-[1000] text-xs">
                  {COMPANIES.filter((c) => c.toLowerCase().includes(organization.toLowerCase())).map((company, index) => (
                     <Fragment key={index}>
                        <p
                           onClick={() => {
                              dispatch({ type: "SET_ORG", payload: company });
                           }}
                           className="my-1 text-gray-300 hover:text-gray-100 h-full cursor-pointer"
                        >
                           {company}
                        </p>
                     </Fragment>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

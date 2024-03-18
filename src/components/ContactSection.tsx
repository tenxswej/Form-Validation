import Email from "./Email";
import FileUpload from "./FileUpload";
import FullName from "./FullName";
import Message from "./Message";
import Position from "./Position";
import Department from "./Department";
import PhoneNumber from "./PhoneNumber";
import Organization from "./Organization";
import useValidateForm from "../hooks/useValidateForm";

export default function ContactSection() {
   const {
      dispatch,
      state,
      NameProps,
      EmailProps,
      PhoneNumberProps,
      phoneNumberErrorMessage,
      messageProps,
      messageErrorMessage,
      orgProps,
      organization,
      organizationErrorMessage,
      isValidOrganization,
   } = useValidateForm();

   return (
      <div className="isolate sm:w-full rounded-md">
         <form action="#" method="POST" className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-start">
               <FullName state={state} NameProps={NameProps} />
               <Organization
                  orgProps={orgProps}
                  organization={organization}
                  organizationErrorMessage={organizationErrorMessage}
                  isValidOrganization={isValidOrganization}
                  dispatch={dispatch}
               />
               <Position />
               <Department />
               <Email state={state} EmailProps={EmailProps} />
               <PhoneNumber state={state} PhoneNumberProps={PhoneNumberProps} phoneNumberErrorMessage={phoneNumberErrorMessage} />
               <Message state={state} messageProps={messageProps} messageErrorMessage={messageErrorMessage} />
               <FileUpload />
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

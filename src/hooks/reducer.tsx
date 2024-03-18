interface InitialState {
   InputFocus: string | null;

   fullName: string;
   isValidFullName: boolean;
   fullNameErrorMessage: string | null;

   organization: string;
   isValidOrganization: boolean;
   organizationErrorMessage: string | null;

   email: string;
   isValidEmail: boolean;
   emailErrorMessage: string | null;

   phoneNumber: string | null | number;
   isValidPhoneNumber: boolean;
   phoneNumberErrorMessage: string | null;

   message: string;
   isValidMessage: boolean;
   messageErrorMessage: string | null;

   file: File | null;
   isValidFile: File | boolean;
   fileErrorErrorMessage: string | null;
}
export const initialState: InitialState = {
   InputFocus: null,

   fullName: "",
   isValidFullName: false,
   fullNameErrorMessage: null,

   organization: "",
   isValidOrganization: false,
   organizationErrorMessage: null,

   email: "",
   isValidEmail: false,
   emailErrorMessage: null,

   phoneNumber: "",
   isValidPhoneNumber: false,
   phoneNumberErrorMessage: null,

   message: "",
   isValidMessage: false,
   messageErrorMessage: null,

   file: null,
   isValidFile: false,
   fileErrorErrorMessage: null,
};

type Action =
   | { type: "SET_NAME"; payload: string }
   | { type: "SET_VALID_NAME"; payload: boolean }
   | { type: "SET_NAME_ERROR_MESSAGE"; payload: string | null }
   | { type: "SET_ORG"; payload: string }
   | { type: "SET_VALID_ORG"; payload: boolean }
   | { type: "SET_ORG_ERROR_MESSAGE"; payload: string | null }
   | { type: "SET_EMAIL"; payload: string }
   | { type: "SET_VALID_EMAIL"; payload: boolean }
   | { type: "SET_EMAIL_ERROR_MESSAGE"; payload: string | null }
   | { type: "SET_PHONE_NUMBER"; payload: string }
   | { type: "SET_VALID_PHONE"; payload: boolean }
   | { type: "SET_PHONE_NUMBER_ERROR_MESSAGE"; payload: string | null }
   | { type: "SET_MESSAGE"; payload: string }
   | { type: "SET_VALID_MESSAGE"; payload: boolean }
   | { type: "SET_ERROR_MESSAGE"; payload: string | null }
   | { type: "SET_FILE"; payload: File | null }
   | { type: "SET_FOCUS"; payload: "fullName" | "email" | "department" | "message" | "phoneNumber"| "organization" | null };

export const reducer = (state: InitialState, action: Action): InitialState => {
   const { payload, type } = action;
   switch (type) {
      case "SET_NAME": {
         if (!/^\d+$/.test(payload)) {
            return { ...state, fullName: payload };
         } else {
            return { ...state };
         }
      }
      case "SET_VALID_NAME": {
         return { ...state, isValidFullName: payload };
      }
      case "SET_NAME_ERROR_MESSAGE":
         return { ...state, fullNameErrorMessage: payload };

      // Organization
      case "SET_ORG": {
         return { ...state, organization: payload };
      }
      case "SET_ORG_ERROR_MESSAGE":
         return { ...state, organizationErrorMessage: payload };

      case "SET_VALID_ORG":
         return { ...state, isValidOrganization: payload };

      // Email
      case "SET_EMAIL":
         return { ...state, email: payload };
      case "SET_VALID_EMAIL":
         return { ...state, isValidEmail: payload };
      case "SET_EMAIL_ERROR_MESSAGE":
         return { ...state, emailErrorMessage: payload };

      // Phone Number
      case "SET_PHONE_NUMBER": {
         if (state.phoneNumber !== "" && JSON.stringify(payload).length >= 14) return { ...state };
         if (/^\d+$/.test(payload) || payload === "") {
            return { ...state, phoneNumber: payload };
         } else {
            return { ...state };
         }
      }
      case "SET_VALID_PHONE":
         return { ...state, isValidPhoneNumber: payload };
      case "SET_PHONE_NUMBER_ERROR_MESSAGE":
         return { ...state, phoneNumberErrorMessage: payload };

      // Message
      case "SET_MESSAGE": {
         if (payload.length <= 10) {
            return { ...state, message: payload };
         } else {
            return { ...state };
         }
      }
      case "SET_ERROR_MESSAGE": {
         return { ...state, messageErrorMessage: payload };
      }
      case "SET_VALID_MESSAGE": {
         return { ...state, isValidMessage: payload };
      }

      // File
      case "SET_FILE":
         return { ...state, file: payload };
      case "SET_FOCUS":
         return { ...state, InputFocus: payload };

      default:
         return state;
   }
};

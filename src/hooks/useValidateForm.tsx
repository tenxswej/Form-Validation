import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { EMAIL_PATTERN } from "../utils/regex";
import { COMPANIES } from "../utils/database";

export default function useValidateForm() {
   const [state, dispatch] = useReducer(reducer, initialState);

   const {
      fullName,
      InputFocus,
      email,
      phoneNumber,
      message,
      phoneNumberErrorMessage,
      messageErrorMessage,
      organization,
      organizationErrorMessage,
      isValidOrganization,
   } = state;

   const onBlur = () => {
      dispatch({
         type: "SET_FOCUS",
         payload: null,
      });
   };

   const NameProps = {
      onChange: (e: any) => {
         dispatch({
            type: "SET_NAME",
            payload: e.target.value,
         });
      },
      onFocus: () => {
         dispatch({
            type: "SET_FOCUS",
            payload: "fullName",
         });
      },
      onBlur,
      value: fullName,
   };

   const EmailProps = {
      onChange: (e: any) => {
         dispatch({
            type: "SET_EMAIL",
            payload: e.target.value,
         });
      },
      onFocus: () => {
         dispatch({
            type: "SET_FOCUS",
            payload: "email",
         });
      },
      onBlur,
      value: email,
   };

   const PhoneNumberProps = {
      onChange: (e: any) => {
         dispatch({
            type: "SET_PHONE_NUMBER",
            payload: e.target.value,
         });
      },
      onFocus: () => {
         dispatch({
            type: "SET_FOCUS",
            payload: "phoneNumber",
         });
      },
      onBlur,
      value: phoneNumber,
   };

   const messageProps = {
      onChange: (e: any) => {
         dispatch({
            type: "SET_MESSAGE",
            payload: e.target.value,
         });
      },
      onFocus: () => {
         dispatch({
            type: "SET_FOCUS",
            payload: "message",
         });
      },
      onBlur,
      value: message,
   };

   const orgProps = {
      onChange: (e: any) => {
         dispatch({
            type: "SET_ORG",
            payload: e.target.value,
         });
      },
      onFocus: () => {
         dispatch({
            type: "SET_FOCUS",
            payload: "organization",
         });
      },
      onBlur,
      value: organization,
   };

   useEffect(() => {
      if (InputFocus === "fullName") {
         if (fullName.length <= 0) {
            dispatch({
               type: "SET_NAME_ERROR_MESSAGE",
               payload: "Name can not empty",
            });
            dispatch({
               type: "SET_VALID_NAME",
               payload: false,
            });
         } else if (fullName.length < 10 || !/\s/.test(fullName)) {
            dispatch({
               type: "SET_NAME_ERROR_MESSAGE",
               payload: "Please Provide Full Name",
            });
            dispatch({
               type: "SET_VALID_NAME",
               payload: false,
            });
         } else {
            dispatch({
               type: "SET_VALID_NAME",
               payload: true,
            });
         }
      }
   }, [fullName]);

   useEffect(() => {
      if (InputFocus === "email") {
         if (email.length <= 0) {
            dispatch({
               type: "SET_EMAIL_ERROR_MESSAGE",
               payload: "email can not empty",
            });
            dispatch({
               type: "SET_VALID_EMAIL",
               payload: false,
            });
         } else if (EMAIL_PATTERN.test(email)) {
            dispatch({
               type: "SET_EMAIL_ERROR_MESSAGE",
               payload: null,
            });
            dispatch({
               type: "SET_VALID_EMAIL",
               payload: true,
            });
         } else {
            dispatch({
               type: "SET_EMAIL_ERROR_MESSAGE",
               payload: "Invalid Email",
            });
         }
      }
   }, [email]);

   useEffect(() => {
      if (InputFocus === "message") {
         if (message.length >= 10) {
            dispatch({ type: "SET_ERROR_MESSAGE", payload: "Message cannot be longer than 100 words" });
         } else {
            dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
            dispatch({ type: "SET_VALID_MESSAGE", payload: true });
         }
      }
   }, [message]);

   useEffect(() => {
      if (InputFocus === "phoneNumber") {
         if (phoneNumber !== null && phoneNumber.toString().length <= 0) {
            dispatch({ type: "SET_PHONE_NUMBER_ERROR_MESSAGE", payload: "Phone number cannot be empty" });
            dispatch({ type: "SET_VALID_PHONE", payload: false });
         } else if (phoneNumber !== null && phoneNumber.toString().length < 11) {
            dispatch({ type: "SET_PHONE_NUMBER_ERROR_MESSAGE", payload: null });
            dispatch({ type: "SET_VALID_PHONE", payload: false });
         } else {
            dispatch({ type: "SET_PHONE_NUMBER_ERROR_MESSAGE", payload: null });
            dispatch({ type: "SET_VALID_PHONE", payload: true });
         }
      }
   }, [phoneNumber]);

   useEffect(() => {
      if (COMPANIES.findIndex((c) => c.toLowerCase() === organization.toLowerCase()) >= 0) {
         dispatch({ type: "SET_VALID_ORG", payload: true });
         dispatch({ type: "SET_ORG_ERROR_MESSAGE", payload: null });
      } else {
         if (InputFocus === "organization") {
            dispatch({ type: "SET_ORG_ERROR_MESSAGE", payload: "Company isn't in our database" });
            dispatch({ type: "SET_VALID_ORG", payload: false });

            if (organization === "") {
               dispatch({ type: "SET_ORG_ERROR_MESSAGE", payload: "Company name is required" });
               dispatch({ type: "SET_VALID_ORG", payload: false });
            }
         }
      }
   }, [organization]);

   useEffect(() => {
      if (InputFocus === "fullName") {
         dispatch({
            type: "SET_NAME_ERROR_MESSAGE",
            payload: null,
         });
      } else if (InputFocus === "email") {
         dispatch({
            type: "SET_EMAIL_ERROR_MESSAGE",
            payload: null,
         });
      } else if (InputFocus === "phoneNumber") {
         dispatch({
            type: "SET_PHONE_NUMBER_ERROR_MESSAGE",
            payload: null,
         });
      } else if (InputFocus === "organization") {
         dispatch({
            type: "SET_ORG_ERROR_MESSAGE",
            payload: null,
         });
      }
   }, [InputFocus]);

   return {
      dispatch,
      state,
      NameProps,
      EmailProps,
      PhoneNumberProps,
      phoneNumberErrorMessage,
      messageProps,
      messageErrorMessage,
      organization,
      orgProps,
      organizationErrorMessage,
      isValidOrganization,
   };
}

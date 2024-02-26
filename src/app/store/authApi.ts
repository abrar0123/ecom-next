import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    authSignup: builder.mutation({
      query: (data) => {
        return {
          url: "/api/users/signup",
          method: "POST",
          body: data.details,
        };
      },
    }),

    authLogin: builder.mutation({
      query: (data) => {
        console.log("details :", data.details);
        return {
          url: "/api/auth/signin",
          method: "POST",
          body: data.details,
        };
      },
    }),
  }),
});

export const { useAuthLoginMutation, useAuthSignupMutation } = authApi;

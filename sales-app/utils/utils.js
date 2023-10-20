import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const LoginUser = (email, password, router) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            //👇🏻 logs user's details
            console.log("User >>", user);
            successMessage("Authentication successful 🎉");
            router.push("/dashboard");
        })
        .catch((error) => {
            console.error(error);
            errorMessage("Incorrect Email/Password ❌");
        });
};

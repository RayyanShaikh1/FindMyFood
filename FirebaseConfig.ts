import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
//@ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqGuBj8sHXNdH6vQeVtXkn979LuC099I4",
  authDomain: "findmyfood-97348.firebaseapp.com",
  projectId: "findmyfood-97348",
  storageBucket: "findmyfood-97348.firebasestorage.app",
  messagingSenderId: "795981360891",
  appId: "1:795981360891:web:619ec6a0600837e4048a5e",
  measurementId: "G-RMXJG16K3F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

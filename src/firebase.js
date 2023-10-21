import initializeFirebase from "upload-json-mock-firebase";
import { data } from "./data.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZy6h2gjQgj7Sxz6tqoiRzOjCrS8iRAjE",
    authDomain: "proyecto-final-react-35eb2.firebaseapp.com",
    projectId: "proyecto-final-react-35eb2",
    storageBucket: "proyecto-final-react-35eb2.appspot.com",
    messagingSenderId: "1037482989951",
    appId: "1:1037482989951:web:9a31e35758445f0925e24a"
  };

  const collection = "products";

  const firebaseProducts = initializeFirebase(firebaseConfig, data, collection);

  const res = await firebaseProducts.upload();
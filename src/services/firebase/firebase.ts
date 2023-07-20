import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAFO9vcQCLDWA4qIpd1ntOlC4D5sllToM",
  authDomain: "portifolio-fd954.firebaseapp.com",
  projectId: "portifolio-fd954",
  storageBucket: "portifolio-fd954.appspot.com",
  messagingSenderId: "65760766878",
  appId: "1:65760766878:web:b0b6f29405b32ca358848f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db, app};

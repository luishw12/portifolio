import { addDoc, collection, } from 'firebase/firestore';
import { db } from './firebase';
import { toast } from 'react-toastify';

export async function saveContact({name, email, message}:any) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    })
    toast.success("Mensagem enviada com sucesso!")
  } catch(err:any) {
    toast.error(err.message)
  }
}
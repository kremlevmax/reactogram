import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, "images"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({
          id: doc.id,
          url: doc.data().downloadURL,
        });
      });
      setDocs(images);
    });
    return () => unsubscribe();
  }, []);
  return { docs };
};

export default useFirestore;

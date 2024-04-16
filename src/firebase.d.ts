import { Firestore } from 'firebase/firestore';

declare module '@/firebase' {
  const db: Firestore;
  export default db;
}

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Admin Level:</label>
      <input type="number" v-model="Adminlvl" min="0" max="1" required><br><br>
      <label>First Name:</label>
      <input type="text" v-model="firstName" required><br><br>
      <label>Last Name:</label>
      <input type="text" v-model="lastName" required><br><br>
      <label>Password:</label>
      <input type="password" v-model="password" required><br><br>
      <button type="submit">Login</button>
    </form>
    <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
  </div>
</template>


<script>
import { db } from '@/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      Adminlvl: '',
      firstName: '',
      lastName: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const { Adminlvl, firstName, lastName, password } = this;
        const q = query(
          collection(db, 'admins'),
          where('firstName', '==', firstName),
          where('lastName', '==', lastName),
          where('password', '==', password),
          where('Adminlvl', '==', Adminlvl) 
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          if (Adminlvl == '0') {
            this.$router.push('/Admin0');
          } else if (Adminlvl == '1') {
            this.$router.push('/Admin1');
          } else {
            throw new Error('Invalid admin level.');
          }
        } else {
          throw new Error('Wrong admin credentials.');
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

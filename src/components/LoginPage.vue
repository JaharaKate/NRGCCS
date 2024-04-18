<template>
  <div>
    <div class="text-center ma-4">
      <v-img
        :aspect-ratio="1"
        class="bg-white d-inline-block"
        src="/src/components/img/nrgccs.png"
        width="300"
      ></v-img>
      <div
        class="welcome-text"
        style="color: #ad0606; font-weight: bold; margin-top: -10px"
        margin-top="-20px"
      >
        Welcome Admin!
      </div>
      <div class="subtitle-text" style="color: #ad0606">
        Sign in to NRGCCS admin configuration portal
      </div>
    </div>

    <hr style="border-top: 3px solid #ad0606; margin: 20px auto; width: 30%" />

    <v-card class="mx-auto px-6 py-8" max-width="344" flat>
      <div
        class="text-subtitle-1 text-medium-emphasis"
        style="color: #ad0606 !important"
      >
        Account
      </div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        style="color: #ad0606 !important"
      >
        Password

        <a
          class="text-caption text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          style="color: #ad0606 !important"
        >
          Forgot login password?
        </a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mb-8"
        color="white"
        size="large"
        variant="solid"
        block
        style="background-color: #ad0606"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<!-- Jahara Added-->

<!--<template>
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
</script>-->

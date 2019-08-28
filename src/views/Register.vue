<template>
  <div class="pt-100">
    <h1>Register new user</h1>
    <v-form>
      <v-container>
        <v-layout col cols="12" sm="6">
          <v-text-field
            id="name"
            type="text"
            v-model="credential.name"
            :error-messages="nameErrors"
            :rules="nameRules"
            :counter="10"
            required
            @input="$v.credential.name.$touch()"
            @blur="$v.credential.name.$touch()"
            autofocus
            label="Username"
            clearable
          ></v-text-field>
        </v-layout>
        <v-layout col cols="12" sm="6">
          <v-text-field
            v-model="credential.password"
            required
            :rules="passwordRules"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show? 'text' : 'password'"
            label="Enter password"
            hint="At least 3 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-layout>
        <v-layout col cols="12" sm="6">
          <v-text-field
            id="password-confirm"
            v-model="credential.password_confirmation"
            required
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show? 'text' : 'password'"
            label="Enter password again"
            hint="At least 3 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-layout>
        <v-btn @click="handleSubmit" :disabled="$v.$invalid">Register</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { register } from "../api/users";
import { mapMutations } from "vuex";
import { SET_SNACK_MESSAGE } from "../store/types/snackbar.types";

export default {
  mixins: [validationMixin],
  validations: {
    credential: {
      name: { required, maxLength: maxLength(10), minLength: minLength(3)},
      password: {required, minLength: minLength(2)},
      password_confirmation: {required, minLength: minLength(2)}
    }
  },

  data() {
    return {
      credential: {
        name: "",
        password: "",
        password_confirmation: ""
      },
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters",
        v => (v && v.length >= 3) || "Name must be more than 2 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 3) || "Password must be more than 2 characters"
      ],
      show: false
    };
  },
  name: "Register",

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.credential.name.$dirty) return errors;
      !this.$v.credential.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.credential.name.required && errors.push("Name is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.credential.password.$dirty) return errors;
      !this.$v.credential.password.minLength &&
        errors.push("Password must be at most 3 characters long");
      !this.$v.credential.password.required &&
        errors.push("Password is required.");
      return errors;
    }
  },

  methods: {
    async handleSubmit(e) {
      this.$v.$touch();
      e.preventDefault();
      let { name, password, password_confirmation } = this.credential;
      if (password === password_confirmation && password.length > 0) {
        let data = {
          name,
          password
        };
        await register(data);
        this.setSnack("Succesfully registered");
        this.$router.push("/login");
      } else {
        password = "";
        password_confirmation = "";
        this.setSnack("Passwords do not match");
      }
    },
    clear() {
      this.$v.$reset();
      this.credential.name = "";
      this.credential.password = "";
      this.credential.password_confirmation = "";
    },
    ...mapMutations({
      setSnack: SET_SNACK_MESSAGE
    })
  }
};
</script>

<style scoped>
.pt-100{
  padding-top: 100px;
}
button {
  background: #41b883;
  color: white;
  border-style: outset;
  border-color: #41b883;
  height: 50px;
  width: 100px;
  font: bold 15px arial, sans-serif;
  text-shadow: none;
  border-radius: 8px;
}
form {
  padding-top: 50px;
}
</style>

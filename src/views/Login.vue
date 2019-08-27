<template>
  <div class="pt-100">
    <h1>Log In</h1>
    <v-form>
      <v-container>
        <v-layout col cols="12" sm="6">
          <v-text-field
            id="name"
            type="text"
            v-model="credential.name"
            :error-messages="nameErrors"
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
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show? 'text' : 'password'"
            label="Enter password"
            hint="At least 3 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-layout>
      </v-container>
      <v-btn type="submit" @click="handleSubmit">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations } from "vuex";
import {
  AUTH_USERNAME,
  AUTH_TOKEN,
  ACTION_LOGIN
} from "../store/types/auth.types";
import { SET_SNACK_MESSAGE } from "../store/types/snackbar.types";

export default {
  data() {
    return {
      show: false,
      select: null,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 3 || "Min 3 characters"
      },
      credential: {
        name: "",
        password: ""
      }
    };
  },
  name: "Login",
  mixins: [validationMixin],
  validations: {
    credential: {
      name: { required, maxLength: maxLength(10) }
    }
  },
  computed: {
    ...mapState({
      AUTH_TOKEN,
      AUTH_USERNAME
    }),
    nameErrors() {
      const errors = [];
      if (!this.$v.credential.name.$dirty) return errors;
      !this.$v.credential.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.credential.name.required && errors.push("Name is required.");
      return errors;
    }
  },

  methods: {
    ...mapActions({
      login: ACTION_LOGIN
    }),
    ...mapMutations({
      setSnack: SET_SNACK_MESSAGE
    }),
    async handleSubmit(e) {
      e.preventDefault();
      const { name, password } = this.credential;
      try {
        await this.login({
          name,
          password
        });
      } catch (error) {
        console.log(error);
      }
      this.setSnack("You have succesfully logged in");
      this.$router.push("/");
    }
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

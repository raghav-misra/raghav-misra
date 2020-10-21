<template>
    <section class="component-page">
        <h1 class="title is-2">Let's get in touch.</h1>

        <form class="contact-form" @submit.prevent="formSubmit">

            <TextInput 
                v-model="fields.firstName" 
                placeholder="Thomas" label="First Name" 
                required
            />
            <TextInput 
                v-model="fields.lastName" 
                placeholder="Edison" label="Last Name" 
                required
            />

            <TextInput 
                v-model="fields.email" 
                placeholder="tom@edison.gg" label="Email Address" 
                type="email"
                required
            />

            <TextInput 
                v-model="fields.subject" 
                placeholder="Just saying hello!" label="Subject"
                required
            />

            <TextInput 
                v-model="fields.body" 
                placeholder="I have dire matters to discuss with you." label="Body" 
                multiline
                required
            />

            <b-button native-type="submit" type="is-primary">Let's Talk</b-button>
        </form>
    </section>
</template>

<script>
import { SnackbarProgrammatic as Snackbar  } from "buefy";

export default {
    data() {
        return {
            fields: {
                firstName: null,
                lastName: null,
                email: null,
                subject: null,
                body: null
            }
        };
    },

    methods: {
        formSubmit() {
            let failed = false;
            let message = "";

            for (const field in this.fields) {
                if (this.fields[field].trim() === "") {
                    this.fields[field] = "";
                    failed = true;
                    message = "Make sure all your fields are filled.";
                    break;
                }
            }

            if (failed) {
                Snackbar.open({
                    message: message,
                    type: "is-warning",
                    position: "is-top",
                    actionText: "Close",
                });
                return;
            }
        }
    }
};
</script>

<style scoped>
@keyframes scrollIn {
    0% { transform: scaleY(0) translateY(-100%); }
    100% { transform: scaleY(1); }
}

.contact-form {
    animation: scrollIn 0.5s ease-in-out;
    background: var(--info);
    margin: 1rem;
    padding: 0 1rem;
    overflow: hidden;
    border-radius: 25px;
	box-shadow: 0px 0px 20px var(--darkest);
}

.button {
    margin: 1rem 0 !important;
}
</style>
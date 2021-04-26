<template>
    <section class="component-page">
        <portal to="snackbar">
            <Snackbar
                :type="snackbar.type"
                :message="snackbar.message"
                :action="snackbar.action"
                :showing="snackbar.showing"
                @dismiss="dismissSnackbar"
            />
        </portal>

        <h1 class="title is-2">Let's get in touch.</h1>

        <div class="contact-form">
            <form @submit.prevent="formSubmit">
                <TextInput
                    v-for="field in formLayout"
                    :key="field.name"
                    v-model="fields[field.name]"
                    :placeholder="field.placeholder"
                    :label="field.label"
                    :type="field.type || 'text'"
                    :multiline="field.multiline || false"
                    required
                />

                <Recaptcha
                    ref="recaptcha"
                    @recaptchaSuccess="sendContactRequest"
                />

                <b-button
                    native-type="submit"
                    class="submit-button"
                    :type="isSubmitting ? 'is-warning' : 'is-success'"
                    :loading="isSubmitting"
                    >Let's Talk
                </b-button>
            </form>

            <div class="socials-list">
                <a
                    target="_blank"
                    v-for="(social, i) in socials"
                    :key="i"
                    :href="social.href"
                >
                    <b-icon
                        :pack="social.generic ? 'fas' : 'fab'"
                        :icon="social.icon"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import qs from "qs";
import { formLayout, socials } from "@/assets/data";
export default {
    data() {
        return {
            isSubmitting: false,

            fields: {
                firstName: null,
                lastName: null,
                email: null,
                subject: null,
                body: null
            },

            snackbar: {
                showing: false,
                message: "test message",
                action: "cool!",
                type: "is-danger"
            },

            formLayout,
            socials
        };
    },
    mounted() {
        const data = qs.parse(location.search.replace("?", ""));
        if (data) {
            for (const key in data) {
                if (key in this.fields) {
                    this.fields[key] = data[key];
                }
            }
        }
    },

    methods: {
        async formSubmit() {
            if (this.isSubmitting) return;

            let failed = false;
            let message = "";

            for (const field in this.fields) {
                if (this.fields[field].trim() === "") {
                    this.fields[field] = "";
                    failed = true;
                    message = "Make sure all your fields are filled.";
                }
            }

            if (failed) {
                this.snackbar = {
                    showing: true,
                    message,
                    type: "is-danger",
                    action: "Okay"
                };  
            }

            this.$refs.recaptcha.validate();
        },

        async sendContactRequest(recaptcha) {
            try {
                this.isSubmitting = true;

                const result = await axios.post("/.netlify/functions/contact", {
                    fields: this.fields,
                    recaptcha
                });

                if (result.data.success) {
                    this.snackbar = {
                        showing: true,
                        message: "Your contact request has been sent!",
                        type: "is-success",
                        action: "Okay"
                    };
                } else {
                    this.snackbar = {
                        showing: true,
                        message: "Something messed up. Try reloading.",
                        type: "is-danger",
                        action: "Okay"
                    };
                }
            } catch (error) {
                this.snackbar = {
                    showing: true,
                    message: "Something messed up. Try reloading.",
                    type: "is-danger",
                    action: "Okay"
                };
            } finally {
                this.isSubmitting = false;
            }
        },

        dismissSnackbar() {
            this.snackbar.showing = false;
        }
    },
    head() {
        return {
            title: "Raghav Misra — Contact"
        };
    }
};
</script>

<style scoped>
@keyframes scrollIn {
    0% {
        transform: scaleY(0) translateY(-100%);
    }
    100% {
        transform: scaleY(1);
    }
}

@keyframes socialBar {
    0% {
        transform: translateX(200%);
    }

    100% {
        transform: translateX(0);
    }
}

.contact-form {
    animation: scrollIn 0.5s ease-in-out;
    background: var(--info);
    margin: 1rem;
    will-change: transform;
    overflow: hidden;
    display: flex;
    border-radius: 25px;
    box-shadow: 0px 0px 20px var(--darkest);
}

.socials-list {
    position: relative;
    animation: socialBar 1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    margin-left: 1rem;
    background: var(--success);
}

.socials-list > a {
    font-size: 2rem;
    margin: auto 0;
    color: var(--light);
}

.socials-list > a:hover,
.socials-list > a:active {
    color: var(--darkest) !important;
}

form {
    padding: 0 1rem;
    flex: 1;
}

.button {
    margin: 1rem 0 !important;
}

.submit-button {
    transition: background 0.25s ease-in-out;
}

@media screen and (max-width: 1000px) {
    .contact-form {
        flex-direction: column-reverse;
    }

    .socials-list {
        flex-direction: row;
        margin: 0;
        padding: 1rem;
    }

    .socials-list > a {
        margin: 0 auto;
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 530px) {
    .contact-form {
        margin: 0;
    }
}
</style>

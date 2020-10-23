<template>
	<section class="component-page">
		<h1 class="title is-2">Let's get in touch.</h1>

		<div class="contact-form">
			<form @submit.prevent="formSubmit">
				<TextInput
					v-model="fields.firstName"
					placeholder="Thomas"
					label="First Name"
					required
				/>
				<TextInput
					v-model="fields.lastName"
					placeholder="Edison"
					label="Last Name"
					required
				/>

				<TextInput
					v-model="fields.email"
					placeholder="tom@edison.gg"
					label="Email Address"
					type="email"
					required
				/>

				<TextInput
					v-model="fields.subject"
					placeholder="Just saying hello!"
					label="Subject"
					required
				/>

				<TextInput
					v-model="fields.body"
					placeholder="I have dire matters to discuss with you."
					label="Body"
					multiline
					required
				/>

				<Recaptcha ref="recaptcha" @recaptchaSuccess="sendContactRequest" :siteKey="recaptchaSiteKey" />

				<b-button native-type="submit" type="is-primary"
					>Let's Talk</b-button
				>
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

export default {
	data() {
		return {
			fields: {
				firstName: null,
				lastName: null,
				email: null,
				subject: null,
				body: null,
			},
			socials: [
				{ icon: "github", href: "https://github.com/raghav-misra" },
				{
					icon: "linkedin",
					href: "https://linkedin.com/in/raghav--misra",
				},
				{ icon: "gitlab", href: "https://gitlab.com/raghav-misra" },
				{
					icon: "envelope",
					href: "mailto:raghav.m2014@gmail.com",
					generic: true,
				},
			],
		};
	},
	
	computed: {
        recaptchaSiteKey() { return process.env.RECAPTCHA_SITE_KEY; },
	},
	
	mounted() {
		const data = qs.parse(location.search.replace("?", ""));
		if (data) {
			for (const key in data) {
				console.log(key);
				if (key in this.fields) {
					this.fields[key] = data[key];
				}
			}
		}
	},

	methods: {
		async formSubmit() {
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
				return this.$buefy.snackbar.open({
					message: message,
					type: "is-warning",
					position: "is-top",
					actionText: "Close",
				});
			}

			this.$refs.recaptcha.validate();
		},

		async sendContactRequest(recaptchaResponse) {
			try {
				const result = await axios.post(
					"/.netlify/functions/contact",
					this.fields
				);

				if (result.data.success) {
					this.$buefy.snackbar.open({
						message: "Your contact request has been sent!",
						type: "is-success",
						position: "is-top",
						actionText: "Okay",
					});
				} else {
					this.$buefy.snackbar.open({
						message: "Something messed up. Try reloading.",
						type: "is-danger",
						position: "is-top",
						actionText: "Okay",
					});
				}
			} catch (error) {
				console.log("Contact form submit failed:", error);

				this.$buefy.snackbar.open({
					message: "Something messed up. Try reloading.",
					type: "is-danger",
					position: "is-top",
					actionText: "Okay",
				});
			}
		},
	},
	head() {
		return {
			title: "Raghav Misra — Contact",
		};
	},
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
		right: -100%;
	}

	100% {
		right: 0;
	}
}

.contact-form {
	animation: scrollIn 0.5s ease-in-out;
	background: var(--info);
	margin: 1rem;

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
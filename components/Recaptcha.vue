<template>
    <div>
        <div id="recaptcha" />

        <small class="recaptcha-credit">
            <span class="text-hide-mobile">This form is protected by</span> <b>Recaptcha:</b>
            <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
            —
            <a href="https://policies.google.com/terms?hl=en">Terms</a>
        </small>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recaptchaWidget: null
        }
    },
    methods: {
        validate() {
            try {
                this.recaptchaWidget = grecaptcha.render("recaptcha", {
                    sitekey: process.env.RECAPTCHA_SITE_KEY,
                    size: "invisible",
                    callback: (recaptchaResponse) => this.$emit("recaptchaSuccess", recaptchaResponse)
                }, true);
            }
            catch (e) {
                grecaptcha.reset(this.recaptchaWidget);
            }

            grecaptcha.execute(this.recaptchaWidget);            
        }
    },
}
</script>

<style>
.recaptcha-credit a:first-of-type {
    margin-left: 0.25rem;
}

@media screen and (max-width: 820px) {
    .text-hide-mobile { display: none; }
}
</style>
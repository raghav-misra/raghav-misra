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
    props: ["siteKey"],
    methods: {
        validate() {
            grecaptcha.execute(this.recaptchaWidget);            
        }
    },
    mounted() {
        this.recaptchaWidget = grecaptcha.render("recaptcha", {
            sitekey: this.siteKey,
            size: "invisible",
            callback: (recaptchaResponse) => this.$emit("recaptchaSuccess", recaptchaResponse)
        }, true);
    }
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
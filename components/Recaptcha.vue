<template>
    <div>
        <div class="g-recaptcha"
            :data-sitekey="siteKey"
            :data-callback="`recaptcha_${siteKey}`"
            data-size="invisible">
        </div>

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
    mounted() {
        window[`recaptcha_${this.siteKey}`] = () => this.$emit("recaptchaSuccess");
    },
    methods: {
        validate() {
            grecaptcha.execute();
        }
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
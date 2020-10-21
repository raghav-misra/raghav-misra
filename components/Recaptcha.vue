<template>
    <div class="g-recaptcha"
        :data-sitekey="siteKey"
        :data-callback="`recaptcha_${siteKey}`"
        data-size="invisible">
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
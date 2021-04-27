<template>
    <div :class="`toggle has-background-${value ? on : off}`" @click="updateValue">
        <div 
            class="toggle-switch" 
            :style="`left: ${value ? '1.5rem': '0'};`">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        on: String,
        off: String,
        value: Boolean
    },
    methods: {
        updateValue() {
            this.$emit("input", !this.value);
        }
    }
};
</script>

<style scoped>
.toggle {
    width: 3rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    padding: 0.25rem;
    display: inline-block;
}

.toggle-switch {
    position: relative;
    background: white;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: left 0.25s;
    box-shadow: 0px 1px 3.75px var(--darkest);
}
</style>
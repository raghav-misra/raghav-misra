<template>
    <div class="component-text-input">
        <label v-if="label" v-text="label" />
        <textarea 
            v-if="multiline" 
            v-model="value" 
            @input="emitInput"
            :placeholder="placeholder"
            :required="required"
        />  
        <input 
            v-else 
            v-model="value"
            @input="emitInput"
            :placeholder="placeholder" 
            :type="type"
            :required="required"
        />  
    </div>
</template>

<script>
export default {
    props: {
        initialValue: {
            type: String,
            default: ""
        },
        multiline: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ""
        },
        label: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return { value: this.initialValue }
    },
    methods: {
        emitInput() { this.$emit("input", this.value); }
    }
};
</script>

<style scoped>
.component-text-input {
    margin: 1rem 0;
}

textarea, input {
    background: var(--dark);
    color: var(--light);
    border: none;
    border-radius: 10px;
    padding: 1rem;
    display: block;
    width: 100%;
    font-size: 1rem;
}

textarea {
    resize: vertical;
}

label {
    display: block;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--placeholder);
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--placeholder);
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--placeholder);
}
</style>
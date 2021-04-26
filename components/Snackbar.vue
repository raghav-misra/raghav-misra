<template>
    <div class="snackbar-base" ref="base">
        <div class="snackbar-main">
            <p class="messagetext">
                {{ message }} 
            </p>
            <button
                class="dismiss"
                :style="`color: var(--${type.replace('is-', '')})`"
                @click="dismiss"
            >
                {{ action }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showing: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        action: {
            type: String,
            required: true
        }
    },
    methods: {
        dismiss() {
            this.$emit("dismiss");
        }
    },
    watch: {
        showing() {
            if (this.showing) {
                this.$refs.base.style = `
                    opacity: 1;
                    transform: none;
                `;
            } else {
                this.$refs.base.style = `
                    opacity: 0;
                    transform: translateY(-100%) scale(0.5) rotateX(-90deg);
                `;
            }
        }
    }
};
</script>

<style scoped>
.snackbar-base {
    opacity: 0;
    transform: translateY(-100%) scale(0.5) rotateX(-90deg);
    position: fixed;
    pointer-events: none;
    background: transparent;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transition: opacity 0.5s ease-in, transform 0.5s ease-in-out;
}

.snackbar-main {
    pointer-events: all;
    background: var(--darkest);
    padding: 1rem;
    border: 1px solid var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 20px var(--darkest);
}

.messagetext {
    position: relative;
    bottom: 0.03rem;
}

.dismiss {
    margin-left: 1rem;
    background: transparent;
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.25s ease-in;
}

.dismiss:hover,
.dismiss:focus {
    background: rgba(255, 255, 255, 0.25);
}
</style>

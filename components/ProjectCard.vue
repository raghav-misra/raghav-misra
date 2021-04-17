<template>
    <div class="section project-card">
        <div class="columns">
            <div class="column">
                <div>
                    <h1 class="title">
                        <div class="level level-left project-title">
                            {{ project.name }}

                            <b-taglist
                                v-if="project.winner"
                                attached
                                class="winner-tag"
                            >
                                <b-tag type="is-warning">Winner!</b-tag>
                                <b-tag type="is-danger">
                                    <b-icon
                                        pack="fas"
                                        icon="medal"
                                        type="is-light"
                                    />
                                </b-tag>
                            </b-taglist>
                        </div>

                        <b class="title is-6 has-text-warning">
                            {{ project.date }}
                        </b>
                    </h1>

                    <NuxtContent :document="project" />
                </div>
            </div>
            <div class="project-buttons">
                <div class="vertical-button-group">
                    <b-button
                        v-for="(button,
                        buttonText,
                        buttonIndex) in project.buttons"
                        :key="buttonIndex"
                        tag="a"
                        :href="button.href"
                        target="_blank"
                        :type="`is-${button.type}`"
                    >
                        {{ buttonText }}
                        <i v-if="button.icon" :class="button.icon" />
                    </b-button>
                </div>
            </div>
        </div>

        <b-taglist class="tag-container" attached>
            <b-tag
                v-for="(tag, tagIndex) in project.tech"
                :key="tagIndex"
                :type="`is-${tag.type || 'danger'}`"
            >
                <b>{{ tag.text }}</b>
            </b-tag>
        </b-taglist>
    </div>
</template>

<script>
export default {
    props: { project: Object },
    data() {
        return {
            cardScale: 0
        };
    }
};
</script>

<style scoped>
@keyframes cardEnter {
    0% {
        transform: scaleX(0) translateX(-50%);
    }
    100% {
        transform: none;
    }
}

.project-title {
    display: flex;
    align-items: center;
}

.winner-tag {
    display: inline-flex;
    margin-left: 1rem;
}

.winner-tag > * {
    font-size: 1.125rem;
}

.project-card {
    background: var(--info);
    margin: 2rem 1rem;
    border-radius: 25px;
    box-shadow: 0px 0px 20px var(--darkest);
    overflow: hidden;
    animation: cardEnter 0.5s ease-in-out;
    will-change: transform;
}

.project-buttons {
    display: flex;
    align-items: center;
    margin: 0 1rem;
}

.vertical-button-group {
    display: inline-block;
    margin-left: auto;
    text-align: right;
}

.vertical-button-group .button {
    display: block;
    border-radius: 0;
    width: 10rem;
}

.vertical-button-group .button:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.vertical-button-group .button:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

@media screen and (max-width: 768px) {
    .vertical-button-group {
        display: block;
        text-align: left;
        margin-left: 0;
        margin-bottom: 1rem;
    }
}

@media screen and (max-width: 990px) {
    .project-title {
        flex-direction: column;
        align-items: baseline;
    }
    .winner-tag {
        margin-left: 0;
        margin-top: 0.5rem;
    }
}

@media screen and (max-width: 768px) and (min-width: 480px) {
    .vertical-button-group .button {
        display: inline-block;
        border-radius: 0;
        width: 10rem;
    }

    .vertical-button-group .button:first-of-type {
        border-top-right-radius: 0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .vertical-button-group .button:last-of-type {
        border-bottom-left-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
</style>

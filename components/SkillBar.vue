<template>
    <div class="component-skillbar">
        <div
            class="skill-display"
            :style="`--skill-percent: ${skill.rating * 10}%;`"
        >
            <div class="caption">
                {{ skill.name }}
                <b>{{ skill.rating }} / 10</b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { skill: Object }
};
</script>

<style scoped>
@keyframes showProgress {
    from {
        width: 0;
    }
    to {
        width: var(--skill-percent);
    }
}

.component-skillbar {
    transition: background 0.25s ease-in-out;
    margin: 1rem 0;
}

.skill-display {
    will-change: width;
    background: var(--primary);
    height: 2.75rem;
    overflow: visible;
    position: relative;
    border-radius: 20px;
    width: var(--skill-percent);
    animation: showProgress 0.75s ease-in-out;
    box-shadow: 0px 0px 25px var(--darkest);
}

.caption {
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    color: var(--primary);
    background: var(--darkest);
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    width: 15rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    transition: transform 0.25s ease-in-out;
    box-shadow: 0px 0px 10px var(--info);
}

.caption b {
    margin-left: auto;
}
</style>

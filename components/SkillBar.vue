<template>
    <div class="component-skillbar">
        <div class="skill-display" :style="`--skill-percent: ${rating}%;`">
        </div>

        <div class="caption">
            {{ skill.name }}
            <b>{{ rating }}%</b>
        </div>
    </div>
</template>

<script>
export default {
    props: { skill: Object },
    data() {
        return { rating: 0 };
    },
    mounted() {
        const fillBarInterval = () => {
            this.rating += 1;

            if (this.rating !== (this.skill.rating * 10)) {
                setTimeout(fillBarInterval, 10);
            }
        };

        fillBarInterval();
    }
}
</script>

<style scoped>
.component-skillbar {
    position: relative;
    margin: 0.5rem 0;
    border-radius: 25px;
    overflow: hidden;
    background: var(--info);
}

.skill-display {
    background: var(--primary);
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    width: var(--skill-percent);
    transition: background 0.25s ease-in-out;
}

.component-skillbar:hover .skill-display {
    background: var(--success);
}

.caption {
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    color: var(--light);
    background: var(--dark);
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    width: 12.5rem;
}

.caption b {
    float: right;
}
</style>
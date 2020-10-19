<template>
    <div class="component-skillbar" :data-rating="skill.rating">
        <div class="skill-display" :style="`--skill-percent: ${rating}%;`">
        </div>

        <div class="caption">
            {{ skill.name }}
            <b>{{ rating / 10 }} / 10</b>
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
    overflow: hidden;
    background: var(--info);
}

.skill-display {
    background: var(--primary);
    height: 2.75rem;
    padding: 0.5rem 1rem;
    
    width: var(--skill-percent);
    transition: background 0.25s ease-in-out;
}

.component-skillbar:hover .skill-display {
    background: var(--success);
}

.component-skillbar:hover .caption {
    transform: skew(-10deg);
}

.caption {
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    color: var(--light);
    background: var(--dark);
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    width: 15rem;
    font-size: 0.875rem;
    transition: transform 0.25s ease-in-out;
}

.caption b {
    float: right;
}
</style>
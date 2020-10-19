<template>
    <div class="component-skillbar" :data-rating="skill.rating">
        <div class="skill-display" :style="`--skill-percent: ${rating}%;`">
            <div class="caption">
                {{ skill.name }}
                <b>{{ rating / 10 }} / 10</b>
            </div>
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
    transition: background 0.25s ease-in-out;
    margin: 1rem 0;
}

.skill-display {
    background: var(--primary);
    height: 2.75rem;
    overflow: visible;
    position: relative;
    border-radius: 20px;
    width: var(--skill-percent);
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
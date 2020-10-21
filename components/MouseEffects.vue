<template>
	<div
		class="component-mouse-trail"
		:style="`
            left: ${x}px; 
            top: ${y}px;
            transform: scale(${scale});
        `"
	>
		<GlobalEvents @mousemove="followMouse" @mouseover="focusEnlarge" @click="clickAnimate" />
        <div>
            <div 
                class="click-effect" 
                :style="`
                    width: ${clickEffect ? 5 : 0}rem;
                    height: ${clickEffect ? 5 : 0}rem;
                    opacity: ${clickEffect ? 1 : 0};
                `" 
            />
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			x: 0,
			y: 0,
            scale: 1,
            clickEffect: 0
		};
	},

	methods: {
		followMouse(e) {
			setTimeout(() => {
				this.x = e.pageX;
				this.y = e.pageY;
			}, 25);
		},
		focusEnlarge(e) {
			const targets = ["A", "BUTTON"];
			if (
				targets.indexOf(e.target.nodeName) > -1 ||
                targets.indexOf(e.target.parentNode.nodeName) > -1 ||
                targets.indexOf(e.target.parentNode.parentNode.nodeName) > -1
			) {
				this.scale = 2;
				e.target.addEventListener(
					"mouseout",
					() => {
						this.scale = 1;
					},
					{
						once: true,
					}
				);
			}
        },
        clickAnimate(e) {
            this.clickEffect = true;
            setTimeout(() => this.clickEffect = false, 300);
        },
	},
};
</script>

<style scoped>
* {
    transition: transform 0.25s ease-in-out,
        width 0.25s ease-in-out,
        height 0.25s ease-in-out,
        opacity 0.25s ease-in-out;
}

.component-mouse-trail {
    width: 1rem;
    z-index: 10000;
    pointer-events: none;
    height: 1rem;
    border: 0.25rem solid var(--light);
    background: var(--light);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    left: 0;
    border-radius: 100%;
}

.click-effect {
    border: 2px solid var(--light);
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.048);
}
</style>
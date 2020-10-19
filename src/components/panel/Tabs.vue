<template>
	<div class="panel">
		<ul class="tabs">
			<li
				v-for="(tab, index) in tabs"
				:key="index"
				class="tab"
				:class="{ active: activeTab.name == tab.name }"
				@click="switchTab(tab)"
			>
				{{ tab.value }}
			</li>
		</ul>

		<div class="panel-body">
			<transition name="fade" mode="out-in">
				<slot :name="tabPanelSlotName"></slot>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		initialTab: Object,
		tabs: Array,
	},
	data() {
		return {
			activeTab: this.initialTab,
		}
	},
	computed: {
		tabPanelSlotName() {
			return this.activeTab.name
		},
	},
	methods: {
		switchTab(tabName) {
			this.activeTab = tabName
		},
	},
}
</script>

<style lang="postcss" scoped>
.tabs {
	display: flex;
	justify-content: space-between;
	color: #6c6c6c;
	border-bottom: 0.5px solid #3a3a3a;
	margin-bottom: 2.5rem;

	.tab {
		cursor: pointer;
		text-align: center;
		padding: 1.1rem 0;
		width: 100%;
		transition: 0.3s color;

		&:hover {
			color: #fff;
		}
	}

	.active {
		color: #fff;
		position: relative;

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: -1px;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
			left: 45%;
			width: 40px;
			height: 3px;
			background-color: var(--secondary);
		}
	}
}

.panel {
	background-color: var(--panel-bg);
	padding-bottom: 2rem;
	border-radius: 10px;
	border: 1px solid var(--panel-border);
	box-shadow: 0px 2px 6px 0px #000000 20%;

	&-body {
		padding: 0 4rem;
	}
}
</style>

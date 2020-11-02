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
				<img :src="tab.icon" :alt="tab.name" />
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
	list-style: none;
	margin: 0 0 2.2rem 0;
	padding: 0;

	.tab {
		cursor: pointer;
		text-align: center;
		padding: 1.1rem 0;
		width: 100%;

		img {
			opacity: 0.2;
			margin-right: 0.25rem;
			margin-top: -4px;
		}

		&:hover {
			color: #fff;

			img {
				opacity: 1;
			}
		}
	}

	.active {
		color: #fff;
		position: relative;

		img {
			opacity: 1;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: -1px;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
			left: 46%;
			width: 40px;
			height: 2.5px;
			background-color: var(--secondary);
		}
	}
}

.panel {
	background-color: var(--panel-bg);
	padding-bottom: 2rem;
	border-radius: 10px;
	position: relative;
	border: 1px solid var(--panel-border);
	box-shadow: 0px 2px 6px 0px #000000 20%;
	min-height: 500px;

	&-body {
		padding: 0 4rem;
	}
}
</style>

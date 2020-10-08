<template>
	<div v-if="comment.comment.user">
		{{ comment.comment.user.username }} / {{ comment.comment.comment }}
	</div>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
}
</script>

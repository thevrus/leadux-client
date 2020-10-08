<template>
	<div>
		<input
			:id="id"
			:name="name"
			:type="type"
			:autocomplete="autocomplete"
			placeholder=" "
			class="input"
			:required="required"
			:value="value"
			@input="$emit('input', $event.target.value)"
		/>
		<label for="email">
			{{ label }}
		</label>
	</div>
</template>

<script>
export default {
	props: ['value', 'id', 'name', 'type', 'autocomplete', 'required', 'label'],
}
</script>

<style lang="scss" scoped>
div {
	position: relative;
}

label {
	position: absolute;
	top: 1.1rem;
	left: 1.5rem;
	font-weight: 500;
	font-size: 1.1rem;
	line-height: 140%;
	color: rgba(0, 0, 0, 0.38);
	transition: all 0.3s;
}

.input {
	padding: 1.7rem 1.5rem 0.7rem 1.5rem;
	width: 100%;
}

div input:focus ~ label {
	top: 0.6rem;
	font-size: 0.8rem;
}

input:not(:placeholder-shown).input:not(:focus) + label {
	top: 0.6rem;
	font-size: 0.8rem;
}

input:not(:focus):invalid {
	color: red;
}

input[type='email']:valid + label {
	color: green;
}
</style>

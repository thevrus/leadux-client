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
		<label :for="id">
			{{ label }}
		</label>
	</div>
</template>

<script>
export default {
	props: ['value', 'id', 'name', 'type', 'autocomplete', 'required', 'label'],
}
</script>

<style lang="postcss" scoped>
div {
	position: relative;
}

label {
	position: absolute;
	user-select: none;
	top: 1.1rem;
	left: 1.5rem;
	font-weight: normal;
	font-size: 1.1rem;
	color: rgba(0, 0, 0, 0.38);
	transition: all 0.3s;
}

input {
	border-radius: 0.7rem;
	font-weight: bold;
	font-size: 0.88rem;
	color: #434343;
	border: 1px solid transparent;
	margin-bottom: 1.25rem;
	background-color: #fff;
	outline-color: #222e4f;
}

.input {
	padding: 1.7rem 1.5rem 0.7rem 1.5rem;
	width: 100%;
	outline: none;
	background-color: #f5f5f5;
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

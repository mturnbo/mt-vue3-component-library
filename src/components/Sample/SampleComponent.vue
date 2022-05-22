<template>
    <div class="sample-component-container">
        <h2>{{ headingText }}</h2>
        <h3>{{ bodyText }}</h3>
    </div>
</template>

<script>
export default {
    name: 'SampleComponent',
    props: {
        headingText: String,
        bodyText: String,
    },
};
</script>

<style>
.sample-component-container {
    padding: 40px;
    background-color: black;
    color: white;
}
</style>

<template>
    <div>
        <input type="text" placeholder="Search the fruits">
        <div>
            <div class="fruit-name">
                
            </div>
            <div class="fruit-image">
                
            </div>
        </div>
    </div>
</template>

<script setup>

const users = [
    {
        id: 1,
        name: "Apple",
        image: "http://placehold.it/320x100/E8117F/ffffff?text=Apple",
    },
    {
        id: 2,
        name: "Melon",
        image: "http://placehold.it/320x100/A0D8B3/ffffff?text=Melon",
    },
    {
        id: 3,
        name: "Avocado",
        image: "http://placehold.it/320x100/7C96AB/ffffff?text=Avocado",
    },
];

</script>

<style scoped>
input {
    margin-bottom: 20px;
    padding: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    border: 2px dashed gray;
    outline: none;
}

.fruit-name {
    font-size: 1.25rem;
}
</style>
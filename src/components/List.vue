<template>
    <div>
        <div v-for="(element, index) in toDo">
            <div :class="element.class">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ element.task }}</h5>
                    <small style="font-size: 20px; cursor: pointer" @click="removeItem(index)">&times;</small>
                </div>
                <p class="mb-1">Priority: {{ element.priority }}</p>
                <small>
                    <component :is="element.alert"></component>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            toDo: Array
        },
        methods: {
            removeItem(index) {
                this.toDo.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
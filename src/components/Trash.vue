<template>
    <div>
        <div v-for="(element, index) in trash" class="shadow">
            <div :class="element.class">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ element.task }}</h5>
                    <small><font-awesome-icon icon="backspace" class="trash" size="1x" @click="killTask(index)"/></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <small>
                        <div class="mb-1" style="display: inline-block">{{ element.priority }} {{ element.p }}</div>
                        <component :is="element.alert" style="display: inline-block"></component>
                    </small>
                    <small class="check" :class="element.completed"><font-awesome-icon icon="check" size="1x" /></small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            trash: Array
        },
        methods: {
            killTask(index) {
                if (confirm('Do you really want delete me? :/')) {
                    this.trash.splice(index, 1);
                }
            }
        }
    }
</script>

<style>
</style>
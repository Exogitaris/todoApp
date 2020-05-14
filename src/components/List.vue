<template>
    <div>
        <div v-for="(element, index) in toDo" :class="element.class">
            <div class="remove-item" @click="removeItem(index)">&times;</div>
            <component style="display: inline-block" :is="alert"></component>
            <div style="display: inline-block">{{ element.task }} |</div>
            <div style="display: inline-block" >PRIORITY = {{ element.priority }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            toDo: Array,
            alert: Object
        },
        methods: {
            removeItem(index) {
                this.toDo.splice(index, 1);
            }
        }
    }
</script>

<style>
    .remove-item {
        cursor: pointer;
        font-size: 25px;
        display: inline-block;
        margin-left: 500px;
        position: relative;
    }

    @media(min-width: 245px) AND (max-width: 1200px){
        .remove-item {
            margin-left: 420px;
        }
    }
</style>
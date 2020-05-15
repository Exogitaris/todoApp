<template>
    <div>
        <div v-for="(element, index) in toDo">
            <div :class="element.class">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ element.task }}</h5>
                    <small class="trash" @click="removeItem(index)"><font-awesome-icon icon="backspace" size="1x" /></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <small>
                        <div class="mb-1" style="display: inline-block">{{ element.priority }} {{ element.p }}</div>
                        <component :is="element.alert" style="display: inline-block"></component>
                    </small>
                    <small class="check" @click="completeTask(index)"><font-awesome-icon icon="check" size="1x" /></small>
                </div>
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
            },
            completeTask(index) {
                this.$set(this.toDo[index], 'class', 'alert alert-success');
                this.$set(this.toDo[index], 'p', '');
                this.$set(this.toDo[index], 'alert', '');
                this.$set(this.toDo[index], 'priority', 'Completed!');
            }
        }
    }
</script>

<style>
    .trash {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.83);
    }

    .trash:hover {
        color: #dc3545;
    }

    .check {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.83);
    }

    .check:hover {
        color: lightgreen;
    }
</style>
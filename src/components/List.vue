<template>
    <div>
        <div v-for="(element, index) in toDo" class="shadow">
            <div :class="element.class">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ element.task }}</h5>
                    <small><font-awesome-icon icon="backspace" class="trash" size="1x" @click="removeItem(index)" /></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <small>
                        <div class="mb-1" style="display: inline-block">{{ element.priority }} {{ element.p }}</div>
                        <component :is="element.alert" style="display: inline-block"></component>
                    </small>
                    <small class="check" :class="element.completed" @click="completeTask(index)"><font-awesome-icon icon="check" size="1x" /></small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            toDo: Array,
            trash: Array
        },
        methods: {
            removeItem(index) {
                this.trash.push({task: this.toDo[index].task,
                    priority: this.toDo[index].priority,
                    class: this.toDo[index].class,
                    alert: this.toDo[index].alert,
                    p: this.toDo[index].p,
                    completed: this.toDo[index].completed,
                    fixPriority: this.toDo[index].fixPriority,
                    fixClass: this.toDo[index].fixClass,
                    fixAlert: this.toDo[index].fixAlert,
                    fixP: this.toDo[index].fixPriority})
                this.toDo.splice(index, 1);
            },
            completeTask(index) {
                if (this.toDo[index].class !== 'alert alert-success') {
                    this.$set(this.toDo[index], 'class', 'alert alert-success');
                    this.$set(this.toDo[index], 'p', '');
                    this.$set(this.toDo[index], 'alert', '');
                    this.$set(this.toDo[index], 'priority', 'Completed!');
                    this.$set(this.toDo[index], 'completed', 'completed');
                }
                else {
                    this.$set(this.toDo[index], 'priority', this.toDo[index].fixPriority);
                    this.$set(this.toDo[index], 'p', this.toDo[index].fixP);
                    this.$set(this.toDo[index], 'alert', this.toDo[index].fixAlert);
                    this.$set(this.toDo[index], 'class', this.toDo[index].fixClass);
                    this.$set(this.toDo[index], 'completed', 'notCompleted');
                }

            }
        }
    }
</script>

<style scoped>
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

    .completed {
        color: lightgreen;
    }

    .completed:hover {
        color: #dc3545;
    }

    .notCompleted {
        color: rgba(0, 0, 0, 0.83);
    }

    .shadow {
        box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>
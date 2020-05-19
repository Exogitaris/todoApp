<template>
    <div>
        <div v-for="(element, index) in trash" class="shadow">
            <div :class="element.class">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ element.task }}</h5>
                    <small><font-awesome-icon icon="skull" class="trash" size="1x" @click="killTask(index)"/></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <small>
                        <div class="mb-1" style="display: inline-block">{{ element.priority }} {{ element.p }}</div>
                        <component :is="element.alert" style="display: inline-block"></component>
                    </small>
                    <small class="check" :class="element.completed"><font-awesome-icon @click="saveItem(index)" icon="briefcase-medical" size="1x" /></small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            trash: Array,
            toDo: Array
        },
        methods: {
            killTask(index) {
                if (confirm('Do you really want delete me? :/')) {
                    this.trash.splice(index, 1);
                }
            },
            saveItem(index) {
                this.toDo.push({task: this.trash[index].task,
                    priority: this.trash[index].priority,
                    class: this.trash[index].class,
                    alert: this.trash[index].alert,
                    p: this.trash[index].p,
                    completed: this.trash[index].completed,
                    fixPriority: this.trash[index].fixPriority,
                    fixClass: this.trash[index].fixClass,
                    fixAlert: this.trash[index].fixAlert,
                    fixP: this.trash[index].fixPriority})
                this.trash.splice(index, 1);
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
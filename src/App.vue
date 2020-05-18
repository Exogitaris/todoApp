<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <app-inputs :toDo="toDo"
                                :trash="trash"
                                @trashWasActivated="toggleTrash"
                                :trashActivated="trashActivated">
                    </app-inputs>
                <hr>
                    <app-list v-if="!trashActivated" :toDo="toDo"
                              :trash="trash">

                    </app-list>
                <app-trash v-else :trash="trash"></app-trash>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./components/List.vue";
    import Inputs from "./components/Inputs.vue";
    import Trash from "./components/Trash.vue";

    export default {
        data() {
            return {
                toDo: [],
                trash: [],
                trashActivated: false
            }
        },
        components: {
            appList: List,
            appInputs: Inputs,
            appTrash: Trash
        },
        methods: {
            toggleTrash() {
                if (this.trashActivated === false) {
                    this.trashActivated = true;
                }
                else {
                    this.trashActivated = false;
                }
            }
        }
    }
</script>

<style>
    body {
        background-color: rgba(0, 0, 0, 0.83);
    }
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <app-inputs :toDo="toDo"></app-inputs>
                    <app-list :toDo="toDo"></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./components/List.vue";
    import Inputs from "./components/Inputs.vue";

    export default {
        data() {
            return {
                toDo: []
            }
        },
        components: {
            appList: List,
            appInputs: Inputs
        }
    }
</script>

<style>
</style>

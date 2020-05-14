<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-inputs :toDo="toDo"
                                @alertChanger="setAlert"
                                @priorityAdded="setPriority = $event">
                    </app-inputs>
                    <app-list :toDo="toDo" :alert="alert"></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./components/List.vue";
    import Inputs from "./components/Inputs.vue";
    import SingleAlert from './components/alerts/SingleAlert.vue';
    import DoubleAlert from './components/alerts/DoubleAlert.vue';
    import TripleAlert from './components/alerts/TripleAlert.vue';

    export default {
        data() {
            return {
                toDo: [],
                setPriority: '',
                alert: DoubleAlert
            }
        },
        methods: {
            setAlert() {
                if (this.setPriority === 'Low') {
                    this.alert = SingleAlert;
                }
                else if (this.setPriority === 'Medium') {
                    this.alert = DoubleAlert;
                }
                else if (this.setPriority === 'Extreme') {
                    this.alert = TripleAlert;
                }
                console.log('setAlertStart');
            }
        },
        components: {
            appList: List,
            appInputs: Inputs,
            appSingleAlert: SingleAlert,
            appDoubleAlert: DoubleAlert,
            appTripleAlert: TripleAlert
        }
    }
</script>

<style>
</style>

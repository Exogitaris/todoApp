<template>
    <div class="text-center">
        <h1>TO-DO</h1>
        <h2>List</h2>
        <br><br>
        <h3>What do you want TO-DO?</h3>
        <input class="form-control" type="text" v-model="setTask" placeholder="Learn Vue.js">
        <h3>Set Priority</h3>
        <select v-model="setPriority" class="form-control">
            <option v-for="priority in priorities" :value="priority">{{ priority }}</option>
        </select>
        <br><br>
        <button class="btn btn-primary" @click="addTask">Add Me!</button>
        <br><br>
    </div>
</template>

<script>
    import SingleAlert from "./alerts/SingleAlert.vue";
    import DoubleAlert from "./alerts/DoubleAlert.vue";
    import TripleAlert from "./alerts/TripleAlert.vue";

    export default {
        data() {
            return {
                setTask: '',
                setClass: '',
                setPriority: 'Medium',
                priorities: ['Low', 'Medium', 'Extreme'],
                alert: ''
            }
        },
        props: {
            toDo: Array,
        },
        methods: {
            addTask() {
                if (this.setTask === '') {
                   return alert('Please fill all input fields.')
                }
                else {
                    if (this.setPriority === 'Low') {
                        this.setClass = 'alert alert-primary';
                        this.alert = SingleAlert;
                    }
                    else if (this.setPriority === 'Medium') {
                        this.setClass = 'alert alert-warning';
                        this.alert = DoubleAlert;
                    }
                    else if (this.setPriority === 'Extreme') {
                        this.setClass = 'alert alert-danger';
                        this.alert = TripleAlert;
                    }
                    this.toDo.push({task: this.setTask, priority: this.setPriority, class: this.setClass, alert: this.alert});
                    this.setTask = '';
                }
            }
        },
        components: {
            appSingleAlert: SingleAlert,
            appDoubleAlert: DoubleAlert,
            appTripleAlert: TripleAlert
        }
    }
</script>

<style>

</style>
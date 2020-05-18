<template>
    <div class="text-center form-center">
        <div class="alert alert-info" style="color: rgba(0, 0, 0, 0.83)">
            <h1>TO-DO</h1>
            <h2>List</h2>
        </div>
        <br><br>
        <h3>What do you want TO-DO?</h3>
        <input class="form-control" type="text" v-model="setTask" placeholder="Learn Vue.js" @keyup.enter="addTask">
        <div class="my-invalid-feedback alert alert-danger" v-if="!somethingAdded">
            Its too easy TO-DO nothing!
        </div>
        <br><br>
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
                alert: '',
                somethingAdded: true
            }
        },
        props: {
            toDo: Array,
        },
        methods: {
            addTask() {
                if (this.setTask === '') {
                   this.somethingAdded = false;
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
                    this.toDo.push({task: this.setTask, priority: this.setPriority, class: this.setClass, alert: this.alert, p: 'Priority',
                    completed: '', fixPriority: this.setPriority, fixClass: this.setClass, fixAlert: this.alert, fixP: 'Priority'});
                    this.setTask = '';
                    this.somethingAdded = true;
                }
            }
        },
        components: {
            appSingleAlert: SingleAlert,
            appDoubleAlert: DoubleAlert,
            appTripleAlert: TripleAlert,
        }
    }
</script>

<style>

    .form-center {
        background-color: white;
        border-radius: 15px;
        padding: 20px;
        margin-top: 10px;
        box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .my-invalid-feedback {
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #dc3545;
    }
</style>
<template>
  <div class="container">
    <h1 class="title">{{ title }} - {{ name }}</h1>
    <form action="" @submit.prevent="addTask">
      <div class="row">
        <div class="col s6">
          <div class="input-field">
            <input type="text" id="title" class="validate" v-model="newTask.title" autocomplete="off">
            <label for="title">Title</label>
          </div>
        </div>
        <div class="col s6">
          <div class="input-field">
            <input type="number" id="time" class="validate" v-model="newTask.time">
            <label for="time">Time</label>
          </div>
        </div>
        <div class="col s12 btn-box">
          <button class="btn waves-effect waves-light green" type="submit">Submit
            <i class="material-icons right">send</i>
          </button>
          <button class="btn waves-effect waves-light" @click="cancel">Cancel
            <i class="material-icons right">clear</i>
          </button>
        </div>
      </div>
    </form>

    <h2>New Task</h2>
    <p><strong>Title:</strong> {{ newTask.title }}</p>
    <p><strong>Time:</strong> {{ newTask.time }}</p>

    <h2>Tasks Lists</h2>
    <ul>
      <li v-show="!tasks.length">No tienes tareas :D</li>
        <li v-show="tasks.length" class="tasks" v-for="(task, i) of tasks" :key="task.id">{{ task.title }} | Time: {{ task.time }}
          <i class="material-icons red-text waves-effect waves-light btn-delete" @click="deleteTask(i)">delete</i>
        </li>
        <p v-show="tasks.length"><strong>Total time: </strong>{{ totalTime }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Manipulación del DOM',
      name: 'aomine',
      task : {},
      tasks: [],
      newTask: {
        title: '',
        time: null
      },
      sumTotalTime: 0
    }
  },
  methods: {
    addTask(){
      if(this.newTask.title && this.newTask.time){
        this.task = {
          id: Date.now(),
          title: this.newTask.title,
          time: parseInt(this.newTask.time)
        }
        this.tasks.push(this.task);
        this.newTask.title = '';
        this.newTask.time = null;
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      }
    },
    deleteTask(i){
      this.tasks.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
    cancel(){
      if(this.newTask.title || this.newTask.time){
        this.newTask.title = '';
        this.newTask.time = null;
      }
    }
  },
  computed: {
    totalTime(){
      var self = this;
      this.sumTotalTime = 0;
      this.tasks.forEach(function(e){
        self.sumTotalTime += e.time;
      });
      return this.sumTotalTime;
    }
  },
  created(){
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 24px;
}
.title {
  font-size: 36px;
}
.btn-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.tasks {
  margin-top: 30px;
}
.btn-delete {
  margin-left: 16px;
}
</style>


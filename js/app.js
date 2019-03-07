var demo = new Vue ({
    el: "#demo",
    data: {
        message: 'I am learning VueJS'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var task = new Vue ({
    el: "#tasks",
    data: {
        tasks: [
            {id: 1, text: 'VueJS'}, 
            {id: 2, text: 'Angular'},
            {id: 3, text: 'ReactJS'}, 
            {id: 4, text: 'Jquery'}
        ],
        newTask: ""
    },
    methods: {
        addTask: function(e) {
            e.preventDefault();
            this.tasks.push({id: 5, text: this.newTask });
            this.newTask= "";
        }
    }

})

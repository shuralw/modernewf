const app = Vue.createApp({
    data() {
        return {
            todos: [
                { id: "4711", title: "Probeklausur erstellen", deadline: "14.06.2019", status: "open" },
                { id: "4712", title: "Klausur erstellen", deadline: "01.07.2019", status: "open" }
            ]
        }
    },
    methods: {
        save(todo, index) {
            // console.log("save todo:" + JSON.stringify(todo));
            // console.log(todo.id);
            this.todos[index] = todo;
            console.log(this.todos);
        }
    }
})



// showDetails: function (event) {
//     30 this.$parent.getOrder(event.target.dataset.id)
//     31 .then(order => {
//     32 order.lieferzeit = new Date(order.lieferzeit);
//     33 this.$parent.order = Vue.observable(order);
//     34 window.form.hidden = false;
//     35 });
//     36 },

app.mount('#app')
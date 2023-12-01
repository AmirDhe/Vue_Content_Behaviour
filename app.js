const app = Vue.createApp({
    data() {
        return {
            items: items,
            currentIndex: 0,
            showDescription: false
        };
    },
    computed: {
        currentItem() {
            return this.items[this.currentIndex];
        }
    },
    methods: {
        nextItem() {
            if (this.currentIndex < this.items.length - 1) {
                this.currentIndex++;
            }
        },
        prevItem() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        toggleDisplay() {
            this.showDescription = !this.showDescription;
        }
    }
});

app.mount('#app');



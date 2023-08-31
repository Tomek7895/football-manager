<template>
    <div class="font-weight-medium">{{ currentTime }}</div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: '',
        }
    },
    mounted() {
        this.dateUpdate()
        setInterval (this.dateUpdate, 1000)
    },
    methods: {
        dateUpdate() {
            const now = new Date()
            this.currentTime = now.toLocaleString();
        },
    },
}
</script>

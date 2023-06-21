<template>
    <div class="text-center">
        <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'PaymentFailed',
    mounted(){
        localStorage.removeItem("sessionId")
        window.location.href = '/order'
    }
}
</script>
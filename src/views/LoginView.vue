<template>
    <div id="login">
        <LoginForm></LoginForm>
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'

</script>

<style scope>
    #login{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>
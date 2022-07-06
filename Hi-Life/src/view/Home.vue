<script>
import Update from '../components/Update.vue';
import SignupForm from '../components/SignupForm.vue';
import ChangePassword from '../components/ChangePassword.vue';

export default {
    name: "Home",
    data() {
        return {};
    },
    components: { Update, SignupForm, ChangePassword }
}

</script>
<template>
    <body>
        <LoginForm></LoginForm>
    </body>   
</template>

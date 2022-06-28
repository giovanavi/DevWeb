<template>
    <div>
        <h2>Meu Formulário</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>        
    </div>
</template>

<script>
import InputText from './from/InputText.vue'
import Submit from './from/Submit.vue'

export default{
    name: 'Form',
    data(){
        return {
            name : "",
            email : ""
        }
    },
    components:{
        InputText,
        Submit
    },
    methods: {
        enviarFormulario(e){
            e.preventDefault()
            
            const name = this.name
            const email = this.email

            console.log("Formulário enviado")
        }
    }
}
</script>

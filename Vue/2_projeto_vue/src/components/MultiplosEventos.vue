<template>
    <div>
        <button @click="primeiro(txt ,$event), segundo($event)"> Ativar multiplos eventos </button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default{
    name : 'Multiplos Eventos',
    data(){
        return{
            multiplos_eventos: "",
            txt : "Primeiro evento"
        }
    },methods:{
        primeiro(txt,e){
            this.multiplos_eventos = txt
        },
        segundo(e){
            setTimeout(() => this.multiplos_eventos = "Segundo evento", 500)
        }
    }
}
</script>

<style scoped>
    div{
        margin: 100px;
    }
</style>
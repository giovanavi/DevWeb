<template>
    <div>
        <h1>Hello Vue!!</h1>
        <p> Meu nome é {{nome}} </p>
        <MultiplosEventos />
        <Reutilizacao/>
    </div>   
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'

export default {
    name: 'PrimeiroComponente',
    components: {
    MultiplosEventos,
    Reutilizacao
},
    data(){
        return{
            nome: "Giovana"
        }
    }
}
</script>

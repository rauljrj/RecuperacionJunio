<template>
    <div class="container">
        <h2>Proyecto Vue.js - Raúl Ruiz Juárez</h2>
        <p></p>
        <div class="form-group" id="input">
            <input type="nota" class="form-control" id="inputNota" aria-describedby="notas" placeholder="¿Qué quieres recordar?" v-model="nombre" @keyup.enter="nuevaNota">
        </div>
        <div class="form-group" id="tareas">
            <small><img id="grafico" class="mr-1" src="@/assets/grafico.png">{{pendientes}} Tareas pendientes de un total de {{this.notas.length}} |</small>
            <small id="borraComple" @click="borraCompletadas">X Borrar tareas completadas</small>
        </div>
        <p></p>
        <div id="notas" class="list-group" v-for="(nota,index) of notasPorImportancia">
            <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                <div class="row">
                    <div class="round">
                    <input class="radio" type="checkbox" v-model="nota.realizada">
                    <label for="checkbox"></label>
                    </div>
                    <h1 v-bind:class="[{realizado : nota.realizada},'col-11','d-flex justify-content-start']">{{nota.nombre}}</h1>
                    <button id="borrar" class="btn btn-danger" @click="borrar(index)"><img id="foto" class="" src="@/assets/prohibido.png"></button>
                </div>
            
                <div class="d-flex w-100 justify-content-between row">
                    <small>Prioridad:</small>
                    <button type="button" :class="['btn btn-sm py-0 px-1', notas[index].importancia==1 ? ['b1','btn btn-info'] : 'desactivado',]"
                        @click="importancia(index,'1')"><img id="low" src="@/assets/low.svg"> Low</button>
                    <button type="button" :class="['btn btn-sm py-0 px-1', notas[index].importancia==2 ? ['b1','btn btn-primary'] : 'desactivado',]"
                        @click="importancia(index,'2')">normal</button>
                    <button :class="['btn btn-sm py-0 px-1', notas[index].importancia==3 ? ['b1','btn btn-danger'] : 'desactivado',]"
                        @click="importancia(index,'3')">High<img id="foto" src="@/assets/high.png"></button>
                    <small>añadido hace {{nota.minutos}} minutos</small>
                </div>
            </a>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'cuerpo',
  props: {
    msg: String
  },
data() {
  return {
    notas: [],
    nombre: ""
  
  };
},

methods: {
    nuevaNota: function(){
        this.notas.push({
            nombre: this.nombre,
            realizada: false,
            importancia: "1",
            minutos: 0,
            segundos: 0
        });
        

            
        setInterval(()=>{
            for (var i = 0; i<this.notas.length; i++){
                if (this.notas[i].realizada == false){  
                    if(this.notas[i].segundos > 59) {
                        this.notas[i].segundos = 0;
                        this.notas[i].minutos++;
                        }
                    this.notas[i].segundos++;
                }            
            }
            
        }, 1000);
        this.nombre = "";
        this.notas.realizada = true;
      },
      borrar: function(index) {
        this.notas.splice(index, 1);
      },
      
      borraCompletadas: function() {
        this.notas = this.notas.filter(nota => !nota.realizada)
      },
      importancia: function(index, n){
        this.notas[index].importancia = n;
      }
    },
    updated: function() {
        localStorage.setItem("proyecto_vue", JSON.stringify(this.notas));
    },
    computed: {
        pendientes: function() {
            return this.notas.filter(nota => !nota.realizada).length;
        },
    
        notasPorImportancia: function() {
            return this.notas
            .sort((a, b) => b.importancia - a.importancia)
            }
    },
    mounted: function() {
        var almacenar = JSON.parse(localStorage.getItem("proyecto_vue"));
        if(almacenar == null) {
            this.notas = [];
        }
        else {
            this.notas = almacenar;
        }
    } 
}

</script>

<style scoped>    
    #tareas{
        border-top: 1px solid grey;
    }
    
    #notas{
        border-top: 1px solid grey;
    }
    p {
        border-top: 1px solid grey;
    }
    
    #foto{
        width:20px;
        height:20px;
        
    }
    #low{
        width:10px;
        height:10px;
    }
    #grafico {
        width:30px;
        height:30px;
    }
    #borraComple{
        color: orange;
    }
    .realizado {
        text-decoration: line-through;
        color: rgb(17, 185, 129);
        }
        
    .radio{
        width:25px;
        height:25px;
    }
    #borrar{
        width:50px;
        height:50px;
    }
    
    small {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
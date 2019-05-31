<template>
    <footer class="pie">
        <div class="container">
            <small>Desarrollado por Raúl
            <p>Código disponible en <a href="https://github.com/rauljrj/RecuperacionJunio/tree/master/proyecto_vue"> <img src="@/assets/git.png"> gitHub</a></p>
            </small>
        </div>
    </footer>
    
</template>

<script>
export default {
  name: 'pie',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    
    .pie{
        margin: 0 auto;
        bottom: 0;
        text-align: center;

    }
    img {
        width: 20px;
        height:20px;
    }
</style>
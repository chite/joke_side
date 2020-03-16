<template>
    <article>
    <div>
        <button>EDIT</button>
    </div>
    <section>
        <div>
            {{jokeObj.text}}
        </div>
    </section>
    </article>
</template>
<script>
export default {
    name: 'Detail',
    data: function(){
        return {
            jokeObj: {text:''},
            edit: false,
            
        }
    },
    created(){
        if(this.$route.params.index){
            this.jokeObj = this.$store.state.jokes[this.$route.params.index];
        }

    },
    methods:{

    }

}
</script>
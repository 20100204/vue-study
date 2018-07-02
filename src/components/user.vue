<template>
    <div>
        user
        <hr>
         <div>
             <router-link v-for="item in user" :key="item.id"  :to="{path:'/user/'+item.id,query:{info:'focus'}}"> {{item.userName}}
             </router-link>
         </div>
        <hr>
        <h3>userInfo</h3>
        <div v-if="userInfo.id">{{userInfo.id}}=={{userInfo.userName}}=={{userInfo.sex}}=={{userInfo.hobby}}</div>
                <hr>
           <div>
               <router-link exact to="?info=focus&a=1">他的关注</router-link>
               <router-link exact to="?info=share">他的分享</router-link>
           </div>
        {{$route.query}}
    </div>
</template>

<script>
    import user from '../data/user.js'
    export default {
        name: "user",
        data(){
            return {

                    user:[],
                    userInfo:{},

            }
        },
        watch:{
            '$route'(){
                this.getData();
            }

        },
        methods:{
            getData(){
                let id =  this.$route.params.userId;

                if(id){
                    this.userInfo =  this.user.filter((item)=>{
                       return item.id==id;
                    })[0]
                }
            },
        },
        mounted(){
            this.user = user;
            this.getData();
        }
    }
</script>

<style scoped>

</style>

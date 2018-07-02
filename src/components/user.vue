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
        {{rt}}
    </div>
</template>

<script>
    import user from '../data/user.js'
    export default {
        name: "user",
        beforeCreate(){
            console.log("组件的钩子函数执行了么，在beforeRouteEnter执行之前")
        },
        beforeRouteEnter(to,from,next){
            console.log('组件内导航,进入前执行,该函数执行时，组件还没有被创建，this不能直接用');
            console.log(this);
            next((vm)=>{
                vm.rt="rrrttt";
                console.log(vm.rt+'vm表示组件实例');
            });
        },
        beforeRouteUpdate(to,from,next){
            console.log("导航更新时执行");
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log("离开时执行");
            console.log(this.userInfo);
        },
        data(){
            return {
                    rt:'rt',
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

<template>
    <div>
        i am is about
        <hr>
        <ul>
            <router-link :to="{name:'about'}" exact tag="li" event="mouseover">
                <a>
                    study
                </a>
            </router-link>
            <router-link :to="{name:'work'}" tag="li" event="mouseover"> work</router-link>
            <router-link :to="{name:'hobby'}" tag="li" event="mouseover"> hobby</router-link>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>

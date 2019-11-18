<template>
    <div class="droplist">
        <div class="scrollview">
            <div class="sortlist">
                <a>综合排序</a>
                <a @click="timesort()">近期销量优先</a>
                <a @click="lhsort()">价格从低到高</a>
                <a @click="hlsort()">价格从高到低</a>
                <a>评分从高到低</a>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    methods:{
        timesort(){
            this.$observer.$emit("sort");
            this.$store.dispatch("handlesalessort");
        },
        lhsort(){
            this.$store.dispatch("handlelhsort");
        },
        hlsort(){
            this.$store.dispatch("handlehlsort");
        }

    }
}
</script>>
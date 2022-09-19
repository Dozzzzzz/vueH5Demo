<template>
    <div id="box">
        <div id="content">
            <div id="title"><b>主页</b></div>
           
            <div id="confirmTab"  @click="nextContract">确认</div>

        </div>

    </div>
</template>
<script>
export default {
    
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
       
        nextContract(){//点击下一步
            console.log("点击")
            this.$router.push('/')
        }
    },
}
</script>
<style  scoped>
#box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(221, 221, 221, 0.8);
    padding: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
}
#title{
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

#content {
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 30px;
    text-align: justify;
    overflow-y: scroll;
    font-size: 28px;
}
#signature{
    text-align: end;
}
#confirmTab{
    margin: 0 auto;
    margin-top: 50px;
    height:60px;
    line-height: 60px;
    width:200px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #5D9EFF;
    color: #FFFFFF;
    

}
</style>

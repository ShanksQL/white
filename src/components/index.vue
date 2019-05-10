<template>
    <!-- 在这里写html  最外层必须要包一个div-->
    <div>
        <div>{{info}}</div>
        <button @click="request">发请求得数据</button>
    </div>

</template>

<script>
    export default {
        data() { //data这里一定要写return return里面可以是 数组 对象 字符串都可以
            return {
                info: "xxx内容"
            };
        },
        // created是页面创建时触发的函数  vue自带的生命周期 一般页面初始化的时候把请求放在这里
        created() {
            //   比如这里写一个
            // this.request()
        },
        methods: {
            request() {
                this.axios.get("/user?ID=12345").then(function (res) {
                    // 成功时候的回调
                    this.info = res.data;
                })
                    .catch(function (error) {
                        // 失败时候的回调
                        console.log(error);
                    })
                // 或者用这种
                /* this.axios.get("/user", {
                    params: {
                      ID: 12345
                    }
                  })
                  .then(function(res) {
                    console.log(res);
                  })
                  .catch(function(error) {
                    console.log(error);
                  }); */
                // post请求
                /*    this.axios.post('/user', {
                       firstName: 'Fred',
                       lastName: 'Flintstone'
                       }).then(function (response) {
                               console.log(response);
                           })
                           .catch(function (error) {
                               console.log(error);
                           }) */
            }
        }
    };
</script>

<style>
</style>

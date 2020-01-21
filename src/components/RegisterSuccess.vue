<template>
  <div class="active-head">
    <body id = "active-head">
    <!--<h3>注册成功页面</h3>-->
    <div style="line-height: 44px;margin-left: 5px">
      <span style="color: white;font-family: Arial;font-size: 18px">insane - 注册成功页面</span>
    </div>
    <div class="content">
      <div class="single-clear">

      </div>

      <div class="register-success">
        <i class="icon-2x icon-check-circle-o" style="color: green"></i>&nbsp;&nbsp;<span style="font-size: 25px">恭喜注册成功！</span>
      </div>

      <div class="single-clear">

      </div>

      <div class="register-active">
        <span style="font-size: 15px;font-weight: bold;padding: 20px;line-height: 100px">激活邮件已经发送到您的注册邮箱{{validateForm.email}},点击邮件里的链接即可激活账号。</span><br/>
        <el-button style="margin-left: 20px;" class="btn btn-primary" type="button" @click="lookEmail();">立即查看邮件</el-button>
      </div>

      <div class="single-clear">

      </div>

      <div class="register-question">
        <a>还没有收到邮件?</a><br/><br/>
        1.稍等片刻,重新检查您的收件箱（根据网络状况,可能需要2-5分钟您才能收到）<br/><br/>
        2.您可以选择<el-button style="margin-left: 10px;"  id="reBtn" @click="reSendEmail()" type="button">重新发送邮件</el-button><br/><br/>
        3.邮件地址写错了?抱歉,您需要<el-button style="margin-left: 10px;"  id="btn" type="button" @click="reRegist();">重新注册</el-button><br/><br/>
      </div>

    </div>

    <div class="foot" style="position: absolute;left: 280px;float: left;">
      <div class="foot-nav clearfix">
        <div class="foot-nav-col">
          <h3>
            关于
          </h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                关于梦境网
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                加入我们
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                联系方式
              </a>
            </li>
          </ul>
        </div>
        <div class="foot-nav-col">
          <h3>
            帮助
          </h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                在线反馈
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                用户协议
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="nofollow">
                隐私政策
              </a>
            </li>
          </ul>
        </div>
        <div class="foot-nav-col">
          <h3>
            下载
          </h3>
          <ul>
            <li>
              <a href="#"
                 target="_blank" rel="external nofollow">
                Android 客户端
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="external nofollow">
                iPhone 客户端
              </a>
            </li>
          </ul>
        </div>
        <div class="foot-nav-col">
          <h3>
            关注
          </h3>
          <ul>
            <li>
              <a href="http://www.dreamland.wang" onMouseOut="hideImg()"  onmouseover="showImg()">
                微信
                <div id="wxImg" style="display:none;height:50px;back-ground:#f00;position:absolute;">
                  <img src="images/dreamland.png"/><br/>
                  手机扫描二维码关注
                </div>
                <!-- <div class="foot-wechat-tips">
                    &lt;!&ndash; <span class="foot-wechat-icon"></span>&ndash;&gt;
                     <span class=" icon icon-wechat icon-2x"></span>
                     手机扫描二维码关注
                 </div>-->
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="external nofollow">
                新浪微博
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="external nofollow">
                QQ空间
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- rgba(60,63,65,0.31)-->
      <hr style="position: absolute;background-color: rgba(161,171,175,0.31);width: 1000px;height: 1px;left: 0px"/>
      <hr style="position: absolute;background-color: rgba(161,171,175,0.31);width: 1000px;height: 1px;left: 0px"/>
      <div class="foot-nav clearfix" style="position: absolute;left: 0px;margin-top: 40px;text-align: center">
        <div class="foot-copyrights" style="margin-left: 200px">
          <p>
            互联网ICP备案：京ICP备xxxxxx号-1
          </p>
          <p>
            <span>违法和不良信息举报电话：010-xxxxxxx</span>
            <span>邮箱：xxx@dreamland.wang</span>
          </p>
          <p style="margin-top: 8px">&copy;www.dreamland.wang 梦境网版权所有</p>
        </div>
      </div>

    </div>
    </body>
  </div>

</template>

<script>
  export default {
    name: 'RegisterSuccess',
    data(){
      return{
        validateForm:{
          email: '',
          validateCode: '',
          message:'',
        }
      }
    },
    props:{

    },
    created:function() {
      this.getParams();
    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$router': 'getParams'
    },
    methods:{
      lookEmail() {
        // var opt = this.email.split("@")[1];
        console.log(this.validateForm.email)
        var opt = this.validateForm.email.split("@")[1];
        if("qq.com"===opt){
          location.href = "https://mail.qq.com/";
        }else if("163.com"===opt){
          location.href = "https://mail.163.com/";
        }else if("162.com"===opt){
          location.href = "https://mail.162.com/";
        }else if("sina.com"===opt){
          location.href = "http://mail.sina.com.cn/";
        }else if("sohu"===opt){
          location.href = "https://mail.sohu.com";
        }
      },
      reSendEmail: function (message) {
        // var arr = message.split(',')
        // var email = arr[0]
        // var validateCode = arr[1]
        this.$axios.post('/user/sendEmail', {
          /*email: this.validateForm.email,
          validateCode: this.validateForm.validateCode,*/
          email:this.email,
          validateCode:this.validateCode,
        })
          .then(response => {
            if(response.data.code ===200){
              this.$alert(response.data.message,'提示',{
                confirmButtonText:'确定'
              })
              this.$router.replace({path:'/registerSuccess'})
            }else{
              this.$alert(response.data.data,'提示',{
                confirmButtonText:'确定'
              })
            }
              })
          .catch(response =>{
            console.log(response)
            this.$alert("激活失败")
          })
      },
      reRegist(){
        this.$router.push({path:'/register'})
      },
      getParams:function(){
        // console.log(this.$route.query.email)
        this.validateForm.email = this.$route.query.email
          this.validateForm.validateCode = this.$route.query.validateCode
        console.log(this.validateForm.email)
      }
    }
  }
</script>

<style scoped>

  body,html{
    background-color: #EBEBEB;
    padding: 0;
    margin: 0;
    height:100%;
  }
  .active-head{
    height: 50px;
    width: 100%;
    background-color: brown;
  }
  #active-head{
    height: 50px;
    width: 100%;
    background-color: brown;
  }
  .content{

    height: auto;
    height: 700px;
    width: auto;
    width: 1100px;
    margin-top: 5px;
    margin-left: 200px;
    margin-right: 180px;
  }
  .register-active{
    background-color: white;
    height: 200px;
    width: 1000px;
  }
  .register-success{
    background-color: white;
    height: 100px;
    width: 1000px;
    text-align: center;
    line-height: 90px;
  }

  .register-question{
    background-color: white;
    height: 350px;
    width: 1000px;
    padding: 30px;
  }
  .single-clear{
    background-color: whitesmoke;
    height: 5px;
  }


  .foot-nav-col li{
    list-style: none;
    margin-left: 100px;
  }
  .foot-nav-col h3{
    margin-left:120px;
  }
  .foot-nav-col a{
    text-decoration:none;
    color:grey;

  }
  .foot-nav-col a:link,a:visited { color:grey;}
  .foot-nav-col a:hover,a:active { color: purple;}

  .foot-nav-col{
    float: left;
  }
</style>

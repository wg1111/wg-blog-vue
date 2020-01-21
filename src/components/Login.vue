<template>
  <body id="poster">
<el-form class="login_container"  :model="loginForm" ref="loginForm"
         :rules="rules" label-width="0px" v-loading="loading">
  <h3 class="login_title">系统登录</h3>
  <el-form-item prop="username">
    <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码">
    </el-input>
  </el-form-item>
  <el-form-item prop="code">
    <el-input type="text" v-model="loginForm.code" autocomplete="off" @keyup.enter.native="login('loginForm')" placeholder="请输入验证码">
      <template slot="append">
        <div class-code="login-code" @click="refreshCode">
          <Identify :identifyCode="identifyCode" ></Identify>
        </div>
      </template>
    </el-input>
  </el-form-item>
    <el-checkbox class="login_remember" v-model="checked"
                 label-position="left"><span style="color: #505458">记住密码</span>
    </el-checkbox>
    <el-form-item style="width: 100%" />
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 50%;background: #505458;border: none" @click="login('loginForm')">登录</el-button>
      <br>
      <router-link to="register"><el-button type="primary" style="width: 50%;background: #505458;border: none">注册</el-button></router-link>

  </el-form-item>
</el-form>
  </body>
</template>

<script>
  import Identify from "../components/Identify"
  export default {
    name: 'Login',
    components:{Identify},
    data() {
      return {
        loginForm: {
          username:'',
          password:'',
          code:''
        },
        rules:{
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
          code:[{required: true, message:'验证码不能为空', trigger: 'blur'}]
        },
        identifyCodes:'1234567890abcdefjhijklinopqrsduvwxyz',
        identifyCode:'',
        checked:true,
        loading:false,
        responseResult: []
      }
    },
    mounted(){
      //初始化验证码
      this.identifyCode=''
      this.makeCode(this.identifyCodes,4)
    },
    methods: {
      makeCode(o,l){
        for(let i = 0;i < l;i++){
          this.identifyCode+= this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]
        }
      },
      // 生成一个随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      refreshCode(){
        this.identifyCode=''
        this.makeCode(this.identifyCodes,4)
      },
      login(data){
        if(this.loginForm.code.toLowerCase() !== this.identifyCode.toLowerCase()){
          this.$message.error("验证码错误")
          this.refreshCode()
          return
        }else{
          this.$refs[data].validate(valid =>{
            if(valid){
              this.$axios
                .post('/user/login',{
                  username:this.loginForm.username,
                  password:this.loginForm.password
                })
                .then(rep => {
                  if(rep.data.code === 200){
                    this.$router.replace({path:'/index'})
                  }else{
                    this.$alert(rep.data.message,'提示',{
                      confirmButtonText:'确定'
                    })
                  }
                })
                .catch(failResponse => {})
            }else{
              this.$alert('表单校验失败','提示',{
                confirmButtonText:"确定"
              })
            }
          })
        }
      },
      /*onSubmit() {
        console.log('submit!');
      }*/
    }
  }
</script>

<style>
  #poster {
    background:url("../assets/icon1.jpg") no-repeat;
    background-position: center;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login_container{
    border-radius: 15px;
    background-clip:padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border:1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

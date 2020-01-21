<template>
<div id=" register">
  <body id ="registerForm">
  <el-form class="register_container" :model="registerForm"  :rules="rules" ref="registerForm" label-width="0px" >
    <h3 class="poster">欢迎注册</h3>
    <el-form-item prop="username" >
      <el-input  type="text" v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item prop="password2">
      <el-input type="password" v-model="registerForm.password2" autocomplete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input type="text" v-model="registerForm.phone" autocomplete="off" placeholder="请输入手机号码"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input type="text" v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱"
                @keyup.enter.native="register('registerForm')"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 40%;background: #505458;border: none" @click="register('registerForm')">注册</el-button>
    </el-form-item>
  </el-form>
  <RegisterSuccess :email="registerForm.email" :validateCode="registerForm.validateCode"></RegisterSuccess>
  </body>
</div>
</template>

<script>
  import RegisterSuccess from './RegisterSuccess'
  export default {
    name: 'Register',
    components: {RegisterSuccess},
    data(){
      var validatePassword = (rule, value, callback) => {
        if (value !== this.registerForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("手机号不能为空,请输入手机号"));
        }
        if (!/^1[3-9][0-9]{9}$/.test(value)) {
          callback(new Error("手机号错误，请重新输入"));
        }else{
          callback();
        }
      };
      // 邮箱校验
      let validateEmail = (rule, value, callback) => {
        if (!value) {
          callback(new Error('邮箱不可为空'))
        } else {
          if (value !== '') {
            let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if (!reg.test(value)) {
              callback(new Error('请输入格式正确有效的邮箱号'))
            }
          }
          callback()
        }
      };
      return {
        registerForm:{
          username:'',
          password:'',
          password2:'',
          phone:'',
          email:'',
          validateCode:'',
        },
        rules:{
          username:[
            {required: true,message: "请输入用户名",trigger: "blur"},
            {min:3,max: 8,message: "用户名长度应在3到8个字符",trigger: "blur"}
          ],
          password:[
            {required: true, message: "请输入密码", trigger:"blur"},
            {min: 8, max: 16, message: "密码长度应为8~12位", trigger: "blur"}
          ],
          password2:[
            {required: true, message: "确认密码不能为空", trigger:"blur"},
            {min: 8, max: 16, message: "密码长度应为8~12位", trigger: "blur"},
            {validator: validatePassword, trigger:"blur"}
          ],
          phone:[
            {required: true, message: "手机号码不能为空", trigger: "blur"},
            {validator: validatePhone, trigger: "blur"}
          ],
          email:[
            {type: "email", required: true, message: "请输入正确的邮箱格式", trigger: "blur"},
            {validator: validateEmail, trigger:"blur"}
          ],
        },
        loading: false
      }
    },
    methods: {
      register(registerForm){
      this.$refs[registerForm].validate(valid=>{
        if (valid){
          var _this = this
        this.$axios.post('/user/register',{
          username:this.registerForm.username,
          password:this.registerForm.password,
          phone:this.registerForm.phone,
          email:this.registerForm.email,
        })
          .then(response =>{
            if (response.data.code===200){
              //_this.registerForm.message=response.data.data.split(","),
              var arr=response.data.data.split(",")
              _this.registerForm.email=arr[0],
                _this.registerForm.validateCode=arr[1],
              this.$alert('注册成功','提示',{
                confirmButtonText:'确定'
              })
              //跳转并向RegisterSuccess组件传值
              var flag = this.$router.resolve({
                name:"RegisterSuccess",
                query:{
                  email:_this.registerForm.email,
                  validateCode:_this.registerForm.validateCode,
                }
              });
              window.open(flag.href)
            }else {
              this.$alert(response.data.message,'提示',{
                confirmButtonText:'确定'
              })
            }
          })
          .catch(response =>{
            console.log(response)
            this.$alert("注册失败")
          })
        }else{
          this.alert("表单校验失败",'提示',{
            confirmButtonText:'确定'
          })
        }
      })
      }
    }
  }
</script>

<style scoped>
  #registerForm {
    background: url("../assets/icon3.jpg") no-repeat;
    background-position: center;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body{margin: -5px 0px;}
  .register_container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .poster{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

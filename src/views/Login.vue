<template>
  <div id="background" v-show="!islogin">
    <div id="contain">
      <h1>注册</h1>

      <div class="form">
        <label>用户名：</label><input type="text" v-model="login.name" /><br />
      </div>
      <div class="form">
        <label>密码：</label
        ><input type="password" v-model="login.password" /><br />
      </div>
      <div class="form">
        <label>邮箱：</label
        ><input type="email" v-model.trim="login.mail" /><br />
      </div>
      <div class="form">
        <label>手机号：</label
        ><input type="tel" v-model.trim="login.tel" /><br />
      </div>
      <button @click.prevent="handlefinish">注册</button>
    </div>
  </div>

  <div id="background" v-show="islogin">
    <div class="container">
      <form action="">
        <h1>登录</h1>
        <div class="form">
          <div class="item">
            <label>用户名：</label
            ><input
              type="text"
              name="username"
              v-model.trim="reg.name"
              placeholder="请输入用户名"
            />
            <!-- v-model把输入的值传输给name变量 -->
            <br />
          </div>
          <div class="item">
            <label>密码：</label
            ><input
              type="password"
              name="password"
              v-model.trim="reg.password"
              placeholder="请输入密码"
            />
            <br />
          </div>
        </div>
      </form>
      <button type="submit" @click.prevent="handlelogin">登录</button>
      <!-- v-on点击按钮触发handlelogin方法 -->
      <!-- <button @click.prevent="handleregister">注册</button> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      islogin: false,
      login: {
        name: "",
        password: "",
        mail: "",
        tel: "",
      },
      reg: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["updatauser"]),
    //点击登录
    async handlelogin() {
      const { name, password } = this.reg;
      if (name && password) {
        let { data } = await this.$axios({
          method: "POST",
          url: "/reglogin",
          data: {
            name,
            password,
          },
        });
        console.log(data);
        if (data.code == 200) {
          this.$router.push("/");
          this.$message.success(data.message);
          this.updatauser(data.data);
        } else {
          this.$message.success(data.message);
        }
      } else {
        this.$message.error("输入的内容不能为空");
      }
    },
    //点击注册
    async handlefinish() {
      const { name, password } = this.login;
      if (name && password) {
        let { data } = await this.$axios({
          method: "POST",
          url: "/login",
          data: {
            name,
            password,
          },
        });
        console.log(data);
        if (data.code == 200) {
          this.islogin = true;
          this.$message.success(data.message);
        } else if (data.code == "2") {
          this.islogin = true;
          this.$message.success(data.message);
        }
      } else {
        this.$message.error("输入的内容不能为空");
      }
    },
  },
};
</script>

<style scoped>
#background {
  width: 100%;
  height: 100%;
  /* background: url("../assets/bg2.jpg"); */
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.container {
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container h1 {
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  /* margin-left: 15%; */
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
  display: flex;
}
.item label {
  float: left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input {
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana, Tahoma, sans-serif;
  width: 200px;
  height: 23px;
  background: #f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button {
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;
}
.keep {
  color: white;
}
.keep input {
  width: 15px;
  height: 15px;
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}
#contain {
  width: 580px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  text-align: center;
  border-radius: 20px;
}
#contain h1 {
  color: white;
}
.form {
  color: white;
  margin-left: 20%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}
label {
  float: left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,
textarea {
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana, Tahoma, sans-serif;
  width: 200px;
  height: 20px;
  background: #f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,
textarea:hover,
input:focus,
textarea:focus {
  border-color: #0d0aa1;
}
button {
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
}
</style>

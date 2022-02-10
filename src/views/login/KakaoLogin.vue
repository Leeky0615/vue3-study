<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222">
    </a>
    <a id="custom-logout-btn" @click="kakaoLogout()">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222">
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      simpleData: ''
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'gender, profile_image, profile_nickname',
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account;
          const gender = kakao_account.gender;
          const image = kakao_account.profile.image;
          const nickname = kakao_account.profile.nickname;
          console.log('gender', gender);
          console.log('image', image);
          console.log('nickname', nickname);

          // 로그인 처리 구현
          alert("로그인 성공");
        },
        fail: error => {
          console.log(error);
        }
      })
    },
    kakaoLogout(){
      window.Kakao.Auth.logout((response)=>{
        // 로그아웃
        console.log(response);
      })
    }
  }
}
</script>

<style>

</style>
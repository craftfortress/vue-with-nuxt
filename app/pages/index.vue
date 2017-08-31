<template>
  <div class="cover">
    <div class="cover-inner">
      <div class="col-sm-8">
        <div class="animationplace">
        </div>
        <div class="logo-plunq"><img src="/image/logo.png"></div>
        <div class="bg"></div>
        <div class="btn-login-wrapper">
          <div class="inner"><a @click="doLogin"><img src="/image/facebook_login.png"></a></div>
          <div class="inner"><img src="/image/gplus_login.png"></div>
          <div class="link-social">
            <span>Blog</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Youtube</span>
          </div>
          <p>© plunq 2017</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="inner">
          <h1>Temukan dan ciptakkan perjalananmu disini</h1>
          <p>Download</p>
          <div class="btn-download-wrapper">
            <a><img src="/image/playstore_logo.png"></a>
            <a><img src="/image/appstore_logo.png"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginService from '../services/login'

  export default {
    data () {
      return {
        loginService: new LoginService(),
        user: {
          email: '',
          username: '',
          imageProfile: '',
          loginType: 'WEB',
          realname: '',
          resource: ''
        },
      }
    },
    methods: {
      doLogin () {
        console.log(process.env.API_URL);
        const context = this
        window.FB.login(function (response) {
          if (response.authResponse) {
            window.FB.api('/me', {fields: 'email,id,name,picture.width(2048),birthday'},
              function (response) {
                context.user.email = response.email
                context.user.username = response.name
                context.user.imageProfile = response.picture.data.url
                context.user.loginType = 'FB'
                context.user.realname = response.id
                context.user.resource = 'WEB'

                context.loginService.save(context.user)
                  .then(function (response) {
                    console.log(JSON.stringify(response))
                  })
              })
          } else {
            console.log('User cancelled login or did not fully authorize.')
          }
        }, {scope: 'public_profile,email'})
      }
    }
  }
</script>

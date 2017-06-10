!function(){"use strict";angular.module("financeWebapp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngResource","ngRoute","ui.bootstrap","nzToggle","toastr","satellizer","naif.base64"])}(),function(){"use strict";function a(a,s,n,e){var i=this;i.message="Join Us",i.newUser={},i.newUserRequestSent=!1,i.showNewUserForm=!0,i.showNewUserInstructions=!1,i.CheckPassword=function(a,s){a==s?(i.passwordEquals=!0,i.passwordClass="passwordMatch"):(i.passwordEquals=!1,i.passwordClass="")},i.showToastr=function(){i.message="Thank you!",i.newUserRequestSent=!0,n({method:"POST",url:"https://www.itoushi.jp/api_signup.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:function(a){var s=[];for(var n in a)s.push(encodeURIComponent(n)+"="+encodeURIComponent(a[n]));return s.join("&")},data:{userfullName:i.newUser.fullName,userName:i.newUser.userName,userEmail:i.newUser.email,userPassword:i.newUser.password}}).then(function(n){a.info("Your request was succefully sent!"),s(function(){i.showNewUserForm=!1},700),s(function(){i.showNewUserInstructions=!0},1500),e.info(n)},function(a){e.info(a)})}}a.$inject=["toastr","$timeout","$http","$log"],angular.module("financeWebapp").controller("SignupController",a)}(),function(){"use strict";function a(){var a=this;a.postsId=4,a.share=function(){a.postMessage&&(a.posts.push({id:a.postsId,userAvatar:"assets/images/person64.png",message:a.postMessage,indicator:a.indicator,imageType:a.base64pic.filetype,imageBase64:a.base64pic.base64}),a.postsId++,a.postMessage="",a.indicator="",a.base64pic={})},a.posts=[{id:1,userAvatar:"assets/images/user1.png",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit itaque consectetur repellat autem, dolorum sit voluptate laboriosam natus dicta provident!",indicator:"Bullish"},{id:2,userAvatar:"assets/images/user2.png",message:"U.K. Prime Minister Theresa May's future as Britain's top politician was in doubt Friday after polls suggest her decision to call a snap election has narrowed the already-slim majority for her ruling Conservative party",image:"assets/images/TweetImages/stream_85440989-.png",indicator:"Bearish"},{id:3,userAvatar:"assets/images/user3.png",message:"German Dep ForMin: Can’t Waste Any Time Negotiating Brexit - RTRS",image:"assets/images/TweetImages/stream_85461306-.jpg",indicator:"Bearish"}]}angular.module("financeWebapp").controller("NewsfeedController",a)}(),function(){"use strict";function a(a,s){var n=this;n.authenticate=function(s){a.authenticate(s)},n.login=function(){s.info("Sample login request should be sent to the server now...")}}a.$inject=["$auth","toastr"],angular.module("financeWebapp").controller("LoginController",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("financeWebapp").directive("acmeNavbar",a)}(),function(){"use strict";function a(a,s){function n(){s.info("Sample notification"),e.classAnimation=""}var e=this;e.awesomeThings=[],e.classAnimation="",e.creationDate=1495636500727,e.showToastr=n}a.$inject=["$timeout","toastr"],angular.module("financeWebapp").controller("MainController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("financeWebapp").run(a)}(),function(){"use strict";function a(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/signup",{url:"/signup",templateUrl:"app/pages/signup/pages.signup.html",controller:"SignupController",controllerAs:"signup"}).when("/login",{url:"/login",templateUrl:"app/pages/login/pages.login.html",controller:"LoginController",controllerAs:"login"}).when("/newsfeed",{url:"/newsfeed",templateUrl:"app/pages/newsfeed/pages.newsfeed.html",controller:"NewsfeedController",controllerAs:"newsfeed"}).otherwise({redirectTo:"/"})}a.$inject=["$routeProvider"],angular.module("financeWebapp").config(a)}(),function(){"use strict";angular.module("financeWebapp")}(),function(){"use strict";function a(a,s,n){a.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!1,s.facebook({clientId:"Facebook App ID"}),s.google({clientId:"Google Client ID"}),s.twitter({clientId:"Twitter Client ID"}),s.linkedin({clientId:"LinkedIn Client ID"})}a.$inject=["$logProvider","$authProvider","toastrConfig"],angular.module("financeWebapp").config(a)}(),angular.module("financeWebapp").run(["$templateCache",function(a){a.put("app/main/main.html",'<div><acme-navbar></acme-navbar></div><div class=container><div class="jumbotron text-center"><h1>Finance WebApp</h1><p class=lead>Stockholder\'s social network</p><a href=#/newsfeed class="btn btn-lg btn-info">Go to the newsfeed</a><!--<p class="animated infinite" ng-class="main.classAnimation">\r\n      <button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Sample notification</button>\r\n    </p>--></div></div>'),a.put("app/components/navbar/navbar.html",'<!--<nav class="navbar navbar-static-top navbar-inverse">\r\n  <div class="container">\r\n    <div class="navbar-header">\r\n      <a class="navbar-brand" ng-href="http://wingcharts.com">\r\n        <span class="glyphicon glyphicon-list-alt"></span>\r\n      </a>\r\n    </div>\r\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">\r\n      <ul class="nav navbar-nav">\r\n        <li><a ng-href="#/">Home</a></li>\r\n        <li><a ng-href="#/signup">SignUp</a></li>\r\n        <li><a ng-href="#/login">Login</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>--><!--<div class="navbar  navbar-static-top navbar-inverse" >\r\n<div class="navbar-inner">\r\n    <div class="container">\r\n        <button class="btn btn-navbar" ng-click="isCollapsed = !isCollapsed"> \r\n              <span class="icon-bar"></span>\r\n              <span class="icon-bar"></span>\r\n              <span class="icon-bar"></span>\r\n        </button> <a class="brand" href="#">Short Course</a>\r\n        <div class="nav-collapse" uib-collapse="isCollapsed">\r\n            <ul class="nav">\r\n                <li><a href="#"><i class="icon-home icon-white"></i> Home</a>\r\n                </li>\r\n                <li><a href="#">Lessons</a>\r\n                </li>\r\n                <li><a href="#">Grades</a>\r\n                </li>\r\n            </ul>\r\n            <ul class="nav pull-right">\r\n                <li><a href="#/class"><i class="icon-upload icon-white"></i> Upload/Save</a>\r\n                </li>\r\n                <li><a href="#/class"><i class="icon-off icon-white"></i> Save/Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>--><nav class="navbar navbar-default navbar-static-top"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar ng-click="isNavCollapsed = !isNavCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#/ >Finance App</a></div><div id=navbar class="navbar-collapse collapse" uib-collapse=isNavCollapsed><ul class="nav navbar-nav"><li class=active><a href=#/ >Home</a></li><li><a href=#/ >About</a></li><li><a href=#/ >Contact</a></li><li><a href=#/newsfeed>Newsfeed</a></li><li><a href=http://wingcharts.com>Wingcharts</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href=#/signup>SignUp</a></li><li><a href=#/login>SignIn</a></li></ul></div><!--/.nav-collapse --></div></nav><!--<nav class="navbar navbar-default" role="navigation">\r\n		<div class="navbar-header">\r\n			<button type="button" class="navbar-toggle" ng-click="isNavCollapsed = !isNavCollapsed">\r\n				<span class="sr-only">Toggle navigation</span>\r\n				<span class="icon-bar"></span>\r\n				<span class="icon-bar"></span>\r\n				<span class="icon-bar"></span>\r\n			</button>\r\n			<a class="navbar-brand" href="#">A menu</a>\r\n		</div>\r\n		<div class="collapse navbar-collapse" uib-collapse="isNavCollapsed">\r\n			<ul class="nav navbar-nav">\r\n				<li><a href="#">Link 1</a></li>\r\n				<li><a href="#">Link 2</a></li>\r\n			</ul>\r\n		</div>\r\n	</nav>-->'),a.put("app/pages/login/pages.login.html",'<div><acme-navbar></acme-navbar></div><div class=container><div class="row main"><div class=panel-heading><div class="panel-title text-center"><h3 class=title>Login</h3><hr></div></div><div class="main-login main-center"><div><form method=post ng-submit=login.login() name=loginForm class="ng-pristine ng-invalid ng-invalid-required"><div class=form-group><label for=username class="cols-sm-2 control-label">Username</label><div class=cols-sm-10><div class=input-group><span class=input-group-addon><i class="fa fa-users fa" aria-hidden=true></i></span> <input type=text class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-minlength ng-touched" name=userName id=userName placeholder="Enter your Username" required ng-model=login.user.email></div></div></div><div class=form-group><label for=password class="cols-sm-2 control-label">Password</label><div class=cols-sm-10><div class=input-group><span class=input-group-addon><i class="fa fa-lock fa-lg" aria-hidden=true></i></span> <input type=password class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" name=password id=password placeholder="Enter your Password" required ng-model=login.user.password></div></div></div><!--<div class="form-group has-feedback">\r\n            <input class="form-control input-lg ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" name="email" \r\n              placeholder="Email" required="" autofocus="">\r\n            <span class="ion-at form-control-feedback"></span>\r\n          </div>\r\n          <div class="form-group has-feedback">\r\n            <input class="form-control input-lg ng-pristine ng-untouched ng-invalid ng-invalid-required" type="password" name="password"\r\n              ng-model="user.password" placeholder="Password" required="">\r\n            <span class="ion-key form-control-feedback"></span>\r\n          </div>--> <button type=submit ng-disabled=loginForm.$invalid class="btn btn-lg btn-block btn-success" disabled>Log in</button><br><p class="text-center text-muted"><small>Don\'t have an account yet? <a href=/#/signup>Sign up</a></small></p><div class=signup-or-separator><h6 class=text>or</h6><hr></div></form><button class="btn btn-block btn-facebook" ng-click="authenticate(\'facebook\')"><i class="fa fa-facebook"></i>&nbsp; Sign in with Facebook</button> <button class="btn btn-block btn-google-plus" ng-click="authenticate(\'google\')"><i class="fa fa-google-plus" aria-hidden=true></i>&nbsp; Sign in with Google</button> <button class="btn btn-block btn-linkedin" ng-click="authenticate(\'linkedin\')"><i class="fa fa-linkedin-square"></i>&nbsp; Sign in with LinkedIn</button> <button class="btn btn-block btn-twitter" ng-click="authenticate(\'twitter\')"><i class="fa fa-twitter"></i>&nbsp; Sign in with Twitter</button></div></div></div></div>'),a.put("app/pages/newsfeed/pages.newsfeed.html",'<div><acme-navbar></acme-navbar></div><div class=container><div class="row main"><div class=col-sm-3></div><div class="col-xs-12 col-sm-6"><div class=panel-heading><div class="panel-title text-center"><h3 class="title ng-binding">Newsfeed</h3><hr></div></div><div class="postcomment-form clearfix"><img src=assets/images/person64.png alt=... class=img-rounded><textarea class=form-control rows=3 ng-model=newsfeed.postMessage></textarea><button type=button class="btn btn-primary btn-sm" ng-click=newsfeed.share()>Share your idea</button><label class="btn btn-primary btn-sm btn-file"><span class="glyphicon glyphicon-file" aria-hidden=true></span> <input type=file ng-model=newsfeed.base64pic base-sixty-four-input do-not-parse-if-oversize style=display:none></label><nz-toggle width=70 height=26 tip-false="\'Bearish\'" tip-null="\'Not set\'" tip-true="\'Bullish\'" val-false="\'Bearish\'" val-null="" val-true="\'Bullish\'" tri-toggle on-toggle=myFunction() ng-model=newsfeed.indicator></nz-toggle></div><hr><div class="newsfeed-form clearfix"><div class="post-wrapper clearfix" ng-repeat="post in newsfeed.posts | orderBy:\'+\':true"><img ng-src={{post.userAvatar}} alt=... class="img-avatar img-rounded"><p class=post-text><span>{{ post.message}}</span> <span class="sentiment bullish" ng-if="post.indicator == \'Bullish\'">Bullish</span> <span class="sentiment bearish" ng-if="post.indicator == \'Bearish\'">Bearish</span></p><div class=post-imageWrapper><img ng-src={{post.image}} class=img-responsive> <img ng-if=post.imageBase64 data-ng-src="{{\'data:\'+post.imageType+\';base64,\'+post.imageBase64}}" class=img-responsive></div><div class=actions><button type=button class="action-btn btn btn-default btn-sm" aria-label="Left Align"><span class="glyphicon glyphicon-share-alt" aria-hidden=true></span></button> <button type=button class="action-btn btn btn-default btn-sm" aria-label="Left Align"><span class="glyphicon glyphicon-retweet" aria-hidden=true></span></button> <button type=button class="action-btn btn btn-default btn-sm" aria-label="Left Align"><span class="glyphicon glyphicon-thumbs-up" aria-hidden=true></span></button> <button type=button class="action-btn btn btn-default btn-sm" aria-label="Left Align"><span class="glyphicon glyphicon-option-horizontal" aria-hidden=true></span></button></div></div></div></div><div class=col-sm-3></div></div></div>'),a.put("app/pages/signup/pages.signup.html",'<div><acme-navbar></acme-navbar></div><div class=container><div class="row main"><div class=panel-heading><div class="panel-title text-center"><h3 class=title>{{signup.message}}</h3><hr></div></div><div class=newuser-instructions ng-show=signup.showNewUserInstructions><p class="alert alert-info">Thank you for your signup request! Please, check your email and follow verification steps.</p></div><div class="main-login main-center" ng-show=signup.showNewUserForm><form name=SignUpForm method=post action=# novalidate><div class=form-group><label for=name class="cols-sm-2 control-label">Your Full Name</label><div class=cols-sm-10><div class=input-group title="{{SignUpForm.userFullName.$invalid && SignUpForm.userFullName.$dirty == true ? \'Full name is too short\' : \'\' }}"><span class=input-group-addon><i class="fa fa-user fa" aria-hidden=true></i></span> <input type=text class=form-control name=userFullName id=userFullName placeholder="Enter your Full Name" required ng-model=signup.newUser.fullName ng-minlength=3 ng-disabled=signup.newUserRequestSent ng-class="SignUpForm.userFullName.$invalid && SignUpForm.userFullName.$dirty == true ? \'field-error\' : \'\' "></div></div></div><div class=form-group><label for=email class="cols-sm-2 control-label">Your Email</label><div class=cols-sm-10><div class=input-group title="{{SignUpForm.userEmail.$invalid && SignUpForm.userEmail.$dirty == true ? \'Wrong email!\' : \'\' }}"><span class=input-group-addon><i class="fa fa-envelope fa" aria-hidden=true></i></span> <input type=email class=form-control name=userEmail id=userEmail placeholder="Enter your Email" required ng-disabled=signup.newUserRequestSent ng-model=signup.newUser.email ng-class="SignUpForm.userEmail.$invalid && SignUpForm.userEmail.$dirty == true ? \'field-error\' : \'\' "></div></div></div><div class=form-group><label for=username class="cols-sm-2 control-label">Username</label><div class=cols-sm-10><div class=input-group title="{{SignUpForm.userName.$invalid && SignUpForm.userName.$dirty == true ? \'Your Username should consist at least 5 symbols\' : \'\' }}"><span class=input-group-addon><i class="fa fa-users fa" aria-hidden=true></i></span> <input type=text class=form-control name=userName id=userName placeholder="Enter your Username" required ng-disabled=signup.newUserRequestSent ng-model=signup.newUser.userName ng-minlength=5 ng-class="SignUpForm.userName.$invalid && SignUpForm.userName.$dirty == true ? \'field-error\' : \'\' "></div></div></div><div class=form-group><label for=password class="cols-sm-2 control-label">Password</label><div class=cols-sm-10><div class=input-group><span class=input-group-addon><i class="fa fa-lock fa-lg" aria-hidden=true></i></span> <input type=password class=form-control name=password id=password placeholder="Enter your Password" required ng-disabled=signup.newUserRequestSent ng-keyup="signup.CheckPassword(signup.newUser.password, signup.newUser.confirmPassword)" ng-class=signup.passwordClass ng-model=signup.newUser.password></div></div></div><div class=form-group><label for=confirm class="cols-sm-2 control-label">Confirm Password</label><div class=cols-sm-10><div class=input-group><span class=input-group-addon><i class="fa fa-lock fa-lg" aria-hidden=true></i></span> <input type=password class=form-control name=confirmPassword id=confirmPassword placeholder="Confirm your Password" required ng-disabled=signup.newUserRequestSent ng-keyup="signup.CheckPassword(signup.newUser.password, signup.newUser.confirmPassword)" ng-class=signup.passwordClass ng-model=signup.newUser.confirmPassword></div></div></div><div class=form-group><button type=button class="btn btn-primary btn-lg btn-block login-button" ng-disabled="SignUpForm.$invalid || !signup.passwordEquals || signup.newUserRequestSent" ng-click=signup.showToastr()>Register</button></div><div class=login-register><a ng-href=#/login>Login</a></div></form></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-77909108a2.js.map

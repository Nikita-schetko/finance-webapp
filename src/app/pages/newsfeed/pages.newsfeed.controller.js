(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('NewsfeedController', NewsfeedController);

  /** @ngInject */
  function NewsfeedController() {
    var vm = this;
    vm.postsId = 4;
    vm.share = function() 
    {
      if(vm.postMessage)
      {
        vm.posts.push({
            id: vm.postsId,
            userAvatar: "assets/images/person64.png",
            message: vm.postMessage,
            indicator: vm.indicator,
            imageType: vm.base64pic.filetype,
            imageBase64: vm.base64pic.base64
        });
        vm.postsId++;   
        vm.postMessage = '';
        vm.indicator = '';
        vm.base64pic = {}; 
      }
    }
    vm.posts = [{
     id:1,
     userAvatar:"assets/images/user1.png",
     message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit itaque consectetur repellat autem, dolorum sit voluptate laboriosam natus dicta provident!",
     indicator:"Bullish"
    },{
      id:2,
      userAvatar:"assets/images/user2.png",
      message:"U.K. Prime Minister Theresa May's future as Britain's top politician was in doubt Friday after polls suggest her decision to call a snap election has narrowed the already-slim majority for her ruling Conservative party",
      image:"assets/images/TweetImages/stream_85440989-.png",
      indicator:"Bearish"
    },{
      id:3,
      userAvatar:"assets/images/user3.png",
      message:"German Dep ForMin: Can’t Waste Any Time Negotiating Brexit - RTRS",
      image:"assets/images/TweetImages/stream_85461306-.jpg",
      indicator:"Bearish"
    }];
  }
})();

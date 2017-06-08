(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('NewsfeedController', NewsfeedController);

  /** @ngInject */
  function NewsfeedController() {
    var vm = this;
    vm.share = function() 
    {
        vm.posts.push({
            userAvatar: "assets/images/person64.png",
            message: vm.postMessage
        });   
        vm.postMessage = '';   
    }
    vm.posts = [{
     userAvatar:"assets/images/user1.png",
     message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit itaque consectetur repellat autem, dolorum sit voluptate laboriosam natus dicta provident!"
    },{
      userAvatar:"assets/images/user2.png",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora labore quasi architecto rem dolorum nam eum id dolores, ut, consectetur veniam! Reprehenderit enim quos tenetur officia rerum veniam totam fugit inventore recusandae, quasi beatae, similique excepturi voluptatibus corporis laborum, maxime magni est itaque cumque ratione."
    },{
      userAvatar:"assets/images/user3.png",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Labore maxime quia eos quas debitis eum repellat perferendis placeat, dolor. Obcaecati explicabo at eius ipsum eaque ex vero minima dignissimos, reiciendis consequuntur ut, corporis?"
    }];
  }
})();

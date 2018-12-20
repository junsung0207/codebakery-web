window.onscroll = function(){
  myFunction()
  maincontents_response()
  maincontents_response2()
};
var pic_switch = 0,pic_switch2 = 0,pic_switch3 = 0;


function myFunction(){
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {

          if(pic_switch == 0){
              document.getElementById("intro_text_group").style = "opacity:1;transition:0.5s;";
            document.getElementById("CB_group_main").style = "opacity:1;transition:1s;transform:scale(1) rotate(-5deg);";
            //document.getElementsByClassName("intro_details1")[0].style = "width:100%; transition:1s;";
          }
          pic_switch = 1;

      } else {

          if(pic_switch == 0)
          {
            document.getElementById("intro_text_group").style = "opacity:0;";
            document.getElementById("CB_group_main").style = "opacity:0;transition:0.5s;transform:scale(0.7) rotate(7deg);";
            //document.getElementsByClassName("intro_details1")[0].style = "width:0%; transition:0.7s;";
          }
      }
}
//
// function maincontents_response(){
//   if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
//     if(pic_switch2 == 0){
//     document.getElementsByClassName("intro_details2")[0].style = "width:100%; transition:1s;";
//     }
//     pic_switch2 = 1;
//   }
//
//   else {
//     if(pic_switch2 == 0){
//       document.getElementsByClassName("intro_details2")[0].style = "width:0%; transition:0.7s;";
//     }
//   }
// }
//
// function maincontents_response2(){
//   if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
//     if(pic_switch3 == 0){
//       document.getElementsByClassName("intro_details3")[0].style = "width:100%; transition:1s;";
//     }
//     pic_switch3 = 1;
//   }
//   else {
//     if(pic_switch3 == 0){
//       document.getElementsByClassName("intro_details3")[0].style = "width:0%; transition:0.7s;";
//     }
//   }
// }

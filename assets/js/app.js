jQuery(document).ready(function($) {

    $(document).ready(function() {

        var curPage = 1;
        var numOfPages = $(".skw-page").length;
        var animTime = 1000;
        var scrolling = false;
        var pgPrefix = ".skw-page-";
      
        function pagination() {
          scrolling = true;
      
          $(pgPrefix + curPage).removeClass("inactive").addClass("active");
          $(pgPrefix + (curPage - 1)).addClass("inactive");
          $(pgPrefix + (curPage + 1)).removeClass("active");
      
          setTimeout(function() {
            scrolling = false;
          }, animTime);
        };
      
        function navigateUp() {
          if (curPage === 1) return;
          curPage--;
          pagination();
        };
      
        function navigateDown() {
          if (curPage === numOfPages) return;
          curPage++;
          pagination();
        };
      
        $(document).on("mousewheel DOMMouseScroll", function(e) {
          if (scrolling) return;
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
          } else { 
            navigateDown();
          }
        });
      
        $(document).on("keydown", function(e) {
          if (scrolling) return;
          if (e.which === 38) {
            navigateUp();
          } else if (e.which === 40) {
            navigateDown();
          }
        });

        $( "#btnnext" ).click(function() {
          navigateDown();
        });

        $( "#btnprev" ).click(function() {
          navigateUp();
        });
      
      });


      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
});
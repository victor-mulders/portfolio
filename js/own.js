$('.closeall').click(function(){
              $('.panel-collapse.in')
                .collapse('hide');
            });
            $('.openall').click(function(){
              $('.panel-collapse:not(".in")')
                .collapse('show');
            });


$('#ganaarbm').click(function(){
              $('#collapse15').collapse('show');
	function show_popup(){
		$('html, body').animate({
           'scrollTop':   $('#collapse15').offset().top -120 
         }, 1000);
   };
	window.setTimeout( show_popup, 350 );
    
  });


//highlight the current nav
 $("#auto a:contains('auto')").parent().addClass('active');
 $("#motor a:contains('motor')").parent().addClass('active');
 $("#avp a:contains('avp')").parent().addClass('active');
 $("#inboedel a:contains('inboedel')").parent().addClass('active');
 $("#ov a:contains('ov')").parent().addClass('active');
 $("#rbv a:contains('rbv')").parent().addClass('active');
 $("#reis a:contains('reis')").parent().addClass('active');
 $("#whv a:contains('whv')").parent().addClass('active');



 $("#alarmeisen a[href*='alarmeisen']").parent().addClass('active');
 $("#inschaling a[href*='inschaling']").parent().addClass('active');
 $("#accessoires a[href*='accessoires']").parent().addClass('active');
 $("#polisvoorwaarden a[href*='polisvoorwaarden']").parent().addClass('active');
 $("#eigenrisico a[href*='eigenrisico']").parent().addClass('active');
 $("#tarief a[href*='tarief']").parent().addClass('active');
 $("#productcodes a[href*='productcodes']").parent().addClass('active');

 $("#index a[href*='index']").parent().addClass('active');
 $("#tp-overzicht-anac a[href*='tp-overzicht-anac']").addClass('active');
// $("#motor a:contains('motor')").parent().addClass('active');
// $("#avp a:contains('avp')").parent().addClass('active');
// $("#inboedel a:contains('inboedel')").parent().addClass('active');
// $("#ov a:contains('ov')").parent().addClass('active');
// $("#rbv a:contains('rbv')").parent().addClass('active');
// $("#reis a:contains('reis')").parent().addClass('active');
// $("#whv a:contains('whv')").parent().addClass('active');

//search in index


  // decending sort
    function sort_code(a, b){
     
      c = $(a).text().split(' - ');
      d = $(b).text().split(' - ');
     
      return (c[0]) > (d[0]) ? 1 : -1;      
    }
 
  function sort_landen(a, b){
     
      c = $(a).text().split(' - ');
      d = $(b).text().split(' - ');
     
      return (c[1]) > (d[1]) ? 1 : -1;      
    }
 
 
$('#sortcode').click(function(){
 
    $("#groenekaart li").sort(sort_code).appendTo('#groenekaart');
   
});
$('#sortlanden').click(function(){
 
    $("#groenekaart li").sort(sort_landen).appendTo('#groenekaart');
   
});


function highlightSearch() {
    var text = document.getElementById("query").value;
    var query = new RegExp("(\\b" + text + "\\b)", "gim");
    var e = document.getElementById("searchtext").innerHTML;
    var enew = e.replace(/(<span>|<\/span>)/igm, "");
    document.getElementById("searchtext").innerHTML = enew;
    var newe = enew.replace(query, "<span>$1</span>");
    document.getElementById("searchtext").innerHTML = newe;

}
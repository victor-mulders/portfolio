<script>
    $(document).ready(function() {
    setFilter();
    $('.klantenservicebox.top .ls-button').click(function(e){
    e.preventDefault();
    setFilter();
    });
    $('.klantenservicebox.top .ls-input').on('keyup', function(e){
    e.preventDefault();
    setFilter();
    });
    function setFilter(){
        var i = 0;
        var search = $('.klantenservicebox.top .ls-input').val();
        if(search != '') {
        search = search.toLowerCase();
        $('.klantenservicebox.top h2').html('De beste resultaten voor "' + search + '"');
        $('.klantenservicebox.top').find('li').each(function(){
        var $this = $(this);
        if($this.find('a').text().toLowerCase().indexOf(search) > 0 && i < 5){ $this.show(); i++; }else { $this.hide(); }
        })
        $('.klantenservicebox.top').find('li').each(function(){
        var $this = $(this);
        if($this.attr('data-search').toLowerCase().indexOf(search) > 0 && i < 5){ $this.show(); i++; }
        })
        if(i === 0){
        $('.klantenservicebox.top h2').html('Geen resultaten voor "' + search + '"');
        }
        }else{
        $('.klantenservicebox.top h2').html('De meest gestelde vragen door onze klanten');
        $(".klantenservicebox.top li").hide();
        $(".klantenservicebox.top li").slice(0,5).show();
        }
    }
    });
</script>
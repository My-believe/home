$('.li_').on('touchstart',function(){
    $('.li_').css('color','#999');
    $('.li_').next('div').css('display','none');
    

        $(this).css('color','#ff8a00');
        $(this).next('div').css('display','block');
        $('.layer').css('display','block')
})
$('.true').on('touchstart',function(){
    $('.more').css('display','none');
    $('.home').css('display','none');
    $('.layer').css('display','none');
    $('.li_').css('color','#999');
})
$('.layer').on('touchstart',function(){
    $('.li_').next('div').css('display','none');
    $('.layer').css('display','none');
    $('.li_').css('color','#999');
})
// console.log($('.li_').next('div'));

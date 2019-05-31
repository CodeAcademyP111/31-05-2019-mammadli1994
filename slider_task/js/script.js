var max = $(".slide").children().length;
//get element width
let width_slide = 100 * max + "%";
let width_item = 100 / max + "%";

$(".slide").width(width_slide);
$(".slide .item").width(width_item);


// right and left moving
let max_right = max - 1;
let count = 0;
$(".right").click(function() {
    if (count < max_right) {
        count++;
        hideLeftRight(count);
        var left = count * 100;
        $(".slide").animate({ left: "-" + left + "%" })
    }

})

$(".left").click(function() {
    if (count > 0) {
        count--;
        hideLeftRight(count);
        var left = count * 100;
        $(".slide").animate({ left: "-" + left + "%" })
    }
})

function hideLeftRight(c) {
    switch (c) {
        case 0:
            $(".left").hide();
            break;
        case max_right:
            $(".right").hide();
            break;
        default:
            $(".left").show();
            $(".right").show();
    }
}
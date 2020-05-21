jQuery(document).ready(function ($) {
    $('.btn.favorite').click(function () {
        var $obj = $(this);
        var target_id = $obj.attr('id').split('_')[1];

        var add_fav_icon = $obj.attr('data-add-fav-icon') || "fa-heart-o";
        var remove_fav_icon = $obj.attr('data-remove-fav-icon') || "fa-heart";

        var add_fav_title = $obj.attr('data-add-fav-title') || "Add to Favourites";
        var remove_fav_title = $obj.attr('data-remove-fav-title') || "Remove from Favourites";

        $obj.prop('disabled', true);
        $.ajax({
            url: $obj.attr('href'),
            type: 'POST',
            data: {
                target_model: $obj.attr('model'),
                target_object_id: target_id
            },
            success: function (response) {
                if (response.status == 'added') {
                    $obj.children().removeClass(add_fav_icon).addClass(remove_fav_icon);
                    if ($obj.attr('title') && $obj.attr('title') === add_fav_title) {
                        $obj.attr('title', remove_fav_title);
                    }
                }
                else {
                    $obj.children().removeClass(remove_fav_icon).addClass(add_fav_icon);
                    if ($obj.attr('title') && $obj.attr('title') === remove_fav_title) {
                        $obj.attr('title', add_fav_title);
                    }
                }
                //$obj.parent('.favit').children('.fav-count').text(response.fav_count);
                $obj.prop('disabled', false);
            }
        });
    });

    $('.btn.unfave').click(function () {
        var $obj = $(this);
        $obj.prop('disabled', true);
        $.ajax({
            url: $obj.attr('href'),
            type: 'POST',
            data: {
                target_model: $obj.data('model'),
                target_object_id: $obj.data('id')
            },
            success: function (response) {
                if (response.status == 'deleted') {
                    $obj.parent().remove();
                }
            },
            complete: function (response) {
                $obj.prop('disabled', false);
            }
        });
    });
});

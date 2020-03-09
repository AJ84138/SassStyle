$(document).ready(function () {
    $('.custom-slide').click(function(){
        $('.main-nav').slideToggle();
    });

    $('.disable-btn .btn-default').prop('disabled', true);
    $('th:first-child input[type="checkbox"]').change(function(){
        var checkedthis = $(this);
        var checkboxes  = $('tbody td:first-child input:checkbox');
        if(checkedthis.is(':checked')){
            checkboxes.prop('checked', true);
            $('.disable-btn .btn-default').prop('disabled', false);
        }
        else {
            checkboxes.prop('checked', false);
            $('.disable-btn .btn-default').prop('disabled', true);
        }
    });

    $('tbody td:first-child input:checkbox').click(function() {
        var listchk= $('tbody td:first-child input[type="checkbox"]:checked').length;
        if (!$(this).is(':checked')) {
            if(listchk < 1){
                $('.disable-btn').find('.btn-default').prop('disabled', true);
            }
        }else {
            $('.disable-btn').find('.btn-default').prop('disabled', false);
        }
    });

    $('.dropdown-menu input, .dropdown-menu button, .dropdown-menu li').click(function(e) {
        e.stopPropagation();
    });

    $('.dropdown-menu #search .search-box').addClass('input-sm');
    $('.dropdown-menu #search .go-btn').addClass('btn-sm');

	$('.filter-dropdown').parents('th').addClass('filter');
	
    $('.search-box').focus(function(){
       $(this).parents('#search').find('.go-btn').addClass('btn-success');
    });
    $('.search-box').blur(function(){
        $(this).parents('#search').find('.go-btn').removeClass('btn-success');
    });

    $('#add-switch-profile').click(function(){
      $('#switch-profile tbody').append('<tr><td width="90"><input type="checkbox" /></td><td><select class="form-control"><option>Cisco IP</option><option>New York</option></select></td><td><input type="text" class="form-control" /> </td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td></tr>');
    });

    $('.allocations-list-active li').click(function(){
        $('.allocations-list li').removeClass('active');
       $(this).addClass('active');
    });

    /*$('.rights li .checkbox input[type="checkbox"]').click(function(){
        if($(this).prop('checked')){
            $(this).parents('.checkbox').next('ul').slideDown();
            $(this).parents('.checkbox').find('.glyphicon-plus').hide();
            $(this).parents('.checkbox').find('.glyphicon-minus').show();

        }
        else
        {
            $(this).parents('.checkbox').next('ul').slideUp();
            $(this).parents('.checkbox').find('.glyphicon-plus').show();
            $(this).parents('.checkbox').find('.glyphicon-minus').hide();
        }
    });*/

    $('.search-for-reset-password').click(function(){
        $('#search-for-reset-password').slideDown();
    });
    $('#add-facility').click(function(){
        $('.add-facility').append('<select class="form-control"><option>Please Select</option></select>');
    });
    $('#add-guest').click(function(){
        $('.add-guest').append('<tr><td><input type="text" class="form-control" value=""></td><td><input type="text" class="form-control" value=""></td><td><input type="checkbox"></td><td><input type="text" class="form-control" value=""></td></tr>');
    });
    $('#add-reservation-display-type').click(function(){
        $('.add-reservation-display-type').append('<tr><td width="45"><input type="checkbox" /></td><td><input type="text" value="" class="form-control"></td><td><select class="form-control"><option>Color</option></select></td></tr>');
    });
    $('#add-floors').click(function(){
        $('.add-floors').append('<tr><td width="45"><input type="checkbox" /></td><td width="45"><input type="checkbox" checked /></td><td><input type="text" value="" class="form-control"></td><td><input type="text" value="" class="form-control"></td><td><input type="text" value="" class="form-control"></td></tr>');
    });
    $('#add-exemptions').click(function(){
        $('.add-exemptions').append('<tr><td width="45"><input type="checkbox" /></td><td width="45"><input type="checkbox" checked /></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control" value="05/24/2015 12:00"></td><td><input type="text" class="form-control" value="06/24/2015 12:00"></td><td><input type="text" class="form-control"></td></tr>');
    });
    $('#add-switches').click(function(){
        $('.add-switches').append('<tr><td width="45"><input type="checkbox" /></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td></tr>');
    });
    $('#add-events').click(function(){
        $('.add-events').append('<tr><td width="45"><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="text" class="form-control"></td><td><select class="form-control"><option></option></select></td><td><select class="form-control"><option></option></select></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td></tr>');
    });
    $('#add-hotspot').click(function(){
        $('.add-hotspot').append('<tr><td><input type="checkbox"></td><td>Lorem</td><td>Lorem</td><td>Lorem</td><td>Lorem</td><td>Lorem</td><td>Lorem</td><td>Lorem</td><td><a href="javascript:void(0);" class="remove-row"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></a> </td></tr>');
    });
    $('.continue').click(function(){
        $('.reset-another-user-password .choose-person').hide();
        $('#confirm-reset-password').show();
    });
    $('#view-another-profile').click(function(){
        $('.reset-another-user-password .choose-person').hide();
        $('.view-another-profile ').show();
    });
    $('.remove-row').click(function(){
        $(this).parents('tr').remove();
    });

    $('#done').click(function(){
        $('.done').show();
        $('#confirm-reset-password').hide();
    });



    $('.rights li .checkbox .glyphicon').click(function(){
        $(this).parents('.checkbox').next('ul').slideToggle();
        $(this).parents('.checkbox').find('.glyphicon-plus').toggle();
        $(this).parents('.checkbox').find('.glyphicon-minus').toggle();
    });


    $(".not-editable :input").prop("disabled", true);
    $(".not-disabled :input").prop("disabled", false);
    //$(".not-editable :input").attr("readonly", true);

    $('.edit-btn').click(function(){
       $(this).parents('.to-edit').find('.not-editable :input').prop("disabled", false);
        //$(this).parents('.panel-body').find('.not-editable :input').attr("readonly", false);
        $(this).parents('.to-edit').find('.for-save').show();
        $(this).parents('.to-edit').find('.for-edit').hide();
        $(this).parents('.to-edit').find('.disable-radio').addClass('active-radio');
        $(this).parents('.to-edit').find('.clear-all').show();
        $(this).parents('.to-edit').find('.upload-file').show();
        $(this).parents('.to-edit').find('.uploaded-file').hide();

    });
    $('.finish-edit').click(function(){
        $(this).parents('.to-edit').find('.not-editable :input').prop("disabled", true);
        $(".not-disabled :input").prop("disabled", false);
        $(this).parents('.to-edit').find('.for-save').hide();
        $(this).parents('.to-edit').find('.for-edit').show();
        $(this).parents('.to-edit').find('.disable-radio').removeClass('active-radio');
        $(this).parents('.to-edit').find('.clear-all').hide();
        $(this).parents('.to-edit').find('.upload-file').hide();
        $(this).parents('.to-edit').find('.uploaded-file').show();
    });

    $('.edit-delegates').click(function(){
        $(this).parents('#delegates').find('.search-delegates').slideDown();
        $(this).parents('.to-edit').find('.for-save').show();
        $(this).parents('.to-edit').find('.for-edit').hide();
    });
    $('.cancel-delegates, .save-delegates').click(function(){
        $(this).parents('#delegates').find('.search-delegates').slideUp();
        $(this).parents('.to-edit').find('.for-save').hide();
        $(this).parents('.to-edit').find('.for-edit').show();
    });

    $('.manage-hierarchy .textbox input[type="text"]').attr('readonly', 'true');

    $('.manage-hierarchy .textbox input[type="text"]').click(function(){
        $('.manage-hierarchy .textbox input[type="text"]').removeClass('for-editing');
        $('.manage-hierarchy .textbox').removeClass('active');
        $(this).addClass('for-editing');
        $(this).parents('.textbox').addClass('active');
    });
    $('.manage-hierarchy .textbox input[type="text"]').blur(function(){
        $(this).attr('readonly', 'true');
    });
    $('.edit-hierarchy').click(function(){
        $('.manage-hierarchy .textbox input[type="text"].for-editing').removeAttr('readonly');
        $('.manage-hierarchy .textbox input[type="text"].for-editing').focus();
    });
});
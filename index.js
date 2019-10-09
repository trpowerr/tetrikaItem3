jQuery('#root').on('click', function (event) {
    event.stopPropogation('id1');
    console.log($(event.target).attr('id1'));
})


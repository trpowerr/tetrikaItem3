jQuery('#root').on('click', function (event) {
    event.stopPropogation();
    console.log($(event.target).attr());
})


/**
 * Created by carlosgonzalez on 1/11/17.
 */


$(document).ready(function () {

    var $type = $('.type-writer').typeIt({
        strings: ['IT Major', "Certified Web developer", 'Team work', 'Agile  ', 'Independent', 'Detail Oriented', 'Profesional'],
        speed: 100,
        autoStart: true,
        breakLines: false,

    }).tiDelete(12)
        .tiPause(600)
        .tiSettings({
            speed: 50
        })
        .tiType('OH, Hi !')
        .tiPause(600)
        .tiSettings({
            speed: 100
        })
        .tiDelete(10)
        .tiPause(600)
        .tiType('Sorry about that !')
        .tiPause(600)
        .tiDelete(20)
        .tiType('Im Carlos ')
        .tiPause(600)
        .tiDelete(10)
        .tiType('<strong style="color:white ;">Welcome  !</strong>');

    $('.first-banner').html($type);



});


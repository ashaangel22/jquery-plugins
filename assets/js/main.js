$(document).ready(function(){

	console.log(("Jquery is awesome!"));
    
    $('#myContainer').multiscroll({
        sectionsColor: ['../img/moana.jpg', '#1BBC9B', '#7E8F7C'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        css3: true,
        paddingTop: '70px',
        paddingBottom: '70px',
        navigation: true,
        navigationTooltips: ['One', 'Two', 'Three'],
        loopBottom: true,
        loopTop: true,
        sectionSelector: '.section',
        leftSelector: '.left',
        rightSelector: '.right',
    });

});
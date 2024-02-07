$(document).ready(function(){
        $("a[rel^='prettyPhoto']").prettyPhoto({
                    animationSpeed: 'normal', /* fast/slow/normal */
                    padding: 40,
                    opacity: 0.75,
                    showTitle: true, /* true or false */
                    counter_separator_label: '/',
                    theme: 'light_rounded'
        });
});
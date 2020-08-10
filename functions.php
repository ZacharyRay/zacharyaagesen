<?php

/**
 * Enqueue CSS and JS files
 */
function abtion_enqueueFiles() {
	// CSS
	wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/build/main.css');
	// JS
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
    wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/build/app.js');
    wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/jquery.touchSwipe.min.js');
}
add_action('wp_enqueue_scripts', 'abtion_enqueueFiles');

/**
 * Register nav-menu
 */
register_nav_menus(array(
    'main' => 'Main Menu'
));

class subpage_Walker extends Walker_Page {

    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);

        if ($depth == 0) {
            $output .= "\n$indent<div class='pages'><ul>\n";
        } else {
            $output .= "\n$indent<ul class='sub-menu'>\n";
        }
    }

    function end_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);

        if ($depth == 0) {
            $output .= "$indent</ul></div>\n";
        } else {
            $output .= "$indent</ul>\n";
        }
    }
}
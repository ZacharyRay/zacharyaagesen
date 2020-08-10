<aside>
<ul>	
<?php


	$ID = get_queried_object_id();
	wp_list_pages([
	    'title_li' => null,
	    'depth' => 2,
	    'child_of' => $ID,
    	'walker' => new subpage_Walker(),
	]);

?>
</ul>
</aside>
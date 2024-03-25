# How to make AJAX request using fetch method 

## Server server side

Use Wordpress pre build hook

- Make sure callback function name shuld be same as action name send from frontend 
```php 

add_action('wp_ajax_ajaxcall', 'callback_function' );
add_action('wp_ajax_nopriv_ajaxcall', 'callback_function');

```

Define call back function and write your logic inside then function
return or echo your output if you echo result then write exit; other wise you will get extra 0


### Example is given below
- Put this code in function.php

```php

function ajaxcall() {

    $title = $_POST['post_title'];

	$a = [
		"name"=>"shivam",
		"title"=>$title,
	];
	echo json_encode($a);
	exit;
}
add_action('wp_ajax_ajaxcall', 'ajaxcall' );
add_action('wp_ajax_nopriv_ajaxcall', 'ajaxcall');

```


## On Front End

- Define url
- Create a FormData object 
- Don't forget to send action without action wordpress not able to get which method should call 
- Call this function according to your need

### Example is given below
- Add this code in script file or inside script tag
``` javascript

const url = "<?php echo admin_url('admin-ajax.php'); ?>";
function fetchdata(){
    const form = new FormData();
    form.append('action', 'ajaxcall');
    form.append('post_title', 'hola como estas');
    const params = new URLSearchParams(form);
    fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        },
        body: params
    }).then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response);
    }).catch(err => { 
        console.log(err);
    });
}
fetchdata();

````




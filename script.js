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


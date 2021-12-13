
function toastOnReload(color) {
     var message = localStorage.getItem("toast_on_reload_message");
    if(message)
    {
        var color = localStorage.getItem('toast_on_reload_color');
        if(color)
        {
            M.toast({html: message, classes: color});
            localStorage.removeItem('toast_on_reload_color');
        } else {
            M.toast({html: message});
        }
        localStorage.removeItem("toast_on_reload_message");
    }
}
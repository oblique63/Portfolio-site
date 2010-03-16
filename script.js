function select(link, selector)
{
    link.className = "selected";
    document.getElementById(selector).style.visibility = 'visible';
}

function deselect(link, selector)
{
    link.className = "";
    document.getElementById(selector).style.visibility = 'hidden';
}

function switchPic_on(pic)
{
    pic.setAttribute("src", "imgs/me.jpg");
}

function switchPic_off(pic)
{
    pic.setAttribute("src", "imgs/el_bunny.jpg");
}

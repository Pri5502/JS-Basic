let but=document.querySelector('button');
but.addEventListener('click',inputm);
function inputm()
{
    let no=prompt("Enter any no=");
    if(no%2==0)
    but.textContent="even";
    else
    but.textContent="Odd";
}
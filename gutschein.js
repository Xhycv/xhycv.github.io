function simpleHash(str)
{
    let hash = 0;
    for (i = 0;i < str.length; i++)
    {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function submit()
{
    var cd = document.forms["myform"]["code"].value;
    let hash = simpleHash(cd);
    if(hash === 871)
    {
        window.location = "gutschein.html";
        alert("Frohe Weihnachten!");
    }
    else if(hash === 1215)
    {
        window.location = "essen.html";
        alert("Frohe Weihnachten!");
    }
    else if(hash === 961)
    {
        window.location = "vienna.html";
        alert("Eine Reise nach ...");
    }
    else if(hash === 961)
    {
        window.location = "ohrring.html";
        alert("Frohe Weihnachten!");
    }
    else
    {
        alert("The code you've entered is incorrect!");
    }
}

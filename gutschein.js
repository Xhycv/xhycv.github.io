function simpleHash(str)
{
    let hash = 0;
    for (let i = 0;i < str.length; i++)
    {
        hash += str.charCodeAt(i);
    }
    return hash;
}

function submitCode()
{
    let cd = document.forms["myForm"]["code"].value;
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
    else if(hash === 1324)
    {
        window.location = "ohrring.html";
        alert("Frohe Weihnachten!");
    }
    else if(hash === 1220)
    {
        window.location = "bienvenue.html";
        alert("Eine Reise nach ...");
    }
    else
    {
        alert("The code you've entered is incorrect!");
    }
}

function setup()
{
    if(document.body.getAttribute("data-ace") === "true")
    {
        window.editor = ace.edit("editor");
    }
    //Update the year, for years to come:
    const year = new Date().getFullYear();
    let footer = "Copyright © 2020 ";
    if(year > 2020)
    {
        footer += "- " + year + " Austin Jacob";
    }
    else
    {
        footer += "Austin Jacob";
    }
    document.getElementById("footer").innerHTML = footer;

    //Set up the editor:
    if(document.body.getAttribute("data-ace") === "true")
    {
        editor.setTheme("ace/theme/twilight");
        editor.session.setMode("ace/mode/javascript");
        document.getElementById('editor').style.fontSize='16px';
    }

    if(document.body.getAttribute("data-ace") === "true")
    {
        document.getElementById("pract-bttn1").addEventListener("click", function() {
            if(document.getElementById("pract1").style.visibility === "hidden")
            {
                document.getElementById("pract1").style.visibility = "visible";
            }
            else
            {
                document.getElementById("pract1").style.visibility = "hidden";
            }
        }, false);
    }
    

    //Draw the triangles in the navbar
    var canv = document.getElementById("tris");
    //Rescale the canvas to be the same size as the menu
    canv.width = window.innerWidth * 0.8;
    var ctx = canv.getContext("2d");
    var dir = [[1, -1], [-1, -1], [1, -1], [1, -1], [-1, 1], [1, 1]];
    var points = [[1.0, 2.0], [window.innerWidth * 0.6, 55.0], [150.0, 60.0], [window.innerWidth * 0.75, 58.0], [455.0, 17.0], [window.innerWidth * 0.7, 61.0]];
    var drawTri = setInterval(moveTris, 33);
    var modDir0 = setInterval(changeDir, 2000, 0);
    var modDir1 = setInterval(changeDir, 1750, 1);
    ctx.strokeStyle = "rgba(128, 128, 128, 0.25)";

    function changeDir(i)
    {
        return dir.forEach(element => {
            element[i] = (Math.floor(Math.random() * 2) === 1) ? 1 : -1;
        });
    }

    function moveTris() {
        for(point = 0; point < points.length; point++)
        {
            for(n = 0; n < 2; n++)
            {
                const max = (n == 0) ? 750 : 65;
                if(points[point][n] < max && dir[point][n] === 1)
                {
                    points[point][n] += 1;
                }
                else if(points[point][n] > 0 && dir[point][n] === -1)
                {
                    points[point][n] -= 1;
                }
            }
        }
        ctx.clearRect(0, 0, canv.width, canv.height);
        for(i = 0; i < points.length; i += 3)
        {
            ctx.beginPath();
            ctx.moveTo(points[i][0], points[i][1]);
            ctx.lineTo(points[i + 1][0], points[i + 1][1]);
            ctx.lineTo(points[i + 2][0], points[i + 2][1]);
            ctx.lineTo(points[i][0], points[i][1]);
            ctx.closePath();
            ctx.stroke();
        }
    }

}

function executeCode()
{
    var code = editor.getValue();
    eval(code);
}

function trianlges()
{
    
}


var byLawsToken = false;
var meetingSummaryToken = false;
var directoryToken = false;

var tokenArray = new Array(3);
tokenArray[0] = byLawsToken;
tokenArray[1] = meetingSummaryToken;
tokenArray[2] = directoryToken;


var windowLocation = new Array(3);
windowLocation[0] = "bylaws.html";
windowLocation[1] = "meetingsumary.html";
windowLocation[2] = "directory.html";

var text = $("#passwordTXT").val();

function dialogBehavior()
{
    var hashedPassword = "6909b1c8fa402698b1f25aa1a4bccc23";
    var hashedInput = CryptoJS.MD5(text).toString();

    if(hashedInput == hashedPassword)
    {
       for(var i = 0; i < tokenArray.length; i++)
       {
           if(tokenArray[i])
           {
               window.location.href = windowLocation[i];
               break;
           }
       }
    }
    else
    {
        $("#error").show();
        $("#passwordTXT").val("");
    }
}


function throwByLawsToken() 
{
    tokenArray[0] = true;

}

function throwMeetingSummaryToken()
{
    tokenArray[1] = true;

}

function throwDirectoryToken()
{
    tokenArray[2] = true;
}

function resetTokens()
{
    for(var i = 0; i < tokenArray.length; i++)
    {
        tokenArray[i] = false;
    }
}


function hideDialog()
{
    $("#error").hide();
    $("#passwordTXT").val("")

}


function writeDate()
{
    var date = new Date();
    var dateFormat = date.getFullYear().toString();
    document.write(dateFormat);
}


!function(d,s,id) {var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

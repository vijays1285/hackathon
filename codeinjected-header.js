<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ8R6KD');</script>
<!-- End Google Tag Manager -->

<script async>
(function () {
    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cfapi.communitybox.co/bootstrap/revision", true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var returnObj = JSON.parse(xhr.responseText);
            if (returnObj.hasOwnProperty("err")) {
                console.error(returnObj.err);
            } else {
                var r = returnObj.revision;
                var l = document.createElement("script");
                l.src = "https://dashboard.communitybox.co/embed/" + r + "/cbebloader-" + r + ".js";
                document.head.appendChild(l);

            }
        }
    }
    xhr.send("1e073e02-a8d6-451d-895d-5f4a34849d7a");

})();

function waitForDivLoad(param) {
    var searchBar = document.getElementsByClassName("cbeb-toolbar-searchgroup").length;
    var addproviderBar = document.getElementsByClassName('cbeb-toolbar-btn-group').length;

    if ((!searchBar || !addproviderBar) && param.triesLeft > 0) {
        window.setTimeout(function () {
            waitForDivLoad({ triesLeft: param.triesLeft - 1 })
        }, 500)
    } else {
        if (searchBar && addproviderBar) {
            loadCustomRB();
        }
    }
}


function loadCustomRB() {
    console.log('code inject complete');
    var elements = ['.cbeb-toolbar-searchgroup', '#cbeb-map', '#cbeb-content-container','.cbeb-growdiv','.cbeb-toolbar-btnlabel-plus','.fa-plus'];
    var title = document.title;
    if (title.match(/Search.*/)) {
        console.log('inside search page');
        removeElementFromDom('.cbeb-toolbar-btn-group');
    } else if (title.match(/Add.*/)) {
        console.log('inside add page');
        elements.forEach(el => removeElementFromDom(el))
    } else if (title.match(/Contact.*/)) {
        console.log('inside add page');
        elements.forEach(el => removeElementFromDom(el))
        document.querySelector('.cbeb-toolbar-btn-group').style.display = "block"
        document.querySelector('#desktop toolbar').style.display = "block"
    }
};

addEventListener('load', (event) => {
    console.log('The DOM is fully loaded.');
    waitForDivLoad({ triesLeft: 10 })
});

function removeElementFromDom(param) {
    var element = document.querySelector(param);
    if (element) {
        console.log('element found for removal');
        element.remove();
        console.log('element successfully removed');
    } else {
        console.log('element not found, retrying');
        setTimeout(removeElementFromDom(param), 200);
    }
}
  
</script>
<DOCTYPE.html>
  <html>
  <head>
    <script>
      function docolor(){
        var x = document.getElementById("a");
        var colorinput = document.getElementById("clr");
        var colr = colorinput.value;
        x.style.color = colr;
      }

      </script>
    </head>
    <body>
      <div id ="a">changing with style.color property</div>
      <p>
        <input type ="color" value="#001A57" id="clr" onchange="docolor()">
     </p>

      <body>
    </html>

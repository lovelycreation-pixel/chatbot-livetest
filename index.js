<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chatbot Widget Test</title>
</head>
<body>
  <h2>Chatbot Widget Test Page</h2>
  <p>Below should appear your chatbot button/widget:</p>

  <!-- ===== PASTE YOUR WIDGET HERE ===== -->
  <script>
(function(){
  const clientId = "mktxh93kjgb102";
  const allowedDomain = "";
  if (allowedDomain && !location.hostname.includes(allowedDomain)) return;

  const iframe = document.createElement("iframe");
  iframe.src = "https://your-domain/widget-ui.html?clientId=" + clientId;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "520px";
  iframe.style.border = "none";
  iframe.style.zIndex = "999999";

  document.body.appendChild(iframe);
})();
</script>
  <!-- ===== END WIDGET ===== -->
</body>
</html>

var e=function(e,t,i,n,a){var s=document.createElement("div"),o=document.createElement("h2"),c=document.createElement("p");s.classList.add("notification",a),o.classList.add("title"),o.innerText=i,c.innerText=n,s.style.top="".concat(e,"px"),s.style.right="".concat(t,"px"),o.style.whiteSpace="nowrap",s.append(o,c),document.body.append(s),setTimeout(function(){s.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.19fcbcfa.js.map

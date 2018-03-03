Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @laurenchun
 Sign out
1
0 1 laurelschwulst/interactive
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
You’re editing a file in a project you don’t have write access to. Submitting a change to this file will write it to a new branch in your fork laurenchun/interactive-1, so you can send a pull request.
interactive/demos/organism-demo-1/
script.js
  or cancel


1
$(document).ready(function(){
2
​
3
  var status = 'on';
4
​
5
  $('#switch').click(function(){
6
​
7
    if(status == 'on'){
8
      $('body').addClass('night');
9
      status = 'off';
10
    }
11
    else {
12
      $('body').removeClass('night');
13
      status = 'on';
14
    }
15
​
16
  });
17

18
});
19
​
@laurenchun
Propose file change

Update script.js

Add an optional extended description…

© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About

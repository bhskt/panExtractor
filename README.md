# panExtractor

Use *generate.php* to import a new CAPTCHA image into the root directory & update session cookies.

*start.js* runs the submit.php file concurrently for faster execution & is the default starting point.

## Syntax

$ php generate.php

$ node[js] start.js FIRST_NAME LAST_NAME AGE CAPTCHA : Scan for the given name in current year minus age, all days.

$ node[js] start.js FIRST_NAME LAST_NAME AGE CAPTCHA DD/MM : Scan for the given name in (current year minus age) plus minus five years on the specified day/month.

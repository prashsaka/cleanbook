# cleanbook
Removes
- the annoying "Suggested For You" Facebook posts
- sponsored content

# This is a browser extension for Google Chrome and MS Edge.
In order to add this extension:
- create a directory called `cleanbook` in your local drive
- download the two files `content-script.js` and `manifest.json` to the directory
- click on the setting (three vertical dots) icon in the top right corner
- select `More Tools` -> `Extensions`
- toggle the `Developer Mode` in the top right corner
- click `upload unpacked`
- select the `cleanbook` directory (not the files inside the directory)
- click `add`

# Behind the scenes
Each second, the extension checks for sections that have `Suggested For You` text, and deletes them.

**NOTE** This does **NOT** send the details to Facebook; it just deletes the sections from your display.

# Alternative Option
If you aren't too keen on installing the extension, just copy the javascript function from `content-script.js` and exectute it in browser console. However, this is work on just the current session and the current tab.

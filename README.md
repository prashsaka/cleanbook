# remove-facebook-suggestions-for-you
Removes the annoying "Suggested For You" Facebook posts.

# This is a browser extension for Google Chrome.
In order to add this extension:
- create a directory called `remove-facebook-suggestions` in your local drive
- download the two files `content-script.js` and `manifest.json` to the directory
- click on the setting (three vertical dots) icon in the top right corner
- select `More Tools` -> `Extensions`
- toggle the `Developer Mode` in the top right corner
- click `upload unpacked`
- select the `remove-facebook-suggestions` directory (not the files inside the directory)
- click `add`

# Behind the scenes
Each second, the extension checks for sections that have `Suggested For You` text, and deletes them.

**NOTE** This does **NOT** send the details to Facebook; it just deletes the sections from your display.

**NOTE** This is **NOT** completely tested.

# YouTube Viewer

This is a Basic React single page application that uses YouTube API to search for and display a list of the first 5 videos returned, according to the search term.

# Development phase and nodejs modules
These are the most important modules used throughout the development phase
- ``react``: A Javascript library to create interface components that render HTML to be displayed in the browser
- ``postcss``: A very fast css preprocessor to build clearer and more modular css
- ``webpack``: A Bundlerer tool for Javascript files 
- ``babel``: A ES6 js syntax transpiler to convert ES6 syntax into vanilla Javascript so it can be compatible with any browser
- ``browsersync``: A powerful tool that creates a mini web server to launch, refresh and sync web browser windows for easy cross-browser and screen-size check  
- ``Gulp``: A set of modules used to build a highly automated and efficient development workflow

# Development workflow
Many common and repetitive tasks were automated using [Gulp](https://gulpjs.com//).
During developing the ``gulp watch`` task is always running in the console. This task monitors any change done to the HTML, CSS and JS files to open and/or refresh all the browser windows using browsersync via the execution of these Gulp tasks. In the process, Gulp also executes the following chained tasks that gets all the developer friendly CSS and js files and bundle them together into browser compatible assets.

- ``gulp styles`` task that uses ``postcss`` to produce the browser compatible css bundled files and save them into the ``/temp/styles`` folder
- ``gulp scripts`` to bundle all the js files using ``webpack`` which also loads Babel to convert ES6 js syntax into ES5. JS bundled file is automatically saved into the ``/temp/scripts`` folder

# Build workflow
The build process is fully automated via the ``gulp build`` task which executes the following sub tasks
- ``gulp deleteDistFolder``: Deletes the content of the ``/dist`` folder before creating new files
- ``gulp useminTrigger``: Uses the ``gulp-usemin`` module to compress, optimize and revision css and js files by calling the ``gulp-cssnano`` and ``gulp-uglify`` modules before copying the files to the ``/styles`` and ``/scripts`` folders. In the process this task also triggers the ``gulp styles`` and ``gulp scripts`` tasks
- Finally ``gulp previewDist`` launches another ``browsersync`` mini server to preview the site within the ``/dist``folder ready for deployment
 
Every module used and its version is specified in the ``package.json`` within the dependencies or devDependencies sections.

 



# VeggieRecipes
Website made with the Node js and the javascript for the computer thingies to manage the vegetarian recipes.

## Running

The site is built with node.js and express.js using grunt as a build system.
To build the site, just run grunt from the working directory.

This should compile the scss to css, check the javascript code over, and launch the server.

This is not ideal for working on the scss as the loop takes too much time considering the server doesn't need to be restarted.

Eg, changing the background colour requires re-compiling the scss, then running grunt compiles it and starts the server when all you really need to do is compile the scss and refresh the page.

To prevent the server starting at the end run: ```grunt noserver```

###Building from scratch

Start by cloning the project:
```git clone https://github.com/CarbonBasedDudeform/VeggieRecipes```

This should create a folder called VeggieRecipes under the current working directory.

Then install the projects dependences by running:
```npm install```

Finally, start the server by running:
```grunt```

Open a browser and navigate to http://127.0.0.1:3000/ to witness the site in all its glory.

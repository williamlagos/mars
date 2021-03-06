#### πΈοΈ The Client (frontend/client)
- That's where we take the **universal** part so seriously.
- The Mars.js client application is built to run on anything web enabled, from smartphones to gadgets, smart TVs, smart fridges, Arduinos, smart cars... Heck: You could even take a feature phone and give it a shot with some tweaks!
- The whole point about the *"Write once, run evererywhere"* philosphy is that. Create your application, make it beautiful and functional. Then it's only a matter of packaging. 
- **That's the part where you can choose your weapon:**
    - Want an desktop application? Go with Electron.
    - Want an Hybrid app? We have Cordova (and soon enough Capacitor).
    - Want an Smart Whatsoever app? Check for webkit support on the device SDK (Even Apple is starting to support it on the Watch OS).
    -  Want a PWA? Host the built application on the Mars Server (Yes, [even Apple got into the hype here](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)).
- #### What can I use it for?
- That's the beauty of it: The Mars.js project was originally created to develop geolocated marketplaces. Yet, we wanted more!
- With the application skeleton provided, you can create anything. It's just  a matter of finding cool npm modules or libs on Github and mix it all up to create endless possibilities! 
- Just use your imagination, and remember: *Always bet on the web*!  π
- ### Folders, you say?
- Yes, we were just getting there. A little more complex, the Client application folder consist of the following: 
    ```
        . (frontend/client)
        βββ .bin/                                # App specific scripts
        βββ .env/                                # Environment variables
        βββ .mars/                               # Mars configuration files
        βββ config/                              # Webpack/Ionic tweaks 
        βββ hooks/                               # Cordova Hooks (will be deprecated soon) 
        βββ resources/                           # Icon and splashscreen
        βββ dist/                                # App compiled files 
        βββ src/                                 # App source files
        β   βββ app/                             # This folder contains global modules and styling
        β   βββ assets/                          # This folder contains images and the *data.json*
        |   βββ pages/                           # Contains all the individual pages (home, tabs, category, list, single-item)
        |   βββ services/                        # Contains the item-api service that retrieves data from the JSON file
        |   βββ theme/                           # The global SCSS variables to use throughout the app
        |   βββ declarations.d.ts/               # A config file to make TypeScript objects available in intellisense
        |   βββ index.html/                      # The root index app file - This launches the app
        |   βββ manifest.json/                   # Metadata for the app
        β   βββ service-worker.js/               # Cache configurations
        βββ app.js                               # Express App configuration
        βββ mars.js                              # Mars.js App tweaks
        βββ index.js                             # App initialization file
        βββ .editorconfig                        # A helper file to define and maintain coding styles across environments
        βββ .gitignore                           # Specifies intentionally untracked files to ignore when using Git
        βββ .io-config.json                      # Ionic ID
        βββ config.xml                           # Ionic config file
        βββ .ionic.config.json                   # Global configuration for your Ionic app
        βββ package.json                         # Dependencies and build scripts
        βββ readme.md                            # Project description
        βββ tsconfig.json                        # TypeScript configurations
        βββ tslint.json                          # TypeScript linting options
    ```

##### πΈ Running the Client Application
* Open the terminal or command prompt of your choice and execute:
`$ npm run client --env=[ENVIRONMENT_OF_YOUR_CHOICE]`
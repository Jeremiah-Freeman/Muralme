# Muralme

  - This application is for users to find and connect with mural artists for hire.  It's a database of mural artists from around the world, giving the user the choice to hire any of the artists.


##  Specs:
  1. user visists website and see images of murals painted around the world.
  2. user can click the images to visit a profile page of that artist.
  3. user can choose to filter the artists based on the price for the mural.
  4. admin can add new Muralmes to the website after a screening process has been completed.
  5. admin can edit each post's contents.
  6. admin can delete any post he/she chooses.

# Planning
    Configuration/dependencies:
    - use Angluar2 CLI to create new project
    - enter project folder
    - run install CLI code
    - open server using 'ng s --open'

##  Integration:

    * Initial Setup:

    - set up planning and specs in README.md.
    - clone down repo from github
        - cd in to repo
            - git init
            - install the CLI (in or out of folder) - (npm install -g @angular/cli)
            - run npm install
            - run bower init
            -run bower install
            - run ng s(serve) --open


####  Project Setup:

    * create components
        - new-log component
        - edit-log component
        - views.pipe.ts ( create a pipe filter )

    * create new model
        - muralist.model.ts( top level )
            - make sure that model is linked properly to the all components pages for proper access.
                - app / new-form / price.pipe.ts

                * create Artist Class with constructor
                - properties:
                - Name(string)
                - Style(string)
                - Paints(string)
                - Price(number)
                - Image(string)

    * link up pages to one another

    * FireBase
          - install firebase and angularfire ( npm install angularfire2 firebase  --save )
          - add firebase to tsconfig.json
          - make api-keys file in top of directive( add firebase object)
          - git ignore it
          - import firebase ( api / angularfire into module ) ( imports too! )
          - add export firebase to module
          - change rules to true in firebase website
          - create artists.json file for firebase deployment
          - import to service file
          - add to injectables
          - add to constructor ( build out constructor )
          - create getArtist function
          - add async to for loop and print out artist from database
          - add saving ( creating new ) functionality
          - add creating new functionality
          - add editing functionality
          - add deleting functionality


    UX/UI:
      - Add custom styling / form placement.
      - Add Materialize / Material Design Lite.
      - Add image to README.md(icon size)


    FreshenUp:
      - Clean up unneeded code or old code.
      - Fix indentation.
      - Make it tidy.


    Last Call:
      - Pass through objectives one last time.
      - Push one last time.
      - Submit to Epicodus.


## Known Bugs

There are no known bugs.


## How to view Instructions

- clone down repo from github ( "https://github.com/jaythinkshappiness/Muralme" )
    - cd in to repo
        - git init
        - install the CLI (in or out of folder) - (npm install -g @angular/cli)
        - ng s(serve) --open

## Support and contact details

If you notice bugs or would like to contribute in any way please contact me at jaythinkshappiness@gmail.com

## Technologies Used
  bower
  gulp
  angular 2
  node
  Material Design Lite




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## SMACSS Workshop

### installation

Install npm

##### Linux environment

    sudo npm install npm -g

##### OSX environment

    brew install npm

inside the project directory

run:

    npm install

##### Troubleshooting
The command above should have installed the packages:

  - gulp
  - gulp-concat
  - gulp-connect
  - gulp-open

If you you can install them manually by running:

    npm install gulp gulp-concat gulp-connect gulp-open

### development

run:

    gulp

This will create a dist/ folder inside app/ containing both css/ and js/ concatenated files.

If for any reason, those folders or files are not created, you could manually run:

    gulp css

or

    gulp js

To generate those directories manually.

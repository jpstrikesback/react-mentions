module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    "gh-pages": {
      options: {
          base: "gh-pages"
      },
      src: [
        "index.html",
        "*.js",
        "*.js.map",
        "*.jsx",
        "views/**/*",
        "css/*"
      ]
    },

    copy: {
      default: {
        files: [
          { src: ["dist/react-mentions.js"], dest: "gh-pages/lib/react-mentions.js" }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-gh-pages");

  grunt.registerTask("publish", [
    "copy",
    "less",
    "gh-pages"
  ]);
};

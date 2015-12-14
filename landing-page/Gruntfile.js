module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

        clean: {
            pre: ['build/**/*', '.tmp/**/*'],
            post: ['.tmp/concat', 'template.js']
        },

        replace: {
            package: {
                src: 'package.json',
                dest: 'package.json',
                replacements: [{
                    from: /\"version\": \"([\d\.]+)\"/g,
                    to: function (matchedWord, index, fullText, regexMatches) {   // callback replacement
                        return '"version": "' + (parseFloat(regexMatches) + 0.1).toFixed(1) + '"';
                    }
                }]
            },
            index: {
                src: 'build/src/index.html',
                dest: 'build/src/index.html',
                replacements: [{
                    from: '../node_modules/',
                    to: 'node_modules/'
                }]
            }
        },

        copy: {
            temp2build: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp',
                        src: ['**/*'],
                        dest: 'build/src'
                    }
                ]
            },
            app2build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['favicon.ico'],
                        dest: 'build/src'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['robots.txt'],
                        dest: 'build/src'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['sitemap.xml'],
                        dest: 'build/src'
                    }
                    //,
                    //{
                    //    expand: true,
                    //    cwd: '',
                    //    src: ['node_modules/**'],
                    //    dest: 'build/src'
                    //}
                    //,
                    //{
                    //    expand: true,
                    //    cwd: 'src/',
                    //    src: ['images/**'],
                    //    dest: 'build/src'
                    //}
                ]
            },
            app2temp: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.html'],
                        dest: '.tmp'
                    }
                ]
            }


        },

        useminPrepare: {
            html: 'src/*.html',
            options: {
                dest: '.tmp'
            }
        },

        usemin: {
            html: '.tmp/*.html'
        },


        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/src/index.html': 'build/src/index.html'
                }
            }
        },

        imagemin: {                          // Task

            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/images',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/src/images/'                  // Destination path prefix
                }]
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
        'clean:pre',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'clean:post',
        'copy:app2temp',
        'usemin',
        'copy:temp2build',
        'copy:app2build',
        'replace:index',
        //'imagemin',
        'htmlmin'
    ]);

    grunt.registerTask('install', [
        'clean:installSrc',
        'copy:staged2install'
    ]);

    grunt.registerTask('deploy', [
        //'copy:staged2dropbox'
        //'ftp-deploy'
    ]);

};

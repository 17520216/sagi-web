module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            public: 'public',
            src: 'src',
            css: 'css',
            scss: 'scss',
            js: 'js',
        },

        uglify: {
            my_target: {
                files: {
                    '<%= dirs.public %>/<%= dirs.js %>/main.min.js': [
                        '<%= dirs.src %>/<%= dirs.js %>/*.js',
                    ],
                },
            },
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: false,
                    noCache: true,
                    lineNumbers: true,
                },
                files: {
                    '<%= dirs.public %>/<%= dirs.css %>/style.min.css':
                        '<%= dirs.src %>/<%= dirs.scss %>/style.scss',
                },
            },
        },

        watch: {
            options: {
                livereload: true,
                spawn: false,
            },
            sass: {
                files: '<%= dirs.src %>/<%= dirs.scss %>/**/*.scss',
                tasks: ['sass'],
            },
            uglify: {
                files: ['<%= dirs.src %>/<%= dirs.js %>/*.js'],
                tasks: ['uglify'],
            },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= dirs.public %>/<%= dirs.css %>/style.min.css',
                        '<%= dirs.public %>/*.html',
                        '<%= dirs.public %>/<%= dirs.js %>/*.js',
                    ],
                },
                options: {
                    watchTask: true,
                    server: './public/',
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'watch']);
};

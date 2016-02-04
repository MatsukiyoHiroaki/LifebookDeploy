(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= paths.app %>',
        dest: '<%= paths.dist %>',
        src: [
          '*.{ico,png,txt}',
          'images/{,*/}*.webp',
          'components/{,*/}*.html',
<<<<<<< HEAD
          'components/{,*/}*.js',
=======
>>>>>>> 78d9f6a6ecf3883b637a51a04759a208011b1468
          'directives/{,*/}*.html',
          '{,*/}*.html',
          'styles/fonts/{,*/}*.*'
        ]
      }]
    },
    styles: {
      expand: true,
      dot: true,
      cwd: '<%= paths.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  };
})();

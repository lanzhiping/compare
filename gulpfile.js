const gulp = require('gulp')
const rsync = require('gulp-rsync')
const config = {
  root: 'build/',
  username: 'lanzhiping',
  destination: '/Users/lanzhiping/Desktop/source/compare/result/',
  shell: `ssh -i /Users/lanzhiping/.ssh/id_rsa`,
  progress: true,
  hostname: '127.0.0.1',
}

gulp.task('deploy', () => gulp.src('build/**').pipe(rsync(config)))

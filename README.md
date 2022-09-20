# Kirby install with Vite

> This is a reminder of how to quickly setup a Kirby website with Vite.

The original vite plugin repo is here: https://github.com/OblikStudio/kirby-vite/

I've done some quick adaptations for me to get started quickly on a new project.

### Installation on a new kirby project

1. `composer create-project getkirby/plainkit`, or however you want to install Kirby.
2. copy over site/plugins/vite folder
3. create & adapt vite.config.js to your needs
4. adapt your package.json
5. add `<?= vite()->js('src/index.js') ?>` and `<?= vite()->css('src/index.js') ?>` to a template
6. `php -S localhost:3000 kirby/router.php`
7. `npm run dev`
8. 🔥🔥🔥

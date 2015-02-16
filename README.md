# Spyyn single page app

#### Notes on running
-This app is resting heavily on github's "pages" delivery mechanism.
Pages will deliver index.js, and deliver anything relative to that
path as well. So by requiring a script `src="./script.js"`, this will
load both locally if you're loading from a file, and from gh-pages.

-The branch gh-pages is essentially the deployment branch. What you see
live is what is in the gh-pages branch on github. This way, we can keep
master as a central master repository, and gh-pages as the deploy branch
when the time comes to deploy. This has the sweet side effect of making
rolling back deployments trivial.

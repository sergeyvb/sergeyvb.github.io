var store = [{
        "title": "Quick-Start Guide",
        "excerpt":"Minimal Mistakes has been developed as a Gem-based theme for easier use, and 100% compatible with GitHub Pages when used as a remote theme. If you enjoy this theme, please consider sponsoring me to continue developing and maintaining it. Installing the theme If you’re running Jekyll v3.7+ and self-hosting you...","categories": [],
        "tags": [],
        "url": "/docs/quick-start-guide/",
        "teaser": null
      },{
        "title": "Structure",
        "excerpt":"Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in assets, and a few development related files in the project’s root directory. Please note: If you installed Minimal Mistakes via the Ruby Gem method, theme files like _layouts, _includes, _sass,...","categories": [],
        "tags": [],
        "url": "/docs/structure/",
        "teaser": null
      },{
        "title": "Installation",
        "excerpt":"Install the theme 1. For a new site, install the minimal-mistakes-jekyll gem, remote theme, or fork the Minimal Mistakes repo on GitHub following the steps outlined in the Quick-Start Guide. If you plan to host with GitHub Pages be sure to properly setup jekyll-remote-theme as it is required for the...","categories": [],
        "tags": [],
        "url": "/docs/installation/",
        "teaser": null
      },{
        "title": "Upgrading",
        "excerpt":"If you’re using the Ruby Gem or remote theme versions of Minimal Mistakes, upgrading is fairly painless. To check which version you are currently using, view the source of your built site and you should see something similar to: &lt;!-- Minimal Mistakes Jekyll Theme 4.24.0 by Michael Rose Copyright 2013-2020...","categories": [],
        "tags": [],
        "url": "/docs/upgrading/",
        "teaser": null
      },{
        "title": "Overriding Theme Defaults",
        "excerpt":"When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the gem. Meaning they’re not easily visible in your project. Each of these files can be modified, but you’ll need to copy the default version into your project first. For example,...","categories": [],
        "tags": [],
        "url": "/docs/overriding-theme-defaults/",
        "teaser": null
      },{
        "title": "Navigation",
        "excerpt":"Customize site navigational links through a Jekyll data file. Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally with a toggle to reveal the rest. To define these links add titles and URLs under the main key in _data/navigation.yml:...","categories": [],
        "tags": [],
        "url": "/docs/navigation/",
        "teaser": null
      },{
        "title": "UI Text",
        "excerpt":"Text for UI elements, _layouts, and _includes grouped together as a set of translation keys. This is by no means a full-on i18n solution, but it does help make customizing theme text a bit easier. The English1 main keys in _data/ui-text.yml are translated in the following languages: Arabic (عربي) Brazilian...","categories": [],
        "tags": [],
        "url": "/docs/ui-text/",
        "teaser": null
      },{
        "title": "Authors",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Any variables found under...","categories": [],
        "tags": [],
        "url": "/docs/authors/",
        "teaser": null
      },{
        "title": "Working with Posts",
        "excerpt":"Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. For example, the following are examples...","categories": [],
        "tags": [],
        "url": "/docs/posts/",
        "teaser": null
      },{
        "title": "Working with Pages",
        "excerpt":"To better organize all of your pages you can centralize them into a single location similar to posts and collections. Step 1: Start by placing pages (.md or .html files) into a _pages directory. Meaningfully naming files should be the goal. Avoid patterns like /about/index.md as it makes distinguishing between...","categories": [],
        "tags": [],
        "url": "/docs/pages/",
        "teaser": null
      },{
        "title": "Working with Collections",
        "excerpt":"Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation. The theme has been built with collections in mind and you will find several examples on the demo site (portfolio, recipes, pets). Collections in the Wild: This set of documentation...","categories": [],
        "tags": [],
        "url": "/docs/collections/",
        "teaser": null
      },{
        "title": "Helpers",
        "excerpt":"You can think of these Jekyll helpers as little shortcuts. Since GitHub Pages doesn’t allow most plugins — custom tags are out. Instead the theme leverages includes to do something similar. Group by array Jekyll Group-By-Array by Max White. A liquid include file for Jekyll that allows an object to...","categories": [],
        "tags": [],
        "url": "/docs/helpers/",
        "teaser": null
      },{
        "title": "Utility Classes",
        "excerpt":"Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you want to add custom styling to text and image, and still write in Markdown. Jekyll 3: Kramdown is the default for jekyll new sites and those hosted on GitHub Pages....","categories": [],
        "tags": [],
        "url": "/docs/utility-classes/",
        "teaser": null
      },{
        "title": "Stylesheets",
        "excerpt":"The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes ├── _sass | └── minimal-mistakes | ├── vendor # vendor SCSS partials | | ├── breakpoint # media query mixins | | ├── magnific-popup # Magnific Popup lightbox | | └──...","categories": [],
        "tags": [],
        "url": "/docs/stylesheets/",
        "teaser": null
      },{
        "title": "JavaScript",
        "excerpt":"The theme’s assets/js/main.min.js script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes ├── assets | ├── js | | ├── plugins | | | ├── gumshoe.js # simple scrollspy | | | ├── jquery.ba-throttle-debounce.js # rate-limit functions | | | ├── jquery.fitvids.js #...","categories": [],
        "tags": [],
        "url": "/docs/javascript/",
        "teaser": null
      },{
        "title": "History",
        "excerpt":"Unreleased Bug Fixes Fix documentation typos. #3232 #3318 Fix Keybase icon in author sidebar. #3221 Fix sort order of Staticman comments when data files aren’t named alphabetically. #3184 Fix broken documentation link and add Baidu site verification to _config.yml files. #3139 Fix layout: compress issue with HTML comment in video...","categories": [],
        "tags": [],
        "url": "/docs/history/",
        "teaser": null
      },{
        "title": "Contributing",
        "excerpt":"Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a bug? Then by all means submit an issue or pull request. If this is your first pull request, it may be helpful to read up on the GitHub Flow first....","categories": [],
        "tags": [],
        "url": "/docs/contributing/",
        "teaser": null
      },{
        "title": "2.2 Documentation",
        "excerpt":"Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version to update all gem dependencies. If you are creating a new Jekyll site using Minimal Mistakes follow these steps: Fork the Minimal Mistakes repo. Clone the repo you just forked...","categories": [],
        "tags": [],
        "url": "/docs/docs-2-2/",
        "teaser": null
      },{
        "title": "Configuration",
        "excerpt":"Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your project. If you don’t have this file you’ll need to copy or create one using the theme’s default _config.yml as a base. Note: for technical reasons, _config.yml is NOT reloaded...","categories": [],
        "tags": [],
        "url": "/%D0%BC%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",
        "teaser": null
      },{
        "title": "Layouts",
        "excerpt":"The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like and the type of content they’ve been built for. Default layout The base layout all other layouts inherit from. There’s not much to this layout apart from pulling in several...","categories": [],
        "tags": [],
        "url": "/%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BB%D0%B0%D0%BD/",
        "teaser": null
      },{
        "title": "License",
        "excerpt":"The MIT License (MIT) Copyright (c) 2013-2022 Michael Rose and contributors Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,...","categories": [],
        "tags": [],
        "url": "/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8/",
        "teaser": null
      },{
        "title": "Edge Case: Nested and Mixed Lists",
        "excerpt":"Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do not break the ordered list numbering order Your list styles go deep enough. Ordered – Unordered – Ordered ordered item ordered item unordered unordered ordered item ordered item ordered item...","categories": ["Edge Case"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "/edge%20case/edge-case-nested-and-mixed-lists/",
        "teaser": null
      },{
        "title": "Post: Gallery",
        "excerpt":"These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter: gallery: - url: /assets/images/unsplash-gallery-image-1.jpg image_path: /assets/images/unsplash-gallery-image-1-th.jpg alt: \"placeholder image 1\" title: \"Image 1 title caption\" - url: /assets/images/unsplash-gallery-image-2.jpg image_path: /assets/images/unsplash-gallery-image-2-th.jpg alt: \"placeholder image 2\" title: \"Image 2 title caption\" -...","categories": ["Post Formats"],
        "tags": ["gallery","Post Formats","tiled"],
        "url": "/post%20formats/post-gallery/",
        "teaser": null
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/welcome-to-jekyll/",
        "teaser": "/assets/images/500x300.png"
      },]

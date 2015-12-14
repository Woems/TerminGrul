



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>troolee/gridstack.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="troolee/gridstack.js" name="twitter:title" /><meta content="gridstack.js is a jQuery plugin for widget layout" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/137888?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/137888?v=3&amp;s=400" property="og:image" /><meta content="troolee/gridstack.js" property="og:title" /><meta content="https://github.com/troolee/gridstack.js" property="og:url" /><meta content="gridstack.js is a jQuery plugin for widget layout" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5DD68988:6925:EE6C0F2:566E03BA" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="48bd35297def7de4a936a2aa6e7152599a906b93" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ecb97a0e74ccdbc923d7ce77cc23806314b5062be46a95269dff5a64ac137d79.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-f3347d403c5b78c3329932114a54941dbddad2992c3fd41e768c2956f03b3e6b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="701ecbcece99639804ce0a796695f418">

      
  <meta name="description" content="gridstack.js is a jQuery plugin for widget layout">
  <meta name="go-import" content="github.com/troolee/gridstack.js git https://github.com/troolee/gridstack.js.git">

  <meta content="137888" name="octolytics-dimension-user_id" /><meta content="troolee" name="octolytics-dimension-user_login" /><meta content="26417283" name="octolytics-dimension-repository_id" /><meta content="troolee/gridstack.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="26417283" name="octolytics-dimension-repository_network_root_id" /><meta content="troolee/gridstack.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/troolee/gridstack.js/commits/master.atom" rel="alternate" title="Recent Commits to gridstack.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production linux vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    <div class="unsupported-browser">
  <div class="container clearfix">
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/site/dismiss_unsupported_browser" data-form-nonce="48bd35297def7de4a936a2aa6e7152599a906b93" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/vgPFqwY3pVNGdo72twdbUMiyTlSteKMsNlUkNM7EfxCwzGSX8rgXpTnQVYAUYmJ5WleRDuD0uou92PK0s7R3w==" /></div>
      <button class="btn btn-danger">Ignore</button>
</form>    <a href="https://help.github.com/articles/supported-browsers" class="btn">Learn more</a>

      <h5>Please note that GitHub no longer supports old versions of Firefox.</h5>
      <p>We recommend upgrading to the latest <a href="https://www.apple.com/safari/">Safari</a>, <a href="https://chrome.google.com">Google Chrome</a>, or <a href="https://mozilla.org/firefox/">Firefox</a>.</p>
  </div>
</div>




      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Ftroolee%2Fgridstack.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/troolee/gridstack.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/troolee/gridstack.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ftroolee%2Fgridstack.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/troolee/gridstack.js/watchers">
    91
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftroolee%2Fgridstack.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/troolee/gridstack.js/stargazers">
      802
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftroolee%2Fgridstack.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/troolee/gridstack.js/network" class="social-count">
      231
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/troolee" class="url fn" itemprop="url" rel="author"><span itemprop="title">troolee</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/troolee/gridstack.js" data-pjax="#js-repo-pjax-container">gridstack.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/troolee/gridstack.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /troolee/gridstack.js">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/troolee/gridstack.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /troolee/gridstack.js/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">114</span>
</a>
  <a href="/troolee/gridstack.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /troolee/gridstack.js/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">14</span>
</a>

  <a href="/troolee/gridstack.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /troolee/gridstack.js/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/troolee/gridstack.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /troolee/gridstack.js/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <span class="repository-meta-content">
        gridstack.js is a jQuery plugin for widget layout
  </span>

</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/troolee/gridstack.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              249
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/troolee/gridstack.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            3
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/troolee/gridstack.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            5
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/troolee/gridstack.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      18
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/troolee/gridstack.js/search?l=css">
                <span class="color-block language-color" style="background-color:#563d7c;"></span>
                <span class="lang">CSS</span>
                <span class="percent">47.0%</span>
              </a>
          </li>
          <li>
              <a href="/troolee/gridstack.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">39.6%</span>
              </a>
          </li>
          <li>
              <a href="/troolee/gridstack.js/search?l=html">
                <span class="color-block language-color" style="background-color:#e44b23;"></span>
                <span class="lang">HTML</span>
                <span class="percent">13.4%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="CSS 47.0%" style="width:47.0%; background-color:#563d7c;" itemprop="keywords">CSS</span>
    <span class="language-color" aria-label="JavaScript 39.6%" style="width:39.6%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="HTML 13.4%" style="width:13.4%; background-color:#e44b23;" itemprop="keywords">HTML</span>
  </div>

<include-fragment src="/troolee/gridstack.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page file-navigation-new">
  <div class="right">
    <div class="btn-group">
      
  <button class="btn btn-sm disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes" type="button">
    New file
  </button>



      <a href="/troolee/gridstack.js/find/master"
        class="btn btn-sm empty-icon right js-show-file-finder"
        data-pjax
        data-hotkey="t"
        data-ga-click="Repository, find file, location:repo overview">
        Find file
      </a>
    </div>
      <div class="file-navigation-options" data-multiple>

        <div class="file-navigation-option">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol" class="js-set-user-protocol-preference" data-form-nonce="48bd35297def7de4a936a2aa6e7152599a906b93" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bLCq/TGFZS8GyrZ6D9sjrHiOpctHHZ00s6avHdoHM6vl0YH38qdkKzyHQc5f9vx6gp4AZ4/VwfqCschIHIGsCg==" /></div>
            <input type="hidden" name="protocol_type" value="clone">

            <div class="select-menu js-menu-container js-select-menu">
              <div class="input-group js-select-button js-zeroclipboard-container">
                <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/troolee/gridstack.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

              </div>

              <div class="select-menu-modal-holder">
                <div class="select-menu-modal js-menu-content" aria-hidden="true">
                  <div class="select-menu-header">
                    <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
                    <span class="select-menu-title">Choose a clone URL</span>
                  </div>

                  <div class="select-menu-list js-navigation-container" role="menu">
                      <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                        <span class="select-menu-item-icon octicon octicon-check"></span>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="http" checked>
                          <span class="select-menu-item-heading">
                            HTTPS
                            (recommended)
                          </span>
                            <span class="description">
                              Clone with Git or checkout with SVN using the repository's web address.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/troolee/gridstack.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

                          </span>
                        </div>
                      </div>
                  </div>
                  <div class="select-menu-list" role="menu">
                    <a class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
                      <span class="select-menu-item-icon octicon octicon-question"></span>
                      <div class="select-menu-item-text">
                        Learn more about clone URLs
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
</form>        </div>

        <div class="file-navigation-option">
</div>


        <div class="file-navigation-option">
          <a href="/troolee/gridstack.js/archive/master.zip"
             class="btn btn-sm"
             rel="nofollow"
             data-ga-click="Repository, download zip, location:repo overview">
            Download ZIP
          </a>
        </div>
      </div>
  </div>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/troolee/gridstack.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/troolee/gridstack.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/troolee/gridstack.js/tree/pr/190"
               data-name="pr/190"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pr/190">
                pr/190
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/troolee/gridstack.js/tree/v0.2.3"
                 data-name="v0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.3">v0.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/troolee/gridstack.js/tree/v0.2.2"
                 data-name="v0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.2">v0.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/troolee/gridstack.js/tree/v0.2.1"
                 data-name="v0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.1">v0.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/troolee/gridstack.js/tree/v0.2.0"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/troolee/gridstack.js/tree/v0.1.0"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


    <a href="/troolee/gridstack.js/pull/new/master" class="btn btn-sm btn-primary" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
      New pull request
    </a>

  <div class="breadcrumb">
    
  </div>
</div>




  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/troolee/gridstack.js/commit/fc571d8b82a59fd88f18ec4d449864de3ff85d38" data-pjax>
        fc571d8
      </a>
      <time datetime="2015-10-16T01:41:03Z" is="relative-time">Oct 15, 2015</time>
    </span>


    <span class="commit-author-section">
      <img alt="@troolee" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/137888?v=3&amp;s=40" width="20" />
      <a href="/troolee" class="user-mention" rel="author">troolee</a>
    </span>

        <a href="/troolee/gridstack.js/commit/fc571d8b82a59fd88f18ec4d449864de3ff85d38" class="message" data-pjax="true" title="typo">typo</a>
    </span>

  </div>


<div class="file-wrap">
  <a href="/troolee/gridstack.js/tree/fc571d8b82a59fd88f18ec4d449864de3ff85d38" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/tree/master/demo" class="js-directory-link js-navigation-open" id="fe01ce2a7fbac8fafaed7c982a04e229-dc0274548443fada17154871fe578f611743011e" title="demo">demo</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/0a5826056394472880858dd1c396ad86ac4a144c" class="message" data-pjax="true" title="add `static_grid` option">add `static_grid` option</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-07-17T01:49:28Z" is="time-ago">Jul 16, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/tree/master/dist" class="js-directory-link js-navigation-open" id="2a6d07eef8b10b84129b42424ed99327-e125bb47773461bf0837bb8bef47600648801a6e" title="dist">dist</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/b00114d5bc4cf11635472249a3350cb10a0b886e" class="message" data-pjax="true" title="fix handle option">fix handle option</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-09-22T03:13:05Z" is="time-ago">Sep 21, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/tree/master/src" class="js-directory-link js-navigation-open" id="25d902c24283ab8cfbac54dfa101ad31-b1605035dc5d12664a75d16f02b5c25a4abe114f" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/3be2105a93dffc38b70b3d998a086cc234f7678b" class="message" data-pjax="true" title="try load lodash, otherwise use global _">try load lodash, otherwise use global _</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-09T22:22:00Z" is="time-ago">Oct 9, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/blob/master/LICENSE" class="js-directory-link js-navigation-open" id="9879d6db96fd29134fc802214163b95a-473915064dfdcaa6aa2477bf64ee672048d4aaec" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/bf6255fc9421e78755d20073a9fcd6b3ffec5526" class="message" data-pjax="true" title="update license">update license</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-27T08:40:24Z" is="time-ago">Feb 27, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-675da5ec0e8bc29916e0bcb418681e06227a67d5" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/fc571d8b82a59fd88f18ec4d449864de3ff85d38" class="message" data-pjax="true" title="typo">typo</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-16T01:41:08Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/blob/master/bower.json" class="js-directory-link js-navigation-open" id="0a08a7565aba4405282251491979bb6b-4428d538a26969cf6a367be06791b5ebb0aec454" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/510a5757140a22be9dca19f1d30c07dc5aba09bc" class="message" data-pjax="true" title="Setup as an npm package">Setup as an npm package</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-07-30T17:20:18Z" is="time-ago">Jul 30, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/troolee/gridstack.js/blob/master/package.json" class="js-directory-link js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-af01be7c4d0087d61c00b4bfee1179d7a8a73a26" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/troolee/gridstack.js/commit/fbe4113ea8b1f0c314567e8802c493b22b828b82" class="message" data-pjax="true" title="Add main property to package.json">Add main property to package.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-06T01:17:33Z" is="time-ago">Oct 5, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-gridstackjs" class="anchor" href="#gridstackjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>gridstack.js</h1>

<p>gridstack.js is a jQuery plugin for widget layout. This is drag-and-drop multi-column grid. It allows you to build 
draggable responsive bootstrap v3 friendly layouts. It also works great with <a href="http://knockoutjs.com">knockout.js</a> and
touch devices.</p>

<p>Inspired by <a href="http://gridster.net">gridster.js</a>. Built with love.</p>





<p><strong>Table of Contents</strong>  <em>generated with <a href="https://github.com/thlorenz/doctoc">DocToc</a></em></p>

<ul>
<li><a href="#demo">Demo</a></li>
<li><a href="#usage">Usage</a>

<ul>
<li><a href="#requirements">Requirements</a></li>
<li><a href="#rails-integration">Rails integration</a></li>
<li><a href="#basic-usage">Basic usage</a></li>
<li><a href="#options">Options</a></li>
<li><a href="#grid-attributes">Grid attributes</a></li>
<li><a href="#item-attributes">Item attributes</a></li>
<li><a href="#events">Events</a>

<ul>
<li><a href="#onchangeitems">onchange(items)</a></li>
<li><a href="#ondragstartevent-ui">ondragstart(event, ui)</a></li>
<li><a href="#ondragstopevent-ui">ondragstop(event, ui)</a></li>
<li><a href="#onresizestartevent-ui">onresizestart(event, ui)</a></li>
<li><a href="#onresizestopevent-ui">onresizestop(event, ui)</a></li>
</ul></li>
<li><a href="#api">API</a>

<ul>
<li><a href="#add_widgetel-x-y-width-height-auto_position">add_widget(el, x, y, width, height, auto_position)</a></li>
<li><a href="#batch_update">batch_update()</a></li>
<li><a href="#cell_height">cell_height()</a></li>
<li><a href="#cell_heightval">cell_height(val)</a></li>
<li><a href="#cell_width">cell_width()</a></li>
<li><a href="#commit">commit()</a></li>
<li><a href="#destroy">destroy()</a></li>
<li><a href="#disable">disable()</a></li>
<li><a href="#enable">enable()</a></li>
<li><a href="#get_cell_from_pixelposition">get_cell_from_pixel(position)</a></li>
<li><a href="#is_area_emptyx-y-width-height">is_area_empty(x, y, width, height)</a></li>
<li><a href="#lockedel-val">locked(el, val)</a></li>
<li><a href="#min_widthel-val">min_width(el, val)</a></li>
<li><a href="#min_heightel-val">min_height(el, val)</a></li>
<li><a href="#movableel-val">movable(el, val)</a></li>
<li><a href="#moveel-x-y">move(el, x, y)</a></li>
<li><a href="#remove_widgetel-detach_node">remove_widget(el, detach_node)</a></li>
<li><a href="#remove_all">remove_all()</a></li>
<li><a href="#resizeel-width-height">resize(el, width, height)</a></li>
<li><a href="#resizableel-val">resizable(el, val)</a></li>
<li><a href="#set_staticstatic_value">set_static(static_value)</a></li>
<li><a href="#updateel-x-y-width-height">update(el, x, y, width, height)</a></li>
<li><a href="#will_it_fitx-y-width-height-auto_position">will_it_fit(x, y, width, height, auto_position)</a></li>
</ul></li>
<li><a href="#utils">Utils</a>

<ul>
<li><a href="#gridstackuiutilssortnodes-dir-width">GridStackUI.Utils.sort(nodes[, dir[, width]])</a></li>
</ul></li>
<li><a href="#touch-devices-support">Touch devices support</a></li>
<li><a href="#use-with-knockoutjs">Use with knockout.js</a></li>
<li><a href="#change-grid-width">Change grid width</a></li>
<li><a href="#extra-css">Extra CSS</a>

<ul>
<li><a href="#different-grid-widths">Different grid widths</a></li>
</ul></li>
<li><a href="#save-grid-to-array">Save grid to array</a></li>
<li><a href="#load-grid-from-array">Load grid from array</a></li>
<li><a href="#override-resizabledraggable-options">Override resizable/draggable options</a></li>
<li><a href="#ie8-support">IE8 support</a></li>
<li><a href="#nested-grids">Nested grids</a></li>
</ul></li>
<li><a href="#changes">Changes</a>

<ul>
<li><a href="#v024-development-version">v0.2.4 (development version)</a></li>
<li><a href="#v023-2015-06-23">v0.2.3 (2015-06-23)</a></li>
<li><a href="#v022-2014-12-23">v0.2.2 (2014-12-23)</a></li>
<li><a href="#v021-2014-12-09">v0.2.1 (2014-12-09)</a></li>
<li><a href="#v020-2014-11-30">v0.2.0 (2014-11-30)</a></li>
<li><a href="#v010-2014-11-18">v0.1.0 (2014-11-18)</a></li>
</ul></li>
<li><a href="#license">License</a></li>
</ul>



<h1><a id="user-content-demo" class="anchor" href="#demo" aria-hidden="true"><span class="octicon octicon-link"></span></a>Demo</h1>

<p>Please visit <a href="http://troolee.github.io/gridstack.js/">http://troolee.github.io/gridstack.js/</a> for demo.</p>

<h1><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h1>

<h2><a id="user-content-requirements" class="anchor" href="#requirements" aria-hidden="true"><span class="octicon octicon-link"></span></a>Requirements</h2>

<ul>
<li><a href="https://lodash.com">lodash.js</a> (&gt;= 3.5.0)</li>
<li><a href="http://jquery.com">jQuery</a> (&gt;= 1.11.0) </li>
<li><a href="http://jqueryui.com">jQuery UI</a> (&gt;= 1.11.0). Minimum required components: Core, Widget, Mouse, Draggable, Resizable</li>
<li>(Optional) <a href="http://knockoutjs.com">knockout.js</a> (&gt;= 3.2.0)</li>
<li>(Optional) <a href="https://github.com/furf/jquery-ui-touch-punch">jquery-ui-touch-punch</a> for touch-based devices support</li>
</ul>

<p>Note: You can still use <a href="http://underscorejs.org">underscore.js</a> (&gt;= 1.7.0) instead of lodash.js</p>

<h2><a id="user-content-rails-integration" class="anchor" href="#rails-integration" aria-hidden="true"><span class="octicon octicon-link"></span></a>Rails integration</h2>

<p>For rails users, integration of gridstack.js and its dependencies can be done through <a href="https://github.com/randoum/gridstack-js-rails">gridstack-js-rails</a></p>

<h2><a id="user-content-basic-usage" class="anchor" href="#basic-usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Basic usage</h2>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack-item<span class="pl-pds">"</span></span> 
        <span class="pl-e">data-gs-x</span>=<span class="pl-s"><span class="pl-pds">"</span>0<span class="pl-pds">"</span></span> <span class="pl-e">data-gs-y</span>=<span class="pl-s"><span class="pl-pds">"</span>0<span class="pl-pds">"</span></span> 
        <span class="pl-e">data-gs-width</span>=<span class="pl-s"><span class="pl-pds">"</span>4<span class="pl-pds">"</span></span> <span class="pl-e">data-gs-height</span>=<span class="pl-s"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack-item-content<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack-item<span class="pl-pds">"</span></span> 
        <span class="pl-e">data-gs-x</span>=<span class="pl-s"><span class="pl-pds">"</span>4<span class="pl-pds">"</span></span> <span class="pl-e">data-gs-y</span>=<span class="pl-s"><span class="pl-pds">"</span>0<span class="pl-pds">"</span></span> 
        <span class="pl-e">data-gs-width</span>=<span class="pl-s"><span class="pl-pds">"</span>4<span class="pl-pds">"</span></span> <span class="pl-e">data-gs-height</span>=<span class="pl-s"><span class="pl-pds">"</span>4<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack-item-content<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;

<span class="pl-s1">&lt;<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span>&gt;</span>
<span class="pl-s1"><span class="pl-en">$</span>(<span class="pl-k">function</span> () {</span>
<span class="pl-s1">    <span class="pl-k">var</span> options <span class="pl-k">=</span> {</span>
<span class="pl-s1">        cell_height<span class="pl-k">:</span> <span class="pl-c1">80</span>,</span>
<span class="pl-s1">        vertical_margin<span class="pl-k">:</span> <span class="pl-c1">10</span></span>
<span class="pl-s1">    };</span>
<span class="pl-s1">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>(options);</span>
<span class="pl-s1">});</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre></div>

<h2><a id="user-content-options" class="anchor" href="#options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Options</h2>

<ul>
<li><code>always_show_resize_handle</code> - if <code>true</code> the resizing handles are shown even if the user is not hovering over the widget 
(default: <code>false</code>) </li>
<li><code>animate</code> - turns animation on (default: <code>false</code>)</li>
<li><code>auto</code> - if <code>false</code> gridstack will not initialize existing items (default: <code>true</code>)</li>
<li><code>cell_height</code> - one cell height (default: <code>60</code>)</li>
<li><code>draggable</code> - allows to override jQuery UI draggable options. (default: <code>{handle: '.grid-stack-item-content', scroll: true, appendTo: 'body'}</code>) </li>
<li><code>handle</code> - draggable handle selector (default: <code>'.grid-stack-item-content'</code>)</li>
<li><code>handle_class</code> - draggable handle class (e.g. <code>'grid-stack-item-content'</code>). If set <code>handle</code> is ignored (default: <code>null</code>)</li>
<li><code>height</code> - maximum rows amount. Default is <code>0</code> which means no maximum rows</li>
<li><code>float</code> - enable floating widgets (default: <code>false</code>) See <a href="http://troolee.github.io/gridstack.js/demo/float.html">example</a></li>
<li><code>item_class</code> - widget class (default: <code>'grid-stack-item'</code>)</li>
<li><code>min_width</code> - minimal width. If window width is less, grid will be shown in one-column mode (default: <code>768</code>)</li>
<li><code>placeholder_class</code> - class for placeholder (default: <code>'grid-stack-placeholder'</code>)</li>
<li><code>resizable</code> - allows to override jQuery UI resizable options. (default: <code>{autoHide: true, handles: 'se'}</code>)</li>
<li><code>static_grid</code> - makes grid static (default <code>false</code>). If true widgets are not movable/resizable. You don't even need jQueryUI draggable/resizable.  A CSS class <code>grid-stack-static</code> is also added to the container.</li>
<li><code>vertical_margin</code> - vertical gap size (default: <code>20</code>)</li>
<li><code>width</code> - amount of columns (default: <code>12</code>)</li>
</ul>

<h2><a id="user-content-grid-attributes" class="anchor" href="#grid-attributes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Grid attributes</h2>

<ul>
<li><code>data-gs-animate</code> - turns animation on </li>
<li><code>data-gs-width</code> - amount of columns</li>
<li><code>data-gs-height</code> - maximum rows amount. Default is <code>0</code> which means no maximum rows.</li>
</ul>

<h2><a id="user-content-item-attributes" class="anchor" href="#item-attributes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Item attributes</h2>

<ul>
<li><code>data-gs-x</code>, <code>data-gs-y</code> - element position</li>
<li><code>data-gs-width</code>, <code>data-gs-height</code> - element size</li>
<li><code>data-gs-max-width</code>, <code>data-gs-min-width</code>, <code>data-gs-max-height</code>, <code>data-gs-min-height</code> - element constraints</li>
<li><code>data-gs-no-resize</code> - disable element resizing</li>
<li><code>data-gs-no-move</code> - disable element moving </li>
<li><code>data-gs-auto-position</code> - tells to ignore <code>data-gs-x</code> and <code>data-gs-y</code> attributes and to place element to the first 
available position</li>
<li><code>data-gs-locked</code> - the widget will be locked. It means another widget wouldn't be able to move it during dragging or resizing.
The widget can still be dragged or resized. You need to add <code>data-gs-no-resize</code> and <code>data-gs-no-move</code> attributes
to completely lock the widget.</li>
</ul>

<h2><a id="user-content-events" class="anchor" href="#events" aria-hidden="true"><span class="octicon octicon-link"></span></a>Events</h2>

<h3><a id="user-content-onchangeitems" class="anchor" href="#onchangeitems" aria-hidden="true"><span class="octicon octicon-link"></span></a>onchange(items)</h3>

<p>Occurs when adding/removing widgets or existing widgets change their position/size</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> <span class="pl-en">serialize_widget_map</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">items</span>) {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(items);
};

<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>change<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">e</span>, <span class="pl-smi">items</span>) {
    <span class="pl-en">serialize_widget_map</span>(items);
});</pre></div>

<h3><a id="user-content-ondragstartevent-ui" class="anchor" href="#ondragstartevent-ui" aria-hidden="true"><span class="octicon octicon-link"></span></a>ondragstart(event, ui)</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>dragstart<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>, <span class="pl-smi">ui</span>) {
    <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-v">this</span>;
    <span class="pl-k">var</span> element <span class="pl-k">=</span> <span class="pl-smi">event</span>.<span class="pl-c1">target</span>;
});</pre></div>

<h3><a id="user-content-ondragstopevent-ui" class="anchor" href="#ondragstopevent-ui" aria-hidden="true"><span class="octicon octicon-link"></span></a>ondragstop(event, ui)</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>dragstop<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>, <span class="pl-smi">ui</span>) {
    <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-v">this</span>;
    <span class="pl-k">var</span> element <span class="pl-k">=</span> <span class="pl-smi">event</span>.<span class="pl-c1">target</span>;
});</pre></div>

<h3><a id="user-content-onresizestartevent-ui" class="anchor" href="#onresizestartevent-ui" aria-hidden="true"><span class="octicon octicon-link"></span></a>onresizestart(event, ui)</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>resizestart<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>, <span class="pl-smi">ui</span>) {
    <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-v">this</span>;
    <span class="pl-k">var</span> element <span class="pl-k">=</span> <span class="pl-smi">event</span>.<span class="pl-c1">target</span>;
});</pre></div>

<h3><a id="user-content-onresizestopevent-ui" class="anchor" href="#onresizestopevent-ui" aria-hidden="true"><span class="octicon octicon-link"></span></a>onresizestop(event, ui)</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>resizestop<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>, <span class="pl-smi">ui</span>) {
    <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-v">this</span>;
    <span class="pl-k">var</span> element <span class="pl-k">=</span> <span class="pl-smi">event</span>.<span class="pl-c1">target</span>;
});</pre></div>

<h2><a id="user-content-api" class="anchor" href="#api" aria-hidden="true"><span class="octicon octicon-link"></span></a>API</h2>

<h3><a id="user-content-add_widgetel-x-y-width-height-auto_position" class="anchor" href="#add_widgetel-x-y-width-height-auto_position" aria-hidden="true"><span class="octicon octicon-link"></span></a>add_widget(el, x, y, width, height, auto_position)</h3>

<p>Creates new widget and returns it.</p>

<p>Parameters:</p>

<ul>
<li><code>el</code> - widget to add</li>
<li><code>x</code>, <code>y</code>, <code>width</code>, <code>height</code> - widget position/dimensions (Optional)</li>
<li><code>auto_position</code> - if <code>true</code> then <code>x</code>, <code>y</code> parameters will be ignored and widget will be places on the first available
position</li>
</ul>

<p>Widget will be always placed even if result height is more than actual grid height. You need to use <code>will_it_fit</code> method
before calling <code>add_widget</code> for additional check.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>();

<span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>gridstack<span class="pl-pds">'</span></span>);
<span class="pl-smi">grid</span>.<span class="pl-en">add_widget</span>(el, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">3</span>, <span class="pl-c1">2</span>, <span class="pl-c1">true</span>);</pre></div>

<h3><a id="user-content-batch_update" class="anchor" href="#batch_update" aria-hidden="true"><span class="octicon octicon-link"></span></a>batch_update()</h3>

<p>Initailizes batch updates. You will see no changes until <code>commit</code> method is called. </p>

<h3><a id="user-content-cell_height" class="anchor" href="#cell_height" aria-hidden="true"><span class="octicon octicon-link"></span></a>cell_height()</h3>

<p>Gets current cell height.</p>

<h3><a id="user-content-cell_heightval" class="anchor" href="#cell_heightval" aria-hidden="true"><span class="octicon octicon-link"></span></a>cell_height(val)</h3>

<p>Update current cell height. This method rebuilds an internal CSS stylesheet. Note: You can expect performance issues if
call this method too often.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">grid</span>.<span class="pl-en">cell_height</span>(<span class="pl-smi">grid</span>.<span class="pl-en">cell_width</span>() <span class="pl-k">*</span> <span class="pl-c1">1.2</span>);</pre></div>

<h3><a id="user-content-cell_width" class="anchor" href="#cell_width" aria-hidden="true"><span class="octicon octicon-link"></span></a>cell_width()</h3>

<p>Gets current cell width.</p>

<h3><a id="user-content-commit" class="anchor" href="#commit" aria-hidden="true"><span class="octicon octicon-link"></span></a>commit()</h3>

<p>Finishes batch updates. Updates DOM nodes. You must call it after <code>batch_update</code>.</p>

<h3><a id="user-content-destroy" class="anchor" href="#destroy" aria-hidden="true"><span class="octicon octicon-link"></span></a>destroy()</h3>

<p>Destroys a grid instance. </p>

<h3><a id="user-content-disable" class="anchor" href="#disable" aria-hidden="true"><span class="octicon octicon-link"></span></a>disable()</h3>

<p>Disables widgets moving/resizing. This is a shortcut for:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">grid</span>.<span class="pl-en">movable</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack-item<span class="pl-pds">'</span></span>, <span class="pl-c1">false</span>);
<span class="pl-smi">grid</span>.<span class="pl-en">resizable</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack-item<span class="pl-pds">'</span></span>, <span class="pl-c1">false</span>);</pre></div>

<h3><a id="user-content-enable" class="anchor" href="#enable" aria-hidden="true"><span class="octicon octicon-link"></span></a>enable()</h3>

<p>Enables widgets moving/resizing. This is a shortcut for:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">grid</span>.<span class="pl-en">movable</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack-item<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);
<span class="pl-smi">grid</span>.<span class="pl-en">resizable</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack-item<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);</pre></div>

<h3><a id="user-content-get_cell_from_pixelposition" class="anchor" href="#get_cell_from_pixelposition" aria-hidden="true"><span class="octicon octicon-link"></span></a>get_cell_from_pixel(position)</h3>

<p>Get the position of the cell under a pixel on screen.</p>

<p>Parameters :</p>

<ul>
<li><code>position</code> - the position of the pixel to resolve in absolute coordinates, as an object with <code>top</code> and <code>left</code>properties</li>
</ul>

<p>Returns an object with properties <code>x</code> and <code>y</code> i.e. the column and row in the grid.</p>

<h3><a id="user-content-is_area_emptyx-y-width-height" class="anchor" href="#is_area_emptyx-y-width-height" aria-hidden="true"><span class="octicon octicon-link"></span></a>is_area_empty(x, y, width, height)</h3>

<p>Checks if specified area is empty.</p>

<h3><a id="user-content-lockedel-val" class="anchor" href="#lockedel-val" aria-hidden="true"><span class="octicon octicon-link"></span></a>locked(el, val)</h3>

<p>Locks/unlocks widget.</p>

<ul>
<li><code>el</code> - widget to modify.</li>
<li><code>val</code> - if <code>true</code> widget will be locked. </li>
</ul>

<h3><a id="user-content-min_widthel-val" class="anchor" href="#min_widthel-val" aria-hidden="true"><span class="octicon octicon-link"></span></a>min_width(el, val)</h3>

<p>Set the minWidth for a widget.</p>

<ul>
<li><code>el</code> - widget to modify.</li>
<li><code>val</code> - A numeric value of the number of columns</li>
</ul>

<h3><a id="user-content-min_heightel-val" class="anchor" href="#min_heightel-val" aria-hidden="true"><span class="octicon octicon-link"></span></a>min_height(el, val)</h3>

<p>Set the minHeight for a widget.</p>

<ul>
<li><code>el</code> - widget to modify.</li>
<li><code>val</code> - A numeric value of the number of rows</li>
</ul>

<h3><a id="user-content-movableel-val" class="anchor" href="#movableel-val" aria-hidden="true"><span class="octicon octicon-link"></span></a>movable(el, val)</h3>

<p>Enables/Disables moving.</p>

<ul>
<li><code>el</code> - widget to modify</li>
<li><code>val</code> - if <code>true</code> widget will be draggable.</li>
</ul>

<h3><a id="user-content-moveel-x-y" class="anchor" href="#moveel-x-y" aria-hidden="true"><span class="octicon octicon-link"></span></a>move(el, x, y)</h3>

<p>Changes widget position</p>

<p>Parameters:</p>

<ul>
<li><code>el</code> - widget to move</li>
<li><code>x</code>, <code>y</code> - new position. If value is <code>null</code> or <code>undefined</code> it will be ignored.</li>
</ul>

<h3><a id="user-content-remove_widgetel-detach_node" class="anchor" href="#remove_widgetel-detach_node" aria-hidden="true"><span class="octicon octicon-link"></span></a>remove_widget(el, detach_node)</h3>

<p>Removes widget from the grid.</p>

<p>Parameters:</p>

<ul>
<li><code>el</code> - widget to remove.</li>
<li><code>detach_node</code> - if <code>false</code> DOM node won't be removed from the tree (Optional. Default <code>true</code>).</li>
</ul>

<h3><a id="user-content-remove_all" class="anchor" href="#remove_all" aria-hidden="true"><span class="octicon octicon-link"></span></a>remove_all()</h3>

<p>Removes all widgets from the grid.</p>

<h3><a id="user-content-resizeel-width-height" class="anchor" href="#resizeel-width-height" aria-hidden="true"><span class="octicon octicon-link"></span></a>resize(el, width, height)</h3>

<p>Changes widget size</p>

<p>Parameters:</p>

<ul>
<li><code>el</code> - widget to resize</li>
<li><code>width</code>, <code>height</code> - new dimensions. If value is <code>null</code> or <code>undefined</code> it will be ignored.</li>
</ul>

<h3><a id="user-content-resizableel-val" class="anchor" href="#resizableel-val" aria-hidden="true"><span class="octicon octicon-link"></span></a>resizable(el, val)</h3>

<p>Enables/Disables resizing.</p>

<ul>
<li><code>el</code> - widget to modify</li>
<li><code>val</code> - if <code>true</code> widget will be resizable. </li>
</ul>

<h3><a id="user-content-set_staticstatic_value" class="anchor" href="#set_staticstatic_value" aria-hidden="true"><span class="octicon octicon-link"></span></a>set_static(static_value)</h3>

<p>Toggle the grid static state.  Also toggle the <code>grid-stack-static</code> class.</p>

<ul>
<li><code>static_value</code> - if <code>true</code> the grid become static. </li>
</ul>

<h3><a id="user-content-updateel-x-y-width-height" class="anchor" href="#updateel-x-y-width-height" aria-hidden="true"><span class="octicon octicon-link"></span></a>update(el, x, y, width, height)</h3>

<p>Parameters:</p>

<ul>
<li><code>el</code> - widget to move</li>
<li><code>x</code>, <code>y</code> - new position. If value is <code>null</code> or <code>undefined</code> it will be ignored.</li>
<li><code>width</code>, <code>height</code> - new dimensions. If value is <code>null</code> or <code>undefined</code> it will be ignored.</li>
</ul>

<p>Updates widget position/size.</p>

<h3><a id="user-content-will_it_fitx-y-width-height-auto_position" class="anchor" href="#will_it_fitx-y-width-height-auto_position" aria-hidden="true"><span class="octicon octicon-link"></span></a>will_it_fit(x, y, width, height, auto_position)</h3>

<p>Returns <code>true</code> if the <code>height</code> of the grid will be less the vertical constraint. Always returns <code>true</code> if grid doesn't
have <code>height</code> constraint.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">if</span> (<span class="pl-smi">grid</span>.<span class="pl-en">will_it_fit</span>(<span class="pl-smi">new_node</span>.<span class="pl-c1">x</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">y</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">width</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">height</span>, <span class="pl-c1">true</span>)) {
    <span class="pl-smi">grid</span>.<span class="pl-en">add_widget</span>(<span class="pl-smi">new_node</span>.<span class="pl-smi">el</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">x</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">y</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">width</span>, <span class="pl-smi">new_node</span>.<span class="pl-c1">height</span>, <span class="pl-c1">true</span>);
}
<span class="pl-k">else</span> {
    <span class="pl-c1">alert</span>(<span class="pl-s"><span class="pl-pds">'</span>Not enough free space to place the widget<span class="pl-pds">'</span></span>);
}</pre></div>

<h2><a id="user-content-utils" class="anchor" href="#utils" aria-hidden="true"><span class="octicon octicon-link"></span></a>Utils</h2>

<h3><a id="user-content-gridstackuiutilssortnodes-dir-width" class="anchor" href="#gridstackuiutilssortnodes-dir-width" aria-hidden="true"><span class="octicon octicon-link"></span></a>GridStackUI.Utils.sort(nodes[, dir[, width]])</h3>

<p>Sorts array of nodes</p>

<ul>
<li><code>nodes</code> - array to sort</li>
<li><code>dir</code> - <code>1</code> for asc, <code>-1</code> for desc (optional)</li>
<li><code>width</code> - width of the grid. If <code>undefined</code> the width will be calculated automatically (optional).</li>
</ul>

<h2><a id="user-content-touch-devices-support" class="anchor" href="#touch-devices-support" aria-hidden="true"><span class="octicon octicon-link"></span></a>Touch devices support</h2>

<p>Please use <a href="https://github.com/furf/jquery-ui-touch-punch">jQuery UI Touch Punch</a> to make jQuery UI Draggable/Resizable
working on touch-based devices.</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>lodash.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>jquery.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>jquery-ui.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>jquery.ui.touch-punch.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>gridstack.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<p>Also <code>always_show_resize_handle</code> option may be useful:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-k">function</span> () {
    <span class="pl-k">var</span> options <span class="pl-k">=</span> {
        always_show_resize_handle<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>Android<span class="pl-k">|</span>webOS<span class="pl-k">|</span>iPhone<span class="pl-k">|</span>iPad<span class="pl-k">|</span>iPod<span class="pl-k">|</span>BlackBerry<span class="pl-k">|</span>IEMobile<span class="pl-k">|</span>Opera Mini<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>)
    };
    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>(options);
});</pre></div>

<h2><a id="user-content-use-with-knockoutjs" class="anchor" href="#use-with-knockoutjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Use with knockout.js</h2>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">ko</span>.<span class="pl-c1">components</span>.<span class="pl-en">register</span>(<span class="pl-s"><span class="pl-pds">'</span>dashboard-grid<span class="pl-pds">'</span></span>, {
    viewModel<span class="pl-k">:</span> {
        <span class="pl-en">createViewModel</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">controller</span>, <span class="pl-smi">componentInfo</span>) {
            <span class="pl-k">var</span> <span class="pl-en">ViewModel</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">controller</span>, <span class="pl-smi">componentInfo</span>) {
                <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-c1">null</span>;

                <span class="pl-v">this</span>.<span class="pl-smi">widgets</span> <span class="pl-k">=</span> <span class="pl-smi">controller</span>.<span class="pl-smi">widgets</span>;

                <span class="pl-v">this</span>.<span class="pl-smi">afterAddWidget</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">items</span>) {
                    <span class="pl-k">if</span> (grid <span class="pl-k">==</span> <span class="pl-c1">null</span>) {
                        grid <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">componentInfo</span>.<span class="pl-smi">element</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>({
                            auto<span class="pl-k">:</span> <span class="pl-c1">false</span>
                        }).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>gridstack<span class="pl-pds">'</span></span>);
                    }

                    <span class="pl-k">var</span> item <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">find</span>(items, <span class="pl-k">function</span> (<span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-smi">i</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">==</span> <span class="pl-c1">1</span> });
                    <span class="pl-smi">grid</span>.<span class="pl-en">add_widget</span>(item);
                    <span class="pl-smi">ko</span>.<span class="pl-smi">utils</span>.<span class="pl-smi">domNodeDisposal</span>.<span class="pl-en">addDisposeCallback</span>(item, <span class="pl-k">function</span> () {
                        <span class="pl-smi">grid</span>.<span class="pl-en">remove_widget</span>(item);
                    });
                };
            };

            <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">ViewModel</span>(controller, componentInfo);
        }
    },
    template<span class="pl-k">:</span>
        [
            <span class="pl-s"><span class="pl-pds">'</span>&lt;div class="grid-stack" data-bind="foreach: {data: widgets, afterRender: afterAddWidget}"&gt;<span class="pl-pds">'</span></span>,
            <span class="pl-s"><span class="pl-pds">'</span>   &lt;div class="grid-stack-item" data-bind="attr: {<span class="pl-cce">\'</span>data-gs-x<span class="pl-cce">\'</span>: $data.x, <span class="pl-cce">\'</span>data-gs-y<span class="pl-cce">\'</span>: $data.y, <span class="pl-cce">\'</span>data-gs-width<span class="pl-cce">\'</span>: $data.width, <span class="pl-cce">\'</span>data-gs-height<span class="pl-cce">\'</span>: $data.height, <span class="pl-cce">\'</span>data-gs-auto-position<span class="pl-cce">\'</span>: $data.auto_position}"&gt;<span class="pl-pds">'</span></span>,
            <span class="pl-s"><span class="pl-pds">'</span>       &lt;div class="grid-stack-item-content"&gt;...&lt;/div&gt;<span class="pl-pds">'</span></span>,
            <span class="pl-s"><span class="pl-pds">'</span>   &lt;/div&gt;<span class="pl-pds">'</span></span>,
            <span class="pl-s"><span class="pl-pds">'</span>&lt;/div&gt; <span class="pl-pds">'</span></span>
        ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>)
});

<span class="pl-en">$</span>(<span class="pl-k">function</span> () {
    <span class="pl-k">var</span> <span class="pl-en">Controller</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">widgets</span>) {
        <span class="pl-v">this</span>.<span class="pl-smi">widgets</span> <span class="pl-k">=</span> <span class="pl-smi">ko</span>.<span class="pl-en">observableArray</span>(widgets);
    };

    <span class="pl-k">var</span> widgets <span class="pl-k">=</span> [
        {x<span class="pl-k">:</span> <span class="pl-c1">0</span>, y<span class="pl-k">:</span> <span class="pl-c1">0</span>, width<span class="pl-k">:</span> <span class="pl-c1">2</span>, height<span class="pl-k">:</span> <span class="pl-c1">2</span>},
        {x<span class="pl-k">:</span> <span class="pl-c1">2</span>, y<span class="pl-k">:</span> <span class="pl-c1">0</span>, width<span class="pl-k">:</span> <span class="pl-c1">4</span>, height<span class="pl-k">:</span> <span class="pl-c1">2</span>},
        {x<span class="pl-k">:</span> <span class="pl-c1">6</span>, y<span class="pl-k">:</span> <span class="pl-c1">0</span>, width<span class="pl-k">:</span> <span class="pl-c1">2</span>, height<span class="pl-k">:</span> <span class="pl-c1">4</span>},
        {x<span class="pl-k">:</span> <span class="pl-c1">1</span>, y<span class="pl-k">:</span> <span class="pl-c1">2</span>, width<span class="pl-k">:</span> <span class="pl-c1">4</span>, height<span class="pl-k">:</span> <span class="pl-c1">2</span>}
    ];

    <span class="pl-smi">ko</span>.<span class="pl-en">applyBindings</span>(<span class="pl-k">new</span> <span class="pl-en">Controller</span>(widgets));
});</pre></div>

<p>and HTML:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-bind</span>=<span class="pl-s"><span class="pl-pds">"</span>component: {name: 'dashboard-grid', params: $data}<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;</pre></div>

<p>See examples: <a href="http://troolee.github.io/gridstack.js/demo/knockout.html">example 1</a>, <a href="http://troolee.github.io/gridstack.js/demo/knockout2.html">example 2</a>.</p>

<p><strong>Notes:</strong> It's very important to exclude training spaces after widget template:</p>

<pre><code>template:
    [
        '&lt;div class="grid-stack" data-bind="foreach: {data: widgets, afterRender: afterAddWidget}"&gt;',
        '   &lt;div class="grid-stack-item" data-bind="attr: {\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}"&gt;',
        '       ....',
        '   &lt;/div&gt;', // &lt;-- NO SPACE **AFTER** &lt;/div&gt;
        '&lt;/div&gt; '    // &lt;-- NO SPACE **BEFORE** &lt;/div&gt;
    ].join('')       // &lt;-- JOIN WITH **EMPTY** STRING 
</code></pre>

<p>Otherwise <code>addDisposeCallback</code> won't work.</p>

<h2><a id="user-content-change-grid-width" class="anchor" href="#change-grid-width" aria-hidden="true"><span class="octicon octicon-link"></span></a>Change grid width</h2>

<p>To change grid width (columns count), to addition to <code>width</code> option, CSS rules 
for <code>.grid-stack-item[data-gs-width="X"]</code> and  <code>.grid-stack-item[data-gs-x="X"]</code> have to be changed accordingly. </p>

<p>For instance for 3-column grid you need to rewrite CSS to be:</p>

<div class="highlight highlight-source-css"><pre><span class="pl-e">.grid-stack-item</span>[data-gs-width="3"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">100<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-width="2"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">66.66666667<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-width="1"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">33.33333333<span class="pl-k">%</span></span> }

<span class="pl-e">.grid-stack-item</span>[data-gs-x="2"]  { <span class="pl-c1"><span class="pl-c1">left</span></span>: <span class="pl-c1">66.66666667<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-x="1"]  { <span class="pl-c1"><span class="pl-c1">left</span></span>: <span class="pl-c1">33.33333333<span class="pl-k">%</span></span> }</pre></div>

<p>For 4-column grid it should be:</p>

<div class="highlight highlight-source-css"><pre><span class="pl-e">.grid-stack-item</span>[data-gs-width="4"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">100<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-width="3"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">75<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-width="2"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">50<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-width="1"]  { <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">25<span class="pl-k">%</span></span> }

<span class="pl-e">.grid-stack-item</span>[data-gs-x="3"]  { <span class="pl-c1"><span class="pl-c1">left</span></span>: <span class="pl-c1">75<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-x="2"]  { <span class="pl-c1"><span class="pl-c1">left</span></span>: <span class="pl-c1">50<span class="pl-k">%</span></span> }
<span class="pl-e">.grid-stack-item</span>[data-gs-x="1"]  { <span class="pl-c1"><span class="pl-c1">left</span></span>: <span class="pl-c1">25<span class="pl-k">%</span></span> }</pre></div>

<p>and so on.</p>

<p>Here is a SASS code snipped which can make life easier (Thanks to @ascendantofrain, <a href="https://github.com/troolee/gridstack.js/issues/81">#81</a>):</p>

<div class="highlight highlight-source-sass"><pre><span class="pl-e">.grid-stack-item</span> {

    <span class="pl-v">$gridstack-columns</span>:<span class="pl-c1"> 12</span>;

    <span class="pl-k">@for</span> <span class="pl-v">$i</span> <span class="pl-c1">from</span><span class="pl-c1"> 1</span> <span class="pl-c1">through</span> <span class="pl-v">$gridstack-columns</span> {
        <span class="pl-k">&amp;</span>[data-gs-<span class="pl-c1">width</span>=<span class="pl-s">'#{$i}'</span>] { <span class="pl-c1">width</span>: (<span class="pl-c1">100</span><span class="pl-k">%</span> / <span class="pl-v">$gridstack-columns</span>) <span class="pl-ent">*</span> <span class="pl-v">$i</span>; }
        <span class="pl-k">&amp;</span>[data-gs-<span class="pl-c1">x</span>=<span class="pl-s">'#{$i}'</span>] { <span class="pl-c1">left</span>: (<span class="pl-c1">100</span><span class="pl-k">%</span> / <span class="pl-v">$gridstack-columns</span>) <span class="pl-ent">*</span> <span class="pl-v">$i</span>; }
        <span class="pl-k">&amp;</span><span class="pl-e">.grid-stack-item</span>[data-gs-<span class="pl-c1">min-width</span>=<span class="pl-s">'#{$i}'</span>] { <span class="pl-c1">min-width</span>: (<span class="pl-c1">100</span><span class="pl-k">%</span> / <span class="pl-v">$gridstack-columns</span>) <span class="pl-ent">*</span> <span class="pl-v">$i</span>; }
        <span class="pl-k">&amp;</span><span class="pl-e">.grid-stack-item</span>[data-gs-<span class="pl-c1">max-width</span>=<span class="pl-s">'#{$i}'</span>] { <span class="pl-c1">max-width</span>: (<span class="pl-c1">100</span><span class="pl-k">%</span> / <span class="pl-v">$gridstack-columns</span>) <span class="pl-ent">*</span> <span class="pl-v">$i</span>; }
    }
}</pre></div>

<p>Or you can include <code>gridstack-extra.css</code>. See below for more details.</p>

<h2><a id="user-content-extra-css" class="anchor" href="#extra-css" aria-hidden="true"><span class="octicon octicon-link"></span></a>Extra CSS</h2>

<p>There are few extra CSS batteries in <code>gridstack-extra.css</code> (<code>gridstack-extra.min.css</code>).</p>

<h3><a id="user-content-different-grid-widths" class="anchor" href="#different-grid-widths" aria-hidden="true"><span class="octicon octicon-link"></span></a>Different grid widths</h3>

<p>You can use other than 12 grid width:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>grid-stack grid-stack-N<span class="pl-pds">"</span></span>&gt;...&lt;/<span class="pl-ent">div</span>&gt;</pre></div>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>({width<span class="pl-k">:</span> N});</pre></div>

<p>See example: <a href="http://troolee.github.io/gridstack.js/demo/two.html">2 grids demo</a></p>

<h2><a id="user-content-save-grid-to-array" class="anchor" href="#save-grid-to-array" aria-hidden="true"><span class="octicon octicon-link"></span></a>Save grid to array</h2>

<p>Because gridstack doesn't track any kind of user-defined widget id there is no reason to make serialization to be part
of gridstack API. To serialize grid you can simply do something like this (let's say you store widget id inside <code>data-custom-id</code> 
attribute):</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> res <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack .grid-stack-item:visible<span class="pl-pds">'</span></span>), <span class="pl-k">function</span> (<span class="pl-smi">el</span>) {
    el <span class="pl-k">=</span> <span class="pl-en">$</span>(el);
    <span class="pl-k">var</span> node <span class="pl-k">=</span> <span class="pl-smi">el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>_gridstack_node<span class="pl-pds">'</span></span>);
    <span class="pl-k">return</span> {
        id<span class="pl-k">:</span> <span class="pl-smi">el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>data-custom-id<span class="pl-pds">'</span></span>),
        x<span class="pl-k">:</span> <span class="pl-smi">node</span>.<span class="pl-c1">x</span>,
        y<span class="pl-k">:</span> <span class="pl-smi">node</span>.<span class="pl-c1">y</span>,
        width<span class="pl-k">:</span> <span class="pl-smi">node</span>.<span class="pl-c1">width</span>,
        height<span class="pl-k">:</span> <span class="pl-smi">node</span>.<span class="pl-c1">height</span>
    };
});
<span class="pl-c1">alert</span>(<span class="pl-smi">JSON</span>.<span class="pl-en">stringify</span>(res));</pre></div>

<p>See example: <a href="http://troolee.github.io/gridstack.js/demo/serialization.html">Serialization demo</a></p>

<p>You can also use <code>onchange</code> event if you need to save only changed widgets right away they have been changed. </p>

<h2><a id="user-content-load-grid-from-array" class="anchor" href="#load-grid-from-array" aria-hidden="true"><span class="octicon octicon-link"></span></a>Load grid from array</h2>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> serialization <span class="pl-k">=</span> [
    {x<span class="pl-k">:</span> <span class="pl-c1">0</span>, y<span class="pl-k">:</span> <span class="pl-c1">0</span>, width<span class="pl-k">:</span> <span class="pl-c1">2</span>, height<span class="pl-k">:</span> <span class="pl-c1">2</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">3</span>, y<span class="pl-k">:</span> <span class="pl-c1">1</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">2</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">4</span>, y<span class="pl-k">:</span> <span class="pl-c1">1</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">2</span>, y<span class="pl-k">:</span> <span class="pl-c1">3</span>, width<span class="pl-k">:</span> <span class="pl-c1">3</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">1</span>, y<span class="pl-k">:</span> <span class="pl-c1">4</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">1</span>, y<span class="pl-k">:</span> <span class="pl-c1">3</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">2</span>, y<span class="pl-k">:</span> <span class="pl-c1">4</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>},
    {x<span class="pl-k">:</span> <span class="pl-c1">2</span>, y<span class="pl-k">:</span> <span class="pl-c1">5</span>, width<span class="pl-k">:</span> <span class="pl-c1">1</span>, height<span class="pl-k">:</span> <span class="pl-c1">1</span>}
];

serialization <span class="pl-k">=</span> <span class="pl-smi">GridStackUI</span>.<span class="pl-smi">Utils</span>.<span class="pl-c1">sort</span>(serialization);

<span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>gridstack<span class="pl-pds">'</span></span>);
<span class="pl-smi">grid</span>.<span class="pl-en">remove_all</span>();

<span class="pl-smi">_</span>.<span class="pl-en">each</span>(serialization, <span class="pl-k">function</span> (<span class="pl-smi">node</span>) {
    <span class="pl-smi">grid</span>.<span class="pl-en">add_widget</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>&lt;div&gt;&lt;div class="grid-stack-item-content" /&gt;&lt;/div&gt;<span class="pl-pds">'</span></span>), 
        <span class="pl-smi">node</span>.<span class="pl-c1">x</span>, <span class="pl-smi">node</span>.<span class="pl-c1">y</span>, <span class="pl-smi">node</span>.<span class="pl-c1">width</span>, <span class="pl-smi">node</span>.<span class="pl-c1">height</span>);
});</pre></div>

<p>See example: <a href="http://troolee.github.io/gridstack.js/demo/serialization.html">Serialization demo</a></p>

<p>If you're using knockout there is no need for such method at all.</p>

<h2><a id="user-content-override-resizabledraggable-options" class="anchor" href="#override-resizabledraggable-options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Override resizable/draggable options</h2>

<p>You can override default <code>resizable</code>/<code>draggable</code> options. For instance to enable other then bottom right resizing handle
you can init gridsack like:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.grid-stack<span class="pl-pds">'</span></span>).<span class="pl-en">gridstack</span>({
    resizable<span class="pl-k">:</span> {
        handles<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>e, se, s, sw, w<span class="pl-pds">'</span></span>
    }
});</pre></div>

<p>Note: It's not recommended to enable <code>nw</code>, <code>n</code>, <code>ne</code> resizing handles. Their behaviour may be unexpected.</p>

<h2><a id="user-content-ie8-support" class="anchor" href="#ie8-support" aria-hidden="true"><span class="octicon octicon-link"></span></a>IE8 support</h2>

<p>Support of IE8 is quite limited and is not a goal at this time. As far as IE8 doesn't support DOM Level 2 I cannot manipulate with
CSS stylesheet dynamically. As a workaround you can do the following:</p>

<ul>
<li>Create <code>gridstack-ie8.css</code> for your configuration (sample for grid with cell height of 60px can be found <a href="https://gist.github.com/troolee/6edfea5857f4cd73e6f1">here</a>).</li>
<li>Include this CSS:</li>
</ul>

<div class="highlight highlight-text-html-basic"><pre><span class="pl-c">&lt;!--[if lt IE 9]&gt;</span>
<span class="pl-c">&lt;link rel="stylesheet" href="gridstack-ie8.css"/&gt;</span>
<span class="pl-c">&lt;![endif]--&gt;</span></pre></div>

<ul>
<li>You can use this python script to generate such kind of CSS:</li>
</ul>

<div class="highlight highlight-source-python"><pre><span class="pl-c">#!/usr/bin/env python</span>

height <span class="pl-k">=</span> <span class="pl-c1">60</span>
margin <span class="pl-k">=</span> <span class="pl-c1">20</span>
N <span class="pl-k">=</span> <span class="pl-c1">100</span>

<span class="pl-k">print</span> <span class="pl-s"><span class="pl-pds">'</span>.grid-stack &gt; .grid-stack-item { min-height: <span class="pl-c1">%(height)s</span>px }<span class="pl-pds">'</span></span> <span class="pl-k">%</span> {<span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>: height}

<span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-c1">range</span>(N):
    h <span class="pl-k">=</span> height <span class="pl-k">*</span> (i <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> margin <span class="pl-k">*</span> i
    <span class="pl-k">print</span> <span class="pl-s"><span class="pl-pds">'</span>.grid-stack &gt; .grid-stack-item[data-gs-height="<span class="pl-c1">%(index)s</span>"] { height: <span class="pl-c1">%(height)s</span>px }<span class="pl-pds">'</span></span> <span class="pl-k">%</span> {<span class="pl-s"><span class="pl-pds">'</span>index<span class="pl-pds">'</span></span>: i <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>: h}

<span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-c1">range</span>(N):
    h <span class="pl-k">=</span> height <span class="pl-k">*</span> (i <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> margin <span class="pl-k">*</span> i
    <span class="pl-k">print</span> <span class="pl-s"><span class="pl-pds">'</span>.grid-stack &gt; .grid-stack-item[data-gs-min-height="<span class="pl-c1">%(index)s</span>"] { min-height: <span class="pl-c1">%(height)s</span>px }<span class="pl-pds">'</span></span> <span class="pl-k">%</span> {<span class="pl-s"><span class="pl-pds">'</span>index<span class="pl-pds">'</span></span>: i <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>: h}

<span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-c1">range</span>(N):
    h <span class="pl-k">=</span> height <span class="pl-k">*</span> (i <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> margin <span class="pl-k">*</span> i
    <span class="pl-k">print</span> <span class="pl-s"><span class="pl-pds">'</span>.grid-stack &gt; .grid-stack-item[data-gs-max-height="<span class="pl-c1">%(index)s</span>"] { max-height: <span class="pl-c1">%(height)s</span>px }<span class="pl-pds">'</span></span> <span class="pl-k">%</span> {<span class="pl-s"><span class="pl-pds">'</span>index<span class="pl-pds">'</span></span>: i <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>: h}

<span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-c1">range</span>(N):
    h <span class="pl-k">=</span> height <span class="pl-k">*</span> i <span class="pl-k">+</span> margin <span class="pl-k">*</span> i
    <span class="pl-k">print</span> <span class="pl-s"><span class="pl-pds">'</span>.grid-stack &gt; .grid-stack-item[data-gs-y="<span class="pl-c1">%(index)s</span>"] { top: <span class="pl-c1">%(height)s</span>px }<span class="pl-pds">'</span></span> <span class="pl-k">%</span> {<span class="pl-s"><span class="pl-pds">'</span>index<span class="pl-pds">'</span></span>: i , <span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>: h}</pre></div>

<p>There are at least two more issues with gridstack in IE8 with jQueryUI resizable (it seems it doesn't work) and 
droppable. If you have any suggestions about support of IE8 you are welcome here: <a href="https://github.com/troolee/gridstack.js/issues/76">https://github.com/troolee/gridstack.js/issues/76</a> </p>

<h2><a id="user-content-nested-grids" class="anchor" href="#nested-grids" aria-hidden="true"><span class="octicon octicon-link"></span></a>Nested grids</h2>

<p>Gridstack may be nested. All nested grids have an additional class <code>grid-stack-nested</code> which is assigned automatically 
during initialization. 
See example: <a href="http://troolee.github.io/gridstack.js/demo/nested.html">Nested grid demo</a></p>

<h1><a id="user-content-changes" class="anchor" href="#changes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Changes</h1>

<h4><a id="user-content-v024-development-version" class="anchor" href="#v024-development-version" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.2.4 (development version)</h4>

<ul>
<li>fix closure compiler/linter warnings</li>
<li>add <code>static_grid</code> option.</li>
<li>add <code>min_width</code>/<code>min_height</code> methods (Thanks to @cvillemure)</li>
<li>add <code>destroy</code> method (Thanks to @zspitzer)</li>
</ul>

<h4><a id="user-content-v023-2015-06-23" class="anchor" href="#v023-2015-06-23" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.2.3 (2015-06-23)</h4>

<ul>
<li>gridstack-extra.css</li>
<li>add support of lodash.js</li>
<li>add <code>is_area_empty</code> method</li>
<li>nested grids</li>
<li>add <code>batch_update</code>/<code>commit</code> methods</li>
<li>add <code>update</code> method</li>
<li>allow to override <code>resizable</code>/<code>draggable</code> options</li>
<li>add <code>disable</code>/<code>enable</code> methods</li>
<li>add <code>get_cell_from_pixel</code> (thanks to @juchi)</li>
<li>AMD support</li>
<li>fix nodes sorting</li>
<li>improved touch devices support</li>
<li>add <code>always_show_resize_handle</code> option</li>
<li>minor fixes and improvements</li>
</ul>

<h4><a id="user-content-v022-2014-12-23" class="anchor" href="#v022-2014-12-23" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.2.2 (2014-12-23)</h4>

<ul>
<li>fix grid initialization</li>
<li>add <code>cell_height</code>/<code>cell_width</code> API methods</li>
<li>fix boolean attributes (issue #31)</li>
</ul>

<h4><a id="user-content-v021-2014-12-09" class="anchor" href="#v021-2014-12-09" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.2.1 (2014-12-09)</h4>

<ul>
<li>add widgets locking (issue #19)</li>
<li>add <code>will_it_fit</code> API method</li>
<li>fix auto-positioning (issue #20)</li>
<li>add animation (thanks to @ishields)</li>
<li>fix <code>y</code> coordinate calculation when dragging (issue #18)</li>
<li>fix <code>remove_widget</code> (issue #16)</li>
<li>minor fixes</li>
</ul>

<h4><a id="user-content-v020-2014-11-30" class="anchor" href="#v020-2014-11-30" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.2.0 (2014-11-30)</h4>

<ul>
<li>add <code>height</code> option</li>
<li>auto-generate css rules (widgets <code>height</code> and <code>top</code>)</li>
<li>add <code>GridStackUI.Utils.sort</code> utility function</li>
<li>add <code>remove_all</code> API method</li>
<li>add <code>resize</code> and <code>move</code> API methods </li>
<li>add <code>resizable</code> and <code>movable</code> API methods</li>
<li>add <code>data-gs-no-move</code> attribute</li>
<li>add <code>float</code> option</li>
<li>fix default css rule for inner content</li>
<li>minor fixes</li>
</ul>

<h4><a id="user-content-v010-2014-11-18" class="anchor" href="#v010-2014-11-18" aria-hidden="true"><span class="octicon octicon-link"></span></a>v0.1.0 (2014-11-18)</h4>

<p>Very first version.</p>

<h1><a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h1>

<p>The MIT License (MIT)</p>

<p>Copyright (c) 2014-2015 Pavel Reznikov</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</p>
</article>
  </div>


  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07969s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>


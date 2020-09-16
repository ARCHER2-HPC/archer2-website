Getting a local install of Jekyll working on Windows10 proved unexpectedly complex, but Jane found the following solution.

Follow the steps at
https://jekyllrb.com/docs/installation/windows/

1.    Download and Install a Ruby+Devkit version from RubyInstaller Downloads. 
	Use default options for installation.
	We used Ruby+Devkit 2.6.6-1 (x64)    from https://rubyinstaller.org/downloads/
	
2.    Run the ridk install step on the last stage of the installation wizard. This is needed for installing gems with native extensions. You can find additional information regarding this in the RubyInstaller Documentation

3.    Open a new command prompt window from the start menu, so that changes to the PATH environment variable becomes effective. 
Install Jekyll and Bundler via: 
 
            gem install jekyll bundler
 
4.   Check if Jekyll installed properly:
 
			jekyll -v
 
 Trouble is, the bundler version will be incompatible at this point.
 
5. Navigate to the local website repo  e.g.

		cd documents/github/archer2-website
 
6. Get the right version 

		gem install bundler -v "~> 2.0.1"
 
7. Install the correct version

        bundle _2.0.2_ install
 
 It should do lots of fetching and installing here - took a few minutes
 
8. Serve the site
 
        bundle _2.0.2_ exec jekyll serve
 
 Configuration file: C:/Users/Clair Barrass/Documents/GitHub/archer2-website/_config.yml
 Source: C:/Users/Clair Barrass/Documents/GitHub/archer2-website
 Destination: C:/Users/Clair Barrass/Documents/GitHub/archer2-website/_site
 Incremental build: disabled. Enable with --incremental
 Generating...
      done in 3.268 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'C:/Users/Clair Barrass/Documents/GitHub/archer2-website'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
  
  In your browser, in the url bar type

		localhost:4000 

  and you should see the locally served site
  
9.  Now tidy up by removing the version that doesn't work

		gem uninstall bundler -v 2.1.4

10.  From now onwards you just need 

			bundle exec jekyll serve

to launch the local webserver version.

Many thanks to the wonderful Jane Kennedy for figuring out how to sort the incompatible versions.
  
  

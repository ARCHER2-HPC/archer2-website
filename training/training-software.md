---
layout: section
title: ARCHER2 Training - Software
summary: A guide to the software you should have installed for our courses
banner: web_banners_05.jpg
---


Course attendees should bring a laptop with them to all ARCHER2 Training courses. Windows, Mac or Linux laptops can be used.

The course exercises will mostly be run on ARCHER2 or occasionally on other HPC platforms, so it is not generally necessary to install much software, but the following list details what you will need, and what is recommended.

If you are at all unsure about any of this, please do not hesitate to contact training@epcc.ed.ac.uk for advice.

Don't worry about getting all the software configured - the course tutor can help with this on the first morning if necessary (though it is helpful if you can arrive promptly on the first morning to allow time for this).

Having the software already installed on your machine is the most important thing to have done in advance.
Most ARCHER Courses

For most courses, the following software will be required

* web browser - e.g. Firefox or Chrome
* pdf viewer - e.g. Firefox, Adobe Acrobat

and

* ssh client
    - on Mac/Linux then Terminal is fine,
    - on Windows we recommend [MobaXterm](https://mobaxterm.mobatek.net/) which provides an SSH client, inbuilt text file editor and X11 graphpics viewer plus a bash shell envioronment. Although this is a bigger install, it is recommended (instead of putty and xming) if you will be accessing HPC machines regularly. There is a 'portable' version of MobaXterm which does not need admin install privilages.
    - on Windows, if you are not using MobaXterm, you can use putty from https://www.putty.org/
* xming X11 graphics viewer,
    - for Mac https://www.xquartz.org/,
    - for Windows (if you are not using MobaXterm) http://sourceforge.net/projects/xming/files/Xming/6.9.0.31/Xming-6-9-0-31-setup.exe/download

We have recorded an ARCHER Screencast: Logging on to ARCHER from Windows using PuTTY
https://www.youtube.com/watch?v=oVFQg1qFjKQ

The above requirements are all that is needed for most of our courses, including:

* Hands-on Introduction to HPC
* Message-passing Programming with MPI
* GPU Programming with CUDA
* Shared memory programming with OpenMP
* Threaded Programming
* Single node optimisation
* Advanced OpenMP

## The following courses have additional software requirements

* [HPC Carpentry](#hpc-carpentry)
* [Scientific Programming with Python](#scientific-programming-with-python)

### HPC Carpentry

To participate in an HPC Carpentry workshop, you will need a bash shell described below. Please make sure to install everything (or at least to download the installers) before the start of your workshop. In addition, you will need an up-to-date web browser.

We maintain a list of common issues that occur during installation as a reference for instructors that may be useful on the [Configuration Problems and Solutions wiki page](https://github.com/swcarpentry/workshop-template/wiki/Configuration-Problems-and-Solutions).

#### The Bash Shell

Bash is a commonly-used shell that gives you the power to do simple tasks more quickly.

#### Windows
[Video Tutorial](https://www.youtube.com/watch?v=339AEqk9c-8)

- Download the [Git for Windows installer](https://git-for-windows.github.io/)
- Run the installer and follow the steps below:
  * Click on "Next".
  * Click on "Next".
  * Keep "Use Git from the Windows Command Prompt" selected and click on "Next". If you forgot to do this programs that you need for the workshop will not work properly. If this happens rerun the installer and select the appropriate option. dlick on "Next".
  * Keep "Checkout Windows-style, commit Unix-style line endings" selected and click on "Next".
  * Keep "Use Windows' default console window" selected and click on "Next".
  * Click on "Install".
  * Click on "Finish".
- If your "HOME" environment variable is not set (or you don't know what this is):
  * Open command prompt (Open Start Menu then type cmd and press [Enter])
  * Type the following line into the command prompt window exactly as shown:
  * setx HOME "%USERPROFILE%"
  * Press [Enter], you should see SUCCESS: Specified value was saved.
  * Quit command prompt by typing exit then pressing [Enter]

This will provide you with Bash (and SSH) in the Git Bash program.

#### MacOS

The default shell in all versions of Mac OS X is Bash, so no need to install anything. You access Bash from the Terminal (found in /Applications/Utilities). See the [Git installation video tutorial](https://www.youtube.com/watch?v=9LQhwETCdwY) for an example on how to open the Terminal. You may want to keep Terminal in your dock for this workshop.

#### Linux

The default shell is usually Bash, but if your machine is set up differently you can run it by opening a terminal and typing bash. There is no need to install anything.

### Scientific Programming with Python

A python 3.x (version 3.x, not version 2.7) installation with a minimum of numpy, scipy and matplotlib packages. We recommend Anaconda [https://www.anaconda.com ](https://www.anaconda.com )
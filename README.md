# ARCHER2 Website

ARCHER2 is the next generation UK supercomputing service, hosted at [EPCC](https://www.epcc.ed.ac.uk)

This repository contains the website for the service available at:
<https://www.archer2.ac.uk>

## How to Contribute

We welcome contributions from the ARCHER2 community and beyond. Contributions can take many different
forms, some examples are:

- Raising Issues if you spot a mistake or something that could be improved
- Adding/updating material via a Pull Request
- Adding your thoughts and ideas to any open issues

All people who contribute and interact via this Github repository undertake to abide by the
[ARCHER2 Code of Conduct](https://www.archer2.ac.uk/about/policies/code-of-conduct.html) so that we,
as a community, provide a welcoming and supportive environment for all people, regardless of background
or identity.

To contribute to this website, first you have to fork it on GitHub and
clone it to your machine, see [Fork a Repo](https://help.github.com/articles/fork-a-repo/) for the GitHub
documentation on how to do this.

Once you have made your changes and updated your Fork on GitHub you will
need to [Open a Pull Request](https://help.github.com/articles/using-pull-requests/).

## Building the website locally

You do not need to be able to build the website locally to make changes but it can
be useful to see what effect your changes have before opening a Pull Request.

If you wish to build the website locally, then you should install Jekyll:

- <https://jekyllrb.com/>

Once Jekyll is installed, you can test the website with:

```
bundle exec jekyll serve
```

This will run a temporary webserver from which you can view the updated website locally in a web browser.

## Adding courses

Courses are controlled by a custom collection. To add a course, you should create a file in the `_courses`
subdirectory with a name structured as `YYMMDD-course-name.md`. The final course page will be created at:
`training/courses/YYMMDD-course-name/index.md`. If you wish to add additional files for the course, you can
manually create this directory and add them, the `index.md` file will be added automatically by Jekyll without
removing the additional files.

The course file should look something like:

```
---
layout: course
title: A great HPC course
banner: web_banners_05.jpg
human_dates: 14 July 2020
start_date: 2020-07-14 10:00:00
end_date: 2020-07-14 17:00:00
trainers: Jane Doe
course_type: course
registration_status: open
registration_url: http://www.registeronmycourse.ac.uk
location: Online
location_url:
prace_course: false
---

This is where you put the markdown content that describes the course.
```

A brief description of the frontmatter settings and what they do:

   - `layout: course` The layout to use, this should **always** be `course`
   - `title: A great HPC course` The name of your course
   - `banner: web_banners_05.jpg ` The banner to use
   - `human_dates: 14 July 2020` Course dates that will be displayed on the webpages
   - `start_date: 2020-07-14 10:00:00` Machine readable start date
   - `end_date: 2020-07-14 17:00:00` Machine readable end date - after this time the entry will be removed from *Upcoming Courses* lists and added to *Materials Repository*
   - `trainers: Jane Doe (EPCC)` Names of the trainers and their affiliations
   - `course_type: course` Should be `course` for normal courses and `vt` for virtual tutorials/webinars
   - `registration_status: open` Registration status, can be `open`, `full` or `closed`. Leave blank if none of these apply. Only has an effect if the `registration_url` is set
   - `registration_url: http://www.registeronmycourse.ac.uk` Registration URL for the course. Leaving blank suppresses any registration links/buttons/text
   - `location: Online` Location of the course to be displayed on the webpages
   - `location_url:` URL link to the location to make location text a link
   - `prace_course: false` Set if this course is supported by PRACE, if so adds the PRACE logo and additional text about free access

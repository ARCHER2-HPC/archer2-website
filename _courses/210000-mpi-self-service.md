---
layout: course
title: Message-Passing Programming with MPI
banner: web_banners_05.jpg 
human_dates: Always open - self-service 
start_date: 2021-12-31 10:00:00
end_date: 2028-12-31 16:00:00
trainers: David Henty (EPCC)
course_type: course
registration_status: open
registration_url: https://www.archer2.ac.uk/training/register/?course=210000-mpi-self-service
location: Online
location_url:
prace_course: false
level: [ intermediate ]
video: true
---


The world’s largest supercomputers are used almost exclusively to run
applications which are parallelised using Message Passing. The course
covers all the basic knowledge required to write parallel programs
using this programming model, and is directly applicable to almost
every parallel computer architecture.

Parallel programming by definition involves co-operation between
processors to solve a common task. The programmer has to define the
tasks that will be executed by the processors, and also how these
tasks are to synchronise and exchange data with one another. In the
message-passing model the tasks are separate OS processes that
communicate and synchronise by explicitly sending each other
messages. All these parallel operations are performed via calls to
some message-passing interface that is entirely responsible for
interfacing with the physical communication network linking the actual
processors together.

This course uses the de facto standard for message passing, the
Message Passing Interface (MPI). It covers:

- point-to-point communication
- non-blocking operations
- derived datatypes
- virtual topologies
- collective communication
- general design issues.

This self-service course includes a series of Lecture videos (with
closed captions and downloadable PDF slides) which you can work through at
your own pace and in your own time.

Hands-on practical programming exercises are included, with the option
of working in either C, C++ or Fortran.
 
Access to ARCHER2 is provided for participants to build and run the exercises.

### Intended Learning Outcomes

On completion of this course students should be able to: Understand
the message-passing model in detail. Implement standard
message-passing algorithms in MPI. Debug simple MPI codes. Measure and
comment on the performance of MPI codes. Design and implement
efficient parallel programs to solve regular-grid problems.

### Pre-requisite Programming Languages:

C, C++ or Fortran. The course does not cover the details of how to use MPI from Python.

Participants must have access to a laptop with a Mac, Linux, or
Windows operating system (not a tablet, Chromebook, etc.) that they
have administrative privileges on.

They are also required to abide by the [ARCHER2  Code of Conduct](../../../about/policies/code-of-conduct.html). 

<section id="service">
</section>



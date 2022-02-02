---
layout: section
title: ARCHER2 Training
summary: Details of all the face-to-face and online training courses and resources provided by EPCC as part of the ARCHER2 service.
banner: web_banners_05.jpg
---
<section id="service">
  <div class="container">
    <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="#upcoming-training">
          <strong>Upcoming Training</strong><br/>
          Details of face-to-face and online training opportunities delivered by the ARCHER2 service.
        </a>
      </div>
	
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/">
          <strong>Course Descriptions</strong><br/>
          An overview of the courses that are offered by EPCC as part of the ARCHER2 service.
        </a>
      </div>	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="materials/">
          <strong>Course Repositories</strong><br/>
          Repositories of materials from past ARCHER2 courses including videos from past online courses.
        </a>
      </div>	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="feedback/">
          <strong>Training Feedback</strong><br/>
          Provide feedback on ARCHER2 training courses.
        </a>
      </div>

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="locations/">
          <strong>Course Locations</strong><br/>
          ARCHER2 training will be carried out at a range of venues across the UK.
        </a>
      </div>	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="online/">
          <strong>Online Learning</strong><br/>
          Information on the ARCHER2 online learning, including the technology used and how to connect.
        </a>
      </div>

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="driving-test.html">
          <strong>ARCHER2 Driving Test</strong><br/>
          The ARCHER2 Driving Test allows you to learn more about using ARCHER2 and get a small amount of ARCHER2 resource for your research.
        </a>
      </div>	


      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="https://www.youtube.com/channel/UCZi-oBdxoDV5CPEQnhmrCAg/videos">
          <strong>ARCHER2 YouTube channel</strong><br/>
          Includes videos of past Webinars and online training.
        </a>
      </div>						
			
    </div>
  </div>
</section>

<p><a name="upcoming-training">&nbsp;</a></p>

## Upcoming Training

The list below shows the currently scheduled ARCHER2 courses. Please follow the links in the list to find out more about the courses and to register.

If you would like us to provide a course on a particular topic and/or in a particular location then please contact us via the [ARCHER2 Service Desk](../support-access/servicedesk.html).

Individual links to course provide more details on the content and prerequisites. Use the <em>Register Link</em> to sign up for a particular course.

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Course</th>
        <th>Venue</th>
        <th>Dates</th>
        <th>Register Link</th>
      </tr>
    </thead>
    <tbody>
      {% assign filtered_courses = site.courses | where_exp: "course", "course.end_date >= site.time" %}
			{% assign nothidden_courses = filtered_courses | where_exp: "course", "course.registration_status != 'hidden' " %}
      {% for course in nothidden_courses %}
      <tr>
      <td>
        <a href="{{ course.url }}">{{ course.title }}</a>
      </td>
      <td>
        {% if course.location != "Online" %}
          <a href="{{ course.location_url }}">{{ course.location }}</a>
        {% else %}
          {{ course.location }}
        {% endif %}
      </td>
      <td>
        {{ course.human_dates }}
      </td>
      <td>
        {% if course.course_type == "vt" %}
          <a href="{{ course.url }}">More details and join link</a>
        {% else %}
          {% if course.registration_url %}
            {% if course.registration_status == "open" %}
              {% if course.prace_course %}
            <a href="{{ course.registration_url }}"><img src="img/prace_25.jpg" alt="PRACE"/> Register</a>
              {% else %}
            <a href="{{ course.registration_url }}">Register</a>
              {% endif %}
            {% elsif course.registration_status == "full" %}
              {% if course.prace_course %}
            <a href="{{ course.registration_url }}"><img src="img/prace_25.jpg" alt="PRACE"/> Join waiting list</a>
              {% else %}
            <a href="{{ course.registration_url }}">Join waiting list</a>
              {% endif %}
            {% elsif course.registration_status == "closed" %}
              {% if course.prace_course %}
            <a href="{{ course.registration_url }}"><img src="img/prace_25.jpg" alt="PRACE"/> Registration closed</a>
              {% else %}
            Registration closed
              {% endif %}
            {% else %}
            &nbsp;
            {% endif %}
          {% endif %}
        {% endif %}
      </td>
     </tr>
      {% endfor %}
    </tbody>
  </table>
</div>


Recent courses will be moved to the [Materials repository](materials/) shortly after they have ended.


Courses marked with **†** are fully booked but please complete the registration form to be added to the waiting list.

Details of the software you should have installed, in preparation for any of our courses, is listed on our [software page](training-software.html).

When registering for one of our courses you agree to abide by the [ARCHER2 Code of Conduct](../about/policies/code-of-conduct).

## Eligibility for training

ARCHER2 training courses are provided free of charge to all academics, but attendance by non-academics would normally require a registration fee. However, we are not charging for attendance while we deliver all courses online due to government advice on social distancing.

Courses marked ![PRACE](img/prace_25.jpg) are also funded by 
  [PRACE](https://prace-ri.eu/) and are free to everyone including commercial attendees.

We normally charge a fee for non-academics. If you are from a commercial organisation and wish to attend a particular course or arrange training at your site by the EPCC team then please contact the [ARCHER2 Training Administrator](mailto:training@epcc.ed.ac.uk).

## ARCHER2 year two planned courses


Provisional schedule of planned courses.  Brief details of the courses can be found on the [Course Descriptions page](courses/).

| November 2021 - January 2022 | February - April 2022 |
| --- | --- |
| ARCHER2 for Data Scientists<br> Data Carpentry<br>HPC Carpentry<br>ARCHER2 for Developers<br>Introduction to GROMACS<br>Reproducible computational environments using containers<br>Scientific Programming with Python<br>Modern Fortran<br>Efficient Parallel IO<br> | Advanced use of LAMMPS <br> Data Analytics with HPC <br> Software Carpentry<br>Understanding Package Performance<br>ARCHER2 for Data Scientists<br>ARCHER2 for Developers<br>ARCHER2 for Package Users<br>Advanced use of Code_Saturne<br>Message Passing Programming with MPI<br>Efficient use of the HPE Cray EX System<br> |


Once course details are confirmed, the course will be move up to the [Upcoming Training section](#upcoming-training) above.

## Training updates mailing list

If you would like to receive updates about our training by email please [subscribe to our mailing list](https://www.jiscmail.ac.uk/cgi-bin/webadmin?SUBED1=ARCHER-TRAINING&A=1).

Mailings will be sent approximately 1-2 times per month, your details will not be shared and you can unsubscribe at any time.

## Online Training

Much of the ARCHER2 training material is available online. In particular, this includes material relevant to the [ARCHER2 Driving Test](driving-test.html).

On Successful completion of the [ARCHER2 Driving Test](driving-test.html) you will be invited to apply for an account on ARCHER2 with a small allocation of core-hours to use over 12 months, enabling you to put your skills into practice.

## Other Training

*   [EPCC MSc in High Performance Computing](http://www.epcc.ed.ac.uk/msc)
*   [ Software Sustainability Institute - Guides](http://www.software.ac.uk/resources/guides-everything)
*   [Software Sustainability Institute - Top Tips](http://www.software.ac.uk/resources/top-tips)

## Support for training on ARCHER2

We are able to offer support and assistance for external training on ARCHER: Find out how we can help and how to let us know what you are planning at our External courses page.

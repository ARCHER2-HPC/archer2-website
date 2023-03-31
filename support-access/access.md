---
layout: section
title: Getting access to ARCHER2 
summary: Details of the access mechanisms to the ARCHER2 service
banner: web_banners_04.jpg
---

The ARCHER2 Service is a world-class advanced computing resource for UK researchers. For such researchers, there are specific allocation mechanisms for requesting ARCHER2 time via the ARCHER2 partner research councils EPSRC and NERC as detailed below. 

The [ARCHER2 User Support Team](mailto:support@archer2.ac.uk) are available to offer advice and assistance to any prospective users and can offer guidance as to what is the best route of access. [Further contact details can be found here](https://www.archer2.ac.uk/support-access/servicedesk.html).
The ARCHER2 CSE Team can also provide [assistance with completing a Technical Assessment (TA)](https://www.archer2.ac.uk/news/2022/08/03/technical-assessments.html "Help on completing a successful TA")  and can also be contacted via the [Service Desk](mailto:support@archer2.ac.uk). 

This page has a number of sections:

- EPSRC remit access through [Grants](#epsrc-grants) and [Calls for ARCHER2 time only](#archer2-time-calls) - this includes Access to HPC calls, Pioneer Projects, Pump Priming access and Driving Test access
- [NERC remit access](#nerc) 
- [UKRI calls, fellowships and responsive mode](#ukri-calls)
- [Access via non-UKRI calls, fellowships and other routes](#other-calls)
- [Access via the EPSRC High End Computing Consortia](#consortia)

<!-- TODO: add section "Which access route should I choose" -->

<a id="epsrc"></a>
## EPSRC Remit

<a id="epsrc-grants"></a>
### Access through EPSRC grants
You can include ARCHER2 on EPSRC funding applicationns when you are applying for funding (if you already have an
active grant then you should consider applying via one of the calls for ARCHER2 time only that are described
above).

When submitting proposals to EPSRC that include ARCHER2 resources, you should add ARCHER2 in Je-S. On
[Je-S,](https://je-s.rcuk.ac.uk/JeS2WebLoginSite/Login.aspx) access can be requested by choosing ARCHER2 from the
drop down list in the *Research Council Facilities* section for a standard EPSRC grant application. Please add
the requested resource in CU as *unit* and the notional cost in £ as *cost*. Reasonable ARCHER2 allocations are
now awarded for the duration of the EPSRC funding. A completed [Technical Assessment Form](ta/ARCHER2-TA-form.docx)
must be uploaded through Je-S, selecting the document type "Technical Assessment". 

EPSRC operate a 6-monthly allocation period policy for access on ARCHER2. The total amount of compute resource
(measured on ARCHER2 as *CU*) awarded is broken down into 6-month periods that span the length of  access to ARCHER2
that has been requested. Applicants specify the period profile on the TA form when they apply for access.
EPSRC period allcoations are enforced on ARCHER2 in the following way: 

- Any unused allocation at the end of an allocation period is lost  
- You cannot move CU between different allocation periods

If you have any questions about accessing ARCHER2 via EPSRC, please see
[the HPC pages on the EPSRC website](https://epsrc.ukri.org/research/facilities/hpc/) or
[contact the EPSRC Research Infrastructure team](mailto:researchinfrastructure@epsrc.ukri.org).

<a id="archer2-time-calls"></a>
### Calls for ARCHER2 time only
The following calls only provide access to ARCHER2 resources and not funding for other items (such
as staff time). ARCHER2 costs are notional rather than real costs.

A list of any currently open calls through which you can apply for access to ARCHER2 time in particular (rather than applying for ARCHER2 time as part of a wider grant or fellowship application).

<table>
	<tr>
		<th >Call (Web Link)</th>
		<th >Closing Date</th>
		<th >TA Receipt Deadline</th>
		<th >Notes</th>
		<th >TA Form Link</th>
	</tr>
	<tr>
		<td><a href="#pump-priming">Pump-priming</a></td>
		<td>Always open</td>
		<td></td>
		<td>EPSRC remit only. Small amounts of time for testing and porting. Quick decision on access. Maximum of 4000 CU for 6 months.</td>
		<td><a href="./ta/ARCHER2-PumpPriming-form.docx">Pump Priming TA Form</a></td>
	</tr>
	<tr>
		<td><a href="#pioneer-projects">Pioneer Projects</a></td>
		<td>26 May 2023 at 4:00pm UK time</td>
		<td>12 May 2023 at 4:00pm UK time</td>
		<td>EPSRC remit only. <br/> Large amounts of ARCHER2 computing resource for a maximum duration of two years.<br>
        <a href="https://www.ukri.org/councils/epsrc/facilities-and-resources/using-epsrc-facilities-and-resources/apply-for-access-to-high-performance-computing-facilities/">Call details</a></td>
		<td><a href="./ta/ARCHER2-TA-form.docx">TA Form</a></td>
	</tr>
	<tr>
		<td><a href="#access-to-hpc">Access to HPC</a></td>
		<td>26 May 2023 at 4:00pm UK time</td>
		<td>12 May 2023 at 4:00pm UK time</td>
		<td>EPSRC remit only. <br/> ARCHER2 or Tier-2 computing resource for a maximum duration of one year and a minimum of 4000 CU. Calls are expected to open every six months. <br>
		<a href="https://www.ukri.org/councils/epsrc/facilities-and-resources/using-epsrc-facilities-and-resources/apply-for-access-to-high-performance-computing-facilities/">Call details</a>
		 </td>
		<td><a href="./ta/ARCHER2-TA-form.docx">TA Form</a></td>
	</tr>
	<tr>
		<td><a href="#topup">Top up</a></td>
		<td>No call currently open.</td>
		<td></td>
		<td>EPSRC remit only. Only for users with an existing ARCHER2 allocation who require additional resource.</td>
		<td><a href="./ta/ARCHER2-TA-form.docx">TA Form</a></td>
	</tr>
</table>

[How to prepare a successful Technical Assessment](https://www.archer2.ac.uk/news/2022/08/03/technical-assessments.html) - a blog post with lots of helpful advice on how to complete TA forms.

The [Understanding Package Performance course materials](https://www.archer2.ac.uk/training/courses/211028-package-performance/#materials) provide an introduction to producing and plotting application performance, which can help you complete the ARCHER2 technical assessment form - particularly "6.1 Quantitative evidence that the code scales efficiently". 

If you have any questions about measuring application performance or scaling, or need assistance producing this information, please contact the [ARCHER2 Service Desk](mailto:support@archer2.ac.uk) and we will be happy to help.

<a id="driving-test"></a>
### ARCHER2 Driving Test

A small allocation (800 CU) for new ARCHER2 users to get them started using the ARCHER2 Service.  Further details on the [Training Driving Test page](https://www.archer2.ac.uk/training/driving-test.html).


<a id="pump-priming"></a>
### ARCHER2 Pump Priming

EPSRC remit researchers can request a small amount of resource awarded through a light-touch process in order to try, test and scale their code on ARCHER2. This is the successor scheme to ARCHER Instant Access. Applicants should [complete the ARCHER2 Pump Priming TA form (docx)](ta/ARCHER2-PumpPriming-form.docx) and send to the [ARCHER2 Service Desk](mailto:support@archer2.ac.uk). The ARCHER2 CSE team will review the form and send to EPSRC for a decision on access. We expect decisions to be made in less than 2 weeks (and usually much sooner). A maximum of 4000 CU for 6 months are currently available through Pump Priming.


<a id="pioneer-projects"></a>
### ARCHER2 Pioneer Projects
EPSRC remit researchers can apply for large amounts of ARCHER2 compute for ambitious, computationally intensive simulations and calculations in support of an individual project through EPSRC's ARCHER2 Pioneer Projects call.  Projects can be up to 2 years in length.  This is the successor scheme to the ARCHER Leadership Calls.

<a id="access-to-hpc"></a>
### Access to HPC
Provides an open and relatively flexible route to computational support for projects in EPSRC remit.
You can apply for access to EPSRC's HPC systems (both ARCHER2 and most of the Tier-2 services). Projects can be up to 1 year in length. This new call combines what was previously the ARCHER RAP (Resource Allocation Panel) and the Tier-2 Open Access call. It is expected that these calls will open every six months.


<a id="topup"></a>
### ARCHER2 Top Up
Only available for existing EPSRC grant holders with an ARCHER allocation. Provides additional resource for users who already have an allocation from an EPSRC grant, but need more to complete the objectives of their grant. Successor to the ARCHER Top Up process.

<a id="consortia"></a>
### Access via the EPSRC High End Computing Consortia
If a researcher's work is within remit of one of the Scientific Consortia, formed around research communities with substantial and continuous computational needs, then they can apply for ARCHER2 time by joining the relevant consortium. Each consortium has its own way of applying for access and allocating time. The [ARCHER2 Scientific Consortia](https://www.archer2.ac.uk/research/consortia/) pages have more information on the remit of the individual consortia and their contact details. 

<a id="nerc"></a>
## NERC Remit
NERC applicants should add ARCHER2 as a facility in Je-S, contact the relevant NERC science area leader and check the
current NERC policy on access. Full details are on the [NERC website](https://www.ukri.org/councils/nerc/facilities-and-resources/find-a-nerc-facility-or-resource/applying-to-use-high-performance-computing-services/). 

Applicants within the NERC remit wishing to access ARCHER2 must contact the relevant consortia leader for advice
ahead of submission. 


<a id="ukri-calls"></a>
## UKRI calls, fellowships and responsive mode
For access as part of applications to other UKRI research councils please
[contact the EPSRC Research Infrastructure team](mailto:researchinfrastructure@epsrc.ukri.org) in the first
instance to discuss your requirements and plans. 

ARCHER2 resources via EPSRC and NERC awards are included as a notional costs rather than real costs. Resources for 
UKRI awards in other research areas may need to be included as real costs. 


<a id="other-calls"></a>
## Access via non-UKRI calls, fellowships and other routes

For access as part of applications from non-UKRI funded researchers please
[contact the EPSRC Research Infrastructure team](mailto:researchinfrastructure@epsrc.ukri.org) in the first instance to 
discuss your requirements and plans. Please note that these discussions may take some time, and UKRI cannot guarantee that an agreement will be reached. 

<!-- TODO: add industry access details -->


<!--
<a id="prace"></a>
## Access via PRACE

[PRACE](https://prace-ri.eu/) is a pan-European infrastructure that provides access to HPC systems hosted across Europe. PRACE runs a number of different calls through which researchers can gain access to HPC resources. Information on the calls is available on [the PRACE website](https://prace-ri.eu/hpc-access/).

### Guidance on access to PRACE machine for UK scientists

The UK (via EPSRC, STFC and BBSRC) are now paying around £1M a year to be members of PRACE and to get access to the PRACE machines for UK scientists. 
In order to maximise the amount of time obtained, and to help those thinking of applying, the following guidance has been developed by Sylvain Laizet and Debora Sijacki, 
who have had a lot of experience and success in applying to PRACE. Thanks to them for their help. If anyone else would like to add anything based on their experiences, 
please contact the ARCHER2 team [support@archer2.ac.uk]((mailto:support@archer2.ac.uk)). 

First of all, it may be obvious but it is very important to read all the information on the [PRACE website](https://prace-ri.eu/). The main sources of information are the User documentation pages and the Best practice guides on the PRACE website. Make yourself aware of how to apply and what the application procedures are. You might have to apply several time before being successful. The good thing is that you will be able to use the feedback from the referees to improve your application.

You need to see a PRACE proposal in a similar way as a full RCUK proposal. Do not wait until the last minute to write your proposal. Make sure that your colleagues read it and give you valuable feedback. The scientific aspect is of crucial importance. You will need to demonstrate novelty, impact and timeliness. This is the most important part of the proposal.

Building a good team with EU partners is essential (each member of the team needs to have a specific expertise). Your experience of using HPC resources in the past and how you will manage using a Tier-0 system are also very important. It is worth emphasizing if the simulation data have a legacy value: what will be shared with the scientific community and how.

Aim for big but it is important to check how much resources are available on a given system (might be risky to ask for > 40%-50% of the system's core hours). You must aim for simulations that can only be performed on Tier 0 Systems, not on Tier 1 Systems.

You will need to produce scalability plots and representative benchmarks. If you do not have representative benchmarks and data to justify the resource request you need to apply for a Preparatory Project (http://www.prace-ri.eu/prace-preparatory-access/), which allows you to port your code, to test it, and to collect all the information necessary for a full proposal.

It is important to have a detailed plan of when/how the simulations will be setup/run/data copied/stored and what are the RAM/I/O/storage requirements at any given stage. Also have a detailed project management plan: who will do what in the collaboration, how data will be shared, meeting/telecon schedule, plans for paper writing, project webpage etc.

PRACE calls are advertised on the [PRACE website](https://prace-ri.eu/).   

-->
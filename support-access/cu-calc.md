---
layout: section
title: ARCHER2 CU Calculator
summary:
banner: web_banners_04.jpg
---    

This page helps you to calculate the values you need to fill in the
[ARCHER2 Technical Assessment Form](ta.md).
    
To use the calculator fill in the values in the input section and the remaining
entries will be calculated automatically. You do not need to fill in all the fields if you
are not interested in that section.

To reset the form, please reload the page.
    
### Input section

<script type="text/javascript" src="calculator.js"></script>
<script type="text/javascript">
$(document).ready(function() {
setDefault();
calculateAll();
});
</script>

<form id="cuForm" method="get" action="">
<p>
    Select funding body:
    <select id="setFunding" onchange="calculateAll()" size="1">
        <option value="partner">ARCHER2 Partner: EPSRC or NERC</option>
        <option value="other">Other Funding Body: e.g. BBSRC, STFC, MRC, ESRC, AHRC</option>
    </select>
</p>
<table class="form">
    <tr>
        <th></th>
        <th>Largest Job</th>
        <th>Typical Job</th>
        <th>Smallest Job</th>
    </tr>
    <tr>
        <td>Number of nodes <div style="color: red" id="nodeMessage"></div></td>
        <td><input type="text" id="nnodesBig" size="6" onchange="calculateAll();" /></td>
        <td><input type="text" id="nnodesTyp" size="6" onchange="calculateAll();" /></td>
        <td><input type="text" id="nnodesSmall" size="6" onchange="calculateAll();" /></td>
    </tr>
    <tr>
        <td>Wallclock time for each job (hours) <div style="color: red" id="timeMessage"></div></td>
        <td><input type="text" id="timeBig" size="6" onchange="calculateAll();" /></td>
        <td><input type="text" id="timeTyp" size="6" onchange="calculateAll();" /></td>
        <td><input type="text" id="timeSmall" size="6" onchange="calculateAll();" /></td>
    </tr>
    <tr>
        <td>Number of jobs of this type</td>
        <td><input type="text" id="njobBig" size="12" onchange="calculateAll();" /></td>
        <td><input type="text" id="njobTyp" size="12" onchange="calculateAll();" /></td>
        <td><input type="text" id="njobSmall" size="12" onchange="calculateAll();" /></td>
    </tr>
</table>
</form>

<h3>Job Data</h3>

<p>The information in this table can be used to help fill in the table in Section 1, Part 4
of the ARCHER2 Technical Assessment form. (You will also need some data from the fields you have 
filled in above.)</p>

<table class="lined">
    <tr>
        <th></th>
        <th>Largest Job</th>
        <th>Typical Job</th>
        <th>Smallest Job</th>
    </tr>
    <tr>
        <td>Total memory required (per job)</td>
        <td id="tmemBig"></td>
        <td id="tmemTyp"></td>
        <td id="tmemSmall"></td>
    </tr>
    <tr>
        <td>Total time for these jobs (hours)</td>
        <td id="ttimeBig"></td>
        <td id="ttimeTyp"></td>
        <td id="ttimeSmall"></td>
    </tr>
</table>

<h3>Additional Job Data</h3>

<p>The information in this table is not needed for the ARCHER2 Technical Assessment form but may
be useful.</p>

<table class="lined">
    <tr>
        <td>CUs (per job)</td>
        <td id="cusBig"></td>
        <td id="cusTyp"></td>
        <td id="cusSmall"></td>
    </tr>
    <tr>
        <td>Notional cost (per job) (&pound;)</td>
        <td id="costBig"></td>
        <td id="costTyp"></td>
        <td id="costSmall"></td>
    </tr>
</table>

<h3>Totals</h3>

<p>This is information on the total kAUs and notional cost of the 
current job specification. It is useful for filling out Section 1, Part 4
of the ARCHER Technical Assessment Form and also for the cost associated with ARCHER 
use in the Je-S submission system.</p>

<div style="padding: 10px; border: 3px double black;">
<p>Total 'Computing Resource (CU)' for these jobs = <strong id="totCUs"></strong></p>
<p>Total 'Notional Costs' for these jobs = &pound;<strong id="totCost"></strong></p>
</div>

<h3 class="subsection">kAU Rates and Costs</h3>

<h4>ARCHER2 CU Rates</h4> 

<table class="lined"> 
<tbody> 
<tr>  
  <th class="value">Cores Per Node</th> 
  <th class="value">CUs/Node Hour</th> 
</tr> 
<tr> 
  <td class="value">128</td> 
  <td id="archer2Rate" class="value">1.0</td> 
</tr> 
</tbody> 
</table> 

<h4>Costs per CU for Partner Research Councils</h4> 
 
<table class="lined"> 
<tbody> 
<tr> 
  <th class="value">Cost/CU (&pound;)</th> 
</tr> 
<tr> 
  <td id="partarcher2Cost" class="value">0.20</td> 
</tr> 
</tbody> 
</table> 
 
<h4>Costs per CU for other Research Councils</h4> 
 
<table class="lined"> 
<tbody> 
<tr> 
  <th class="value">Cost/CU (&pound;)</th> 
</tr> 
<tr> 
  <td id="otherarcher2Cost" class="value">0.39</td> 
</tr> 
</tbody> 
</table> 

<h3 class="subsection">Hardware Layout</h3>

<h4>ARCHER2 HPE Cray EX</h4>

<table class="lined"> 
<tbody> 
<tr> 
  <th class="value">Nodes</th> 
  <th class="value">Cores Per Node</th> 
  <th class="value">Memory Per Node (GiB)</th>
  <th class="value">Max Nodes Per Job</th>
  <th class="value">Max Job Time (hours)</th> 
</tr> 
<tr> 
  <td class="value">5848</td> 
  <td id="archer2Cores" class="value">128</td> 
  <td id="archer2Mem" class="value">256</td>
  <td id="archer2MaxNode" class="value">5848</td>
  <td id="archer2MaxTime" class="value">48</td>
</tr> 
</tbody> 
</table> 

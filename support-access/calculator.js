/*
 * ARCHER2 CU Calculator
 * ====================
 *
 * Functions to calculate ARCHER AU usage and cost based
 * on job size profiles.
 *
 * AU rates and costs are read off the tables on the page.
 * Queue and memory limits are set in the calculateAUs
 * function.
 * 
 * A. R. Turner, EPCC 2021
 */
 
/*
 * setDefault
 * ==========
 * 
 * Set the default values. This only sets the default phase, 
 * parallel processes, job time and number of jobs.
 * 
 * This is only called when the page is loaded. 
 */
function setDefault() {
	
	// Reset the funding council to partner
	$("#setFunding").val("partner");

    // The default number of nodes
    $("*[id^=nnodes]").val("1");

    // The default time
    $("*[id^=time]").val("1");

    // The default number of jobs
    $("*[id^=njob]").val("1");
}

/*
 * calculateAll
 * ============
 * 
 * This function fills the various fields on the page based on the
 * current values in all the input elements.
 * 
 * It is called every time the value in an input element is changed.
 */
function calculateAll() {

   // Empty the error messages
   $("#nodeMessage").empty();
   $("#timeMessage").empty();


   // Calculate per job values for each of the job types
   var nBig = calculateCUs("Big");
   var nTyp = calculateCUs("Typ");
   var nSmall = calculateCUs("Small");

   // Get the fraction of each job type
   var nTot = nBig + nTyp + nSmall;
   var fracBig = nBig / nTot * 100;
   var fracTyp = nTyp / nTot * 100;
   var fracSmall = nSmall / nTot * 100;
   
   // Calculate the total CUs
   var cusBig = parseFloat($('#cusBig').text());
   var cusTyp = parseFloat($('#cusTyp').text());
   var cusSmall = parseFloat($('#cusSmall').text());
   
   var totCUs = nBig*cusBig + nTyp*cusTyp + nSmall*cusSmall;
   
   $("#totCUs").text(numberFormat(totCUs.toFixed(0)));
   
   // Calculate the total cost
   var costBig = parseFloat($('#costBig').text());
   var costTyp = parseFloat($('#costTyp').text());
   var costSmall = parseFloat($('#costSmall').text());
   
   var totCost = nBig*costBig + nTyp*costTyp + nSmall*costSmall;
   
   $("#totCost").text(numberFormat(totCost.toFixed(2)));

}

/*
 * calculatesCUs
 * =============
 * 
 * Calculate the values for each job of the specified type.
 * The argument "set" is the root of the job set to calculate 
 * the values for (i.e. "Big", "Typ" or "Small").
 * 
 * This is called by the calculateAll function.
 */
function calculateCUs(set) {
	
	// Are we a partner research council or not?
	var funding = $("#setFunding").val();
   
   // Initial values of phase-specific variables
   // Amount of memory per node (GB)
   var nodeMem = 256;
   // CUs per node hour
   var cuRate = 1.0;
   // Cost per CU (GBP)
   var cuCost = 0.0;
   // Maximum job size
   var maxNodes = 5848;
   // Maximum job length
   var maxTime = 48;
      
	 coresPerNode = parseInt($('#archer2Cores').text());
	 cuRate = parseFloat($('#archer2Rate').text());
	 if (funding == "partner") {
		 cuCost = parseFloat($('#partarcher2Cost').text());
	 } else {
		 cuCost = parseFloat($('#otherarcher2Cost').text());
	 }
	 nodeMem = parseFloat($('#archer2Mem').text());
	 maxTime = parseFloat($('#archer2MaxTime').text());
   maxNodes = parseInt($('#archer2MaxNode').text());

   // Get the input values
   var search = "*[id^=nnodes" + set + "]";
   var nnode = parseInt($(search).val());
   search = "*[id^=ncore" + set + "]";
   var ncore = parseInt($(search).val());
   search = "*[id^=time" + set + "]";
   var time = parseFloat($(search).val());
   search = "*[id^=njob" + set + "]";
   var njobs = parseInt($(search).val());

   // Check that we have not exceeded maximum time
   if (time > maxTime) {
     time = maxTime
     var search = "*[id^=time" + set + "]";
     $(search).val(time);
     $("#timeMessage").text("Job too long - reset to maximum value");
   }

   // Calculate the number of nodes this job will use
   nnode = Math.ceil(nnode);
   // Check we are within the limits
   if (nnode > maxNodes) {
	     nnode = maxNodes;
	     var search = "*[id^=nnodes" + set + "]";
	     $(search).val(nnode);
	     $("#nodeMessage").append("<br />Too many nodes - reset to maximum value");
   }

   // Calculate the amount of memory this job will have
   var mem = nnode * nodeMem;
   search = "#tmem" + set;
   $(search).text(mem + " GiB");

   // Calculate the number of cores this job will use
   var cores = nnode * coresPerNode;
   search = "#cores" + set;
   $(search).text(cores);
   
   // Calculate the number of CUs this job will use
   var cus = nnode * time * cuRate;
   search = "#cus" + set;
   $(search).text(cus.toFixed(0));

   // Calculate the notional cost of this job
   var cost = cus * cuCost;
   console.log(cus)
   console.log(cuCost)
   search = "#cost" + set;
   $(search).text(cost.toFixed(2));

   // Calculate total time used by these jobs
   var totalTime = time * njobs;
   search = "#ttime" + set;
   $(search).text(totalTime);

   // Return the number of jobs of this type
   return njobs;

}

/*
 * numberFormat
 * ============
 * 
 * This function formats numbers by adding commas every
 * three digits.
 */
function numberFormat(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1))
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  return x1 + x2;
}

/*
 * stripNonNumeric
 * ===============
 * 
 * This function removes non-numeric characters from the supplied string
 * 
 */
function stripNonNumeric(str) {
  str += '';
  var rgx = /^\d|\.|-$/;
  var out = '';
  for( var i = 0; i < str.length; i++ ){
    if( rgx.test( str.charAt(i) ) ){
      if( !( ( str.charAt(i) == '.' && out.indexOf( '.' ) != -1 ) ||
             ( str.charAt(i) == '-' && out.length != 0 ) ) ){
        out += str.charAt(i);
      }
    }
  }
  return out;
}

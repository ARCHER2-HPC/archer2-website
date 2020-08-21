---
layout: section
title: Publications
summary: Research publications covering work enabled by the ARCHER and ARCHER2 services.
banner: web_banners_08.jpg
---

<script>
// const safe_publications = "http://localhost:8080/deploy-spb/servlet/PublicationsServlet?machine=archer&machine=archer2";
const safe_publications = "https://safe.epcc.ed.ac.uk/servlet/PublicationsServlet?machine=archer";
function compare( a, b ) {
    var ia = parseInt(a['year']);
    var ib = parseInt(b['year']);
    if (ia == ib) return 0;
    if (!ia || ia < ib) return 1;
    return -1;
}

function toHTML(publication) {
    h = '<li style="padding: 5px;">';
    if (publication['authors'] && publication['authors'].length > 0)
    {
        h += publication['authors'].join(", ");
        if (publication['year']) {
            h += " (" + publication['year'] + ")";
        }
        h += "<br/>";
    }
    if (publication['title']) {
        h += '<span class="bold">';
        h += publication['title'];
        h += '</span><br/>';
    }
    var journal = undefined;
    if (publication['journal']) {
        journal = publication['journal'];
    }
    else if (publication['booktitle']) {
        journal = publication['booktitle'];
    }
    if (publication['volume']) {
        journal += ' ' + publication['volume'];
    }
    if (publication['number']) {
        journal += ' (' + publication['number'] + ')';
    }
    if (publication['pages']) {
        journal += ': ' + publication['pages'];
    }
    if (journal) {
        h += '<span class="italic">' + journal + '</span>';
    }
    h += ' <a href="http://dx.doi.org/' + publication['doi'];
    h += '">doi: ' + publication['doi'] + '</a>';
    h += "</li>";
    return h;
}
(function() {
  $.getJSON(safe_publications)
    .done(function( data ) {
        data.sort(compare);
        let currentYear = null;
        h = "";
        for (i=0; i<data.length; i++) {
            if (data[i]['year'] === undefined) {
                if (currentYear !== undefined) {
                    h += "</ul>\n";
                    h += "<h4>Unknown</h4>\n<ul>";
                    currentYear = undefined;
                }
            }
            else if (!currentYear || currentYear > data[i]['year']) {
                if (currentYear) h += "</ul>\n";
                currentYear = data[i]['year'];
                h += '<h4>' + currentYear + "</h4>\n<ul>";
            }
            h += toHTML(data[i])
        }
        if (data.length > 0) h += "</ul>";
        $("#publications").html(h);
    });
})();
</script>

<div id="publications">
The ARCHER2 service will provide a list of research publications that have been enabled by the ARCHER2 system.
</div>


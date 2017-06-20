
function parseregion (region) {
	if (region === "Silver Marches") region = "Silver Marches";
	if (region === "Northwest Faerun") region = "Northwest Faerun";
	return region;
}


function parsesize (size) {
	if (size == "FOR") size = "Forest";
	if (size == "P") size = "Pool";
	if (size == "RA") size = "Rapids";
	if (size == "LAI") size = "Lair";
	if (size == "SH") size = "Shrine";
	if (size == "SHE") size = "Shelter";
	if (size == "T") size = "Tower";
	if (size == "TEN") size = "Tent";
	if (size == "MO") size = "Mountain";
	if (size == "TO") size = "Tomb";
	if (size == "V") size = "Village";
	if (size == "SET") size = "Settlement";
	if (size == "C") size = "Castle";
	if (size == "F") size = "Fortress";
	if (size == "KI") size = "Kingdom";
	if (size == "MI") size = "Military Installation";
	if (size == "LI") size = "Library";
	if (size == "ST") size = "Small Town";
	if (size == "LC") size = "Large City";
	if (size == "M") size = "Metropolis";

	return size;
}

function tagcontent (curitem, tag, multi=false) {
	if (!curitem.getElementsByTagName(tag).length) return false;
	return curitem.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}

function asc_sort(a, b){
    return ($(b).text()) < ($(a).text()) ? 1 : -1;
}

function dec_sort(a, b){
    return ($(b).text()) > ($(a).text()) ? 1 : -1;
}

window.onload = loadraces;

function loadraces() {
	tabledefault = $("#stats").html();

	var locationlist = locationdata.compendium.location;

	for (var i = 0; i < locationlist.length; i++) {
		var currace = locationlist[i];
		var name = currace.name;
		
		//Generates list of locations
		if (!currace.region) currace.region = "";
		$("ul.races").append("<li id='"+i+"' data-link='"+encodeURI(name)+"'><span class='name boldthis col-xs-4'>"+name+"</span> <span class='region col-xs-4'>"+currace.region.replace(/(?:\s)(\d)/g, " +$1")+"</span> <span class='size col-xs-4'>"+parsesize(currace.size)+"</span>");

		if (!$("select.sizefilter:contains(\""+parsesize(currace.size)+"\")").length) {
			$("select.sizefilter").append("<option value='"+parsesize(currace.size)+"'>"+parsesize(currace.size)+"</option>");
		}

		if (!$("select.regionfilter:contains(\""+currace.region+"\")").length) {
			$("select.regionfilter").append("<option value='"+parseregion(currace.region)+"'>"+currace.region+"</option>");
		}
	}


	$("select.sizefilter option").sort(asc_sort).appendTo('select.sizefilter');
	$("select.sizefilter").val("All");

	$("select.regionfilter option").sort(asc_sort).appendTo('select.regionfilter');
	$("select.regionfilter").val("All");


	var options = {
		valueNames: ['name', 'region', 'size'],
		listClass: "races"
	}

	var raceslist = new List("listcontainer", options);
	raceslist.sort ("name")

	$("form#filtertools select").change(function(){
		var regionfilter = $("select.regionfilter").val();
		var sizefilter = $("select.sizefilter").val();


		raceslist.filter(function(item) {
			var rightregion = false;
			var rightsize = false;
			if (regionfilter === "All" || item.values().region.indexOf(regionfilter) !== -1) rightregion = true;
			if (sizefilter === "All" || item.values().size.indexOf(sizefilter) !== -1) rightsize = true;
			if (rightregion && rightsize) return true;
			return false;
		});
	});

	$("ul.list li").mousedown(function(e) {
		if (e.which === 2) {
			console.log("#"+$(this).attr("data-link"))
			window.open("#"+$(this).attr("data-link"), "_blank").focus();
			e.preventDefault();
			e.stopPropagation();
			return;
		}
	});

	$("ul.list li").click(function(e) {
		userace($(this).attr("id"));
		document.title = decodeURI($(this).attr("data-link")) + " - 5etools Races";
		window.location = "#"+$(this).attr("data-link");
	});

	if (window.location.hash.length) {
		$("ul.list li[data-link='"+window.location.hash.split("#")[1]+"']:eq(0)").click();
	} else $("ul.list li:eq(0)").click();

	// reset button
	$("button#reset").click(function() {
		$("#filtertools select").val("All");
		$("#search").val("");
		locationlist.search("");
		locationlist.filter();
		locationlist.sort("name");
		locationlist.update();
	})
}

function userace (id) {
	$("#stats").html(tabledefault);
	$("#stats td").show();

	var locationlist = locationdata.compendium.location;
	var currace = locationlist[id];

	var name = currace.name;
	$("th#name").html(name);

	var size = parsesize (currace.size);
	$("td#size span").html(size);
	if (size === "") $("td#size").hide();

	var region = currace.region.replace(/(?:\s)(\d)/g, " +$1");
	$("td#region span").html(region);





	///New Category///

	var population = currace.population;
	$("td#population span").html(population);
	if (population === "") $("td#population").hide();

	var imports = currace.imports;
	$("td#imports span").html(imports);
	if (imports === "") $("td#imports").hide();

	var exports = currace.exports;
	$("td#exports span").html(exports);
	if (exports === "") $("td#exports").hide();

	var religion = currace.religion;
	$("td#religion span").html(religion);
	if (religion === "") $("td#religion").hide();

	var alignment = currace.alignment;
	$("td#alignment span").html(alignment);
	if (alignment === "") $("td#alignment").hide();

	var image = currace.image;
	$("td#image span").html(alignment);
	if (image === "") $("td#image").hide();
	document.getElementById('image').innerHTML = "<a href='"+image+"''><img src='"+image+"'></img></a>";




	var locationofinterestlist = currace.locationofinterest;
	$("tr.locationofinterest").remove();
	for (var n = locationofinterestlist.length-1; n >= 0; n--) {
		var locationofinterestname = locationofinterestlist[n].name+":";
		if (locationofinterestname.indexOf("Variant Feature") !== -1) {
			locationofinterestname = locationofinterestname + "</span><p></p><span>"
		}
		texthtml = "<span class='name boldthis'>"+locationofinterestname+"</span> <p>"+locationofinterestlist[n].text.join("</p><p></p><p>")+"</p>"

		$("tr#locationofinterest").after("<tr class='locationofinterest'><td colspan='6' class='locationofinterest"+n+"'>"+texthtml+"</td></tr>");
	}




	var traitlist = currace.trait;
	$("tr.trait").remove();
	for (var n = traitlist.length-1; n >= 0; n--) {
		var traitname = traitlist[n].name+":";
		if (traitname.indexOf("Variant Feature") !== -1) {
			traitname = traitname + "</span><p></p><span>"
		}
		texthtml = "<span class='name boldthis'>"+traitname+"</span> <p>"+traitlist[n].text.join("</p><p></p><p>")+"</p>"

		$("tr#traits").after("<tr class='trait'><td colspan='6' class='trait"+n+"'>"+texthtml+"</td></tr>");
	}

	return;
};

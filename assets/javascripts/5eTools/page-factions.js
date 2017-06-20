

function parsenpclocation (npclocation) {
	if (npclocation === "Silver Marches") npclocation = "Silver Marches";
	if (npclocation === "Northwest Faerun") npclocation = "Northwest Faerun";
	return npclocation;
}


function parsealignment (alignment) {
	if (alignment == "LG") alignment = "Lawful Good";
	if (alignment == "NG") alignment = "Neutral Good";
	if (alignment == "CG") alignment = "Chaotic Good";
	if (alignment == "LN") alignment = "Lawful Neutral";
	if (alignment == "N") alignment = "Neutral";
	if (alignment == "CN") alignment = "Chaotic Neutral";
	if (alignment == "LE") alignment = "Lawful Evil";
	if (alignment == "NE") alignment = "Neutral Evil";
	if (alignment == "CE") alignment = "Chaotic Evil";


	return alignment;
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

window.onload = loadnpcs;

function loadnpcs() {
	tabledefault = $("#stats").html();

	var factionlist = factiondata.compendium.factions;

	for (var i = 0; i < factionlist.length; i++) {
		var currace = factionlist[i];
		var name = currace.name;

		//Generates list of NPCs
		if (!currace.npclocation) currace.npclocation = "";
		$("ul.races").append("<li id='"+i+"' data-link='"+encodeURI(name)+"'><span class='name boldthis col-xs-4'>"+name+"</span> <span class='npclocation col-xs-4'>"+currace.npclocation.replace(/(?:\s)(\d)/g, " +$1")+"</span> <span class='alignment col-xs-4'>"+parsealignment(currace.alignment)+"</span>");

		if (!$("select.alignmentfilter:contains(\""+parsealignment(currace.alignment)+"\")").length) {
			$("select.alignmentfilter").append("<option value='"+parsealignment(currace.alignment)+"'>"+parsealignment(currace.alignment)+"</option>");
		}

		if (!$("select.npclocationfilter:contains(\""+parsenpclocation(currace.npclocation)+"\")").length) {
			$("select.npclocationfilter").append("<option value='"+parsenpclocation(currace.npclocation)+"'>"+parsenpclocation(currace.npclocation)+"</option>");
		}
	}


	$("select.alignmentfilter option").sort(asc_sort).appendTo('select.alignmentfilter');
	$("select.alignmentfilter").val("All");

	$("select.npclocationfilter option").sort(asc_sort).appendTo('select.npclocationfilter');
	$("select.npclocationfilter").val("All");


	var options = {
		valueNames: ['name', 'npclocation', 'alignment'],
		listClass: "races"
	}

	var raceslist = new List("listcontainer", options);
	raceslist.sort ("name")

	$("form#filtertools select").change(function(){
		var npclocationfilter = $("select.npclocationfilter").val();
		var alignmentfilter = $("select.alignmentfilter").val();


		raceslist.filter(function(item) {
			var rightnpclocation = false;
			var rightalignment = false;
			if (npclocationfilter === "All" || item.values().npclocation.indexOf(npclocationfilter) !== -1) rightnpclocation = true;
			if (alignmentfilter === "All" || item.values().alignment.indexOf(alignmentfilter) !== -1) rightalignment = true;
			if (rightnpclocation && rightalignment) return true;
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
		window.npclocation = "#"+$(this).attr("data-link");
	});

	if (window.npclocation.length) {
		$("ul.list li[data-link='"+window.npclocation.split("#")[1]+"']:eq(0)").click();
	} else $("ul.list li:eq(0)").click();

	// reset button
	$("button#reset").click(function() {
		$("#filtertools select").val("All");
		$("#search").val("");
		npclist.search("");
		npclist.filter();
		npclist.sort("name");
		npclist.update();
	})
}

function userace (id) {
	$("#stats").html(tabledefault);
	$("#stats td").show();

	var factionlist = factiondata.compendium.factions;
	var currace = factionlist[id];

	var name = currace.name;
	$("th#name").html(name);


	var npclocation = currace.npclocation.replace(/(?:\s)(\d)/g, " +$1");
	$("td#npclocation span").html(npclocation);





	///New Category///


	var members = currace.members;
	$("td#members span").html(members);
	if (members === "") $("td#members").hide();

	var allegiance = currace.allegiance;
	$("td#allegiance span").html(allegiance);
	if (allegiance === "") $("td#allegiance").hide();

	var leader = currace.leader;
	$("td#leader span").html(leader);
	if (leader === "") $("td#leader").hide();

	var formed = currace.formed;
	$("td#formed span").html(formed);
	if (formed === "") $("td#formed").hide();

	var enemies = currace.enemies;
	$("td#enemies span").html(enemies);
	if (enemies === "") $("td#enemies").hide();

	var base = currace.base;
	$("td#base span").html(base);
	if (base === "") $("td#base").hide();

	var npclocation = currace.npclocation;
	$("td#npclocation span").html(npclocation);
	if (npclocation === "") $("td#npclocation").hide();



	var alignment = currace.alignment;
	$("td#alignment span").html(alignment);
	if (alignment === "") $("td#alignment").hide();

	var image = currace.image;
	$("td#image span").html(alignment);
	if (image === "") $("td#image").hide();
	document.getElementById('image').innerHTML = "<a href='"+image+"''><img src='"+image+"'></img></a>";




	var backgroundlist = currace.background;
	$("tr.background").remove();
	for (var n = backgroundlist.length-1; n >= 0; n--) {
		var backgroundname = backgroundlist[n].name+":";
		if (backgroundname.indexOf("Variant Feature") !== -1) {
			backgroundname = backgroundname + "</span><p></p><span>"
		}
		texthtml = "<span class='name boldthis'>"+backgroundname+"</span> <p>"+backgroundlist[n].text.join("</p><p></p><p>")+"</p>"

		$("tr#background").after("<tr class='background'><td colspan='6' class='background"+n+"'>"+texthtml+"</td></tr>");
	}


	return;
};

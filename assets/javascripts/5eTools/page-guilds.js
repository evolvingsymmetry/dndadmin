

function parseguildType (guildType) {
	if (guildType === "Silver Marches") guildType = "Silver Marches";
	if (guildType === "Northwest Faerun") guildType = "Northwest Faerun";
	return guildType;
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

	var guildlist = guilddata.compendium.guilds;

	for (var i = 0; i < guildlist.length; i++) {
		var currace = guildlist[i];
		var name = currace.name;

		//Generates list of NPCs
		if (!currace.guildType) currace.guildType = "";
		$("ul.races").append("<li id='"+i+"' data-link='"+encodeURI(name)+"'><span class='name boldthis col-xs-4'>"+name+"</span> <span class='guildType col-xs-4'>"+currace.guildType.replace(/(?:\s)(\d)/g, " +$1")+"</span> <span class='alignment col-xs-4'>"+parsealignment(currace.alignment)+"</span>");

		if (!$("select.alignmentfilter:contains(\""+parsealignment(currace.alignment)+"\")").length) {
			$("select.alignmentfilter").append("<option value='"+parsealignment(currace.alignment)+"'>"+parsealignment(currace.alignment)+"</option>");
		}

		if (!$("select.guildTypefilter:contains(\""+parseguildType(currace.guildType)+"\")").length) {
			$("select.guildTypefilter").append("<option value='"+parseguildType(currace.guildType)+"'>"+parseguildType(currace.guildType)+"</option>");
		}
	}


	$("select.alignmentfilter option").sort(asc_sort).appendTo('select.alignmentfilter');
	$("select.alignmentfilter").val("All");

	$("select.guildTypefilter option").sort(asc_sort).appendTo('select.guildTypefilter');
	$("select.guildTypefilter").val("All");


	var options = {
		valueNames: ['name', 'guildType', 'alignment'],
		listClass: "races"
	}

	var raceslist = new List("listcontainer", options);
	raceslist.sort ("name")

	$("form#filtertools select").change(function(){
		var guildTypefilter = $("select.guildTypefilter").val();
		var alignmentfilter = $("select.alignmentfilter").val();


		raceslist.filter(function(item) {
			var rightguildType = false;
			var rightalignment = false;
			if (guildTypefilter === "All" || item.values().guildType.indexOf(guildTypefilter) !== -1) rightguildType = true;
			if (alignmentfilter === "All" || item.values().alignment.indexOf(alignmentfilter) !== -1) rightalignment = true;
			if (rightguildType && rightalignment) return true;
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
		window.guildType = "#"+$(this).attr("data-link");
	});

	if (window.guildType.length) {
		$("ul.list li[data-link='"+window.guildType.split("#")[1]+"']:eq(0)").click();
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

	var guildlist = guilddata.compendium.guilds;
	var currace = guildlist[id];

	var name = currace.name;
	$("th#name").html(name);


	var guildType = currace.guildType.replace(/(?:\s)(\d)/g, " +$1");
	$("td#guildType span").html(guildType);





	///New Category///

	var favored = currace.favored;
	$("td#favored span").html(favored);
	if (favored === "") $("td#favored").hide();

	var special = currace.special;
	$("td#special span").html(special);
	if (special === "") $("td#special").hide();

	var skills = currace.skills;
	$("td#skills span").html(skills);
	if (skills === "") $("td#skills").hide();

	var boo = currace.boo;
	$("td#boo span").html(boo);
	if (boo === "") $("td#boo").hide();

	var salary = currace.salary;
	$("td#salary span").html(salary);
	if (salary === "") $("td#salary").hide();

	var location = currace.location;
	$("td#location span").html(location);
	if (location === "") $("td#location").hide();

	var size = currace.size;
	$("td#size span").html(size);
	if (size === "") $("td#size").hide();

	var alignment = currace.alignment;
	$("td#alignment span").html(alignment);
	if (alignment === "") $("td#alignment").hide();

	var dues = currace.dues;
	$("td#dues span").html(dues);
	if (dues === "") $("td#dues").hide();

	var classes = currace.classes;
	$("td#classes span").html(classes);
	if (classes === "") $("td#classes").hide();

	var requirements = currace.requirements;
	$("td#requirements span").html(requirements);
	if (requirements === "") $("td#requirements").hide();

	var base = currace.base;
	$("td#base span").html(base);
	if (base === "") $("td#base").hide();

	var guildType = currace.guildType;
	$("td#guildType span").html(guildType);
	if (guildType === "") $("td#guildType").hide();




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





function itemcost (cost) {
	// if (cost == "cheap") return cheapCost;

	for (var i = 0; i < locationdata.compendium.location.length; i++) {
		if (cost == "cheap") {
			var cheapCost = Math.floor(Math.random() * 5) + 1;
			return cheapCost;
		}
		if (cost == "moderate") {
			var moderateCost = Math.floor(Math.random() * 75) + 20;
			return moderateCost;
		}
		if (cost == "high") {
			var highCost = Math.floor(Math.random() * 300) + 80;
			return highCost;
		}
		if (cost == "expensive") {
			var expensiveCost = Math.floor(Math.random() * 5000) + 1000;
			return expensiveCost;
		}


		console.log(cheapCost);
	}
	
}

function parsetype (type) {
	if (cost == "FOR") type = "Forest";
	return type;
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

	//Select random item from array
	locationlist.sort(function (a, b) {return Math.random() - 0.5;});
	var randomNumber = Math.floor(Math.random() * 10) + 5;

	for (var i = 0; i < randomNumber; i++) {
		var currace = locationlist[i];
		var name = currace.name;
		
		//Generates list of locations
		if (!currace.type) currace.type = "";
		$("ul.races").append("<li id='"+i+"' data-link='"+encodeURI(name)+"'><span class='name boldthis col-xs-4'>"+name+"</span>"+"</span> <span class='type col-xs-4'>"+parsetype(currace.type)+"</span>");

		if (!$("select.typefilter:contains(\""+parsetype(currace.type)+"\")").length) {
			$("select.typefilter").append("<option value='"+parsetype(currace.type)+"'>"+parsetype(currace.type)+"</option>");
		}



	}


	$("select.typefilter option").sort(asc_sort).appendTo('select.typefilter');
	$("select.typefilter").val("All");


	var options = {
		valueNames: ['name', 'type'],
		listClass: "races"
	}

	var raceslist = new List("listcontainer", options);
	raceslist.sort ("name")

	$("form#filtertools select").change(function(){
		var typefilter = $("select.typefilter").val();


		raceslist.filter(function(item) {
			var righttype = false;
			if (typefilter === "All" || item.values().type.indexOf(typefilter) !== -1) righttype = true;
			if (righttype) return true;
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

	var type = parsetype (currace.type);
	$("td#type span").html(type);
	if (type === "") $("td#type").hide();






	///New Category///

	var cost = itemcost (currace.cost);
	$("td#cost span").html(cost);
	if (cost === "") $("td#cost").hide();


	var image = currace.image;
	if (image === "") $("td#image").hide();
	document.getElementById('image').innerHTML = "<a href='"+image+"''><img src='"+image+"'></img></a>";




	var descriptionlist = currace.description;
	$("tr.description").remove();
	for (var n = descriptionlist.length-1; n >= 0; n--) {
		var descriptionname = descriptionlist[n].name+":";
		if (descriptionname.indexOf("Variant Feature") !== -1) {
			descriptionname = descriptionname + "</span><p></p><span>"
		}
		texthtml = "<span class='name boldthis'>"+descriptionname+"</span> <p>"+descriptionlist[n].text.join("</p><p></p><p>")+"</p>"

		$("tr#description").after("<tr class='description'><td colspan='6' class='description"+n+"'>"+texthtml+"</td></tr>");
	}



	return;
};

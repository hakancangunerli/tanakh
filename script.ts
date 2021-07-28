$(document).ready(function () {
	
	var quoteSource =[
		{
			english:
				"The House that I intend to build will be great, inasmuch as our God is greater than all gods.",
			english_source: "2 Chronicles 2:5",
			hebrew:
				"וְהַבַּ֛יִת אֲשֶׁר־אֲנִ֥י בוֹנֶ֖ה גָּד֑וֹל כִּֽי־גָד֥וֹל אֱלֹהֵ֖ינוּ מִכׇּל־הָאֱלֹהִֽים׃",
			hebrew_source: "דִּבְרֵי־הַיָּמִים‎"

		},

		{
			english:
				"Now, O LORD God, let Your promise to my father David be fulfilled; for You have made me king over a people as numerous as the dust of the earth. Grant me then the wisdom and the knowledge to lead this people, for who can govern Your great people?",
			english_source: "2 Chronicles 1:9",
			hebrew:
				"		עַתָּה֙ יְהֹוָ֣ה אֱלֹהִ֔ים יֵֽאָמֵן֙ דְּבָ֣רְךָ֔ עִ֖ם דָּוִ֣יד אָבִ֑י כִּ֤י אַתָּה֙ הִמְלַכְתַּ֔נִי עַל־עַ֕ם רַ֖ב כַּעֲפַ֥ר הָאָֽרֶץ׃	עַתָּ֗ה חׇכְמָ֤ה וּמַדָּע֙ תֶּן־לִ֔י וְאֵ֥צְאָ֛ה לִפְנֵ֥י הָעָם־הַזֶּ֖ה וְאָב֑וֹאָה כִּֽי־מִ֣י יִשְׁפֹּ֔ט אֶת־עַמְּךָ֥ הַזֶּ֖ה הַגָּדֽוֹל׃ {ס} ",
			hebrew_source: "דִּבְרֵי־הַיָּמִים‎"

		},

		{
			english:
				"And now, our God, great, mighty, and awesome God, who stays faithful to His covenant, do not treat lightly all the suffering that has overtaken us—our kings, our officers, our priests, our prophets, our fathers, and all Your people—from the time of the Assyrian kings to this day.",
			english_source: "Nehemiah 9",
			hebrew:
				"	וְעַתָּ֣ה אֱ֠לֹהֵ֠ינוּ הָאֵ֨ל הַגָּד֜וֹל הַגִּבּ֣וֹר וְהַנּוֹרָא֮ שׁוֹמֵ֣ר הַבְּרִ֣ית וְהַחֶ֒סֶד֒ אַל־יִמְעַ֣ט לְפָנֶ֡יךָ אֵ֣ת כׇּל־הַתְּלָאָ֣ה אֲֽשֶׁר־מְ֠צָאַ֠תְנוּ לִמְלָכֵ֨ינוּ לְשָׂרֵ֧ינוּ וּלְכֹהֲנֵ֛ינוּ וְלִנְבִיאֵ֥ינוּ וְלַאֲבֹתֵ֖ינוּ וּלְכׇל־עַמֶּ֑ךָ מִימֵי֙ מַלְכֵ֣י אַשּׁ֔וּר עַ֖ד הַיּ֥וֹם הַזֶּֽה׃",
			hebrew_source: "נְחֶמְיָה‎",

		},

		{
			english:
				" Even if a man lives many years, let him enjoy himself in all of them, remembering how many the days of darkness are going to be. The only future is nothingness!",
			english_source: "Ecclesiastes 11",
			hebrew:
				"	כִּ֣י אִם־שָׁנִ֥ים הַרְבֵּ֛ה יִחְיֶ֥ה הָאָדָ֖ם בְּכֻלָּ֣ם יִשְׂמָ֑ח וְיִזְכֹּר֙ אֶת־יְמֵ֣י הַחֹ֔שֶׁךְ כִּֽי־הַרְבֵּ֥ה יִהְי֖וּ כׇּל־שֶׁבָּ֥א הָֽבֶל׃",
			hebrew_source: "קֹהֶלֶת‎",

		},
		{
			english:
				" What real value is there for a man, In all the gains he makes beneath the sun?",
			english_source: "Ecclesiastes 1",
			hebrew:
				"	מַה־יִּתְר֖וֹן לָֽאָדָ֑ם בְּכׇ֨ל־עֲמָל֔וֹ שֶֽׁיַּעֲמֹ֖ל תַּ֥חַת הַשָּֽׁמֶשׁ׃",
			hebrew_source: "קֹהֶלֶת‎",

		},


		{
			english:
				"	  A wise son—it is through the discipline of his father; A scoffer—he never heard reproof.",
			english_source: "Proverbs 13",
			hebrew:
				"	בֵּ֣ן חָ֭כָם מ֣וּסַר אָ֑ב וְ֝לֵ֗ץ לֹא־שָׁמַ֥ע גְּעָרָֽה׃",
			hebrew_source: "מִשְלֵי",

		},



// todo: add more. maybe write an api to take care of this issue instead of doing it like this. 
// todo: add sefaria links to each.  




	];

	$("#quoteButton").click(function (evt:any ) {

		var quote : string = $("#quoteContainer p").text();
		var quoteGenius : string = $("#quoteGenius").text();
		

		var sourceLength:number  = quoteSource.length;
		var randomNumber :number = Math.floor(Math.random() * sourceLength);
		//set a new quote
		for (let i:number   = 0; i <= sourceLength; i += 1) {
			var English :string = quoteSource[randomNumber].english;
			var Hebrew :string = quoteSource[randomNumber].hebrew;

			var English_Location :string = quoteSource[randomNumber].english_source;
			var Hebrew_Location :string = quoteSource[randomNumber].hebrew_source;

			var timeAnimation :number = 300;
			var quoteContainer :any  = $("#quoteContainer");
			//fade out animation with callback
			quoteContainer.fadeOut(timeAnimation, function () {
				quoteContainer.html("");
				quoteContainer.append(
					"<p>" +
					English +
					"</p>" +
					'<p id="quoteGenius">' +
					
					English_Location +
					"</p>"
				);

				quoteContainer.append(
					"<p>" +
					Hebrew +
					"</p>" +
					'<p id="quoteGenius">' +
					"- " +
					Hebrew_Location +
					"</p>"
					// todo, add sefaria link for addresses. 
				);

				//fadein animation.
				quoteContainer.fadeIn(timeAnimation);
			});

			break;
		} 
	}); 
}); 

export const rollMisfortune = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	const outcomes = [
		{
			range: [1, 2],
			misfortune: "Cult",
			description: "Became involved with a religious cult",
		},
		{
			range: [3, 4],
			misfortune: "Addiction",
			description: "Be it drugs, alcohol or gambling",
		},
		{
			range: [5, 6],
			misfortune: "Crippled",
			description:
				"Accident, random encounter or worse causing a partial or complete incapacitation",
		},
		{
			range: [7],
			misfortune: "Cursed",
			description: "Lycanthropy, vampirism or other such",
		},
		{
			range: [8],
			misfortune: "Taken",
			description: "Be it by roaming barbarians, organized crime or slavers",
		},
		{
			range: [9],
			misfortune: "Indentured Servant",
			description:
				"Bad deals or bad luck left a large debt to be paid off by labor, or outright slavery",
		},
		{
			range: [10],
			misfortune: "Bankruptcy",
			description: "Responsible, directly or indirectly, for the loss of all gold and lands",
		},
		{
			range: [11],
			misfortune: "Crazy",
			description: "Some lamentable situation caused complete mental breakdown",
		},
		{
			range: [12],
			misfortune: "Prison",
			description: "Situations led to long term incarceration",
		},
	];

	return outcomes.find((outcome) => outcome.range.includes(roll));
};

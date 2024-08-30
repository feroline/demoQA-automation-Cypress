const HomeLocators = {
	homeBanner: (link: string | undefined) => {
		return `div.home-banner a[href="${link}"]`;
	},

	// TODO: mudar o tipo para os tipos de card existentes 'Elements', 'Forms', etc
	cardXpath: (title: string) => {
		return `//div[contains(@class, 'card-body')][contains(.,'${title}')]`;
	},
};

export default HomeLocators;

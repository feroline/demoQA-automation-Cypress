const HomeLocators = {
	homeBanner: (link: string | undefined) => {
		return `div.home-banner a[href="${link}"]`;
	},
	cardXpath: (title: string) => {
		return `//div[contains(@class, 'card-body')][contains(.,'${title}')]`;
	},
};

export default HomeLocators;

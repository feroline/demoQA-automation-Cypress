const BrokenLinksLocators = {
	validImage: 'div>img[src="/images/Toolsqa.jpg"]',
	brokenImage: 'div>img[src="/images/Toolsqa_1.jpg"]',
	validLinkXpath: '//a[contains(.,"Click Here for Valid Link")]',
	invalidLinkXpath: '//a[contains(.,"Click Here for Broken Link")]',
	pragrafoBrokenLink: 'div.example>p',
};

export default BrokenLinksLocators;

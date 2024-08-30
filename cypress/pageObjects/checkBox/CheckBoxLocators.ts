const CheckBoxLocators = {
	collapseExpandBtn: 'button.rct-collapse-btn',
	treeNode: '#tree-node',
	expandAllBtn: () =>
		`${CheckBoxLocators.treeNode} button.rct-option-expand-all`,
	collapseAllBtn: () =>
		`${CheckBoxLocators.treeNode} button.rct-option-collapse-all`,
	nodeLabel: (node: string) => {
		return `label[for="tree-node-${node}"]`;
	},
	checkInput: 'input[type="checkbox"]',
};

export default CheckBoxLocators;

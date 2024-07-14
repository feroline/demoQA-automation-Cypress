//TODO excluir essa tipagem e colocar em um enum as strings, simplificando a chamada e verificação
type CheckBoxNode =
	| 'home'
	| 'desktop'
	| 'documents'
	| 'downloads'
	| 'notes'
	| 'commands'
	| 'workspace'
	| 'react'
	| 'angular'
	| 'veu'
	| 'office'
	| 'public'
	| 'private'
	| 'classified'
	| 'general'
	| 'wordFile'
	| 'excelFile';

export default CheckBoxNode;

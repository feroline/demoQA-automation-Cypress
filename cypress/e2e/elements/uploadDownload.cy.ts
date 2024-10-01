import ElementsLink from '@enum/links/Elements';
import UploadDownloadPage from '@pageObject/uploadDownload/UploadDownloadPage';

const UploadDownload = new UploadDownloadPage();

const file = 'sampleFile.jpeg';

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.UploadDownload);
});

describe('Teste da página de Upload e Download', () => {
	it('Verificar Download', () => {
		UploadDownload.download();
		cy.verifyDownload(file);
	});

	it('Verificar Upload', () => {
		UploadDownload.upload();
		UploadDownload.verifyUpload(file);
	});
});

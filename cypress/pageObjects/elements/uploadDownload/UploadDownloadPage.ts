import locators from './UploadDownloadLocators';

class UploadDownloadPage {
	download() {
		cy.get(locators.downloadBtn).click();
	}

	upload() {
		cy.fixture('files/sampleFile.jpeg', null).as('file');
		cy.get(locators.uploadBtn).selectFile('@file');
	}

	verifyUpload(file: string) {
		cy.get(locators.uploadFilePathText).should('contain.text', file);
	}
}

export default UploadDownloadPage;

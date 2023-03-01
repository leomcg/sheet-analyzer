import { Component } from '@angular/core';

@Component({
  selector: 'file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent {
  files: any;

  onDocumentSelected($event: any) {
		this.files = ($event.target as HTMLInputElement).files
    	//console.log('files: ', this.files)
    
	}

  uploadFiles() {
		const file = new FormData();
		file.append('1', this.files);
    	//console.log('form-data: ', file)
		// file.append('id_exchange', id_exchange);
		// file.append('file', fileData.file);
		// file.append('tp_document', fileData.type);
		// file.append('nm_document', fileData.name);
		// file.append('dt_document', fileData.date);

		// return this.httpService.callApiMethodFile(
		// 	RiWorkspaceService.URL_MOBILE_INVESTOR_RELATIONS_V8,
		// 	'upload-r-i-photo',
		// 	file
		// );
  }

}



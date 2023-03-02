import { Component } from '@angular/core';

@Component({
  selector: 'file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent {
  files: any = []

  	onDocumentSelected($event: any) {
		this.files = [...this.files, ...$event.target.files]

	}
	clearFileList() {
		if (window.confirm("Tem certeza que deseja remover todos os arquivos?")) {
			this.files = []
		}
	}

	onRemoveFile(file: any) {
		console.log(file)
		if (window.confirm(`Tem certeza que deseja remover o arquivo ${file.name}?`)) {
			this.files = this.files.filter((el: any) => {					
				return el.webkitRelativePath != file.webkitRelativePath
			})
		}
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



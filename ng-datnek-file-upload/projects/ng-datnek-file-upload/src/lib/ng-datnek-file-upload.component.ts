import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';

@Component({
  selector: 'lib-ng-datnek-file-upload',
  templateUrl: './ng-datnek-file-upload.component.html',
  styleUrls: ['./ng-datnek-file-upload.component.scss']
})
export class NgDatnekFileUploadComponent implements OnInit {

  defaultText = {
    max: 'max {{size}} Mo',
    file: 'Browse Files'
  };
  fileUploads: any[]  = [];
  @Output() fileChanged = new EventEmitter<any[]>();
  @Input()  mutiple = true;
  @Input()  len = 6;
  @Input() style: any;
  @Input() size = 25;
  @Input()  textFileUpload: string;
  @Input()  textMax: string;
  @Input()  accepts: {image: boolean, pdf: boolean, video: boolean, all: boolean} = {image: true, pdf: false, video: false, all: false};
  @Input()  dimUpload: {width: string, height: string} = {width: '150px', height: '150px'};
  @Input()  dimImg: {width: string, height: string} = {width: '150px', height: '150px'};
  accept: string;
  public files: NgxFileDropEntry[] = [];


  constructor() {

  }

  ngOnInit(): void {
    this.accept = '';
    this.textFileUpload = this.textFileUpload ? this.textFileUpload : this.defaultText.file ;
    this.textMax = this.textMax ? this.textMax : this.defaultText.max.replace('{{size}}', this.size.toString()) ;

    if (this.accepts.image || this.accepts.all) {
      this.accept += '.gif,.ico,.jpg,.jpeg,.png,.webp';
    }

    if (this.accepts.video || this.accepts.all) {
      if (this.accept !== '') {
        this.accept += ',';
      }
      this.accept += '.MOV,.AVI,.MP4,.FLV,.WMV';
    }

    if (this.accepts.pdf || this.accepts.all) {
      if (this.accept !== '') {
        this.accept += ',';
      }
      this.accept += '.pdf';
    }
  }
  public dropped(files: NgxFileDropEntry[]): void {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.preview(file, (result, type) => {
            // console.log('size: ', this.len , this.fileUploads.length, this.len > this.fileUploads.length);
            const size = +parseFloat(String(file.size * 112 / (115442 * 1000))).toFixed(4) ;
            // console.log('size : ', size,  'real size : ', file.size);
            if (result !== undefined && this.len > this.fileUploads.length && size <= this.size) {
              if (this.mutiple) {
                this.fileUploads.push({file, img: result, type });
              } else {
                this.fileUploads[0] = {file, img: result, type };
              }
              this.fileChanged.emit(this.fileUploads);
            }
          });
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  removeFile(e, index: number): void {
    e.preventDefault();
    const files: any[] = [];

    for (let i = 0; i < this.fileUploads.length; i++) {
      if (i !== index) {
        files.push(this.fileUploads[i]);
      }
    }
    this.fileUploads = files;
    this.fileChanged.emit(this.fileUploads);
  }

  preview(file, cb): void {

    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null && mimeType.match(/video\/*/) == null
      && mimeType.match(/pdf\/*/) == null && !this.accepts.all) {
      cb(undefined, mimeType);
    } else if (mimeType.match(/image\/*/) == null && mimeType.match(/video\/*/) == null
      && mimeType.match(/pdf\/*/) == null && this.accepts.all ) {
      cb(null, mimeType);
    }
    else if (mimeType.match(/image\/*/) == null && mimeType.match(/video\/*/) == null) {
      cb(null, 'pdf');
    } else {
      const reader = new FileReader();
      const imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        // console.log('result: ', reader.result);
        if (mimeType.match(/image\/*/) == null) {
          cb(reader.result, 'video');
        } else {
          cb(reader.result, 'image');
        }
      };
    }
  }


  fileOver(event): void {
    console.log(event);
  }

  fileLeave(event): void {
    console.log(event);
  }


}

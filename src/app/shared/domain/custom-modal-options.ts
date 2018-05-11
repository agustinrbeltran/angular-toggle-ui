export class CustomModalOptions {

    private modalClass: string[];
    private footerClass: string[];

    constructor() {
        this.modalClass = new Array<string>();
        this.footerClass = new Array<string>();
        this.modalClass.push('modal-dialog');
        this.modalClass.push('modal-notify');
        this.footerClass.push('modal-footer');
    }

    withStyle(style: Style) {
        this.modalClass.push(style);
        return this;
    }

    hideFooter() {
        this.footerClass.push('hidden');
        return this;
    }

    get ModalClass() {
        return this.modalClass;
    }

    get FooterClass() {
        return this.footerClass;
    }
}

export const enum Style {
    INFO = 'modal-info',
    WARNING = 'modal-warning',
    SUCCESS = 'modal-success',
    LG = 'modal-lg',
}



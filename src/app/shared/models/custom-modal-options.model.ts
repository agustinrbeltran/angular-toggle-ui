export class CustomModalOptions {

    private modalClass: string[];
    private footerClass: string[];

    constructor() {
        //Header
        this.modalClass = new Array<string>();
        this.modalClass.push('modal-dialog');
        //Footer
        this.footerClass = new Array<string>();
        this.footerClass.push('modal-footer');
        this.footerClass.push('hidden');
    }

    withStyle(style: Style) {
        this.modalClass.push(style);
        switch(style){
            case Style.INFO:
                this._removeModalClass(Style.SUCCESS);
                this._removeModalClass(Style.WARNING);
                break;
            case Style.SUCCESS:
                this._removeModalClass(Style.INFO);
                this._removeModalClass(Style.WARNING);
                break;
            case Style.WARNING:
                this._removeModalClass(Style.INFO);
                this._removeModalClass(Style.SUCCESS);
                break;
            default:
                break;

        }
        return this;
    }

    showFooter() {
        this._removeFooterClass('hidden');
        return this;
    }

    get ModalClass() {
        return this.modalClass;
    }

    get FooterClass() {
        return this.footerClass;
    }

    private _removeFooterClass(value) {
        var idx = this.footerClass.indexOf(value);
        if (idx != -1) {
            return this.footerClass.splice(idx, 1);
        }
        return false;
    }

    private _removeModalClass(value) {
        var idx = this.modalClass.indexOf(value);
        if (idx != -1) {
            return this.modalClass.splice(idx, 1);
        }
        return false;
    }
}

export const enum Style {
    INFO = 'modal-info',
    WARNING = 'modal-warning',
    SUCCESS = 'modal-success',
    LG = 'modal-lg',
}



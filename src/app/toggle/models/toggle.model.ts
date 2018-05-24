import { Utils } from "../../shared/utils/utils";

export class Toggle {

    public constraints: Map<string, Array<string>>;
    public enabled: boolean;

    constructor(
        public type: string,
        public feature: string,
        public description: string,
    ) { }

    public toObject(): Object {

        let obj: Object;

        if (this.type != 'on-off') {
            obj = {
                type: this.type,
                feature: this.feature,
                description: this.description,
                constraints: Utils.mapToObj(this.constraints)
            };
        } else {
            obj = {
                type: this.type,
                feature: this.feature,
                description: this.description,
                enabled: this.enabled
            };
        }
        return obj;
    }


}
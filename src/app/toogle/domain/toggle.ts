import { LinkedList } from "angular-bootstrap-md/utils";

export class Toggle  {
    constructor(
        public type: string,
        public feature: string,
        public description: string,
        public constraints:Map<string,string>,
        public enabled: boolean
        ) { }

}
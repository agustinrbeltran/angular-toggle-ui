import { LinkedList } from 'angular-bootstrap-md/utils';

export class Toggle  {

    public constraints: Map<string, string>;
    public enabled: boolean;

    constructor(
        public type: string,
        public feature: string,
        public description: string,
    ) { }

}

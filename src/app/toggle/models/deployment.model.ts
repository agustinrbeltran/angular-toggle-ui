export class Deployment {
    constructor(
        public environment,
        public cluster,
        public application,
        public version,
    ) {}
}

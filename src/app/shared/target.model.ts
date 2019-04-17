import { Contact } from '../target/contact.model';

export class Target {
    constructor(
        public compName: string,
        public compAddress: string,
        public dateFirstContact: string,
        public daysSinceFirstContact: number,
        public industry: string,
        public website: string,
        public type: string,
        public revenue: string,
        public status: string,
        public contacts: Contact[]
    ) {}
}
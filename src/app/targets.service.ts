import { Target } from './shared/target.model';
import { EventEmitter } from '@angular/core';

export class TargetsService {
	targets: Target[] = [
		{
			compName: 'Test Co.',
			compAddress: '123 Easy Street',
			dateFirstContact: '2019-04-15',
			daysSinceFirstContact: 3,
			industry: 'Testing',
			website: 'example.com',
			type: 'Company - Private',
			revenue: '$500K per year',
			status: 'Approved',
			contacts: [
				{
					name: 'Joe Schmoe',
					phoneNumber: '123-456-7890',
					emailAddress: 'hello@test.com',
					role: 'CEO'
				}
			]
		}
	];

	getTargetIndex = new EventEmitter<number>();
	targetSelected = new EventEmitter<Target>();
	targetUpdated = new EventEmitter<Target>();

	addTarget(tData: Target) {
		this.targets.push({
			compName: tData.compName,
			compAddress: tData.compAddress,
			industry: tData.industry,
			revenue: tData.revenue,
			status: tData.status,
			dateFirstContact: '',
			daysSinceFirstContact: null,
			website: '',
			type: '',
			contacts: []
		})
	}

	updateTarget(id: number, editData: Target) {
		this.targets[id].compName = editData.compName;
		this.targets[id].compAddress = editData.compAddress;
		this.targets[id].dateFirstContact = editData.dateFirstContact;
		this.targets[id].daysSinceFirstContact = editData.daysSinceFirstContact;
		this.targets[id].industry = editData.industry;
		this.targets[id].website = editData.website;
		this.targets[id].type = editData.type;
		this.targets[id].revenue = editData.revenue;
		this.targets[id].status = editData.status;
		this.targets[id].contacts = [];
	}
}
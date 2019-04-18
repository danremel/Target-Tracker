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

	statuses: string[] = [
		'Researching',
		'Pending Approval',
		'Approved',
		'Declined'
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
		const keys = Object.keys(this.targets[id]);
		for(const key of keys) {
			if(key == 'contacts') {
				continue;
			} else {
				this.targets[id][key] = editData[key];
			}
		}
	}
}
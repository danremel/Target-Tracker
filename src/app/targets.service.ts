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

	targetSelected = new EventEmitter<Target>();

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

}
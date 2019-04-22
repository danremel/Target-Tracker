import { EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Target } from './shared/target.model';

export class TargetsService {
	targets: Target[] = [];

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
		});
	}

	updateTarget(id: number, editData: Target) {
		const keys = Object.keys(this.targets[id]);
		for(const key of keys) {
			if(key == 'contacts') {
				continue;
			} else if(key == 'daysSinceFirstContact') {
				// Use Moment.js to calculate the days since the Date of First Contact
				const firstContact = moment(this.targets[id].dateFirstContact, "YYYY-MM-DD");
				const today = moment().startOf('day');
				// Since retroactive date differences are counted as negative, use Math.abs to switch it to positive.
				this.targets[id][key] = Math.abs(moment.duration(firstContact.diff(today)).asDays());
			} else {
				this.targets[id][key] = editData[key];
			}
		}
	}

	removeTarget(index: number) {
		this.targets.splice(index, 1);
	}

}
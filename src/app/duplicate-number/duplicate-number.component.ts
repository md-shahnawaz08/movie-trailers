import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-duplicate-number',
  templateUrl: './duplicate-number.component.html',
  styleUrls: ['./duplicate-number.component.scss']
})
export class DuplicateNumberComponent {

  existingArray: string[] = ['7000', '7001', '7002', '7003', '7004', '7005'];
  inputData = '';
  entered: Set<string> = new Set();
  duplicates: string[] = [];
  finalList: string[] = [];

  execute() {
    this.entered.clear();
    this.duplicates = [];
    this.finalList = [];
    _.forEach(this.inputData.split(/[,][\s]?/), e => {
      const range = e.split('-');
      if (range.length === 2 && !isNaN(parseInt(range[0], 10)) && !isNaN(parseInt(range[1], 10))) {
        const maxLim = Math.max(parseInt(range[0], 10), parseInt(range[1], 10));
        const minLim = Math.min(parseInt(range[0], 10), parseInt(range[1], 10));
        for (let i = minLim; i <= maxLim; i++) {
          this.entered.add(i.toString());
        }
      } else if (!isNaN(parseInt(e, 10))) {
        this.entered.add(e);
      }
    });
    _.forEach(this.existingArray, elem => {
      if (this.entered.has(elem)) {
        this.duplicates.push(elem);
      } else {
        this.finalList.push(elem);
      }
    });
  }
}

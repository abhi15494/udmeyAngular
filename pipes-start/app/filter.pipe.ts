import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  // Using pure = false May be a performance issue because updating array and object doesn't trigger the pipe
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length===0 || filterString == '') return value;
    const resultArray = [];
    for(const item of value){
      if(item[propName].includes(filterString)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

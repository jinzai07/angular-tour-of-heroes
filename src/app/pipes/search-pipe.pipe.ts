import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchPipe",
  pure: false
})
export class SearchPipePipe implements PipeTransform {
  transform(value: any, heroName: string): any {
    const resultArray = [];
    for (const item of value) {
      if (item.name === heroName) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
